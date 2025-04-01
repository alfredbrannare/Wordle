import express from 'express';
import { evaluateGuess } from "../js/gamelogic/gameLogic.js";

export default function createValidateWordRoutes(api, wordStore) {
    const router = express.Router();

    router.post('/', async (req, res) => {
        try {
            const { guessWord } = req.body;

            const correctWord = wordStore.getCorrectWord();

            const validateWord = evaluateGuess(
                correctWord,
                guessWord
            );

            console.log(validateWord);
            res.json(validateWord);
        } catch (error) {
            console.error('Failed to validate word:', error);
        }
    });

    return router;
}