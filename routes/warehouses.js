
'use strict';

const express = require('express');
const router = express.Router();
const Warehouse = require('../models/warehouseCard');

router.get('/', (req, res, next) => {
  Warehouse.find({}, (err, warehouses) => {
    if (err) {
      return next(err);
    }
    return res.json(warehouses);
  });
});

module.exports = router;
