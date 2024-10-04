// services/alertService.js
const API_URL = '/api/alerts';

export const fetchAlerts = async (skills, location) => {
  try {
    const response = await fetch(`${API_URL}?skills=${skills}&location=${location}`);
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching alerts:', error);
    throw error; // Handle as necessary
  }
};

export const createAlert = async (alertData, token) => {
  try {
    const response = await fetch('http://localhost:5000/api/alerts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, // Include the token if your API is protected
      },
      body: JSON.stringify(alertData),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating alert:', error);
    throw error; // Handle as necessary
  }
};
