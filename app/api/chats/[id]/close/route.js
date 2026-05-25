import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Chat from '@/lib/models/Chat';
import { authenticate } from '@/lib/auth';

export async function PUT(request, { params }) {
  const { id } = await params;
  const user = await authenticate(request);
  if (!user) {
    return NextResponse.json({ message: 'Not authorized' }, { status: 401 });
  }
  if (!user.isAdmin) {
    return NextResponse.json({ message: 'Not authorized' }, { status: 403 });
  }

  await dbConnect();
  const chat = await Chat.findById(id);
  if (!chat) {
    return NextResponse.json({ message: 'Chat not found' }, { status: 404 });
  }

  chat.status = 'closed';
  await chat.save();
  return NextResponse.json({ message: 'Chat closed' });
}
