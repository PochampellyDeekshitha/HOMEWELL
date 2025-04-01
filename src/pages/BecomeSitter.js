import React, { useState } from "react";
import "../styles/auth.css";

const BecomeSitter = () => {
  const [formData, setFormData] = useState({
    
    fullName: "",
    age: "",
    phone: "",
    email: "",
    profilePicture: null,
    aadhaarPhoto: null,
    bio: "",
    experience: "",
    certifications: "",
    availability: "",
    location: "",
    services: [],
    workLocation: "Client's Home",
    paymentMethods: [],
    profileVisibility: "Private",
    maxDistance: "",
    alternateContact: "",
  });
  

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        services: checked
          ? [...formData.services, value]
          : formData.services.filter((service) => service !== value),
      });
    } else if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sitter Profile Data:", formData);
    // Handle form submission logic here (e.g., send data to an API)
  };

  return (
    <div className="sitter-container">
      <h2>Become a Sitter</h2>
      <p className="sitter-quote">
        “Caring for others is a noble act. Join us and make a difference.”
      </p>

      <form onSubmit={handleSubmit} className="sitter-form">
        <div className="form-group">
          <label>Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group-inline">
          <div className="form-group">
            <label>Age:</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Phone Number:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group-inline">
          <div className="form-group">
            <label>Profile Picture:</label>
            <input type="file" name="profilePicture" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Aadhaar Photo:</label>
            <input type="file" name="AadhaarPhoto" onChange={handleChange} />
          </div>
        </div>

        <div className="form-group">
          <label>Bio:</label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Experience:</label>
          <input
            type="text"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
            <label>Certifications:</label>
            <input type="file" name="CertificationPicture" onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Availability:</label>
          <input
            type="text"
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Services Offered:</label>
          <div className="checkbox-group">
            <div className="checkbox-item">
              <input
                type="checkbox"
                id="pet-sitting"
                name="services"
                value="Pet Care"
                onChange={handleChange}
              />
              <label htmlFor="pet-sitting">Pet Care</label>
            </div>
            <div className="checkbox-item">
              <input
                type="checkbox"
                id="plant-care"
                name="services"
                value="Plant Care"
                onChange={handleChange}
              />
              <label htmlFor="plant-care">Plant Care</label>
            </div>
            <div className="checkbox-item">
              <input
                type="checkbox"
                id="aqua-care"
                name="services"
                value="Aqua Care"
                onChange={handleChange}
              />
              <label htmlFor="aqua-care">Aqua Care</label>
            </div>
            <div className="checkbox-item">
              <input
                type="checkbox"
                id="elder-care"
                name="services"
                value="Elderly Care"
                onChange={handleChange}
              />
              <label htmlFor="elder-care">Elderly Care</label>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label>Preferred Work Location:</label>
          <select
            name="workLocation"
            value={formData.workLocation}
            onChange={handleChange}
          >
            <option value="Client's Home">Client's Home</option>
            <option value="Own Home">Own Home</option>
            <option value="Visit Hours">Visit Hours</option>
          </select>
        </div>


          <div className="form-group">
            <label>Are you okay with your house being checked?</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="houseCheck"
                  value="Yes"
                  onChange={handleChange}
                />{" "}
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="houseCheck"
                  value="No"
                  onChange={handleChange}
                />{" "}
                No
              </label>
            </div>
          </div>
        
        <div className="form-group">
          <label>Payment Methods:</label>
          <div className="checkbox-group">
            <div className="checkbox-item">
              <input
                type="checkbox"
                id="online-banking"
                name="paymentMethods"
                value="Online/Net Banking"
                onChange={handleChange}
              />
              <label htmlFor="online-banking">Online/Net Banking</label>
            </div>
            <div className="checkbox-item">
              <input
                type="checkbox"
                id="bank-transfer"
                name="paymentMethods"
                value="Bank to Bank Transfer"
                onChange={handleChange}
              />
              <label htmlFor="bank-transfer">Bank to Bank Transfer</label>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label>Profile Visibility:</label>
          <select
            name="profileVisibility"
            value={formData.profileVisibility}
            onChange={handleChange}
          >
            <option value="Private">Private</option>
          </select>
        </div>

        <div className="form-group">
          <label>Maximum Distance Willing to Travel:</label>
          <input
            type="text"
            name="maxDistance"
            value={formData.maxDistance}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Alternate Contact Number:</label>
          <input
            type="tel"
            name="alternateContact"
            value={formData.alternateContact}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-actions">
          <button type="submit">Save Profile</button>
        </div>
      </form>
    </div>
  );
};

export default BecomeSitter;