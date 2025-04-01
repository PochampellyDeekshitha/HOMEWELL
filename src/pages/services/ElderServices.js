import React from "react";
import "../../styles/serviceDetails.css";

const ElderServices = () => {
    return (
        <div className="service-details-container">
            <h2>ElderCare Services</h2>
            <ul className="service-list">
                <li><strong>Personal Care:</strong> Assistance with daily activities such as bathing, dressing, and grooming.</li>
                <li><strong>Companionship:</strong> Spending time with elderly individuals, providing emotional support.</li>
                <li><strong>Meal Preparation:</strong> Cooking meals tailored to the individual’s dietary needs.</li>
                <li><strong>Medication Management:</strong> Helping with medication reminders and managing prescriptions.</li>
                <li><strong>Mobility Assistance:</strong> Helping with moving around, walking, and using mobility aids.</li>
                <li><strong>Light Housekeeping:</strong> Cleaning, laundry, and maintaining the living space for comfort and safety.</li>
                <li><strong>Transportation:</strong> Driving to appointments, shopping, and running errands.</li>
            </ul>
        </div>
    );
};

export default ElderServices;


