import express from 'express';
import { evaluateGuess } from "../js/gamelogic/gameLogic.js";

export default function createValidateWordRoutes(api, wordStore) {
    const router = express.Router();

    router.post('/', async (req, res) => {
        try {
            const { guessWord } = req.body;
            const correctWord = wordStore.getCorrectWord();

            if (!correctWord) {
                return res.status(400).json({ error: 'No game in progress' });
            }

            const validateWord = evaluateGuess(
                correctWord,
                guessWord
            );

            console.log('Validation result:', validateWord);
            wordStore.setGuess(validateWord);

            res.json(wordStore.getGuesses());
        } catch (error) {
            console.error('Failed to validate word:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    });

    router.get('/', (req, res) => {
        try {
            const guesses = wordStore.getGuesses();
            res.json(guesses);
        } catch (error) {
            console.error('Failed to fetch guesses:', error);
            res.status(500).send('Internal Server Error');
        }
    });

    router.delete('/', (req, res) => {
        try {
            wordStore.clearGuesses();
            res.status(200).json({ message: 'Game reset successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    })

    return router;
}