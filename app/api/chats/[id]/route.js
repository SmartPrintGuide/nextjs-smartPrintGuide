import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Chat from '@/lib/models/Chat';
import { authenticate } from '@/lib/auth';

export async function GET(request, { params }) {
  const user = await authenticate(request);
  if (!user) {
    return NextResponse.json({ message: 'Not authorized' }, { status: 401 });
  }

  await dbConnect();
  const chat = await Chat.findById(params.id).populate('user', 'name email avatar');
  if (!chat) {
    return NextResponse.json({ message: 'Chat not found' }, { status: 404 });
  }

  if (chat.user._id.toString() !== user._id.toString() && !user.isAdmin) {
    return NextResponse.json({ message: 'Not authorized to access this chat' }, { status: 403 });
  }

  return NextResponse.json(chat);
}
