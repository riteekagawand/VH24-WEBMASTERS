// src/components/NotificationSettings.jsx
import React, { useState } from 'react';

const NotificationSettings = () => {
  const [preferences, setPreferences] = useState({
    medical: false,
    logistics: false,
    rescue: false,
  });

  const handleChange = (event) => {
    const { name, checked } = event.target;
    setPreferences((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to save user preferences, e.g., sending to an API
    console.log('User preferences saved:', preferences);
  };

  return (
    <div>
      <h2>Customizable Notifications</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="checkbox"
            name="medical"
            checked={preferences.medical}
            onChange={handleChange}
          />
          Medical
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="logistics"
            checked={preferences.logistics}
            onChange={handleChange}
          />
          Logistics
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="rescue"
            checked={preferences.rescue}
            onChange={handleChange}
          />
          Rescue
        </label>
        <br />
        <button type="submit">Save Preferences</button>
      </form>
    </div>
  );
};

export default NotificationSettings;
