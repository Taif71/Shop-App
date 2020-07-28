const express = require('express');

const app = express();

app.get('/', (req, res) => {

    res.send('Hello we are rolling now');
});

app.listen(3000, () => {
    console.log('Server started');
});