const BirdProfile = require('../models/BirdProfile');

// Controller to create a new bird profile
exports.createBirdProfile = async (req, res) => {
  try {
    const {
      name,
      species,
      gender,
      age,
      color,
      size,
      weight,
      features,
      temperament,
      activityLevel,
      vocalization,
      favoriteSounds,
      favoriteFoods,
      feedingSchedule,
      healthConditions,
      vaccinationStatus,
      vetInfo,
      favoriteActivities,
      dailyRoutine,
      likesDislikes,
      trainingLevel,
      emergencyContact
    } = req.body;

    // Check if a file is uploaded
    const photo = req.file ? req.file.path : null;

    // Create a new bird profile document
    const birdProfile = new BirdProfile({
      name,
      species,
      gender,
      age,
      color,
      size,
      weight,
      features,
      temperament,
      activityLevel,
      vocalization,
      favoriteSounds,
      favoriteFoods,
      feedingSchedule,
      healthConditions,
      vaccinationStatus,
      vetInfo,
      favoriteActivities,
      dailyRoutine,
      likesDislikes,
      trainingLevel,
      emergencyContact,
      photo
    });

    // Save the bird profile in the database
    const savedProfile = await birdProfile.save();

    // Respond with success message and the saved bird profile data
    res.status(201).json({
      message: 'Bird profile created successfully!',
      birdProfile: savedProfile
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Error creating bird profile',
      error: error.message
    });
  }
};