import express from 'express';
import createApiRoutes from './routes/routes.js';
import fs from 'fs/promises';
import mongoose from 'mongoose';
import HighScoreModel from './models/highscore.js'
import createRoutes from './routes/routes.js';


function initApp(api) {
    const app = express();
    app.use(express.json());
    app.set('view engine', 'ejs');
    app.set('views', './server/views');

    app.use('/', createRoutes(api));

    app.use('/assets', express.static('./client/dist/assets'));
    app.use('/css', express.static('./server/src/css'));
    app.use('/src', express.static('./client/public/src'));

    return app;
}

export { initApp };