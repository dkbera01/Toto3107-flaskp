const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('form');
});

app.post('/submit', async (req, res) => {
    try {
        const response = await axios.post('http://backend:5000/submit', req.body);
        res.send(`Response from backend: ${JSON.stringify(response.data)}`);
    } catch (err) {
        res.status(500).send('Error communicating with backend');
    }
});

app.listen(PORT, () => console.log(`Frontend running at http://localhost:${PORT}`));
