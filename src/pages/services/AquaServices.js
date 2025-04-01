import React from "react";
import "../../styles/serviceDetails.css";  // Corrected path

const AquaServices = () => {
    return (
        <div className="service-details-container">
            <h2>AquaCare Services</h2>
            <ul className="service-list">
                <li><strong>Aquarium Setup:</strong> Setting up and designing aquariums based on the type of fish.</li>
                <li><strong>Fish Sitting:</strong> Providing care for fish when owners are away.</li>
                <li><strong>Water Testing & Maintenance:</strong> Regular testing and cleaning of aquarium water.</li>
                <li><strong>Feeding:</strong> Proper feeding schedules for fish and aquatic life.</li>
                <li><strong>Aquarium Cleaning:</strong> Routine cleaning of aquarium tanks and filters.</li>
                <li><strong>Fish Health Monitoring:</strong> Checking and monitoring fish health and addressing any issues.</li>
            </ul>
        </div>
    );
};

export default AquaServices;
