
'use strict';

const express = require('express');
const router = express.Router();
const Warehouses = require('../routes/warehouses');

router.get('/', (res, req, next) => {
  Warehouses.find()
    .then(warehouse => res.json(warehouse))
    .catch(next);
});
