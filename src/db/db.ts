import mongoose from 'mongoose';

const MONGO_URL = process.env.MONGO_DB_URL;

let cached = (global as any).mongoose || { 
    connected: undefined,
    promise: undefined
};

export default async function connectToDB() {

    if (cached.connected) return cached.connected;

    if (!MONGO_URL) throw new Error('MONGO_URL is missing.');

    cached.promise = cached.promise || mongoose.connect(MONGO_URL, {
        dbName: 'NextJs-post2',
        bufferCommands: false,
    });

    cached.connected = await cached.promise;

    return cached.connected;
}