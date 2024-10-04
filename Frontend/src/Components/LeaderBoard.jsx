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

        // Assign ranks if they are not included in the data
        const rankedData = data.map((user, index) => ({
          ...user,
          rank: index + 1, // Assuming rank starts from 1
        }));

        setLeaderboardData(rankedData);
        setCurrentUser(rankedData.find(user => user.name === 'aarchy_parekh')); // Replace with the actual logged-in user name
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
    <div className="bg-white w-full max-w-md mx-auto p-4 rounded-lg shadow-lg">
      {/* Header Section */}
      <div className="bg-gray-700 text-white p-3 rounded-t-lg flex items-center justify-between">
        <h3 className="font-bold text-lg">Leaderboard</h3>
        <span className="text-gray-300">i</span>
      </div>

      {/* Current User Section */}
      {currentUser && (
        <div className="flex items-center justify-between border-b border-gray-200 py-4">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-gray-300 flex-shrink-0"></div>
            <div className="ml-4">
              <p className="font-bold text-lg">{currentUser.name}</p>
              <p className="text-yellow-500 text-sm flex items-center">
                <span>{currentUser.coins.toLocaleString()}</span> {/* Change `coins` as per your response structure */}
                <span className="ml-1">🪙</span>
              </p>
            </div>
          </div>
          <span className="text-xl">{currentUser.rank}</span> {/* Assuming rank is also provided */}
        </div>
      )}

      {/* Leaderboard Items */}
      <div className="py-4">
        {leaderboardData.map((user) => (
          <div
            key={user.rank}
            className="flex items-center justify-between py-2 border-b border-gray-200"
          >
            <div className="flex items-center">
              <div className="text-lg font-bold mr-4">{user.rank}</div>
              <div className="w-8 h-8 rounded-full bg-blue-300"></div>
              <div className="ml-4">
                <p className="font-semibold">{user.name}</p>
                <p className="text-yellow-500 flex items-center">
                  <span>{user.coins.toLocaleString()}</span> {/* Assuming you have a coins field */}
                  <span className="ml-1">🪙</span>
                </p>
              </div>
            </div>
            <div className="flex items-center">
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
