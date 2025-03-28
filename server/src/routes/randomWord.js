import express from 'express';
import { generateRandomWord } from '../js/gamelogic/randomWordGenerator.js';

const router = express.Router();

router.post('/', (req, res) => {
    const { wordLength, uniqueWords } = req.body;
    const words = ['apple', 'orange', 'banana', 'grape', 'melon'];

    const randomWord = generateRandomWord(
        parseInt(wordLength),
        words,
        uniqueWords
    );

    res.json({ data: randomWord })
});

export default router;