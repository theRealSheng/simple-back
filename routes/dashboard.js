'use strict';

const express = require('express');
const router = express.Router();
const OnlineSales = require('../models/OnlineSale');

router.get('/:id', (req, res, next) => {
  if (!req.session.currentUser) {
    return res.redirect('/auth/login');
  }

  OnlineSales.find({seller: req.params.id})
    .then((sales) => {
      res.json(sales);
    }).catch(err => {
      return next(err);
    });
});

module.exports = router;
