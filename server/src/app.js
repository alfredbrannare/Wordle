import express from 'express';
import createApiRoutes from './routes/routes.js';

function initApp(api) {
    const app = express();

    app.use(express.json());
    app.use('/', createApiRoutes(api));
    app.use(express.static('client/public'));

    return app;
}

export { initApp };