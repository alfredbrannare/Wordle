import express from 'express';
import createRoutes from './routes/routes.js';

function initApp(api) {
    const app = express();

    app.use(express.json());
    app.use('/api', createRoutes(api));

    return app;
}

export { initApp };