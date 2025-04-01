import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/searchSitter.css"; // Ensure correct CSS file is linked

const SearchSitter = () => {
    const [selectedSitters, setSelectedSitters] = useState([]);
    const [animalType, setAnimalType] = useState(""); // Start as empty to force selection
    const [customAnimal, setCustomAnimal] = useState(""); // State to store custom animal
    const navigate = useNavigate();

    const sitterOptions = [
        { id: "pets", label: "Pets" },
        { id: "aqua", label: "Aqua" },
        { id: "plants", label: "Plants" },
        { id: "elderly", label: "Elder People" },
    ];

    const handleSitterSelection = (id) => {
        if (selectedSitters.includes(id)) {
            setSelectedSitters(selectedSitters.filter((sitter) => sitter !== id));
        } else {
            setSelectedSitters([...selectedSitters, id]);
        }
    };

    const handleNext = () => {
        if (selectedSitters.length === 0) {
            alert("Please select at least one sitter type.");
            return;
        }

        if (selectedSitters.includes("pets") && !animalType && customAnimal === "") {
            alert("Please select or specify an animal type.");
            return;
        }

        let profilePaths = selectedSitters.map((sitter) => {
            if (sitter === "pets") {
                // Use custom animal if "Other" is selected
                return `create-profile/pets/${animalType === "Other" ? customAnimal.toLowerCase() : animalType.toLowerCase()}`;
            }
            return `create-profile/${sitter.toLowerCase()}`;
        });

        navigate(`/${profilePaths[0]}`);
    };

    return (
        <div className="search-sitter-container">
            <h2>🔍 Find a Trusted Sitter</h2>
            <p>Select the types of sitters you need and create a profile.</p>

            <div className="sitter-options">
                {sitterOptions.map((option) => (
                    <button
                        key={option.id}
                        className={`sitter-option ${selectedSitters.includes(option.id) ? "selected" : ""}`}
                        onClick={() => handleSitterSelection(option.id)}
                    >
                        {option.label}
                    </button>
                ))}
            </div>

            {selectedSitters.includes("pets") && (
                <div className="animal-type-selection">
                    <label>Type of Animal:</label>
                    <select
                        value={animalType}
                        onChange={(e) => {
                            setAnimalType(e.target.value);
                            if (e.target.value !== "Other") {
                                setCustomAnimal(""); // Reset custom animal if not "Other"
                            }
                        }}
                    >
                        <option value="">Select an Animal</option>
                        <option value="Dog">Dog</option>
                        <option value="Cat">Cat</option>
                        <option value="Bird">Bird</option>
                        <option value="Rabbit">Rabbit</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
            )}

            {animalType === "Other" && (
                <div className="custom-animal-input">
                    <label>Specify Animal:</label>
                    <input
                        type="text"
                        value={customAnimal}
                        onChange={(e) => setCustomAnimal(e.target.value)}
                        placeholder="Enter animal type"
                    />
                    <div className="input-bar">
                        <div
                            className="bar"
                            style={{ width: `${(customAnimal.length / 20) * 100}%` }}
                        ></div>
                    </div>
                </div>
            )}

            <button className="next-btn" onClick={handleNext}>Next →</button>
        </div>
    );
};

export default SearchSitter;
