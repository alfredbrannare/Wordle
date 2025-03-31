import express from 'express';
import { generateRandomWord } from '../js/gamelogic/randomWordGenerator.js';

export default function createWordleRoutes(api) {
    const router = express.Router();

    router.post('/', async (req, res) => {
        try {
            const { wordLength, uniqueWords } = req.body;

            const wordsObject = await api.loadWords();
            const words = Object.keys(wordsObject);
            console.log(words);

            const randomWord = generateRandomWord(
                parseInt(wordLength),
                words,
                uniqueWords
            );

            res.json(randomWord);
        } catch (error) {
            console.error('Error generating word:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    });

    return router;
}
