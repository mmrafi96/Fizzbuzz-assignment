const express = require('express');
const cors = require('cors');
const { processFizzBuzz } = require('./fizzBuzzService');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.post('/fizzbuzz', (req, res) => {
    const { values } = req.body;
    if (!Array.isArray(values)) {
        return res.status(400).json({ error: 'Invalid input. Expected an array of values.' });
    }
    const results = processFizzBuzz(values);
    res.json(results);
});

app.listen(port, () => {
    console.log(`FizzBuzz backend is running at http://localhost:${port}`);
});
