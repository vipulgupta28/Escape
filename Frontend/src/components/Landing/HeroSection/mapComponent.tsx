import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const DEFAULT_POSITION: [number, number] = [28.6139, 77.209]; // New Delhi

const UpdateMapCenter: React.FC<{ position: [number, number] }> = ({ position }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(position, map.getZoom());
  }, [position, map]);
  return null;
};

const MapComponent: React.FC = () => {
  const [userPosition, setUserPosition] = useState<[number, number]>(DEFAULT_POSITION);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserPosition([latitude, longitude]);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }
  }, []);

  return (
    <div className="flex justify-center items-center px-4">
      <MapContainer
        center={userPosition}
        zoom={13}
        className="w-full max-w-4xl h-[400px] md:h-[600px] rounded-[20px]"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <UpdateMapCenter position={userPosition} />
        <Marker position={userPosition}>
          <Popup>You are here</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
