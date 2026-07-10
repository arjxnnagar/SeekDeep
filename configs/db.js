import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_DB_URI;

if (!MONGO_URI) {
  throw new Error("Please define MONGO_DB_URI in your .env.local");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = {
    conn: null,
    promise: null,
  };
}

export default async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGO_URI).then((mongoose) => mongoose);
  }

  try {
    cached.conn = await cached.promise;
    console.log("✅ MongoDB Connected");
    return cached.conn;
  } catch (err) {
    cached.promise = null;
    console.error("❌ MongoDB Connection Failed:", err);
    throw err;
  }
}
