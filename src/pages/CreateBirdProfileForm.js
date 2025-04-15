import React, { useState } from 'react';
import '../styles/BirdProfileForm.css';

const CreateBirdProfileForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    species: '',
    gender: '',
    age: '',
    photo: null,
    color: '',
    size: '',
    weight: '',
    features: '',
    temperament: '',
    activityLevel: '',
    vocalization: '',
    favoriteSounds: '',
    favoriteFoods: '',
    feedingSchedule: '',
    healthConditions: '',
    vaccinationStatus: '',
    vetInfo: '',
    favoriteActivities: '',
    dailyRoutine: '',
    likesDislikes: '',
    trainingLevel: '',
    emergencyContact: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Bird Profile:', formData);
    // TODO: Add backend integration
  };

  return (
    <div className="bird-profile-form-container">
      <h2>Create Bird Profile</h2>
      <form className="bird-profile-form" onSubmit={handleSubmit}>
        
        <fieldset>
          <legend>📌 Basic Information</legend>
          <input type="text" name="name" placeholder="Bird Name" value={formData.name} onChange={handleChange} required />
          <input type="text" name="species" placeholder="Species" value={formData.species} onChange={handleChange} required />
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Unknown</option>
          </select>
          <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />
          <input type="file" name="photo" accept="image/*" onChange={handleChange} />
        </fieldset>

        <fieldset>
          <legend>🎨 Physical Details</legend>
          <input type="text" name="color" placeholder="Color(s)" value={formData.color} onChange={handleChange} />
          <input type="text" name="size" placeholder="Size (height, wingspan)" value={formData.size} onChange={handleChange} />
          <input type="text" name="weight" placeholder="Weight" value={formData.weight} onChange={handleChange} />
          <input type="text" name="features" placeholder="Distinctive Features" value={formData.features} onChange={handleChange} />
        </fieldset>

        <fieldset>
          <legend>🧠 Personality & Behavior</legend>
          <input type="text" name="temperament" placeholder="Temperament" value={formData.temperament} onChange={handleChange} />
          <input type="text" name="activityLevel" placeholder="Activity Level" value={formData.activityLevel} onChange={handleChange} />
          <input type="text" name="vocalization" placeholder="Vocalization" value={formData.vocalization} onChange={handleChange} />
          <input type="text" name="favoriteSounds" placeholder="Favorite Sounds / Words" value={formData.favoriteSounds} onChange={handleChange} />
        </fieldset>

        <fieldset>
          <legend>🍽️ Diet & Health</legend>
          <input type="text" name="favoriteFoods" placeholder="Favorite Foods" value={formData.favoriteFoods} onChange={handleChange} />
          <input type="text" name="feedingSchedule" placeholder="Feeding Schedule" value={formData.feedingSchedule} onChange={handleChange} />
          <input type="text" name="healthConditions" placeholder="Health Conditions" value={formData.healthConditions} onChange={handleChange} />
          <input type="text" name="vaccinationStatus" placeholder="Vaccination Status" value={formData.vaccinationStatus} onChange={handleChange} />
          <input type="text" name="vetInfo" placeholder="Vet Name & Contact Info" value={formData.vetInfo} onChange={handleChange} />
        </fieldset>

        <fieldset>
          <legend>🎾 Preferences & Routines</legend>
          <input type="text" name="favoriteActivities" placeholder="Favorite Toys / Activities" value={formData.favoriteActivities} onChange={handleChange} />
          <input type="text" name="dailyRoutine" placeholder="Daily Routine" value={formData.dailyRoutine} onChange={handleChange} />
          <input type="text" name="likesDislikes" placeholder="Likes / Dislikes" value={formData.likesDislikes} onChange={handleChange} />
          <input type="text" name="trainingLevel" placeholder="Training Level" value={formData.trainingLevel} onChange={handleChange} />
        </fieldset>

        <fieldset>
          <legend>🔐 Emergency Info</legend>
          <input type="text" name="emergencyContact" placeholder="Emergency Contact" value={formData.emergencyContact} onChange={handleChange} />
        </fieldset>

        <button type="submit">Create Profile</button>
      </form>
    </div>
  );
};

export default CreateBirdProfileForm;
