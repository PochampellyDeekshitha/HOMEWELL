const mongoose = require('mongoose');

const sitterSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  age: { type: Number, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  bio: { type: String, required: true },
  experience: { type: String, required: true },
  certifications: { type: String, required: false },
  availability: { type: String, required: true },
  location: { type: String, required: true },
  services: { type: [String], required: true },
  workLocation: { type: String, required: true },
  paymentMethods: { type: [String], required: true },
  profileVisibility: { type: String, required: true },
  maxDistance: { type: String, required: true },
  alternateContact: { type: String, required: true },
  houseCheck: { type: String, required: true },
  profilePicture: { type: String, required: false },
  aadhaarPhoto: { type: String, required: false },
  certificationPicture: { type: String, required: false },
});

const Sitter = mongoose.model('Sitter', sitterSchema);
module.exports = Sitter;