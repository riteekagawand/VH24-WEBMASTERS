// src/components/TrafficMap.jsx
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Polyline } from 'react-leaflet';
import axios from 'axios';

const TrafficMap = () => {
    const [trafficData, setTrafficData] = useState([]);
    const [loading, setLoading] = useState(true);

    const apiKey = process.env.REACT_APP_TOMTOM_API_KEY; // Store your API key in .env file

    useEffect(() => {
        const fetchTrafficFlowData = async (minLat, minLon, maxLat, maxLon) => {
            const url = `https://api.tomtom.com/traffic/services/4/flowSegmentData/absolute/10/json?bbox=${minLon},${minLat},${maxLon},${maxLat}&key=${apiKey}`;

            try {
                const response = await axios.get(url);
                setTrafficData(response.data.flowSegmentData);
            } catch (error) {
                console.error('Error fetching traffic flow data:', error);
            } finally {
                setLoading(false);
            }
        };

        // Define your bounding box coordinates
        const boundingBox = {
            minLat: 40.7128,
            minLon: -74.0060,
            maxLat: 40.7831,
            maxLon: -73.9495,
        };

        fetchTrafficFlowData(boundingBox.minLat, boundingBox.minLon, boundingBox.maxLat, boundingBox.maxLon);
    }, [apiKey]);

    const getTrafficColor = (currentSpeed, freeFlowSpeed) => {
        const speedRatio = currentSpeed / freeFlowSpeed;
        if (speedRatio > 0.8) {
            return 'green';  // Low traffic
        } else if (speedRatio > 0.5) {
            return 'yellow';  // Moderate traffic
        } else {
            return 'red';  // High traffic
        }
    };

    return (
        <MapContainer center={[40.7362, -73.9856]} zoom={13} style={{ height: '100vh' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {!loading && trafficData.map((segment, index) => {
                const color = getTrafficColor(segment.currentSpeed, segment.freeFlowSpeed);
                return (
                    <Polyline
                        key={index}
                        positions={segment.coordinates.map(coord => [coord.latitude, coord.longitude])}
                        color={color}
                        weight={5}
                    />
                );
            })}
        </MapContainer>
    );
};

export default TrafficMap;
