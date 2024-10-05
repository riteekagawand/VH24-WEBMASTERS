import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchLeaderboardData = async () => {
      try {
        const response = await axios.get('/api/leaderboard'); // Make sure the URL is correct
        const data = response.data;
        console.log('Fetched Leaderboard Data:', JSON.stringify(data, null, 2));
        setLeaderboardData(data); // Use data directly without ranking
        // setCurrentUser(data.findAll()); // Replace with the actual logged-in user name
      } catch (err) {
        setError('Failed to fetch leaderboard data');
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboardData();
  }, []);

  if (loading) {
    return <div className="text-center">Loading leaderboard...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="bg-white w-full max-w-2xl mx-auto p-4 rounded-lg shadow-lg">
      {/* Header Section */}
      <div className="bg-red-500 text-white p-3 rounded-t-lg flex items-center justify-center">
        <h3 className="font-bold text-2xl">Leaderboard</h3>
        <span className="text-gray-300 ml-2">i</span>
      </div>

      {/* Current User Section */}
      {currentUser && (
        <div className="flex items-center justify-between border-b border-gray-200 py-4">
          <div className="flex items-center justify-center w-full">
            <div className="w-12 h-12 rounded-full bg-gray-300"></div>
            <div className="ml-4 text-center">
              <p className="font-bold text-lg">{currentUser.name}</p> {/* Increased font size */}
              <p className="text-yellow-500 text-sm flex items-center justify-center">
                <span>{currentUser.coins.toLocaleString()}</span>
                <span className="ml-1">🪙</span>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Leaderboard Items */}
      <div className="py-4 max-h-64 overflow-y-auto">
        {leaderboardData.map((user) => (
          <div
            key={user.name} // Use user's name or a unique identifier
            className="flex items-center justify-between py-2 border-b border-gray-200">
          
            <div className="flex items-center justify-center w-full">
              <div className="w-8 h-8 rounded-full bg-blue-300"></div>
              <div className="ml-4 text-center">
                <p className="font-semibold text-xl">{user.name}</p> {/* Increased font size */}
                <p className="text-yellow-500 flex items-center justify-center">
                  <span>{user.coins.toLocaleString()}</span>
                  <span className="ml-1">🪙</span>
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              {user.badge === 'shield' && <span className="text-gray-500">🛡️</span>}
              {user.badge === 'shield-red' && <span className="text-red-500">🛡️</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
