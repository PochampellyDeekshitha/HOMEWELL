const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();
const plantController = require('../controllers/plantController');

// Set up multer to handle file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage });

// Route to create plant profile
router.post('/create', upload.single('photo'), plantController.createPlantProfile);

module.exports = router;