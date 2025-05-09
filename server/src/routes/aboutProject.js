import express from 'express';
import fs from 'fs/promises';

export default function createAboutRoutes() {
    const router = express.Router();

    router.get('/', async (req, res) => {
        const htmlText = await fs.readFile("./client/dist/about-project.html");
        res.send(htmlText.toString());
    });

    return router;
}