const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const UserSchema = new Schema({
  OwnerID: {
    type: ObjectId,
    ref: 'User'
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

module.exports = mongoose.model('User', UserSchema);
