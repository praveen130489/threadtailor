import mongoose from 'mongoose';

let connected = false;

export async function connectToDatabase() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    // eslint-disable-next-line no-console
    console.log('MONGODB_URI not provided. Running with demo in-memory data.');
    return;
  }
  if (connected) return;
  try {
    await mongoose.connect(uri, { dbName: process.env.MONGODB_DB || 'thread_tailor' });
    connected = true;
    // eslint-disable-next-line no-console
    console.log('Connected to MongoDB');
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('MongoDB connection failed. Falling back to demo data.', err.message);
  }
}

export function isDatabaseEnabled() {
  return Boolean(mongoose.connection && mongoose.connection.readyState === 1);
}