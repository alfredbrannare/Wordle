import express from 'express';
import cors from 'cors';
import apiRoutes from './routes/routes.js'

function initApp() {
    const app = express();

    const corsOptions = {
        origin: ['http://localhost:5173'],
    };

    app.use(cors(corsOptions));
    app.use(express.json());
    app.use('/api', apiRoutes);

    return app;
}

export { initApp };