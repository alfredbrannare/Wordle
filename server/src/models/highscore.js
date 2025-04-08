import mongoose from 'mongoose';

const highScoreSchema = new mongoose.Schema({
    name: { type: String, required: true },
    guesses: { type: Number, required: true },
    time: { type: Number, required: true },
    word: { type: String, required: true }
});

export default mongoose.model('HighScore', highScoreSchema, 'Highscores');
