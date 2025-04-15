import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignUp from "./pages/SignUp";
import SearchSitter from "./pages/SearchSitter";
import BecomeSitter from "./pages/BecomeSitter"; 
import AppRoutes from "./routes"; // Assuming you have other internal routes here

import "./styles/auth.css";
import "./styles/styles.css";

// ✅ Your actual Google OAuth Client ID
const clientId = "353141478698-d8o2l9qf3r7ni2vufdm0e377f5j0tvcs.apps.googleusercontent.com";

function App() {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/search-sitter" element={<SearchSitter />} />
          <Route path="/become-sitter" element={<BecomeSitter />} />
          {/* other app routes from your existing route setup */}
          <Route path="/*" element={<AppRoutes />} />
        </Routes>
        <Footer />
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;