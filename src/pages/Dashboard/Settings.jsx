import React from "react";

const Settings = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Settings</h1>
            <div className="form-control w-full max-w-sm">
                <label className="label">Username</label>
                <input type="text" placeholder="Enter username" className="input input-bordered w-full" />
            </div>
            <div className="form-control w-full max-w-sm mt-3">
                <label className="label">Email</label>
                <input type="email" placeholder="Enter email" className="input input-bordered w-full" />
            </div>
            <button className="btn btn-primary mt-4">Save</button>
        </div>
    );
};

export default Settings;
