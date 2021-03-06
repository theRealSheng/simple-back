'use strict';

const express = require('express');
const router = express.Router();
const Booking = require('../models/booking');

router.get('/', (req, res, next) => {
  if (!req.session.currentUser) {
    return res.redirect('/auth/login');
  }

  console.log('this is booking');
  res.json('Booking');
});

router.post('/', (req, res, next) => {
  if (!req.session.currentUser) {
    return res.redirect('/auth/login');
  }

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

router.get('/:id', (req, res, next) => {
  if (!req.session.currentUser) {
    return res.redirect('/auth/login');
  }

  Booking.find({seller: req.params.id}).populate('warehouseAddress')
    .exec((err, booking) => {
      if (err) {
        return next(err);
      }
      res.json(booking);
    });
});

module.exports = router;
