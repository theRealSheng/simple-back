'use strict';

const express = require('express');
const router = express.Router();
const Booking = require('../models/booking');

router.get('/', (req, res, next) => {
  console.log('this is booking');
  res.json('Booking');
});

router.post('/', (req, res, next) => {
  const event = req.body;
  const newBooking = Booking({
    warehouseAddress: event.warehouseAddress,
    seller: event.seller,
    productName: event.productName,
    dimsWeight: event.dimsWeight,
    packCargo: event.packCargo,
    hazmat: event.hazmat,
    expectedVolWeightShip: event.expectedVolWeightShip,
    expectedVolWeightMonth: event.expectedVolWeightMonth,
    expTurnOver: event.expTurnOver,
    enterDate: event.enterDate
  });

  return newBooking.save()
    .then(() => res.json(newBooking));
});

module.exports = router;
