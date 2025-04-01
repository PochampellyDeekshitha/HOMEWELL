import React, { useState } from "react";

const CreateElderProfileForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        medicalConditions: "",
        hobbies: "",
        precautions: "",
        photo: null,
    });

    const handleChange = (e) => {
        if (e.target.name === "photo") {
            setFormData({ ...formData, photo: e.target.files[0] });
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Elder Profile Created:", formData);
        alert("Elder Profile Created Successfully!");
    };

    return (
        <form onSubmit={handleSubmit} className="profile-form">
            <h3>Create Elder Profile</h3>
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
            <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />
            <textarea name="medicalConditions" placeholder="Medical Conditions" value={formData.medicalConditions} onChange={handleChange} required />
            <input type="text" name="hobbies" placeholder="Hobbies" value={formData.hobbies} onChange={handleChange} required />
            <input type="text" name="precautions" placeholder="Precautions" value={formData.precautions} onChange={handleChange} required />
            <input type="file" name="photo" accept="image/*" onChange={handleChange} required />
            <button type="submit">Create Profile</button>
        </form>
    );
};

export default CreateElderProfileForm;
