const mongoose = require('mongoose');

const aquariumSchema = new mongoose.Schema({
  aquariumName: { type: String, required: true },
  tankSize: { type: String, required: true },
  aquariumType: { type: String, required: true },
  species: { type: String, required: true },
  numberOfSpecies: { type: Number, required: true },
  feedingSchedule: { type: String, required: true },
  specialCare: { type: String },
  waterChangeSchedule: { type: String, required: true },
  cleaningInstructions: { type: String },
  emergencyInstructions: { type: String },
  additionalNotes: { type: String },
  photo: { type: String }, // File path to image
}, { timestamps: true });

module.exports = mongoose.model('Aquarium', aquariumSchema);