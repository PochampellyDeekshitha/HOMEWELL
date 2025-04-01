import React from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../components/Banner";
import ServiceCard from "../components/ServiceCard";
import ContactBar from "../components/ContactBar";
import "../styles/home.css";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home">
            <Banner />
            <h2 className="section-title">Our Services</h2>
            <div className="service-container">
                <div onClick={() => navigate("/pet-care")} style={{ cursor: "pointer" }}>
                    <ServiceCard image="/images/petcare.jpg" title="Pet Care" description="Professional pet sitters for your furry friends." />
                </div>
                <div onClick={() => navigate("/aqua-care")} style={{ cursor: "pointer" }}>
                    <ServiceCard image="/images/aquacare.jpg" title="Aqua Care" description="Expert care for your aquatic pets and aquariums." />
                </div>
                <div onClick={() => navigate("/elderly-care")} style={{ cursor: "pointer" }}>
                    <ServiceCard image="/images/elderlycare.jpg" title="Elderly Care" description="Compassionate caregivers for your elders." />
                </div>
                <div onClick={() => navigate("/plant-care")} style={{ cursor: "pointer" }}>
                    <ServiceCard image="/images/plantcare.jpg" title="Plant Care" description="Keep your plants healthy with expert sitters." />
                </div>
            </div>
            <ContactBar />
        </div>
    );
};

export default Home;


