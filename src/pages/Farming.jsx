import React, { useState } from "react";

const cropData = {
    Rice: {
        pests: [
            { name: "Brown Planthopper", solution: "Use resistant varieties, avoid over-fertilization." },
            { name: "Rice Stem Borer", solution: "Light traps, neem oil spray." },
        ],
        flowers: ["Marigold 🌼", "Sesame 🌿"],
    },
    Wheat: {
        pests: [
            { name: "Aphids", solution: "Neem oil, ladybird beetles as biocontrol." },
            { name: "Armyworm", solution: "Pheromone traps, timely harvesting." },
        ],
        flowers: ["Sunflower 🌻", "Mustard 🌱"],
    },
    Tomato: {
        pests: [
            { name: "Tomato Fruit Borer", solution: "Use pheromone traps, neem-based sprays." },
            { name: "Whitefly", solution: "Yellow sticky traps, companion planting." },
        ],
        flowers: ["Basil 🌿", "Calendula 🌼"],
    },
    Mango: {
        pests: [
            { name: "Mango Hopper", solution: "Pruning & insecticidal soap." },
            { name: "Fruit Fly", solution: "Bagging fruits, pheromone traps." },
        ],
        flowers: ["Lemongrass 🌱", "Marigold 🌼"],
    },
};

const Farming = () => {
    const [selectedCrop, setSelectedCrop] = useState("Rice");

    return (
        <div className="p-6 space-y-8">
            <h1 className="text-3xl font-bold">🌾 Farming Section</h1>
            <p className="opacity-70">
                Select your crop to see common pests, solutions, and companion flowers that improve yield.
            </p>

            {/* Crop Selector */}
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text font-semibold">Choose a Crop</span>
                </label>
                <select
                    className="select select-bordered"
                    value={selectedCrop}
                    onChange={(e) => setSelectedCrop(e.target.value)}
                >
                    {Object.keys(cropData).map((crop) => (
                        <option key={crop} value={crop}>
                            {crop}
                        </option>
                    ))}
                </select>
            </div>

            {/* Display Info */}
            <div className="card bg-base-200 shadow p-4">
                <h2 className="text-2xl font-semibold mb-4">{selectedCrop}</h2>

                {/* Harmful Pests */}
                <div className="mb-4">
                    <h3 className="text-xl font-bold mb-2">🐛 Harmful Pests & Solutions</h3>
                    <ul className="list-disc ml-6 space-y-2">
                        {cropData[selectedCrop].pests.map((p, i) => (
                            <li key={i}>
                                <span className="font-semibold">{p.name}:</span> {p.solution}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Suggested Flowers */}
                <div>
                    <h3 className="text-xl font-bold mb-2">🌸 Suggested Flowers</h3>
                    <div className="flex gap-2 flex-wrap">
                        {cropData[selectedCrop].flowers.map((f, i) => (
                            <span key={i} className="badge badge-lg badge-primary">
                                {f}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Farming;
