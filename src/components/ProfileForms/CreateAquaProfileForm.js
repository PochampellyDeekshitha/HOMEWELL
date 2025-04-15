import React, { useState } from "react";
import "../../styles/AquaProfileForm.css";

const CreateAquaProfileForm = () => {
  const [formData, setFormData] = useState({
    aquariumName: "",
    tankSize: "",
    aquariumType: "",
    species: "",
    numberOfSpecies: "",
    feedingSchedule: "",
    specialCare: "",
    waterChangeSchedule: "",
    cleaningInstructions: "",
    emergencyInstructions: "",
    additionalNotes: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: name === "photo" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Aquarium Profile Created:", formData);
    alert("Aquarium Profile Created Successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="aqua-form-container">
      <h2>Create Aquarium Profile</h2>

      <fieldset>
        <legend>🐠 <span>Basic Information</span></legend>

        <input
          type="text"
          name="aquariumName"
          placeholder="Aquarium Name "
          value={formData.aquariumName}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="tankSize"
          placeholder="Tank Size (in liters or gallons)"
          value={formData.tankSize}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="aquariumType"
          placeholder="Aquarium Type (e.g., Freshwater, Saltwater)"
          value={formData.aquariumType}
          onChange={handleChange}
          required
        />

        <input
          type="file"
          name="photo"
          accept="image/*"
          onChange={handleChange}
          required
        />
      </fieldset>

      <fieldset>
        <legend>🐟 <span>Inhabitants</span></legend>

        <input
          type="text"
          name="species"
          placeholder="Fish Species / Other Creatures"
          value={formData.species}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="numberOfSpecies"
          placeholder="Number of Each Species"
          value={formData.numberOfSpecies}
          onChange={handleChange}
          required
        />

        <textarea
          name="feedingSchedule"
          placeholder="Feeding Schedule for Each Type"
          value={formData.feedingSchedule}
          onChange={handleChange}
          required
        />

        <textarea
          name="specialCare"
          placeholder="Special Care Instructions (per species if needed)"
          value={formData.specialCare}
          onChange={handleChange}
        />
      </fieldset>

      <fieldset>
        <legend>💦 <span>Water & Tank Details</span></legend>

        <input
          type="text"
          name="waterChangeSchedule"
          placeholder="Water Change Schedule"
          value={formData.waterChangeSchedule}
          onChange={handleChange}
          required
        />

        <textarea
          name="cleaningInstructions"
          placeholder="Tank Cleaning Instructions"
          value={formData.cleaningInstructions}
          onChange={handleChange}
        />

        <textarea
          name="emergencyInstructions"
          placeholder="Emergency Instructions"
          value={formData.emergencyInstructions}
          onChange={handleChange}
        />

        <textarea
          name="additionalNotes"
          placeholder="Additional Notes"
          value={formData.additionalNotes}
          onChange={handleChange}
        />
      </fieldset>

      <button type="submit" className="submit-btn">Create Profile</button>
    </form>
  );
};

export default CreateAquaProfileForm;
