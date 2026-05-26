import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Product from '@/lib/models/Product';
import Category from '@/lib/models/Category';
import { authenticate } from '@/lib/auth';

async function parseRequestBody(request) {
  const contentType = request.headers.get('content-type') || '';

  if (contentType.includes('application/json')) {
    return await request.json();
  }

  if (contentType.includes('multipart/form-data')) {
    const formData = await request.formData();
    const body = {};

    for (const [key, value] of formData.entries()) {
      if (key === 'existingImages' || key === 'reviews') {
        if (typeof value === 'string') {
          try {
            body[key] = JSON.parse(value);
          } catch {
            body[key] = value.split(',').map(item => item.trim()).filter(Boolean);
          }
        } else {
          body[key] = value;
        }
      } else if (key === 'images') {
        if (!body.images) body.images = [];
        if (value && typeof value === 'object' && 'name' in value && 'size' in value) {
          continue;
        }
        body.images.push(value);
      } else if (typeof value === 'string' && value.startsWith('[') && value.endsWith(']')) {
        try {
          body[key] = JSON.parse(value);
        } catch {
          body[key] = value;
        }
      } else if (typeof value === 'string' && value.includes(',') && ['technology', 'usageCategory', 'allInOneType', 'mainFunction'].includes(key)) {
        body[key] = value.split(',').map(item => item.trim()).filter(Boolean);
      } else {
        body[key] = value;
      }
    }

    return body;
  }

  try {
    return await request.json();
  } catch {
    return {};
  }
}

export async function GET(request) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search') || '';
    const category = searchParams.get('category');
    const pageSize = Number(searchParams.get('limit')) || 20;
    const page = Number(searchParams.get('page')) || 1;

    const query = {};
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { shortDetails: { $regex: search, $options: 'i' } },
        { shortSpecification: { $regex: search, $options: 'i' } },
        { overview: { $regex: search, $options: 'i' } },
        { technicalSpecification: { $regex: search, $options: 'i' } },
        { brand: { $regex: search, $options: 'i' } },
        { color: { $regex: search, $options: 'i' } },
      ];
    }

    if (category) {
      const categoryDoc = await Category.findOne({ name: { $regex: new RegExp(`^${category}$`, 'i') } });
      if (categoryDoc) {
        query.category = categoryDoc._id;
      } else {
        return NextResponse.json({ products: [], page: 1, pages: 0, total: 0 });
      }
    }

    const count = await Product.countDocuments(query);
    const products = await Product.find(query)
      .populate({ path: 'category', select: 'name' })
      .limit(pageSize)
      .skip(pageSize * (page - 1));

    return NextResponse.json({ products, page, pages: Math.ceil(count / pageSize), total: count });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const user = await authenticate(request);
    if (!user || !user.isAdmin) return NextResponse.json({ message: 'Not authorized as admin' }, { status: 401 });

    const data = await parseRequestBody(request);
    const product = await Product.create({ ...data, user: user._id });
    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
