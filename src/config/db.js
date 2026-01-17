import mongoose from 'mongoose'

export const connectDb = async (res, req) => {
    const path = process.env.MONGO_URI
    try {
        const conn = await mongoose.connect(path)
        console.log("database connected successfully", conn.connection.host);
    } catch (err) {
        console.log('Internal Server Error while connecting db', err);

    }
}