const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const WarehouseCardSchema = new Schema({
  ownerID: {
    type: ObjectId,
    ref: 'User'
  },
  companyName: {
    type: String,
    required: true
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
    required: true
  },
  description: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model('Warehouse', WarehouseCardSchema);
