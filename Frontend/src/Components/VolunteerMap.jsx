import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import styles for Leaflet

const VolunteerMap = () => {
    const mockData = {
        volunteers: [
            { name: 'Aarav Sharma', skill: 'Medical', location: [37.7749, -122.4194] }, // San Francisco
            { name: 'Isha Patel', skill: 'Logistics', location: [34.0522, -118.2437] }, // Los Angeles
            { name: 'Rajiv Singh', skill: 'Rescue', location: [40.7128, -74.0060] },    // New York
            { name: 'Meera Desai', skill: 'Medical', location: [28.6139, 77.2090] }, // Delhi
            // Volunteers from India
            { name: 'Anjali Verma', skill: 'Food Distribution', location: [19.0760, 72.8777] }, // Mumbai
            { name: 'Siddharth Menon', skill: 'Logistics', location: [13.0827, 80.2707] }, // Chennai
            { name: 'Neha Roy', skill: 'Search & Rescue', location: [22.5726, 88.3639] }, // Kolkata
            { name: 'Rahul Iyer', skill: 'Medical Aid', location: [12.9716, 77.5946] }, // Bangalore
            { name: 'Vikas Patel', skill: 'Shelter Management', location: [23.0225, 72.5714] }, // Ahmedabad
            { name: 'Pooja Mishra', skill: 'Education & Awareness', location: [26.8467, 80.9462] }, // Lucknow
            { name: 'Amit Tripathi', skill: 'Sanitation', location: [25.3176, 82.9739] }, // Varanasi
            { name: 'Deepika Rao', skill: 'Food Distribution', location: [17.3850, 78.4867] }, // Hyderabad
            { name: 'Manoj Deshmukh', skill: 'Disaster Management', location: [21.1702, 72.8311] }, // Surat
            { name: 'Sonal Gupta', skill: 'Medical', location: [30.7333, 76.7794] }, // Chandigarh
            { name: 'Rohan Naik', skill: 'Animal Rescue', location: [15.2993, 74.1240] }, // Goa
        ],
    };

    return (
        <MapContainer center={[20.5937, 78.9629]} zoom={5} className='h-[500px] w-[1000px]'>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
            />
            {mockData.volunteers.map((volunteer, index) => (
                <Marker key={index} position={volunteer.location}>
                    <Popup>
                        <div>
                            <h3>{volunteer.name}</h3>
                            <p>Skill: {volunteer.skill}</p>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default VolunteerMap;
