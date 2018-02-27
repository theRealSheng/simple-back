
'use strict';

const express = require('express');
const router = express.Router();
const Warehouse = require('../models/warehouseCard');

router.get('/', (res, req, next) => {
  Warehouse.find({}, (err, warehouses) => {
    if (err) {
      return res.json(err).status(500);
    }
    return res.json(warehouses);
  });
});

module.exports = router;
