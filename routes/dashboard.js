'use strict';

const express = require('express');
const router = express.Router();

router.get('/:id', (req, res, next) => {
  res.json('Dashboard');
});

module.exports = router;
