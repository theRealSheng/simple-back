
'use strict';

const express = require('express');
const router = express.Router();
const Warehouse = require('../models/warehouseCard');

router.get('/', (req, res, next) => {
  Warehouse.find({})
    .then((warehouses) => res.json(warehouses))
    .catch(next);
});

module.exports = router;
