
const express = require('express');
const multer = require('multer');
const path = require('path');
const birdProfileController = require('../controllers/birdProfileController');
const router = express.Router();


// Set up multer to handle file uploads (for bird photo)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Save images in the 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Unique file name
  }
});
const upload = multer({ storage: storage });

// Route to handle creating a bird profile
router.post('/create', upload.single('photo'), birdProfileController.createBirdProfile);

module.exports = router;