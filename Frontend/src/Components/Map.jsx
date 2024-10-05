import React, { useState, useEffect, useCallback } from "react";
import {
  GoogleMap,
  useLoadScript,
  DirectionsRenderer,
} from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 19.076,
  lng: 72.8777,
};

const libraries = ["places"];

// For this component to work correctly, you need to activate the following Google Maps APIs:
// 1. Maps JavaScript API
// 2. Directions API
// 3. Places API (for autocomplete functionality, if implemented)

const Map = ({ origin, destination }) => {
  const [directions, setDirections] = useState(null);
  const [error, setError] = useState(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyALJyfkcLHgzStJm2B47ji25_a6mnt54qI",
    libraries,
  });

  const calculateRoute = useCallback(() => {
    if (!origin || !destination) {
      setError("Please provide both origin and destination.");
      return;
    }

    const directionsService = new window.google.maps.DirectionsService();
    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === "OK") {
          setDirections(result);
          setError(null);
        } else {
          console.error(`Error fetching directions: ${status}`);
          if (status === "NOT_FOUND") {
            setError(
              "Unable to find route. Please check if the entered locations are valid and try again."
            );
          } else if (status === "ZERO_RESULTS") {
            setError(
              "No route could be found between the origin and destination."
            );
          } else {
            setError(
              "An error occurred while calculating the route. Please try again."
            );
          }
        }
      }
    );
  }, [origin, destination]);

  useEffect(() => {
    calculateRoute();
  }, [origin, destination, calculateRoute]);

  if (loadError)
    return (
      <div className="text-red-600 text-lg text-center p-5">
        Error loading maps: {loadError.message}
      </div>
    );
  if (!isLoaded)
    return (
      <div className="text-blue-600 text-lg text-center p-5">
        Loading Maps...
      </div>
    );

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h2 className="text-2xl text-gray-800 mb-4 text-center">Route Planner</h2>
      {error && <div className="text-red-500 mb-4 text-center">{error}</div>}
      <div className="w-full h-96 rounded-lg overflow-hidden shadow-md">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={12}
          center={center}
          options={{
            zoomControl: true,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
        >
          {directions && <DirectionsRenderer directions={directions} />}
        </GoogleMap>
      </div>
      {directions && (
        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">Route Details:</p>
          <p>Initial Location: {origin}</p>
          <p>Final Location: {destination}</p>
        </div>
      )}
    </div>
  );
};

export default Map;
