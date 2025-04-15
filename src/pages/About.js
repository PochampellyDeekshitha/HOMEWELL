import React from "react";
import "../styles/home.css";

const About = () => {
    return (
        <div className="about-container">
            <h2 className="about-title">About <span className="highlight">HomeWell</span></h2>
            <p className="about-intro">
                Welcome to <strong>HomeWell</strong>, your trusted platform for connecting with 
                experienced and reliable sitters. We provide top-notch home services tailored 
                to your needs, ensuring the well-being of your loved ones, pets, and plants.
            </p>

            {/* Mission Statement */}
            <div className="section mission">
                <h3>🌟 Our Mission</h3>
                <p>
                    At <strong>HomeWell</strong>, our mission is to provide trusted, compassionate, 
                    and professional home care services, ensuring peace of mind for families and individuals alike. 
                    We believe in creating a safer, more comfortable home environment for pets, plants, and loved ones.
                </p>
            </div>

            {/* Services Section */}
            <div className="section services">
                <h3>🛠️ Our Services</h3>
                <ul className="service-list">
                    <li><strong>🐾 Pet Sitting:</strong> Reliable care for dogs, cats, birds, and other pets.</li>
                    <li><strong>🐠 Aquatic Care:</strong> Expert maintenance for aquariums and aquatic life.</li>
                    <li><strong>🌿 Plant Care:</strong> Professional care for houseplants, gardens, and green spaces.</li>
                    <li><strong>👵 Elderly Care:</strong> Compassionate assistance for senior citizens at home.</li>
                </ul>
            </div>

            {/* Why Choose Us Section */}
            <div className="section why-choose">
                <h3>✅ Why Choose HomeWell?</h3>
                <ul className="why-choose-list">
                    <li><strong>✔️ Vetted Professionals:</strong> Every sitter undergoes background checks and training.</li>
                    <li><strong>✔️ Flexible Scheduling:</strong> Book services as per your convenience—hourly, daily, or long-term.</li>
                    <li><strong>✔️ Affordable Pricing:</strong> Quality home care at budget-friendly rates.</li>
                    <li><strong>✔️ Secure & Trusted:</strong> Your safety and privacy are our top priorities.</li>
                </ul>
            </div>

            {/* Testimonials Section */}
            <div className="testimonials-section">
                <h3>💬 What Our Users Say</h3>
                <div className="testimonial">
                    <p>"HomeWell helped me find a loving sitter for my elderly mother. Their service is outstanding!"</p>
                    
                </div>
                <div className="testimonial">
                    <p>"I travel frequently, and knowing my plants and pets are cared for gives me peace of mind. Highly recommend!"</p>
                    
                </div>
            </div>

            {/* Call to Action Section */}
            <div className="cta-section">
                <h3>🚀 Ready to Experience the Best Home Care?</h3>
                <p>Sign up today and find the perfect sitter for your needs!</p>
                <a href="/signup" className="cta-button">Get Started</a>
            </div>
        </div>
    );
};

export default About;
