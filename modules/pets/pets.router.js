const express = require('express');
const json = require('body-parser').json();

const Pets = require('./pets.service');
const People = require('../people/people.service');

const router = express.Router();

router.get('/', (req, res) => {
  const pets = Pets.get();
  return res.status(200).json(pets);
});

router.delete('/', json, (req, res) => {
  const { type } = req.body;
  Pets.dequeue(type);
  const pets = Pets.get();
  return res.status(200).json(pets);
});

module.exports = router;
