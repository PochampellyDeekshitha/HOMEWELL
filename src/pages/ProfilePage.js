import React from "react";
import { useParams } from "react-router-dom";
import CreatePetProfileForm from "../components/ProfileForms/CreatePetProfileForm";
import CreateAquaProfileForm from "../components/ProfileForms/CreateAquaProfileForm";
import CreatePlantProfileForm from "../components/ProfileForms/CreatePlantProfileForm";
import CreateElderProfileForm from "../components/ProfileForms/CreateElderProfileForm";
import "../styles/profilePage.css";

const ProfilePage = () => {
    const { profileType, animal } = useParams(); // Extract params from URL

    if (!profileType) {
        return <h2 className="error-message">Error: No profile type selected.</h2>;
    }

    const formattedProfileType = profileType.charAt(0).toUpperCase() + profileType.slice(1);

    return (
        <div className="profile-page">
            <h2>Create a {formattedProfileType} Profile</h2>

            {/* Render the correct profile form */}
            {profileType === "pets" && <CreatePetProfileForm animal={animal} />}
            {profileType === "aqua" && <CreateAquaProfileForm />}
            {profileType === "plants" && <CreatePlantProfileForm />}
            {profileType === "elderly" && <CreateElderProfileForm />} {/* Ensure this is included */}

            {/* Handle incorrect profile types */}
            {!["pets", "aqua", "plants", "elderly"].includes(profileType) && (
                <p className="error-message">Invalid profile type selected.</p>
            )}
        </div>
    );
};

export default ProfilePage;
