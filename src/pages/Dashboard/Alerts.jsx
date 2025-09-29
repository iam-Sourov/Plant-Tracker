import React from "react";

const Alerts = () => {
    const alerts = [
        { id: 1, type: "Pest Infestation", severity: "High", location: "Chittagong" },
        { id: 2, type: "Water Stress", severity: "Medium", location: "Rangpur" },
        { id: 3, type: "Nutrient Deficiency", severity: "Low", location: "Dhaka" },
    ];

    const severityColor = {
        High: "badge-error",
        Medium: "badge-warning",
        Low: "badge-info",
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">🚨 Alerts</h1>
            <div className="overflow-x-auto">
                <table className="table w-full bg-base-200">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Alert Type</th>
                            <th>Severity</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {alerts.map((a) => (
                            <tr key={a.id}>
                                <td>{a.id}</td>
                                <td>{a.type}</td>
                                <td>
                                    <span className={`badge ${severityColor[a.severity]}`}>
                                        {a.severity}
                                    </span>
                                </td>
                                <td>{a.location}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Alerts;
