import React from "react";

const Plants = () => {
    const plantData = [
        { id: 1, name: "Mango Tree", status: "Healthy", location: "Dhaka" },
        { id: 2, name: "Rose Plant", status: "Needs Water", location: "Chittagong" },
    ];

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Plants Data</h1>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Plant</th>
                        <th>Status</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {plantData.map((p) => (
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.name}</td>
                            <td>{p.status}</td>
                            <td>{p.location}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Plants;
