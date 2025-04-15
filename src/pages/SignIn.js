import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import "../styles/signin.css";

const SignIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // ✅ Password Validation
  const isPasswordValid = (pwd) => {
    const uppercaseRegex = /[A-Z]/;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    return (
      pwd.length >= 8 &&
      uppercaseRegex.test(pwd) &&
      specialCharRegex.test(pwd)
    );
  };

  // ✅ Traditional Email/Password Sign-In
  const handleTraditionalSignIn = async () => {
    setMessage("");

    if (!isPasswordValid(password)) {
      setMessage(
        "Password must be at least 8 characters, include one uppercase letter, and one special character."
      );
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ Sign-In Successful");
        navigate("/");
      } else {
        alert(data.message || "❌ Sign-In failed");
      }
    } catch (error) {
      console.error("❌ Error:", error.message);
      alert("Something went wrong during sign-in");
    }
  };

  // ✅ Google Sign-In
  const handleSuccess = async (credentialResponse) => {
    const token = credentialResponse.credential;

    try {
      const res = await fetch("http://localhost:5000/api/auth/google/token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });

      const contentType = res.headers.get("content-type");

      if (contentType && contentType.includes("application/json")) {
        const data = await res.json();

        if (res.ok) {
          alert("✅ Google Sign-In Successful");
          console.log("User Data:", data.user);
          navigate("/dashboard");
        } else {
          alert("❌ Google sign-in failed on backend");
          console.error("Backend error:", data);
        }
      } else {
        const errorText = await res.text();
        console.error("❌ Backend returned non-JSON response:", errorText);
        alert("Something went wrong. Check console for backend error.");
      }
    } catch (error) {
      console.error("❌ Error:", error.message);
      alert("Something went wrong during Google sign-in");
    }
  };

  return (
    <div className="auth-page">
      <Helmet>
        <title>HomeWell - Sign In</title>
        <link rel="icon" href="/signin-favicon.ico" />
      </Helmet>

      <div className="auth-container">
        <h2>Sign In to HomeWell</h2>

        {/* ✅ Google Sign-In Button */}
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={() => {
            console.log("Google Sign-In failed");
            alert("Google Signin Failed");
          }}
        />

        <div className="separator">─ or ─</div>

        {/* ✅ Traditional Email/Password Sign In */}
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="auth-btn" onClick={handleTraditionalSignIn}>
          Sign In
        </button>

        {message && <p className="signin-message">{message}</p>}

        <p className="terms">
          By signing in, I agree to the HomeWell{" "}
          <Link to="#">Terms of Service</Link> and{" "}
          <Link to="#">Privacy Statement</Link>.
        </p>

        <Link to="#" className="forgot-password">
          Forgot password?
        </Link>

        <p className="no-account">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>

        <Link to="/" className="back-home">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default SignIn;