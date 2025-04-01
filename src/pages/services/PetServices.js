import React from "react";
import "../../styles/serviceDetails.css";

const PetServices = () => {
    return (
        <div className="service-details-container">
            <h2>PetCare Services</h2>
            <ul className="service-list">
                <li><strong>Pet Sitting/Boarding:</strong> Overnight care for pets while owners are away.</li>
                <li><strong>Daytime Sitting:</strong> Daytime care during working hours.</li>
                <li><strong>Dog Walking:</strong> Regular dog walks to keep pets active and healthy.</li>
                <li><strong>Pet Grooming:</strong> Bathing, brushing, nail trimming, and coat maintenance.</li>
                <li><strong>Pet Training:</strong> Obedience training, behavior correction, and specialized training.</li>
                <li><strong>Pet Health Monitoring:</strong> Administering medications and arranging veterinary visits.</li>
                <li><strong>Pet Feeding:</strong> Providing the right food and treats based on dietary needs.</li>
                <li><strong>Playtime & Socialization:</strong> Interactive play sessions to keep pets engaged.</li>
            </ul>
        </div>
    );
};

export default PetServices;
