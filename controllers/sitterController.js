// /controllers/sitterController.js
const Sitter = require('../models/Sitter');  // Assuming you have a Sitter model
const multer = require('multer');  // To handle file uploads
const path = require('path');
const fs = require('fs');

// Ensure uploads folder exists
const uploadFolder = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadFolder)) {
  fs.mkdirSync(uploadFolder);  // Create the folder if it doesn't exist
}

// Set up file storage for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadFolder); // Folder where files will be stored
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // File name with timestamp
  },
});

const upload = multer({ storage });

// POST route to create a new sitter profile
exports.createSitterProfile = [
  upload.fields([
    { name: 'profilePicture', maxCount: 1 },
    { name: 'aadhaarPhoto', maxCount: 1 },
    { name: 'certificationPicture', maxCount: 1 }
  ]),

  async (req, res) => {
    try {
      // Destructure input data and provide default values
      const {
        fullName = '',
        age = '',
        phone = '',
        email = '',
        bio = '',
        experience = '',
        availability = '',
        location = '',
        services = [],
        workLocation = '',
        paymentMethods = [],
        profileVisibility = 'Private',
        maxDistance = '',
        alternateContact = '',
        houseCheck = 'No'
      } = req.body;

      const files = req.files;

      // Handle file uploads (return paths if files exist)
      const profilePicture = files['profilePicture'] ? files['profilePicture'][0].path : null;
      const aadhaarPhoto = files['AadhaarPhoto'] ? files['AadhaarPhoto'][0].path : null;
      const certificationPicture = files['CertificationPicture'] ? files['CertificationPicture'][0].path : null;

      // Convert services and paymentMethods to arrays if they are not already arrays
      const servicesArray = Array.isArray(services) ? services : services ? services.split(',') : [];
      const paymentMethodsArray = Array.isArray(paymentMethods) ? paymentMethods : paymentMethods ? paymentMethods.split(',') : [];

      // Validate required fields
      if (!fullName || !age || !phone || !email) {
        return res.status(400).json({ message: 'Missing required fields: fullName, age, phone, email' });
      }

      // Create a new Sitter profile
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

      // Save the new sitter profile to the database
      await newSitter.save();

      // Return a success response
      res.status(201).json({
        message: 'Sitter profile created successfully',
        sitter: newSitter,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  }
];