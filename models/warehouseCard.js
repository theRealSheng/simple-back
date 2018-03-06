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
  pricing: [
    {
      storage: {
        type: Number
      },
      handling: {
        type: [Number]
      },
      packaging: {
        type: [Number]
      }
    }
  ],
  specialNotes: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
  },
  picture: {
    type: String
  }
});

module.exports = mongoose.model('Warehouse', WarehouseCardSchema);
