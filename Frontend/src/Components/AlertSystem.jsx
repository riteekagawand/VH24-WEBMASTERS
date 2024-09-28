// components/AlertsList.js
import React, { useEffect, useState } from 'react';
import { fetchAlerts } from '../services/alertService';

const AlertsList = () => {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const skills = 'JavaScript,React'; // Example skills
  const location = 'Remote'; // Example location

  useEffect(() => {
    const getAlerts = async () => {
      try {
        const data = await fetchAlerts(skills, location);
        setAlerts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getAlerts();
  }, [skills, location]);

  if (loading) return <div>Loading alerts...</div>;
  if (error) return <div>Error fetching alerts: {error}</div>;

  return (
    <div>
      <h2>Alerts</h2>
      <ul>
        {alerts.map(alert => (
          <li key={alert._id}>
            <h3>{alert.title}</h3>
            <p>{alert.description}</p>
            <p>Skills Required: {alert.skillsRequired.join(', ')}</p>
            <p>Location: {alert.location}</p>
            <p>Created At: {new Date(alert.createdAt).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlertsList;
