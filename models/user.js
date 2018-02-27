const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  Username: {
    type: String,
    required: true
  },
  Password: {
    type: String,
    required: true
  },
  CompanyName: {
    type: String,
    required: true
  },
  CompanyAddress: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    required: true
  },
  Role: {
    type: String,
    enum: ['SELLER', 'OWNER']
  }
});

module.exports = mongoose.model('User', UserSchema);
