import React from "react";
import "../styles/help.css";

const Help = () => {
    return (
        <div className="help-container">
            <h2>Help & Support</h2>
            <p>
                At <strong>HomeWell</strong>, we are dedicated to providing excellent support to ensure 
                you have the best experience using our platform. If you need assistance, 
                check out our frequently asked questions or reach out to our support team.
            </p>

            <h3>Frequently Asked Questions (FAQs)</h3>
            <ul>
                <li><strong>How do I find a sitter?</strong> - Use the "Search a Sitter" option to find a trusted sitter near you.</li>
                <li><strong>How do I become a sitter?</strong> - Click "Become a Sitter" to register and start offering your services.</li>
                <li><strong>Is HomeWell safe?</strong> - Yes! We verify all sitters to ensure a safe and reliable experience.</li>
                <li><strong>How do I contact customer support?</strong> - Email us anytime at <strong>support@homewell.com</strong>.</li>
            </ul>

            <h3>Need More Help?</h3>
            <p>
                If you didn’t find what you were looking for, our support team is here to assist you. 
                Feel free to contact us via email or visit our <strong>Help Center</strong> for more resources.
            </p>

            <p><strong>📧 Email:</strong> <a href="mailto:support@homewell.com">support@homewell.com</a></p>
            <p><strong>📞 Phone:</strong> +1 (234) 567-890</p>
        </div>
    );
};

export default Help;
