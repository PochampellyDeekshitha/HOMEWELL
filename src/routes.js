import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Help from "./pages/Help";
import About from "./pages/About";
import BecomeSitter from "./pages/BecomeSitter";
import SearchSitter from "./pages/SearchSitter";
import ProfilePage from "./pages/ProfilePage";
import PetServices from "./pages/services/PetServices"; // Pet Care Services Page
import AquaServices from "./pages/services/AquaServices"; // Aqua Care Services Page
import PlantServices from "./pages/services/PlantServices"; // Plant Care Services Page
import ElderServices from "./pages/services/ElderServices"; // Elder Care Services Page

const App = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/help" element={<Help />} />
      <Route path="/become-sitter" element={<BecomeSitter />} />
      <Route path="/search-sitter" element={<SearchSitter />} />

      {/* Service Routes */}
      <Route path="/pet-care" element={<PetServices />} />
      <Route path="/aqua-care" element={<AquaServices />} />
      <Route path="/plant-care" element={<PlantServices />} />
      <Route path="/elderly-care" element={<ElderServices />} />

      {/* Dynamic Profile Routes */}
      <Route path="/create-profile/:profileType/:animal?" element={<ProfilePage />} />
    </Routes>
  );
};

export default App;
