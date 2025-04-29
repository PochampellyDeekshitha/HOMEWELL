const mongoose = require('mongoose');

const dogProfileSchema = new mongoose.Schema({
  dogName: String,
  breed: String,
  age: Number,
  gender: String,
  size: String,
  photo: String, // For now, this will be the filename or path
  vaccinationStatus: String,
  medicalConditions: String,
  vetContact: String,
  foodType: String,
  feedingSchedule: String,
  treatPreferences: String,
  temperament: String,
  getsAlongWith: String,
  favoriteActivities: String,
  fearTriggers: String,
  walkingSchedule: String,
  bathingRoutine: String,
  groomingNeeds: String,
  pottySchedule: String,
  emergencyContact: String,
  medications: String,
  stressBehavior: String,
  knownCommands: String
}, { timestamps: true });

module.exports = mongoose.model('DogProfile', dogProfileSchema);