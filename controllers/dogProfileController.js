const DogProfile = require('../models/DogProfile');

// Get all dog profiles
const getAll = async (req, res) => {
  try {
    const profiles = await DogProfile.find();
    res.status(200).json(profiles);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch dog profiles' });
  }
};

// Create a profile without photo (optional basic create)
const create = async (req, res) => {
  try {
    const newProfile = new DogProfile(req.body);
    await newProfile.save();
    res.status(201).json({ message: 'Dog profile created', profile: newProfile });
  } catch (err) {
    res.status(500).json({ error: 'Failed to create profile' });
  }
};

// Create a profile with photo
const createDogProfile = async (req, res) => {
  try {
    const {
      dogName, breed, age, gender, size,
      vaccinationStatus, medicalConditions, vetContact,
      foodType, feedingSchedule, treatPreferences,
      temperament, getsAlongWith, favoriteActivities, fearTriggers,
      walkingSchedule, bathingRoutine, groomingNeeds, pottySchedule,
      emergencyContact, medications, stressBehavior, knownCommands
    } = req.body;

    const newProfile = new DogProfile({
      dogName, breed, age, gender, size,
      vaccinationStatus, medicalConditions, vetContact,
      foodType, feedingSchedule, treatPreferences,
      temperament, getsAlongWith, favoriteActivities, fearTriggers,
      walkingSchedule, bathingRoutine, groomingNeeds, pottySchedule,
      emergencyContact, medications, stressBehavior, knownCommands,
      photo: req.file ? req.file.filename : ''
    });

    await newProfile.save();
    res.status(201).json({ message: 'Dog profile created successfully', profile: newProfile });
  } catch (err) {
    console.error('Error creating dog profile:', err);
    res.status(500).json({ error: 'Something went wrong' });
  }
};

// Update a profile
const update = async (req, res) => {
  try {
    const updatedProfile = await DogProfile.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedProfile);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update profile' });
  }
};

// Delete a profile
const remove = async (req, res) => {
  try {
    await DogProfile.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Profile deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete profile' });
  }
};

// Export all
module.exports = {
  getAll,
  create,
  createDogProfile,
  update,
  remove
};