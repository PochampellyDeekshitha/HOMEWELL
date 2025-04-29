const Elderly = require('../models/Elderly');

// Create Elderly Profile
exports.createElderProfile = async (req, res) => {
  try {
    // Extract data from request body (including file)
    const {
      fullName,
      age,
      gender,
      medicalConditions,
      allergies,
      mobilityStatus,
      medicationSchedule,
      careType,
      preferredSitterGender,
      languagePreference,
      specialInstructions,
      contactInfo,
      emergencyContact
    } = req.body;

    // The photo will be uploaded via multer and stored in the 'uploads/' directory
    const photo = req.file ? req.file.path : null; // If the file exists, use the file path

    // Create a new Elderly profile
    const newElder = new Elderly({
      fullName,
      age,
      gender,
      photo, // Store the photo path
      medicalConditions,
      allergies,
      mobilityStatus,
      medicationSchedule,
      careType,
      preferredSitterGender,
      languagePreference,
      specialInstructions,
      contactInfo,
      emergencyContact
    });

    // Save the elderly profile to the database
    const savedElder = await newElder.save();

    // Return the saved profile as response
    res.status(201).json(savedElder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get All Elderly Profiles
exports.getAllElderProfiles = async (req, res) => {
  try {
    const elderlyProfiles = await Elderly.find();
    res.status(200).json(elderlyProfiles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get One Elderly Profile by ID
exports.getElderProfileById = async (req, res) => {
  try {
    const elder = await Elderly.findById(req.params.id);
    if (!elder) {
      return res.status(404).json({ message: 'Elderly profile not found' });
    }
    res.status(200).json(elder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update Elderly Profile
exports.updateElderProfile = async (req, res) => {
  try {
    const updatedElder = await Elderly.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedElder) {
      return res.status(404).json({ message: 'Elderly profile not found' });
    }
    res.status(200).json(updatedElder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Delete Elderly Profile
exports.deleteElderProfile = async (req, res) => {
  try {
    const deletedElder = await Elderly.findByIdAndDelete(req.params.id);
    if (!deletedElder) {
      return res.status(404).json({ message: 'Elderly profile not found' });
    }
    res.status(200).json({ message: 'Elderly profile deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};