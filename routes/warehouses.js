
'use strict';

const express = require('express');
const router = express.Router();
const Warehouse = require('../models/warehouseCard');

router.get('/', (req, res, next) => {
  if (!req.session.currentUser) {
    return res.redirect('/auth/login');
  }

  Warehouse.find({})
    .then((warehouses) => res.json(warehouses))
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  if (!req.session.currentUser) {
    return res.redirect('/auth/login');
  }

  Warehouse.findById(req.params.id)
    .then((warehouse) => res.json(warehouse))
    .catch(next);
});

router.post('/', (req, res, next) => {
  if (!req.session.currentUser) {
    return res.redirect('/auth/login');
  }

  const event = req.body;
  const newWarehouse = Warehouse({
    ownerID: event.ownerID,
    companyName: event.companyName,
    warehouseAddress: event.warehouseAddress,
    pricing: event.pricing,
    specialNotes: event.specialNotes,
    description: event.description
  });

  return newWarehouse.save()
    .then(() => res.json(newWarehouse));
});

module.exports = router;
