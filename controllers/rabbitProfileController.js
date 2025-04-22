const RabbitProfile = require('../models/RabbitProfile');

const createRabbitProfile = async (req, res) => {
  try {
    const {
      name, age, gender, breed, colorMarkings, weight,
      indoorOutdoor, cageSetup, litterTrained, bonded,
      bondedWith, favoriteFoods, feedingSchedule, treatsAllowed,
      treatTypes, foodRestrictions, vaccinationStatus, spayedNeutered,
      medicalConditions, vetInfo, groomingNeeds, temperament,
      likes, dislikes, specialInstructions, activeHours,
      favoriteSpots, playtimePrefs, contactInfo
    } = req.body;

    const photo = req.file ? req.file.filename : null;

    const newProfile = new RabbitProfile({
      name, age, gender, breed, colorMarkings, weight,
      photo, indoorOutdoor, cageSetup, litterTrained, bonded,
      bondedWith, favoriteFoods, feedingSchedule, treatsAllowed,
      treatTypes, foodRestrictions, vaccinationStatus, spayedNeutered,
      medicalConditions, vetInfo, groomingNeeds, temperament,
      likes, dislikes, specialInstructions, activeHours,
      favoriteSpots, playtimePrefs, contactInfo
    });

    await newProfile.save();
    res.status(201).json({ message: 'Rabbit profile created successfully!', data: newProfile });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create rabbit profile', error: error.message });
  }
};

module.exports = { createRabbitProfile };