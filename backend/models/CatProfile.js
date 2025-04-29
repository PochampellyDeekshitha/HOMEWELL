const mongoose = require('mongoose');

const catProfileSchema = new mongoose.Schema({
  name: String,
  breed: String,
  age: Number,
  gender: String,
  size: String,
  photo: String,
  vaccinations: {
    rabies: Boolean,
    fvrcp: Boolean,
    felv: Boolean
  },
  medicalConditions: String,
  vetInfo: String,
  foodType: String,
  feedingSchedule: String,
  treatPreferences: String,
  specialDiet: String,
  temperament: String,
  getsAlongWith: [String],
  favoriteActivities: String,
  fearTriggers: String,
  litterCleaning: String,
  groomingNeeds: String,
  dailyRoutines: String,
  scratchingBehavior: String,
  emergencyContact: String,
  medications: String,
  stressBehavior: String,
  commands: String,
  hidingSpots: String,
  specialInstructions: String
}, { timestamps: true });

module.exports = mongoose.model('CatProfile', catProfileSchema);