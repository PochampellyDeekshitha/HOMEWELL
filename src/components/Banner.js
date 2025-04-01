import React from "react";
import "../styles/banner.css";

const Banner = () => {
    return (
        <div className="banner">
            <img src="/images/banner.jpg" alt="Banner" />
            <div className="banner-text">
                <h1>Providing Compassionate Care While You're Away </h1>
                <p>"Caring beyond Boundaries like family !"</p>
            </div>
        </div>
    );
};

export default Banner;


