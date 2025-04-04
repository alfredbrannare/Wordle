import express from 'express';
import createApiRoutes from './routes/routes.js';
import fs from 'fs/promises';

function initApp(api) {
    const app = express();
    app.use(express.json());

    app.use('/api', createApiRoutes(api));

    app.get("/about", async (req, res) => {
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

    app.use(express.static('client/public'));
    return app;
}

export { initApp };