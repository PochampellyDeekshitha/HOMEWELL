import React from 'react';
import '../styles/OtherAnimalProfileForm.css';

const CreateOtherAnimalProfileForm = ({ animalType }) => {
  return (
    <div className="other-profile-container">
      <h2>Create {animalType} Profile</h2>

      <form className="other-form">
        <fieldset>
          <legend>📌 Basic Information</legend>

          <label htmlFor="name">Name:</label>
          <input id="name" type="text" placeholder={`Enter ${animalType} name`} required />

          <label htmlFor="age">Age:</label>
          <input id="age" type="text" placeholder="Age in years/months" required />

          <label htmlFor="gender">Gender:</label>
          <select id="gender" required>
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Unknown</option>
          </select>

          <label htmlFor="color">Color/Markings:</label>
          <input id="color" type="text" placeholder="Describe appearance" />

          <label htmlFor="weight">Weight:</label>
          <input id="weight" type="text" placeholder="Enter weight" />

          <label htmlFor="photo">Upload Photo:</label>
          <input id="photo" type="file" />
        </fieldset>

        <fieldset>
          <legend>📝 Additional Info</legend>

          <label htmlFor="instructions">Special Instructions:</label>
          <textarea id="instructions" placeholder={`Any special care tips for the ${animalType}`} />

          <label htmlFor="contact">Contact Info:</label>
          <input id="contact" type="text" placeholder="Phone Number"  />
        </fieldset>

        <button type="submit">Create Profile</button>
      </form>
    </div>
  );
};

export default CreateOtherAnimalProfileForm;
