const express = require('express');
const cors = require('cors');
const { CLIENT_ORIGIN } = require('../../config');

const app = express();

app.use(cors({
    origin: CLIENT_ORIGIN
}));

app.use('/people', require('../people/people.router'));
app.use('/pets', require('../pets/pets.router'));
app.use('/cats', require('../cats/cats.router'));
app.use('/dogs', require('../dogs/dogs.router'));

module.exports = app;
