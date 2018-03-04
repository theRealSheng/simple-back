const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  companyName: {
    type: String,
    required: false
  },
  companyAddress: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false
  },
  role: {
    type: String,
    enum: ['SELLER', 'OWNER']
  },
  description: {
    type: String,
    required: false
  },
  picture: {
    type: String
  }
});

module.exports = mongoose.model('User', UserSchema);
