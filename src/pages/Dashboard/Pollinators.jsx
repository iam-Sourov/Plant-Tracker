import React from "react";

const Pollinators = () => {
    const activity = [
        { id: 1, species: "Honey Bee", activity: "High", location: "Dhaka" },
        { id: 2, species: "Butterfly", activity: "Moderate", location: "Sylhet" },
        { id: 3, species: "Bumblebee", activity: "Low", location: "Rajshahi" },
    ];

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">🐝 Pollinator Activity</h1>
            <table className="table w-full bg-base-200">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Species</th>
                        <th>Activity</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {activity.map((a) => (
                        <tr key={a.id}>
                            <td>{a.id}</td>
                            <td>{a.species}</td>
                            <td>{a.activity}</td>
                            <td>{a.location}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Pollinators;
