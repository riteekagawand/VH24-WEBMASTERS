import React, { useEffect, useState } from 'react';
import { getLeaderboard } from '../api';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const data = await getLeaderboard();
        setUsers(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchLeaderboard();
  }, []);

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name} - XP: {user.xp}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
