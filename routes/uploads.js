const express = require('express');
const router = express.Router();
const Picture = require('../models/picture');
const upload = require('../configs/multer');

/* GET home page. */
router.get('/', (req, res, next) => {
  Picture.find({}).then(response => {
    const data = {
      pictures: response
    };

    res.render('index', data);
  }).catch(err => {
    return next(err);
  });
});

router.post('/', upload.single('file'), (req, res, next) => {
  const pic = new Picture({
    name: req.body.name,
    path: `/uploads/${req.file.filename}`,
    originalName: req.file.originalname
  });

  pic.save().then(response => {
    console.log('New pic added to collections');
    res.redirect('/');
  }).catch(err => {
    return next(err);
  });
});

module.exports = router;
