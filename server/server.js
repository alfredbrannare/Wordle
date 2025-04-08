import { initApp } from './src/app.js';
import { cmsAdapter } from './src/js/api/cmsAdapter.js';
import initDatabase from './src/mongoose.js';
import 'dotenv/config';

const api = {
    loadWords: cmsAdapter.loadWords
}

async function startServer() {
    const app = initApp(api,);

    const PORT = 5080;

    initDatabase().catch(err => {
        console.error('Database connection failed:', err);
    });

    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    });
}

startServer().catch((err) => {
    console.error('Error starting server:', err);
});