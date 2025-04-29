const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { createRabbitProfile } = require('../controllers/rabbitProfileController');

// Set up multer for image upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);
  }
});

const upload = multer({ storage: storage });

// Create profile route
router.post('/create', upload.single('photo'), createRabbitProfile);

module.exports = router;