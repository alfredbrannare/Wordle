import express from 'express';
import createApiRoutes from './routes/routes.js';
import fs from 'fs/promises';
import mongoose from 'mongoose';
import HighScoreModel from './models/highscore.js'


function initApp(api) {
    const app = express();
    app.use(express.json());
    app.set('view engine', 'ejs');

    app.use('/api', createApiRoutes(api));

    app.get('/', async (req, res) => {
        const htmlText = await fs.readFile('../client/dist/index.html');
        res.send(htmlText.toString());
    });

    app.get('/about', async (req, res) => {
        const htmlText = await fs.readFile("../client/dist/about-project.html");
        res.send(htmlText.toString());
    });

    app.get('/highscores', async (req, res) => {
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

    app.post('/api/highscore', async (req, res) => {
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

    app.use('/assets', express.static('../client/dist/assets'));
    app.use('/css', express.static('../server/src/css'));
    app.use('/src', express.static('../client/public/src'));

    return app;
}

export { initApp };