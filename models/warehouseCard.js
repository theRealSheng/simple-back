const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const WarehouseCardSchema = new Schema({
  OwnerID: {
    type: ObjectId,
    ref: 'User'
  },
  companyName: {
    type: String,
    required: true
  },
  WarehouseAddress: {
    type: String,
    required: true
  },
  Pricing: {
    type: String,
    required: true
  },
  SpecialNotes: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Warehouse', WarehouseCardSchema);
