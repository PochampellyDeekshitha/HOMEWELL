const mongoose = require('mongoose');

const sitterSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    age: { type: Number, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    bio: { type: String, required: true },
    experience: { type: String, required: true },
    certifications: { type: String }, // Optional textual description of certifications
    availability: { type: String, required: true }, // e.g., 'Full-time', 'Part-time'
    location: { type: String, required: true },
    services: { type: [String], required: true }, // e.g., ['Dog', 'Plant', 'Aquarium']
    petTypes: { type: [String], default: [] }, // Dog / Cat / Rabbit / Bird / Other
    otherPetType: { type: String, default: "" }, // Custom pet type
    workLocation: { type: String, required: true }, // e.g., 'At My Place' / 'Client's Home'
    paymentMethods: { type: [String], required: true }, // e.g., ['Cash', 'UPI']
    profileVisibility: { type: String, required: true }, // e.g., 'Public' / 'Private'
    maxDistance: { type: String, required: true }, // e.g., '10km'
    alternateContact: { type: String, required: true },
    houseCheck: { type: String, required: true }, // e.g., 'Yes' / 'No'

    // File Uploads (optional)
    profilePicture: { type: String }, // Path to uploaded profile picture
    aadhaarPhoto: { type: String }, // Path to uploaded Aadhaar photo
    certificationPicture: { type: String }, // Path to uploaded certification image
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt
);

const Sitter = mongoose.model('Sitter', sitterSchema);
module.exports = Sitter;