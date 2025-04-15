import React, { useState } from 'react';
import '../../styles/ElderProfileForm.css';

const CreateElderProfileForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    gender: '',
    photo: '',
    medicalConditions: '',
    allergies: '',
    mobilityStatus: '',
    medicationSchedule: '',
    careType: '',
    preferredSitterGender: '',
    languagePreference: '',
    specialInstructions: '',
    contactInfo: '',
    emergencyContact: ''
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    const newValue = type === 'file' ? files[0] : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Elder Profile:', formData);
    // Add API call or backend integration here
  };

  return (
    <div className="elder-profile-form-container">
      <h2>Create Elder Person Profile</h2>
      <form className="elder-profile-form" onSubmit={handleSubmit}>
        
        <fieldset>
          <legend>👤 Personal Information</legend>
          <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} />
          <input type="number" name="age" placeholder="Age" onChange={handleChange} />
          <select name="gender" onChange={handleChange}>
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
          <input type="file" name="photo" accept="image/*" onChange={handleChange} />
        </fieldset>

        <fieldset>
          <legend>🏥 Health Information</legend>
          <textarea name="medicalConditions" placeholder="Medical Conditions" onChange={handleChange} />
          <input type="text" name="allergies" placeholder="Allergies" onChange={handleChange} />
          <select name="mobilityStatus" onChange={handleChange}>
            <option value="">Mobility Status</option>
            <option>Fully Mobile</option>
            <option>Walker</option>
            <option>Wheelchair</option>
          </select>
          <textarea name="medicationSchedule" placeholder="Medication Schedule" onChange={handleChange} />
        </fieldset>

        <fieldset>
          <legend>🧑‍⚕️ Care Requirements</legend>
          <textarea name="careType" placeholder="Type of Care Required" onChange={handleChange} />
          <select name="preferredSitterGender" onChange={handleChange}>
            <option value="">Preferred Sitter Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>No Preference</option>
          </select>
          <input type="text" name="languagePreference" placeholder="Language Preference" onChange={handleChange} />
          <textarea name="specialInstructions" placeholder="Special Instructions" onChange={handleChange} />
        </fieldset>

        <fieldset>
          <legend>📞 Contact Details</legend>
          <input type="text" name="contactInfo" placeholder="Phone / Email" onChange={handleChange} />
          <input type="text" name="emergencyContact" placeholder="Emergency Contact" onChange={handleChange} />
        </fieldset>

        <button type="submit">Create Profile</button>
      </form>
    </div>
  );
};

export default CreateElderProfileForm;
