import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Product from '@/lib/models/Product';
import { authenticate } from '@/lib/auth';

export async function GET(request, { params }) {
  try {
    await connectDB();
    const product = await Product.findById(params.id).populate('category');
    if (!product) return NextResponse.json({ message: 'Product not found' }, { status: 404 });
    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  try {
    await connectDB();
    const user = await authenticate(request);
    if (!user || !user.isAdmin) return NextResponse.json({ message: 'Not authorized as admin' }, { status: 401 });

    const updateData = await request.json();
    const product = await Product.findById(params.id);
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
    const user = await authenticate(request);
    if (!user || !user.isAdmin) return NextResponse.json({ message: 'Not authorized as admin' }, { status: 401 });

    const product = await Product.findById(params.id);
    if (!product) return NextResponse.json({ message: 'Product not found' }, { status: 404 });

    await product.deleteOne();
    return NextResponse.json({ message: 'Product removed' });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
