const mongoose = require('mongoose');

// Define the BirdProfile schema
const birdProfileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  species: { type: String, required: true },
  gender: { type: String, required: true },
  age: { type: Number, required: true },
  photo: { type: String },
  color: { type: String },
  size: { type: String },
  weight: { type: String },
  features: { type: String },
  temperament: { type: String },
  activityLevel: { type: String },
  vocalization: { type: String },
  favoriteSounds: { type: String },
  favoriteFoods: { type: String },
  feedingSchedule: { type: String },
  healthConditions: { type: String },
  vaccinationStatus: { type: String },
  vetInfo: { type: String },
  favoriteActivities: { type: String },
  dailyRoutine: { type: String },
  likesDislikes: { type: String },
  trainingLevel: { type: String },
  emergencyContact: { type: String }
});

// Create a model from the schema
const BirdProfile = mongoose.model('BirdProfile', birdProfileSchema);

module.exports = BirdProfile;