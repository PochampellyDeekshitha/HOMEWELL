const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { createAquariumProfile } = require('../controllers/aquariumController');

// Multer Setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/aquariums/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });

router.post('/create', upload.single('photo'), createAquariumProfile);

module.exports = router;