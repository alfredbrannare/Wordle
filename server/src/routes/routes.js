import express from 'express';
import createWordleRoutes from './randomWord.js';
import createValidateWordRoutes from './validateWord.js';
import WordStore from '../js/wordstorage/WordStore.js';

export default function createApiRoutes(api) {
    const router = express.Router();

    const wordStore = new WordStore();

    router.use('/words/random', createWordleRoutes(api, wordStore));
    router.use('/guesses', createValidateWordRoutes(api, wordStore));

    return router;
}