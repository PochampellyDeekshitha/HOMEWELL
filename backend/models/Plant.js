const mongoose = require('mongoose');

// Define the Plant schema
const plantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  species: { type: String },
  plantType: { type: String },
  wateringFrequency: { type: String },
  fertilizer: { type: String },
  sunlight: { type: String },
  humidity: { type: String },
  pruning: { type: String },
  notes: { type: String },
  photo: { type: String } // for uploaded image path
});

const Plant = mongoose.model('Plant', plantSchema);

module.exports = Plant;