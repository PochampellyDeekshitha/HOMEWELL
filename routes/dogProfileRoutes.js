const express = require('express');
const router = express.Router();
const multer = require('multer');

const {
  getAll,
  create,
  update,
  remove,
  createDogProfile,
} = require('../controllers/dogProfileController');

// Multer setup for file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Make sure this folder exists
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

// Basic CRUD routes
router.get('/', getAll);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', remove);

// Route with image upload (photo field in form-data)
router.post('/create', upload.single('photo'), createDogProfile);

module.exports = router;