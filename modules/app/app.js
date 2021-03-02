const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use('/people', require('../people/people.router'));
app.use('/pets', require('../pets/pets.router'));
app.use('/cats', require('../cats/cats.router'));
app.use('/dogs', require('../dogs/dogs.router'));

module.exports = app;
