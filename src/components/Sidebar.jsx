import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    const linkClass = ({ isActive }) =>
        isActive ? "btn btn-sm btn-primary w-full" : "btn btn-sm btn-ghost w-full";

    return (
        <div className="w-64 h-screen bg-base-200 shadow-md p-4 flex flex-col gap-3">
            <NavLink to="/dashboard" className={linkClass}>Overview</NavLink>
            <NavLink to="/dashboard/plants" className={linkClass}>Plants</NavLink>
            <NavLink to="/dashboard/map" className={linkClass}>Map</NavLink>
            <NavLink to="/dashboard/bloom" className={linkClass}>Bloom Map</NavLink>
            <NavLink to="/dashboard/pollinators" className={linkClass}>Pollinator Activity</NavLink>
            <NavLink to="/dashboard/health" className={linkClass}>Health Score</NavLink>
            <NavLink to="/dashboard/alerts" className={linkClass}>Alerts</NavLink>
            <NavLink to="/dashboard/settings" className={linkClass}>Settings</NavLink>
        </div>
    );
};

export default Sidebar;
