import fs from 'fs/promises';

export async function getHighscores(req, res) {
    try {
        const template = await fs.readFile("./src/views/highscores.html", "utf-8");
        res.send(template);
    } catch (err) {
        console.error("Full error:", err);
        res.status(500).send(`Error loading highscores. Path tried: ${err.path}`);
    }
}