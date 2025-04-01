import React from "react";
import "../styles/contactbar.css";

const ContactBar = () => {
    return (
        <div className="contact-bar">
            <div className="contact-bar-content">
                <h2>Contact Us</h2>
                <p>Email: <a href="mailto:support@homewell.com">support@homewell.com</a> | Phone: <a href="tel:+1234567890">+123 456 7890</a></p>
            </div>
        </div>
    );
};

export default ContactBar;


