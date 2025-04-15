import React, { useState } from 'react';
import '../styles/DogProfileForm.css'; // Update path based on your folder structure

const CreateDogProfileForm = () => {
  const [formData, setFormData] = useState({
    dogName: '',
    breed: '',
    age: '',
    gender: '',
    size: '',
    photo: '',
    vaccinationStatus: '',
    medicalConditions: '',
    vetContact: '',
    foodType: '',
    feedingSchedule: '',
    treatPreferences: '',
    temperament: '',
    getsAlongWith: '',
    favoriteActivities: '',
    fearTriggers: '',
    walkingSchedule: '',
    bathingRoutine: '',
    groomingNeeds: '',
    pottySchedule: '',
    emergencyContact: '',
    medications: '',
    stressBehavior: '',
    knownCommands: ''
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    const newValue = type === 'file' ? files[0] : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Dog Profile:', formData);
    // Add API call or backend integration here
  };

  return (
    <div className="dog-profile-form-container">
      <h2> Create Dog  Profile</h2>
      <form className="dog-profile-form" onSubmit={handleSubmit}>
        
        <fieldset>
          <legend>📌 Basic Information</legend>
          <input type="text" name="dogName" placeholder="Dog Name" onChange={handleChange} />
          <input type="text" name="breed" placeholder="Breed" onChange={handleChange} />
          <input type="number" name="age" placeholder="Age" onChange={handleChange} />
          <select name="gender" onChange={handleChange}>
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
          <select name="size" onChange={handleChange}>
            <option value="">Size</option>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
          <input type="file" name="photo" accept="image/*" onChange={handleChange} />
        </fieldset>

        <fieldset>
          <legend>💉 Health Details</legend>
          <input type="text" name="vaccinationStatus" placeholder="Vaccination Status (e.g., Rabies, Parvo)" onChange={handleChange} />
          <input type="text" name="medicalConditions" placeholder="Medical Conditions" onChange={handleChange} />
          <input type="text" name="vetContact" placeholder="Vet Name & Contact Info" onChange={handleChange} />
        </fieldset>

        <fieldset>
          <legend>🍗 Feeding Details</legend>
          <input type="text" name="foodType" placeholder="Food Brand / Type" onChange={handleChange} />
          <input type="text" name="feedingSchedule" placeholder="Feeding Schedule" onChange={handleChange} />
          <input type="text" name="treatPreferences" placeholder="Treat Preferences" onChange={handleChange} />
        </fieldset>

        <fieldset>
          <legend>🐕‍🦺 Behavior & Personality</legend>
          <input type="text" name="temperament" placeholder="Temperament (e.g., Friendly, Shy)" onChange={handleChange} />
          <input type="text" name="getsAlongWith" placeholder="Gets Along With (Dogs, Cats, Kids)" onChange={handleChange} />
          <input type="text" name="favoriteActivities" placeholder="Favorite Activities" onChange={handleChange} />
          <input type="text" name="fearTriggers" placeholder="Fear Triggers (e.g., Loud Noises)" onChange={handleChange} />
        </fieldset>

        <fieldset>
          <legend>🛁 Care Instructions</legend>
          <input type="text" name="walkingSchedule" placeholder="Walking Schedule" onChange={handleChange} />
          <input type="text" name="bathingRoutine" placeholder="Bathing Routine" onChange={handleChange} />
          <input type="text" name="groomingNeeds" placeholder="Grooming Needs" onChange={handleChange} />
          <input type="text" name="pottySchedule" placeholder="Potty Schedule" onChange={handleChange} />
        </fieldset>

        <fieldset>
          <legend>🔐 Emergency Info</legend>
          <input type="text" name="emergencyContact" placeholder="Emergency Contact" onChange={handleChange} />
          <input type="text" name="medications" placeholder="Medications (Name & Dosage)" onChange={handleChange} />
          <input type="text" name="stressBehavior" placeholder="Behavior to Watch for When Stressed" onChange={handleChange} />
        </fieldset>

        <fieldset>
          <legend>📝 Additional Notes</legend>
          <input type="text" name="knownCommands" placeholder="Commands They Know (e.g., Sit, Stay)" onChange={handleChange} />
        </fieldset>

        <button type="submit">Create Profile</button>
      </form>
    </div>
  );
};

export default CreateDogProfileForm;
