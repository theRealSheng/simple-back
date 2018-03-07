
'use strict';

const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Booking = require('../models/booking');

router.get('/:id', (req, res, next) => {
  User.findById(req.params.id)
    .then((user) => {
      res.json(user);
      Booking.find({seller: req.params.id})
        .then(booking => res.json(booking));
    })
    .catch(next);
});

router.put('/:id', (req, res, next) => {
  User.findByIdAndUpdate(req.params.id, { $set: req.body })
    .then((user) => {
      console.log(user);
      return res.json(user);
    })
    .catch(next);
});

module.exports = router;
