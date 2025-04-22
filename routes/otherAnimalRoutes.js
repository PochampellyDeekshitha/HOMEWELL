const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const { createOtherAnimalProfile } = require('../controllers/otherAnimalController');

router.post('/create', upload.single('photo'), createOtherAnimalProfile);

module.exports = router;