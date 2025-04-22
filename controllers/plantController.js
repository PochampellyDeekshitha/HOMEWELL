const Plant = require('../models/Plant');

// Create a new plant profile
exports.createPlantProfile = async (req, res) => {
  try {
    const {
      name,
      species,
      plantType,
      wateringFrequency,
      fertilizer,
      sunlight,
      humidity,
      pruning,
      notes
    } = req.body;

    const photo = req.file ? req.file.path : null;

    const newPlant = new Plant({
      name,
      species,
      plantType,
      wateringFrequency,
      fertilizer,
      sunlight,
      humidity,
      pruning,
      notes,
      photo
    });

    const savedPlant = await newPlant.save();
    res.status(201).json({ message: 'Plant profile created successfully!', plant: savedPlant });
  } catch (error) {
    console.error('Error creating plant profile:', error);
    res.status(500).json({ message: 'Failed to create plant profile', error: error.message });
  }
};