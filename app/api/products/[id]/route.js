import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Product from '@/lib/models/Product';
import { authenticate } from '@/lib/auth';
import { isValidObjectId } from 'mongoose';

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
        // Ignore actual file objects here; frontend currently sends FormData with files,
        // while this route only updates text and existing image references.
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

export async function GET(request, { params }) {
  try {
    await connectDB();
    const { id: rawId } = await params;
    const id = rawId?.toString().trim();
    if (!id) return NextResponse.json({ message: 'Product not found' }, { status: 404 });

    let product = null;

    if (isValidObjectId(id)) {
      product = await Product.findById(id).populate('category');
    }

    if (!product) {
      product = await Product.findOne({ slug: id }).populate('category');
    }

    if (!product) return NextResponse.json({ message: 'Product not found' }, { status: 404 });
    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  try {
    await connectDB();
    const { id: rawId } = await params;
    const id = rawId?.toString().trim();
    if (!id) return NextResponse.json({ message: 'Product not found' }, { status: 404 });
    const user = await authenticate(request);
    if (!user || !user.isAdmin) return NextResponse.json({ message: 'Not authorized as admin' }, { status: 401 });

    const updateData = await parseRequestBody(request);

    let product = null;
    if (isValidObjectId(id)) {
      product = await Product.findById(id);
    }

    if (!product) {
      product = await Product.findOne({ slug: id });
    }

    if (!product) return NextResponse.json({ message: 'Product not found' }, { status: 404 });

    Object.assign(product, updateData);
    const updatedProduct = await product.save();
    return NextResponse.json(updatedProduct);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    await connectDB();
    const { id: rawId } = await params;
    const id = rawId?.toString().trim();
    if (!id) return NextResponse.json({ message: 'Product not found' }, { status: 404 });
    const user = await authenticate(request);
    if (!user || !user.isAdmin) return NextResponse.json({ message: 'Not authorized as admin' }, { status: 401 });

    let product = null;
    if (isValidObjectId(id)) {
      product = await Product.findById(id);
    }

    if (!product) {
      product = await Product.findOne({ slug: id });
    }

    if (!product) return NextResponse.json({ message: 'Product not found' }, { status: 404 });

    await product.deleteOne();
    return NextResponse.json({ message: 'Product removed' });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
