import { initApp } from './src/app.js';

async function startServer() {
    const app = initApp();

    const PORT = 5080;
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    });
}

startServer().catch((err) => {
    console.error('Error starting server:', err);
});