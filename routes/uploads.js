const express = require('express');
const router = express.Router();
const User = require('../models/user');
const upload = require('../configs/multer');

router.post('/', upload.single('file'), (req, res, next) => {
  const picture = `/uploads/${req.file.filename}`;
  const updates = {
    $set: {
      picture: picture
    }
  };
  User.findOneAndUpdate({_id: req.session.currentUser._id}, updates)
    .then(() => {
      console.log('New pic added to user profile', updates, req.session.currentUser._id);
      res.json({ picture });
    }).catch(err => {
      return next(err);
    });
});

module.exports = router;
