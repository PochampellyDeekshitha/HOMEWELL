const express = require('express');
const router = express.Router();
const multer = require('multer');
const { createCatProfile } = require('../controllers/catProfileController');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

router.post('/create', upload.single('photo'), createCatProfile);

module.exports = router;