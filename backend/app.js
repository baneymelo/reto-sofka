const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())
app.use(express.json());

app.use('/', (req, res) => {
    res.send({ sofka: "Game"})
})

module.exports = app;