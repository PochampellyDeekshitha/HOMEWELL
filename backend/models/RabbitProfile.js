const mongoose = require('mongoose');

const rabbitProfileSchema = new mongoose.Schema({
  name: String,
  age: String,
  gender: String,
  breed: String,
  colorMarkings: String,
  weight: String,
  photo: String,
  indoorOutdoor: String,
  cageSetup: String,
  litterTrained: String,
  bonded: String,
  bondedWith: String,
  favoriteFoods: String,
  feedingSchedule: String,
  treatsAllowed: String,
  treatTypes: String,
  foodRestrictions: String,
  vaccinationStatus: String,
  spayedNeutered: String,
  medicalConditions: String,
  vetInfo: String,
  groomingNeeds: String,
  temperament: String,
  likes: String,
  dislikes: String,
  specialInstructions: String,
  activeHours: String,
  favoriteSpots: String,
  playtimePrefs: String,
  contactInfo: String,
}, { timestamps: true });

module.exports = mongoose.model('RabbitProfile', rabbitProfileSchema);