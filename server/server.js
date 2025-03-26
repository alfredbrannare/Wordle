import express from 'express';
import cors from 'cors';

const app = express();

const corsOptions = {
    origin: ['http://localhost:5173'],
};

app.use(cors(corsOptions));

app.get('/api', (req, res) => {
    res.json({ 'fruits': ['apple', 'orange', 'banana'] });
});

const PORT = 5080;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
