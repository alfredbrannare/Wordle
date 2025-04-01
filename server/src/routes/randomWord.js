import express from 'express';
import { generateRandomWord } from '../js/gamelogic/randomWordGenerator.js';

export default function createWordleRoutes(api, wordStore) {
    const router = express.Router();

    router.post('/', async (req, res) => {
        try {
            const { wordLength, uniqueWords } = req.body;

            const wordsObject = await api.loadWords();
            const words = Object.keys(wordsObject);

            const randomWord = generateRandomWord(
                parseInt(wordLength),
                words,
                uniqueWords
            );

            wordStore.setCorrectWord(randomWord);
            console.log({ correct: randomWord });
            res.json({ message: "Game started!" });
        } catch (error) {
            console.error('Error generating word:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    });

    return router;
}
