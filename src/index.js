import React from "react";
import ReactDOM from "react-dom/client"; // Correct import
import { GoogleOAuthProvider } from "@react-oauth/google";
import App from "./App";
import './styles/styles.css';
import './App.css'; // Adjust the path based on the folder structure


// Replace with your actual Google OAuth Client ID
const CLIENT_ID = "377906248140-vh628eiuhj29b2lfsvpsc2vjqk9viise.apps.googleusercontent.com";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);




