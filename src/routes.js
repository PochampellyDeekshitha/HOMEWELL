import React from "react";
import { Routes, Route } from "react-router-dom";

// General Pages
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Help from "./pages/Help";
import About from "./pages/About";
import BecomeSitter from "./pages/BecomeSitter";
import SearchSitter from "./pages/SearchSitter";

// Service Pages
import PetServices from "./pages/services/PetServices";
import AquaServices from "./pages/services/AquaServices";
import PlantServices from "./pages/services/PlantServices";
import ElderServices from "./pages/services/ElderServices";

// Profile Creation Pages
import CreateAquaProfileForm from "./components/ProfileForms/CreateAquaProfileForm";
import CreatePlantProfileForm from "./components/ProfileForms/CreatePlantProfileForm";
import CreateElderProfileForm from "./components/ProfileForms/CreateElderProfileForm";

// Pet Specific Profile Forms
import CreateDogProfileForm from "./pages/CreateDogProfileForm";
import CreateCatProfileForm from "./pages/CreateCatProfileForm";
import CreateBirdProfileForm from "./pages/CreateBirdProfileForm";
import CreateRabbitProfileForm from "./pages/CreateRabbitProfileForm";
import DynamicOtherAnimalProfile from './pages/DynamicOtherAnimalProfile';
// 🐦 You can also add CreateBirdProfileForm when ready
// import CreateBirdProfileForm from "./pages/CreateBirdProfileForm";

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

      {/* Profile Creation Routes */}
      <Route path="/create-profile/pets/:animalType" element={<DynamicOtherAnimalProfile />} />
      <Route path="/create-profile/elderly" element={<CreateElderProfileForm />} />
      <Route path="/create-profile/plants" element={<CreatePlantProfileForm />} />
      <Route path="/create-profile/aqua" element={<CreateAquaProfileForm />} />
      <Route path="/create-profile/pets/dog" element={<CreateDogProfileForm />} />
      <Route path="/create-profile/pets/cat" element={<CreateCatProfileForm />} />
      <Route path="/create-profile/pets/bird" element={<CreateBirdProfileForm />} />
      <Route path="/create-profile/pets/rabbit" element={<CreateRabbitProfileForm />} />
      {/* Add bird profile here later if needed */}
      {/* <Route path="/create-profile/pets/bird" element={<CreateBirdProfileForm />} /> */}
    </Routes>
  );
};

export default App;
