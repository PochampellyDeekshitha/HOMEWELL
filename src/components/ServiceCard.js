import React from "react";
import "../styles/servicecard.css";

const ServiceCard = ({ image, title, description }) => {
    return (
        <div className="service-card">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default ServiceCard;

