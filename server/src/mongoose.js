import mongoose from 'mongoose';
import 'dotenv/config'

export default async function initDatabase() {
    try {
        const mongoUri = process.env.MONGODB_URI;

        await mongoose.connect(mongoUri);
        console.log('Connected to the database');
    } catch (err) {
        console.error('Error connecting to the database:', err);
        process.exit(1);
    }
}
