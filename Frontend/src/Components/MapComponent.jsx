import { useState, useEffect, useCallback } from "react";
import { GoogleMap, useLoadScript, DirectionsRenderer } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 19.076,
  lng: 72.8777,
};

const libraries = ["places"];

const MapComponent = ({ origin, destination }) => {
  const [directions, setDirections] = useState(null);
  const [error, setError] = useState(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY, // Correct way to access the API key
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
            setError("Unable to find route. Please check if the entered locations are valid and try again.");
          } else if (status === "ZERO_RESULTS") {
            setError("No route could be found between the origin and destination.");
          } else {
            setError("An error occurred while calculating the route. Please try again.");
          }
        }
      }
    );
  }, [origin, destination]);

  useEffect(() => {
    if (isLoaded) {
      calculateRoute();
    }
  }, [origin, destination, calculateRoute, isLoaded]);

  if (loadError) {
    return (
      <div className="text-red-600 text-lg text-center p-5">
        Error loading maps: {loadError.message}
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="text-blue-600 text-lg text-center p-5">
        Loading Maps...
      </div>
    );
  }

  return (
    <div className="w-[70vw] mx-auto p-5 ">
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
          {directions ? (
            <DirectionsRenderer directions={directions} />
          ) : (
            <div>Loading directions...</div>
          )}
        </GoogleMap>
      </div>
    </div>
  );
};

export default MapComponent;
