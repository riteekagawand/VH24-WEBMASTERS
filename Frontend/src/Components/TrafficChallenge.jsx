// src/components/TrafficChallenge.jsx
import React, { useState, useEffect, useCallback } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  TrafficLayer,
} from "@react-google-maps/api";
import FlashCardQuiz from "./FlashCardQuiz";

const mapContainerStyle = {
  width: "100%",
  height: "100vh",
};

const center = {
  lat: 20.5937, // Coordinates for India
  lng: 78.9629,
};

const TrafficChallenge = () => {
  const [playerPosition, setPlayerPosition] = useState(center);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60); // 60 seconds game time
  const [gameOver, setGameOver] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "IzaSyDbIIQrIGG0uOadSaM3kVgp1AJY4zl-SqY", // Replace with your Google Maps API key
  });

  const movePlayer = useCallback((event) => {
    const { latLng } = event;
    setPlayerPosition({
      lat: latLng.lat(),
      lng: latLng.lng(),
    });
    setScore((prevScore) => prevScore + 1); // Increment score on each move
  }, []);

  useEffect(() => {
    if (timeLeft > 0 && !gameOver) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setGameOver(true);
    }
  }, [timeLeft, gameOver]);

  const handleQuizToggle = () => {
    setShowQuiz((prev) => !prev);
  };

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 z-10 bg-white p-2">
        <h2 className="text-xl font-bold mb-2">Traffic Challenge</h2>
        <p>Score: {score}</p>
        <p>Time Left: {timeLeft}s</p>
        <button
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleQuizToggle}
        >
          {showQuiz ? "Close Quiz" : "Open Traffic Symbol Quiz"}
        </button>
      </div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={playerPosition}
        onClick={!gameOver ? movePlayer : undefined}
      >
        <TrafficLayer />
        <Marker
          position={playerPosition}
          icon={{
            url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
            scaledSize: new window.google.maps.Size(40, 40),
          }}
        />
      </GoogleMap>
      {gameOver && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded">
            <h2 className="text-2xl font-bold">Game Over!</h2>
            <p>Final Score: {score}</p>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => window.location.reload()}
            >
              Play Again
            </button>
          </div>
        </div>
      )}
      {showQuiz && <FlashCardQuiz />}
    </div>
  );
};

export default TrafficChallenge;
