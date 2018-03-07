const express = require('express');
const router = express.Router();
const Warehouse = require('../models/warehouseCard');

const upload = require('../configs/multer');

router.post('/', upload.single('file'), (req, res, next) => {
  const picture = `/uploads/${req.file.filename}`;
  const updates = {
    $set: {
      picture: picture
    }
  };
  Warehouse.findOneAndUpdate({ownerID: req.session.currentUser._id}, updates)
    .then(() => {
      console.log('New pic added to warehouse profile', updates, req.session.currentUser._id);
      res.json({ picture });
    }).catch(err => {
      return next(err);
    });
});

module.exports = router;
