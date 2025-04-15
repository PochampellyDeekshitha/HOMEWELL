import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/searchSitter.css";

const SearchSitter = () => {
    const [selectedSitters, setSelectedSitters] = useState([]);
    const [animalType, setAnimalType] = useState("");
    const [customAnimal, setCustomAnimal] = useState("");
    const navigate = useNavigate();

    const sitterOptions = [
        { id: "pets", label: "Pets" },
        { id: "aqua", label: "Aqua" },
        { id: "plants", label: "Plants" },
        { id: "elderly", label: "Elder People" },
    ];

    const handleSitterSelection = (id) => {
        setSelectedSitters((prev) =>
            prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
        );
    };

    const handleNext = () => {
        if (selectedSitters.length === 0) {
            alert("Please select at least one sitter type.");
            return;
        }

        if (selectedSitters.includes("pets")) {
            if (!animalType) {
                alert("Please select or specify an animal type.");
                return;
            }

            if (animalType === "Other" && !customAnimal.trim()) {
                alert("Please specify the animal type.");
                return;
            }

            const animalPath = animalType === "Other" ? customAnimal.toLowerCase().replace(/\s+/g, "-") : animalType.toLowerCase();
            navigate(`/create-profile/pets/${animalPath}`);
        } else {
            const sitter = selectedSitters[0]; // Navigate to the first selected type
            navigate(`/create-profile/${sitter}`);
        }
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
                                setCustomAnimal("");
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
