
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const PictureSchema = new Schema({
  name: String,
  path: String,
  userId: {
    type: ObjectId,
    ref: 'User'
  }
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

const Picture = mongoose.model('Picture', PictureSchema);

module.exports = Picture;
