import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { motion } from "framer-motion";
import { LatLngExpression } from "leaflet"; 

const DEFAULT_POSITION: LatLngExpression = [28.6139, 77.209]; 

const UpdateMapCenter: React.FC<{ position: LatLngExpression }> = ({ position }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(position, map.getZoom());
  }, [position, map]);
  return null;
};

const MapComponent: React.FC = () => {
  const [userPosition, setUserPosition] = useState<LatLngExpression>(DEFAULT_POSITION); // ✅ Type updated

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
    <motion.div 
      className="flex justify-center items-center px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
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
    </motion.div>
  );
};

export default MapComponent;
