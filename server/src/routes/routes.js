import express from 'express';
import createWordleRoutes from './randomWord.js';
import createValidateWordRoutes from './validateWord.js';
import WordStore from '../js/wordstorage/WordStore.js';
import createIndexRoutes from './index.js';
import createAboutRoutes from './aboutProject.js';
import createHighscoreRoutes from './highscores.js';

export default function createRoutes(api) {
    const router = express.Router();
    const wordStore = new WordStore();

    router.use('/api/words/random', createWordleRoutes(api, wordStore));
    router.use('/api/guesses', createValidateWordRoutes(api, wordStore));

    router.use('/', createIndexRoutes());
    router.use('/about', createAboutRoutes());
    router.use('/highscores', createHighscoreRoutes());

    return router;
}