import express from 'express';
import createWordleRoutes from './randomWord.js';
import createValidateWordRoutes from './validateWord.js';

export default function createRoutes(api) {
    const router = express.Router();

    router.use('/words/random', createWordleRoutes(api));
    router.use('/guesses', createValidateWordRoutes(api));

    return router;
}