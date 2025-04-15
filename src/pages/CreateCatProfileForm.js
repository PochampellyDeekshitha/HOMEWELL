import React, { useState } from 'react';
import '../styles/CatProfileForm.css';

const CreateCatProfileForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    breed: '',
    age: '',
    gender: '',
    size: '',
    photo: null,
    vaccinations: {
      rabies: false,
      fvrcp: false,
      felv: false,
    },
    medicalConditions: '',
    vetInfo: '',
    foodType: '',
    feedingSchedule: '',
    treatPreferences: '',
    specialDiet: '',
    temperament: '',
    getsAlongWith: [],
    favoriteActivities: '',
    fearTriggers: '',
    litterCleaning: '',
    groomingNeeds: '',
    dailyRoutines: '',
    scratchingBehavior: '',
    emergencyContact: '',
    medications: '',
    stressBehavior: '',
    commands: '',
    hidingSpots: '',
    specialInstructions: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (name in formData.vaccinations) {
      setFormData((prevData) => ({
        ...prevData,
        vaccinations: {
          ...prevData.vaccinations,
          [name]: checked,
        },
      }));
    } else if (name === 'getsAlongWith') {
      const options = Array.from(e.target.selectedOptions, (option) => option.value);
      setFormData((prevData) => ({
        ...prevData,
        getsAlongWith: options,
      }));
    } else if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Cat Profile:', formData);
    // POST request logic here
  };

  return (
    <div className="cat-profile-form">
      <h2>Create Cat Profile</h2>
      <form onSubmit={handleSubmit}>
        {/* Basic Info */}
        <fieldset>
          <legend>📌 Basic Information</legend>
          <input name="name" placeholder="Cat Name" onChange={handleChange} required />
          <input name="breed" placeholder="Breed" onChange={handleChange} />
          <input name="age" type="number" placeholder="Age" onChange={handleChange} />
          <select name="gender" onChange={handleChange}>
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
          <select name="size" onChange={handleChange}>
            <option value="">Select Size</option>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
          <input type="file" name="photo" accept="image/*" onChange={handleChange} />
        </fieldset>

        {/* Health */}
        <fieldset>
          <legend>💉 Health Details</legend>
          <input type="text" name="vaccinationStatus" placeholder="Vaccination Status (e.g., Rabies, Parvo)" onChange={handleChange} />
          <input type="text" name="medicalConditions" placeholder="Medical Conditions" onChange={handleChange} />
          <input type="text" name="vetContact" placeholder="Vet Name & Contact Info" onChange={handleChange} />
        </fieldset>

        {/* Feeding */}
        <fieldset>
          <legend>🍽 Feeding Details</legend>
          <input name="foodType" placeholder="Food Brand / Type" onChange={handleChange} />
          <input name="feedingSchedule" placeholder="Feeding Schedule" onChange={handleChange} />
          <input name="treatPreferences" placeholder="Treat Preferences" onChange={handleChange} />
          <input name="specialDiet" placeholder="Special Dietary Needs" onChange={handleChange} />
        </fieldset>

        {/* Behavior */}
        <fieldset>
          <legend>🐾 Behavior & Personality</legend>
          <input name="temperament" placeholder="Temperament" onChange={handleChange} />
          <input type="text" name="getsAlongWith" placeholder="Gets Along With (Dogs, Cats, Kids)" onChange={handleChange} />
          <input name="favoriteActivities" placeholder="Favorite Activities" onChange={handleChange} />
          <input name="fearTriggers" placeholder="Fear Triggers" onChange={handleChange} />
        </fieldset>

        {/* Care */}
        <fieldset>
          <legend>🧼 Care Instructions</legend>
          <input name="litterCleaning" placeholder="Litter Box Cleaning Frequency" onChange={handleChange} />
          <input name="groomingNeeds" placeholder="Grooming Needs" onChange={handleChange} />
          <input name="dailyRoutines" placeholder="Any Daily Routines" onChange={handleChange} />
          <input name="scratchingBehavior" placeholder="Scratching Behavior / Furniture" onChange={handleChange} />
        </fieldset>

        {/* Emergency */}
        <fieldset>
          <legend>🔐 Emergency Info</legend>
          <input name="emergencyContact" placeholder="Emergency Contact" onChange={handleChange} />
          <input name="medications" placeholder="Medications (Name & Dosage)" onChange={handleChange} />
          <input name="stressBehavior" placeholder="Behavior When Stressed/Unwell" onChange={handleChange} />
        </fieldset>

        {/* Additional */}
        <fieldset>
          <legend>📝 Additional Notes</legend>
          <input name="commands" placeholder="Commands They Know" onChange={handleChange} />
          <input name="hidingSpots" placeholder="Safe Hiding Spots" onChange={handleChange} />
          <textarea name="specialInstructions" placeholder="Any Other Special Instructions" onChange={handleChange} />
        </fieldset>

        <button type="submit">Create Profile</button>
      </form>
    </div>
  );
};

export default CreateCatProfileForm;
