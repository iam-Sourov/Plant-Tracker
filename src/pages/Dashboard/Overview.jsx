import React from "react";

const Overview = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Dashboard Overview</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="card bg-base-200 p-4 shadow">🌿 Total Plants: 120</div>
                <div className="card bg-base-200 p-4 shadow">📍 Active Locations: 45</div>
                <div className="card bg-base-200 p-4 shadow">🕒 Last Update: Just Now</div>
            </div>
        </div>
    );
};

export default Overview;
