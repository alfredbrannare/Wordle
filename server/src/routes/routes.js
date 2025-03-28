import express from 'express';
import fruitsRoutes from './fruits.js';
import wordleRoutes from './randomWord.js'

const router = express.Router();

router.use('/fruits', fruitsRoutes);
router.use('/random-word', wordleRoutes)

export default router;