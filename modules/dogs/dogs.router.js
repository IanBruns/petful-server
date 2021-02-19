const express = require('express');
const json = require('body-parser').json();

const Pets = require('../pets/pets.service');

const router = express.Router();

router.get('/', (req, res) => {
    const cat = Pets.getDog();
    return res.status(200).json(cat);
});

module.exports = router;