import React, { useState } from "react";

const PlantUpload = () => {
    const [image, setImage] = useState(null);

    const handleImage = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]));
    };

    return (
        <div className="p-4 card  mb-10 shadow-md">
            <h2 className="text-xl font-bold mb-3">Upload Plant Image</h2>
            <input type="file" className="file-input w-full mb-3" onChange={handleImage} />
            {image && (
                <div className="mt-3">
                    <img src={image} alt="plant" className="rounded-lg max-h-64" />
                    <p className="mt-2">📊 Data analysis coming soon...</p>
                </div>
            )}
        </div>
    );
};

export default PlantUpload;
