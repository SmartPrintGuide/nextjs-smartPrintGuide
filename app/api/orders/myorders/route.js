import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Order from '@/lib/models/Order';
import { getUserFromRequest } from '@/lib/auth';

export async function GET(request) {
  const user = await getUserFromRequest(request);
  await dbConnect();
  const orders = await Order.find({ user: user._id }).populate('user', 'name email').sort({ createdAt: -1 });
  return NextResponse.json(orders);
}
