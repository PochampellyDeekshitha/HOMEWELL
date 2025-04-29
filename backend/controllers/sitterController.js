// /controllers/sitterController.js
const Sitter = require('../models/Sitter');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Ensure uploads folder exists
const uploadFolder = path.join(__dirname, '..', 'uploads');
if (!fs.existsSync(uploadFolder)) {
  fs.mkdirSync(uploadFolder, { recursive: true });
}

// Multer storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadFolder);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Middleware to handle file uploads
exports.uploadSitterFiles = upload.fields([
  { name: 'profilePicture', maxCount: 1 },
  { name: 'aadhaarPhoto', maxCount: 1 },
  { name: 'certificationPicture', maxCount: 1 },
]);

// Create Sitter Profile Controller
exports.createSitterProfile = async (req, res) => {
  try {
    const {
      fullName,
      age,
      phone,
      email,
      bio,
      experience,
      availability,
      location,
      services,
      workLocation,
      paymentMethods,
      profileVisibility,
      maxDistance,
      alternateContact,
      houseCheck
    } = req.body;

    // Handle file paths
    const files = req.files;
    const profilePicture = files?.profilePicture?.[0]?.filename || null;
    const aadhaarPhoto = files?.aadhaarPhoto?.[0]?.filename || null;
    const certificationPicture = files?.certificationPicture?.[0]?.filename || null;

    // Ensure required fields are present
    if (!fullName || !age || !phone || !email) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Normalize arrays
    const servicesArray = Array.isArray(services) ? services : services?.split(',') || [];
    const paymentMethodsArray = Array.isArray(paymentMethods) ? paymentMethods : paymentMethods?.split(',') || [];

    const newSitter = new Sitter({
      fullName,
      age,
      phone,
      email,
      bio,
      experience,
      availability,
      location,
      services: servicesArray,
      workLocation,
      paymentMethods: paymentMethodsArray,
      profileVisibility,
      maxDistance,
      alternateContact,
      houseCheck,
      profilePicture,
      aadhaarPhoto,
      certificationPicture
    });

    await newSitter.save();
    res.status(201).json({ message: 'Sitter registered successfully', sitter: newSitter });
  } catch (err) {
    console.error('Sitter registration error:', err);
    res.status(500).json({ message: 'Internal server error', error: err.message });
  }
};

// Get sitters by service (e.g., "petcare")
exports.getSittersByService = async (req, res) => {
  try {
    const { serviceName } = req.params;
    const sitters = await Sitter.find({ services: serviceName.toLowerCase() });
    res.json(sitters);
  } catch (error) {
    console.error('Error fetching sitters:', error);
    res.status(500).json({ message: 'Failed to fetch sitters', error });
  }
};