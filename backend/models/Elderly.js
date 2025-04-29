// backend/models/Elderly.js
const mongoose = require('mongoose');

const elderlySchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true
    },
    gender: {
      type: String,
      required: true
    },
    photo: {
      type: String, // Store the image URL or path to the image
      required: false
    },
    medicalConditions: {
      type: String,
      required: false
    },
    allergies: {
      type: String,
      required: false
    },
    mobilityStatus: {
      type: String,
      required: false
    },
    medicationSchedule: {
      type: String,
      required: false
    },
    careType: {
      type: String,
      required: false
    },
    preferredSitterGender: {
      type: String,
      required: false
    },
    languagePreference: {
      type: String,
      required: false
    },
    specialInstructions: {
      type: String,
      required: false
    },
    contactInfo: {
      type: String,
      required: true
    },
    emergencyContact: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const Elderly = mongoose.model('Elderly', elderlySchema);

module.exports = Elderly;