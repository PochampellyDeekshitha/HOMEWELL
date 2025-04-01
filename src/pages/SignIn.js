import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "../styles/signin.css";

const SignIn = () => {
  useEffect(() => {
    // Initialize Google Sign-In
    const initializeGoogleSignIn = () => {
      if (window.google) {
        window.google.accounts.id.initialize({
          client_id: "377906248140-vh628eiuhj29b2lfsvpsc2vjqk9viise.apps.googleusercontent.com", // Replace with your actual client ID
          callback: handleCredentialResponse,
        });

        window.google.accounts.id.renderButton(
          document.getElementById("googleSignInButton"),
          {
            theme: "outline",
            size: "large",
          }
        );
      }
    };

    initializeGoogleSignIn();
  }, []);

  // Handle Google Sign-In response
  const handleCredentialResponse = (response) => {
    console.log("Google JWT Token:", response.credential);
    // TODO: Send the JWT token to your backend for verification and authentication
  };

  return (
    <div className="auth-page">
      {/* Helmet for setting favicon and title dynamically */}
      <Helmet>
        <title>HomeWell - SignIn</title>
        <link rel="icon" href="/signin-favicon.ico" />
      </Helmet>

      <div className="auth-container">
        <h2>Sign In to HomeWell</h2>

        {/* Google Sign-In Button */}
        <div id="googleSignInButton" className="google-signin-btn"></div>

        

        <div className="separator">─ or ─</div>

        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button className="auth-btn">Sign In</button>

        <p className="terms">
          By signing up, I agree to the HomeWell{" "}
          <Link to="#">Terms of Service</Link> and{" "}
          <Link to="#">Privacy Statement</Link>. I consent to receive marketing
          emails and messages from HomeWell and its affiliates, and confirm that
          I am 18 years of age or older.
        </p>

        <Link to="#" className="forgot-password">Forgot password?</Link>

        <p className="no-account">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>

        <Link to="/" className="back-home">Back to Home</Link>
      </div>
    </div>
  );
};

export default SignIn;
