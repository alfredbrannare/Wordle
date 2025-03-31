import express from 'express';
import fruitsRoutes from './fruits.js';
import createWordleRoutes from './randomWord.js';

export default function createRoutes(api) {
    const router = express.Router();

    router.use('/random-word', createWordleRoutes(api));

    return router;
}