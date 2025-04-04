import express from 'express';
import createWordleRoutes from './randomWord.js';
import createValidateWordRoutes from './validateWord.js';
import WordStore from '../js/wordstorage/WordStore.js';
import { getAboutProject } from './aboutProject.js';
import { getHighscores } from './highscores.js';

export default function createApiRoutes(api) {
    const router = express.Router();

    const wordStore = new WordStore();

    router.use('/words/random', createWordleRoutes(api, wordStore));
    router.use('/guesses', createValidateWordRoutes(api, wordStore));

    router.get('/about', getAboutProject);
    router.get('/highscores', getHighscores);

    return router;
}