import fs from 'fs/promises';

export async function getAboutProject(req, res) {
    try {
        const htmlText = await fs.readFile("../client/public/about-project.html", "utf-8");
        res.send(htmlText);
    } catch (err) {
        res.status(500).send("About page not found");
    }
}