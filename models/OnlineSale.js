const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const OnlineSalesSchema = new Schema({
  seller: {
    type: ObjectId,
    ref: 'User'
  },
  productName: {
    type: String
  },
  salesPrice: {
    type: Number
  },
  dims: {
    type: Number
  },
  weight: {
    type: Number
  },
  hazmat: {
    type: Boolean
  },
  salesDate: {
    type: String
  },
  courier: {
    type: String
  }
});

module.exports = mongoose.model('OnlineSales', OnlineSalesSchema);
