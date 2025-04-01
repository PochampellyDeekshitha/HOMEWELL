import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import "../styles/signup.css";

const SignUp = () => {
  // Function to handle Google Sign-Up
  const handleGoogleSignUp = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const response = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: {
            Authorization: `Bearer ${tokenResponse.access_token}`,
          },
        });
        const userInfo = await response.json();

        // Send the user info to your backend for sign-up
        const res = await fetch("/api/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            googleId: userInfo.sub, // Unique ID for the Google user
            name: userInfo.name,
            email: userInfo.email,
          }),
        });

        if (res.ok) {
          console.log("User signed up successfully!");
        } else {
          console.error("Failed to sign up the user");
        }
      } catch (err) {
        console.error("Google sign-up error:", err);
      }
    },
    onError: () => {
      console.log("Google Sign-Up Failed!");
    },
  });

  return (
    <div className="auth-page">
      {/* Helmet for setting favicon and title dynamically */}
      <Helmet>
        <title>HomeWell - SignUp</title>
        <link rel="icon" href="/signup-favicon.ico" />
      </Helmet>

      <div className="auth-container">
        <h2>Sign Up for HomeWell</h2>

        {/* Google Sign-Up Button */}
        <button className="social-btn google-btn" onClick={handleGoogleSignUp}>
          <img src="/images/google_logo.png" alt="Google Logo" />
          Continue with Google
        </button>

        <div className="separator">─ or ─</div>

        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />

        <button className="auth-btn">Sign Up</button>

        <p className="terms">
          By signing up, I agree to the HomeWell{" "}
          <Link to="#">Terms of Service</Link> and{" "}
          <Link to="#">Privacy Statement</Link>. I consent to receive marketing
          emails and messages from HomeWell and its affiliates, and confirm that
          I am 18 years of age or older.
        </p>

        <p className="no-account">
          Already have an account? <Link to="/signin">Sign In</Link>
        </p>

        <Link to="/" className="back-home">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
