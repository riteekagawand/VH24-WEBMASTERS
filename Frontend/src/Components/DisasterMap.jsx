import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import styles for Leaflet

const DisasterMap = () => {
    const mockDisasterData = {
        disasters: [
            { name: 'Flood in Kerala', description: 'Severe flooding due to heavy rainfall.', location: [10.8505, 76.2711] }, // Kerala
            { name: 'Earthquake in Delhi', description: 'Magnitude 6.1 earthquake struck the region.', location: [28.6139, 77.2090] }, // Delhi
            { name: 'Cyclone in Andhra Pradesh', description: 'Tropical cyclone causing heavy winds and rain.', location: [15.9129, 79.7400] }, // Andhra Pradesh
            { name: 'Forest Fire in Uttarakhand', description: 'Fires spreading across the forests.', location: [30.0668, 79.0193] }, // Uttarakhand
            { name: 'Landslide in Himachal Pradesh', description: 'Landslides due to heavy rains blocking roads.', location: [31.1048, 77.1734] }, // Himachal Pradesh
            { name: 'Drought in Rajasthan', description: 'Severe drought affecting water supply.', location: [27.0238, 74.2176] }, // Rajasthan
            { name: 'Tsunami Warning in Tamil Nadu', description: 'Warning issued for potential tsunami.', location: [13.0678, 80.2785] }, // Tamil Nadu
            { name: 'Heatwave in Maharashtra', description: 'Extreme heat conditions persisting.', location: [19.7515, 75.7139] }, // Maharashtra
            { name: 'Earthquake in Gujarat', description: 'Aftershocks felt in various parts.', location: [22.2587, 71.1924] }, // Gujarat
            { name: 'Flood in Bihar', description: 'Flash floods in various districts.', location: [25.0968, 85.3131] }, // Bihar
        ],
    };

    return (
        <MapContainer center={[20.5937, 78.9629]} zoom={5} className='h-[500px] w-[1000px]'>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
            />
            {mockDisasterData.disasters.map((disaster, index) => (
                <Marker key={index} position={disaster.location}>
                    <Popup>
                        <div>
                            <h3>{disaster.name}</h3>
                            <p>{disaster.description}</p>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default DisasterMap;
