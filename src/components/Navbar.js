import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left-section">
        {/* HomeWell now links to home and has no underline */}
        <Link to="/" className="logo">HomeWell</Link>
        <Link to="/become-sitter" className="sitter-link">Become a Sitter</Link>
        <Link to="/search-sitter" className="sitter-link">Search a Sitter</Link>
      </div>

      {/* Make tagline visible and properly styled */}
      <span className="tagline">Care Beyond Boundaries</span>

      <div className="nav-links">
        <Link to="/about">About</Link>
        <Link to="/signin">Sign In</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/help">Help</Link>
      </div>
    </nav>
  );
};

export default Navbar;

