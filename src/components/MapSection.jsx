import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapSection = () => {
    const [fullscreen, setFullscreen] = useState(false);

    const containerClass = fullscreen
        ? "fixed inset-0 z-50"
        : "w-full h-64 lg:h-96";

    return (
        <div className="relative">
            <div
                className={`${containerClass} transition-all duration-500`}
                onClick={() => setFullscreen(!fullscreen)}
            >
                <MapContainer
                    center={[23.75, 90.38]}
                    zoom={6}
                    style={{ height: "100%", width: "100%" }}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[23.75, 90.38]}>
                        <Popup>🌿 Plant Location</Popup>
                    </Marker>
                </MapContainer>
            </div>
            {fullscreen && (
                <button
                    className="absolute top-4 right-4 btn btn-sm"
                    onClick={() => setFullscreen(false)}
                >
                    Close
                </button>
            )}
        </div>
    );
};

export default MapSection;
