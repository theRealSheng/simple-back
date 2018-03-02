const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const WarehouseCardSchema = new Schema({
  ownerID: {
    type: ObjectId,
    ref: 'User'
  },
  companyName: {
    type: String
  },
  warehouseAddress: {
    type: String,
    required: true
  },
  pricing: {
    type: String,
    required: true
  },
  specialNotes: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
  },
  picture: {
    type: ObjectId,
    ref: 'picture'
  }
});

module.exports = mongoose.model('Warehouse', WarehouseCardSchema);
