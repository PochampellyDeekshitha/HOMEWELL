import React, { useState } from "react";

const CreateAquaProfileForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        description: "",
        careInstructions: "",
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
        console.log("Aqua Profile Created:", formData);
        alert("Aqua Profile Created Successfully!");
    };

    return (
        <form onSubmit={handleSubmit} className="profile-form">
            <h3>Create Aqua Profile</h3>
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
            <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />
            <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
            <textarea name="careInstructions" placeholder="Care Instructions" value={formData.careInstructions} onChange={handleChange} required />
            <input type="file" name="photo" accept="image/*" onChange={handleChange} required />
            <button type="submit">Create Profile</button>
        </form>
    );
};

export default CreateAquaProfileForm;
