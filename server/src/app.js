import express from 'express';
import createApiRoutes from './routes/routes.js';
import fs from 'fs/promises';
import mongoose from 'mongoose';
import HighScoreModel from './models/highscore.js'


function initApp(api) {
    const app = express();
    app.use(express.json());

    app.use('/api', createApiRoutes(api));

    app.get('/', async (req, res) => {
        const htmlText = await fs.readFile('../client/dist/index.html');
        res.send(htmlText.toString());
    });

    app.get('/about', async (req, res) => {
        const htmlText = await fs.readFile("../client/public/about-project.html");
        res.send(htmlText.toString());
    });

    app.get('/highscores', async (req, res) => {
        try {
            res.render('highscores.ejs');
        } catch (err) {
            res.status(500).send("Error loading highscores");
        }
    });

    app.post('/api/highscore', async (req, res) => {
        try {
            const { name, guesses, time } = req.body;

            if (!name || !guesses) {
                return res.status(400).send('Name and score are required');
            }

            const newScore = new HighScoreModel({
                name,
                guesses,
                time
            });

            await newScore.save();

            res.status(201).send(`Created your score: ${name}`);
        } catch (err) {
            console.error('Error saving high score:', err);
            res.status(500).send({ message: err.message });
        }
    });

    app.use('/assets', express.static('../client/dist/assets'));

    return app;
}

export { initApp };