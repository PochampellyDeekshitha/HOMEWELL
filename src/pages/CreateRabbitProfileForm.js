import React, { useState } from 'react';
import '../styles/RabbitProfileForm.css';

const CreateRabbitProfileForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    breed: '',
    colorMarkings: '',
    weight: '',
    photo: null,
    indoorOutdoor: '',
    cageSetup: '',
    litterTrained: '',
    bonded: '',
    bondedWith: '',
    favoriteFoods: '',
    feedingSchedule: '',
    treatsAllowed: '',
    treatTypes: '',
    foodRestrictions: '',
    vaccinationStatus: '',
    spayedNeutered: '',
    medicalConditions: '',
    vetInfo: '',
    groomingNeeds: '',
    temperament: '',
    likes: '',
    dislikes: '',
    specialInstructions: '',
    activeHours: '',
    favoriteSpots: '',
    playtimePrefs: '',
    contactInfo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    // You can send formData to backend here
  };

  return (
    <div className="rabbit-profile-form">
      <h2>Create Rabbit Profile</h2>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>📌 Basic Information</legend>
          <input name="name" placeholder="Name" onChange={handleChange} />
          <input name="age" placeholder="Age" onChange={handleChange} />
          <select name="gender" onChange={handleChange}>
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
          <input name="breed" placeholder="Breed" onChange={handleChange} />
          <input name="colorMarkings" placeholder="Color/Markings" onChange={handleChange} />
          <input name="weight" placeholder="Weight" onChange={handleChange} />
          <input type="file" name="photo" accept="image/*" onChange={handleChange} />
        </fieldset>

        <fieldset>
          <legend>🏡 Home Environment</legend>
          <input name="indoorOutdoor" placeholder="Indoor/Outdoor Bunny" onChange={handleChange} />
          <input name="cageSetup" placeholder="Cage/Free Roam Setup" onChange={handleChange} />
          <input name="litterTrained" placeholder="Litter Trained (Yes/No)" onChange={handleChange} />
          <input name="bonded" placeholder="Bonded with Another Rabbit (Yes/No)" onChange={handleChange} />
          <input name="bondedWith" placeholder="If Yes, Partner's Name" onChange={handleChange} />
        </fieldset>

        <fieldset>
          <legend>🍽️ Diet</legend>
          <input name="favoriteFoods" placeholder="Favorite Foods" onChange={handleChange} />
          <input name="feedingSchedule" placeholder="Feeding Schedule" onChange={handleChange} />
          <input name="treatsAllowed" placeholder="Treats Allowed? (Yes/No)" onChange={handleChange} />
          <input name="treatTypes" placeholder="Treat Types" onChange={handleChange} />
          <input name="foodRestrictions" placeholder="Food Restrictions" onChange={handleChange} />
        </fieldset>

        <fieldset>
          <legend>🩺 Health & Care</legend>
          <input name="vaccinationStatus" placeholder="Vaccination Status" onChange={handleChange} />
          <input name="spayedNeutered" placeholder="Spayed/Neutered" onChange={handleChange} />
          <input name="medicalConditions" placeholder="Medical Conditions" onChange={handleChange} />
          <input name="vetInfo" placeholder="Vet Name & Contact Info" onChange={handleChange} />
          <input name="groomingNeeds" placeholder="Daily Grooming Needs" onChange={handleChange} />
        </fieldset>

        <fieldset>
          <legend>🧠 Behavior & Personality</legend>
          <input name="temperament" placeholder="Temperament" onChange={handleChange} />
          <input name="likes" placeholder="Likes" onChange={handleChange} />
          <input name="dislikes" placeholder="Dislikes" onChange={handleChange} />
          <input name="specialInstructions" placeholder="Special Instructions" onChange={handleChange} />
        </fieldset>

        <fieldset>
          <legend>📅 Routine & Habits</legend>
          <input name="activeHours" placeholder="Active Hours" onChange={handleChange} />
          <input name="favoriteSpots" placeholder="Favorite Spots to Chill" onChange={handleChange} />
          <input name="playtimePrefs" placeholder="Playtime Preferences" onChange={handleChange} />
          <input name="contactInfo" placeholder="Contact Info" onChange={handleChange} />
        </fieldset>

        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
};

export default CreateRabbitProfileForm;
