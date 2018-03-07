'use strict';

const express = require('express');
const router = express.Router();
const OnlineSales = require('../models/onlineSale');

router.get('/:id', (req, res, next) => {
  OnlineSales.find({seller: req.params.id})
    .then((sales) => {
      res.json(sales);
    }).catch(err => {
      return next(err);
    });
});

module.exports = router;
