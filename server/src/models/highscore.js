import mongoose from 'mongoose';

const highScoreSchema = new mongoose.Schema({
    name: { type: String, required: true },
    guesses: { type: Number, required: true },
    timeTaken: { type: Number, required: true }
});

export default mongoose.model('HighScore', highScoreSchema, 'Highscores');
