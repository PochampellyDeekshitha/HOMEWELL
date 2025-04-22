const mongoose = require('mongoose');

const otherAnimalSchema = new mongoose.Schema({
  name: String,
  age: String,
  gender: String,
  color: String,
  weight: String,
  photo: String, // path to uploaded image
  instructions: String,
  contact: String,
  animalType: String,
});

module.exports = mongoose.model('OtherAnimal', otherAnimalSchema);