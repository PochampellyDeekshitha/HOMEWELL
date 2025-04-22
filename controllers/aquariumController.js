const Aquarium = require('../models/Aquarium');
const path = require('path');

const createAquariumProfile = async (req, res) => {
  try {
    const {
      aquariumName,
      tankSize,
      aquariumType,
      species,
      numberOfSpecies,
      feedingSchedule,
      specialCare,
      waterChangeSchedule,
      cleaningInstructions,
      emergencyInstructions,
      additionalNotes,
    } = req.body;

    const photo = req.file ? req.file.filename : null;

    const newAquarium = new Aquarium({
      aquariumName,
      tankSize,
      aquariumType,
      species,
      numberOfSpecies,
      feedingSchedule,
      specialCare,
      waterChangeSchedule,
      cleaningInstructions,
      emergencyInstructions,
      additionalNotes,
      photo,
    });

    await newAquarium.save();
    res.status(201).json({ message: 'Aquarium Profile Created', aquarium: newAquarium });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

module.exports = { createAquariumProfile };