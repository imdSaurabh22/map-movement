import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, Polyline } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
};

const center = {
  lat: 40.7128,
  lng: -74.0060,
};

const path = [
  { lat: 40.7128, lng: -74.0060 },
  { lat: 40.7138, lng: -74.0050 },
  { lat: 40.7148, lng: -74.0040 },
];

function App() {
  const [vehiclePosition, setVehiclePosition] = useState(center);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVehiclePosition(path[index]);
      setIndex((prevIndex) => (prevIndex + 1) % path.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <LoadScript googleMapsApiKey="AIzaSyCFHKAhNums74mufitfxwzOV1GeAFczqQg">
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={15}>
        <Marker position={vehiclePosition} />
        <Polyline path={path} />
      </GoogleMap>
    </LoadScript>
  );
}

export default App;