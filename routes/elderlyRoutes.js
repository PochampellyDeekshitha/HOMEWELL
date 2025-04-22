const express = require('express');
const router = express.Router();
const elderlyController = require('../controllers/elderlyController');
const multer = require('multer');
const path = require('path');

// ✅ Setup Multer for image upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Ensure the "uploads" folder exists in the root of your project.
    cb(null, 'uploads/'); // Directory where the file will be stored
  },
  filename: function (req, file, cb) {
    // Generate a unique file name to avoid conflicts
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname)); // Append file extension
  }
});

// Set up multer with the storage configuration
const upload = multer({ storage });

// ✅ Routes for Elderly profiles
// POST route for creating a new elderly profile with photo
router.post('/create', upload.single('photo'), elderlyController.createElderProfile);

// GET route to fetch all elderly profiles
router.get('/', elderlyController.getAllElderProfiles);

// GET route to fetch a specific elderly profile by ID
router.get('/:id', elderlyController.getElderProfileById);

// PUT route to update a specific elderly profile by ID
router.put('/:id', elderlyController.updateElderProfile);

// DELETE route to remove a specific elderly profile by ID
router.delete('/:id', elderlyController.deleteElderProfile);

module.exports = router;