const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const BookingSchema = new Schema({
  companyName: {
    type: String,
    required: true
  },
  warehouseAddress: {
    type: ObjectId,
    ref: 'User'
  },
  productName: {
    type: String
  },
  dimsWeight: {
    type: String
  },
  packCargo: {
    type: String,
    enum: ['PALLETS', 'CARTONS', 'MIX']
  },
  hazmat: {
    type: Boolean
  },
  expectedVolWeightShip: {
    type: String
  },
  expectedVolWeightMonth: {
    type: String
  },
  expTurnOver: {
    type: String
  },
  enterDate: {
    type: String
  }
});

module.exports = mongoose.model('Booking', BookingSchema);
