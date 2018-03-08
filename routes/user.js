
'use strict';

const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/:id', (req, res, next) => {
  User.findById(req.params.id)
    .then((user) => {
      res.json(user);
    })
    .catch(next);
});

router.put('/:id', (req, res, next) => {
  User.findByIdAndUpdate(req.params.id, { $set: req.body })
    .then((user) => {
      return res.json(user);
    })
    .catch(next);
});

module.exports = router;
