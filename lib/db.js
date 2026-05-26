import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGO_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGO_URI environment variable inside .env');
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    // Fail fast if MongoDB is unreachable in dev to avoid hanging API routes
    const connectOptions = {
      // Fail quickly when the server is not available
      serverSelectionTimeoutMS: parseInt(process.env.MONGO_CONNECT_TIMEOUT_MS || '3000', 10),
    };

    cached.promise = mongoose.connect(MONGODB_URI, connectOptions).then((mongooseInstance) => {
      return mongooseInstance;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectDB;
