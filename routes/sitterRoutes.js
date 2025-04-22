const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Sitter = require('../models/Sitter'); // Sitter model
const fs = require('fs');
const upload = require("../config/multerConfig"); 

// Set up multer for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Store files in 'uploads' directory
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique file name based on timestamp
  },
});

//const upload = multer({ storage });

// Route to create a sitter profile with file upload
router.post(
  '/create',
  upload.fields([
    { name: 'profilePicture', maxCount: 1 },
    { name: 'aadhaarPhoto', maxCount: 1 },
    { name: 'certificationPicture', maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      // Extract form fields from req.body
      const {
        fullName,
        age,
        phone,
        email,
        bio,
        experience,
        certifications,
        availability,
        location,
        workLocation,
        profileVisibility,
        maxDistance,
        alternateContact,
        houseCheck,
      } = req.body;

      // Normalize fields that can be single or multiple values
      const services = Array.isArray(req.body.services)
        ? req.body.services
        : req.body.services
        ? [req.body.services]
        : [];

      const paymentMethods = Array.isArray(req.body.paymentMethods)
        ? req.body.paymentMethods
        : req.body.paymentMethods
        ? [req.body.paymentMethods]
        : [];

      // File paths for uploaded files
      const profilePicture = req.files?.profilePicture?.[0]?.path || null;
      const aadhaarPhoto = req.files?.AadhaarPhoto?.[0]?.path || null;
      const certificationPicture = req.files?.CertificationPicture?.[0]?.path || null;

      // Create new sitter profile
      const newSitter = new Sitter({
        fullName,
        age,
        phone,
        email,
        bio,
        experience,
        certifications,
        availability,
        location,
        services,
        workLocation,
        paymentMethods,
        profileVisibility,
        maxDistance,
        alternateContact,
        houseCheck,
        profilePicture,
        aadhaarPhoto,
        certificationPicture,
      });

      // Save sitter profile to the database
      await newSitter.save();
      res.status(201).json({ message: 'Sitter profile created successfully', sitter: newSitter });
    } catch (err) {
      console.error('Error creating sitter:', err);
      res.status(500).json({ message: 'Error creating sitter profile', error: err.message });
    }
  }
);

// Route to get all sitters
router.get('/all', async (req, res) => {
  try {
    const sitters = await Sitter.find();
    res.status(200).json(sitters);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching sitters', error: err.message });
  }
});

// Route to get a sitter by ID
router.get('/:id', async (req, res) => {
  try {
    const sitter = await Sitter.findById(req.params.id);
    if (!sitter) {
      return res.status(404).json({ message: 'Sitter not found' });
    }
    res.status(200).json(sitter);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching sitter', error: err.message });
  }
});

// Route to update sitter profile by ID with file upload
router.put(
  '/:id',
  upload.fields([
    { name: 'profilePicture', maxCount: 1 },
    { name: 'AadhaarPhoto', maxCount: 1 },
    { name: 'CertificationPicture', maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const sitter = await Sitter.findById(req.params.id);
      if (!sitter) {
        return res.status(404).json({ message: 'Sitter not found' });
      }

      // Update sitter details with new form values
      sitter.fullName = req.body.fullName || sitter.fullName;
      sitter.age = req.body.age || sitter.age;
      sitter.phone = req.body.phone || sitter.phone;
      sitter.email = req.body.email || sitter.email;
      sitter.bio = req.body.bio || sitter.bio;
      sitter.experience = req.body.experience || sitter.experience;
      sitter.certifications = req.body.certifications || sitter.certifications;
      sitter.availability = req.body.availability || sitter.availability;
      sitter.location = req.body.location || sitter.location;
      sitter.services = req.body.services.split(',') || sitter.services;
      sitter.workLocation = req.body.workLocation || sitter.workLocation;
      sitter.paymentMethods = req.body.paymentMethods.split(',') || sitter.paymentMethods;
      sitter.profileVisibility = req.body.profileVisibility || sitter.profileVisibility;
      sitter.maxDistance = req.body.maxDistance || sitter.maxDistance;
      sitter.alternateContact = req.body.alternateContact || sitter.alternateContact;
      sitter.houseCheck = req.body.houseCheck || sitter.houseCheck;

      // Update file paths if new files are uploaded
      if (req.files.profilePicture) sitter.profilePicture = req.files.profilePicture[0].path;
      if (req.files.AadhaarPhoto) sitter.aadhaarPhoto = req.files.AadhaarPhoto[0].path;
      if (req.files.CertificationPicture) sitter.certificationPicture = req.files.CertificationPicture[0].path;

      // Save updated sitter profile
      await sitter.save();
      res.status(200).json({ message: 'Sitter profile updated successfully', sitter });
    } catch (err) {
      res.status(500).json({ message: 'Error updating sitter profile', error: err.message });
    }
  }
);

// Route to delete sitter profile by ID
router.delete('/:id', async (req, res) => {
  try {
    const sitter = await Sitter.findByIdAndDelete(req.params.id);
    if (!sitter) {
      return res.status(404).json({ message: 'Sitter not found' });
    }

    // Optionally, delete the uploaded files from the server
    if (sitter.profilePicture && fs.existsSync(sitter.profilePicture)) {
      fs.unlinkSync(sitter.profilePicture);
    }
    if (sitter.aadhaarPhoto && fs.existsSync(sitter.aadhaarPhoto)) {
      fs.unlinkSync(sitter.aadhaarPhoto);
    }
    if (sitter.certificationPicture && fs.existsSync(sitter.certificationPicture)) {
      fs.unlinkSync(sitter.certificationPicture);
    }

    res.status(200).json({ message: 'Sitter profile deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting sitter profile', error: err.message });
  }
});

module.exports = router;