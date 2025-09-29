import React from "react";
import MapSection from "../../components/MapSection";

const BloomMap = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">🌸 Bloom Map</h1>
            <p className="mb-4">Track areas where plants are currently blooming.</p>
            <MapSection />
        </div>
    );
};

export default BloomMap;
