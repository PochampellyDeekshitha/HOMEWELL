const OtherAnimal = require('../models/OtherAnimal');

const createOtherAnimalProfile = async (req, res) => {
  try {
    const {
      name,
      age,
      gender,
      color,
      weight,
      instructions,
      contact,
      animalType,
    } = req.body;

    const photo = req.file ? req.file.filename : '';

    const newProfile = new OtherAnimal({
      name,
      age,
      gender,
      color,
      weight,
      photo,
      instructions,
      contact,
      animalType,
    });

    await newProfile.save();
    res.status(201).json({ message: 'Profile created successfully', data: newProfile });
  } catch (error) {
    res.status(500).json({ message: 'Error creating profile', error });
  }
};

module.exports = { createOtherAnimalProfile };