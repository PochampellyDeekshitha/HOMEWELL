import React, { useState } from 'react';
import '../../styles/PlantProfileForm.css';

const CreatePlantProfileForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    species: '',
    plantType: '',
    wateringFrequency: '',
    fertilizer: '',
    sunlight: '',
    humidity: '',
    pruning: '',
    notes: '',
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'photo') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    // Handle API submission logic here
  };

  return (
    <div className="plant-profile-container">
      <h2>Create Plant Profile</h2>
      <form onSubmit={handleSubmit}>
        {/* 🌱 Basic Info */}
        <fieldset>
          <legend>🌱 Basic Information</legend>
          <input type="text" name="name" placeholder="Plant Name" value={formData.name} onChange={handleChange} />
          <input type="text" name="species" placeholder="Species / Scientific Name (optional)" value={formData.species} onChange={handleChange} />
          <input type="text" name="plantType" placeholder="Plant Type (Indoor / Outdoor / etc.)" value={formData.plantType} onChange={handleChange} />
          <input type="file" name="photo" onChange={handleChange} />
        </fieldset>

        {/* 🗓️  Care Schedule */}
        <fieldset>
          <legend>🗓️  Care Schedule</legend>
          <input type="text" name="wateringFrequency" placeholder="Watering Frequency (e.g., every 3 days)" value={formData.wateringFrequency} onChange={handleChange} />
          <input type="text" name="sunlight" placeholder="Sunlight Requirement (e.g., indirect morning light)" value={formData.sunlight} onChange={handleChange} />
          <input type="text" name="humidity" placeholder="Humidity Requirement (e.g., 60–80%)" value={formData.humidity} onChange={handleChange} />
          <input type="text" name="fertilizer" placeholder="Fertilizer Type & Frequency" value={formData.fertilizer} onChange={handleChange} />
          <input type="text" name="pruning" placeholder="Pruning Needs & Schedule" value={formData.pruning} onChange={handleChange} />
        </fieldset>

        {/* 📝 Notes */}
        <fieldset>
          <legend>📝 Special Instructions</legend>
          <textarea name="notes" placeholder="Tips / Do's and Don'ts" value={formData.notes} onChange={handleChange} rows={4}></textarea>
        </fieldset>

        <button type="submit">Create Profile</button>
      </form>
    </div>
  );
};

export default CreatePlantProfileForm;
