import React from "react";
import "../../styles/serviceDetails.css";

const PlantServices = () => {
    return (
        <div className="service-details-container">
            <h2>PlantCare Services</h2>
            <ul className="service-list">
                <li><strong>Plant Watering:</strong> Regular watering of plants based on their needs.</li>
                <li><strong>Plant Feeding:</strong> Fertilizing plants to encourage healthy growth.</li>
                <li><strong>Pruning & Trimming:</strong> Removing dead leaves and trimming plants for a neat appearance.</li>
                <li><strong>Repotting:</strong> Moving plants to larger pots for better growth.</li>
                <li><strong>Plant Health Monitoring:</strong> Checking for pests, diseases, and providing necessary treatments.</li>
                <li><strong>Seasonal Care:</strong> Adjusting plant care routines based on seasonal changes.</li>
            </ul>
        </div>
    );
};

export default PlantServices;
