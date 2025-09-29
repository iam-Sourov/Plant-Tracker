import React from "react";

const HealthScore = () => {
    const scores = [
        { id: 1, plant: "Mango Tree", score: 85 },
        { id: 2, plant: "Rose Plant", score: 72 },
        { id: 3, plant: "Wheat Crop", score: 90 },
    ];

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">📊 Plant Health Scores</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {scores.map((s) => (
                    <div key={s.id} className="card bg-base-200 p-4 shadow">
                        <h2 className="font-semibold">{s.plant}</h2>
                        <progress
                            className="progress progress-success w-full"
                            value={s.score}
                            max="100"
                        ></progress>
                        <p className="mt-2">Score: {s.score}%</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HealthScore;
