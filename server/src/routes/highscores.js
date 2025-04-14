import express from 'express';
import HighScoreModel from '../models/highscore.js'

export default function createHighscoreRoutes() {
    const router = express.Router();

    router.get('/', async (req, res) => {
        try {
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;
            const skip = (page - 1) * limit;

            const totalItems = await HighScoreModel.countDocuments();
            const totalPages = Math.ceil(totalItems / limit);

            const leaderboard = await HighScoreModel.find()
                .sort({ guesses: 1, time: 1 })
                .skip(skip)
                .limit(limit);

            res.render('highscores.ejs', {
                highscores: leaderboard,
                currentPage: page,
                totalPages: totalPages,
                hasNextPage: page < totalPages,
                hasPrevPage: page > 1
            });
        } catch (err) {
            res.status(500).send("Error loading leaderboard");
        }
    });

    router.post('/', async (req, res) => {
        try {
            const { name, guesses, time, word } = req.body;

            if (!name || !guesses || !time || !word) {
                return res.status(400).send('Name and score are required');
            }

            const newScore = new HighScoreModel({
                name,
                guesses,
                time,
                word
            });

            await newScore.save();

            res.status(201).send(`Created your score: ${name}`);
        } catch (err) {
            console.error('Error saving high score:', err);
            res.status(500).send({ message: err.message });
        }
    });

    return router;
}