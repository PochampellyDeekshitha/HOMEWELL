import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes"; // Centralized Routes
import "./styles/auth.css";
import './styles/styles.css';


function App() {
    return (
        <Router>
            <Navbar />
            <AppRoutes />
            <Footer />
        </Router>
    );
}

export default App;
