import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getUserProfile } from '../api';

const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const data = await getUserProfile(userId);
        setUser(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchUserProfile();
  }, [userId]);

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {user ? (
        <div>
          <h2>User Profile</h2>
          <p>Name: {user.name}</p>
          <p>XP: {user.xp}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

UserProfile.propTypes = {
  userId: PropTypes.string.isRequired, // Ensure userId is a required string
};

export default UserProfile;
