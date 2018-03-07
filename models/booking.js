const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const BookingSchema = new Schema({
  warehouseAddress: {
    type: ObjectId,
    ref: 'warehouseCard'
  },
  seller: {
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
    pack: {
      type: String,
      enum: ['PALLETS', 'CARTONS', 'MIX']
    },
    packPcs: {
      type: Number
    }
  },
  hazmat: {
    type: Boolean
  },
  pcs: {
    type: Number
  },
  expTurnOver: {
    type: Number
  },
  enterDate: {
    type: String
  }
});

module.exports = mongoose.model('Booking', BookingSchema);
