const express = require('express');
const router = express.Router();
const Card = require('../models/Card');


router.get('/', (req, res) => {
  Card.find({}, (err, cards) => {
    if (err) {
      res.status(500).send('Server Error');
      return;
    }
    res.json(cards);
  });
});


router.get('/:title', (req, res) => {
  Card.findOne({ title: req.params.title }, (err, card) => {
    if (err) {
      res.status(500).send('Server Error');
      return;
    }
    if (!card) {
      res.status(404).json({ msg: 'Card not found' });
      return;
    }
    res.json(card);
  });
});


router.post('/', (req, res) => {
  const newCard = new Card({
    title: req.body.title,
    description: req.body.description,
  });

  newCard.save((err, card) => {
    if (err) {
      res.status(500).send('Server Error');
      return;
    }
    res.json(card);
  });
});

module.exports = router;
