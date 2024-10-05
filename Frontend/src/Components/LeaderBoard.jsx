import React, { useState, useEffect } from 'react';

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  const fetchLeaderboardData = async () => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // Set timeout for 5 seconds

    try {
      const response = await fetch('http://localhost:5000/api/profile', { signal: controller.signal });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Fetched Leaderboard Data:', JSON.stringify(data, null, 2));

      // Sort the leaderboard data in descending order by sftokens
      const sortedData = data.sort((a, b) => b.profile.sftokens - a.profile.sftokens);
      setLeaderboardData(sortedData);

      const loggedInUser = sortedData.find(user => user.isCurrentUser);
      setCurrentUser(loggedInUser);
    } catch (err) {
      if (err.name === 'AbortError') {
        setError('Request timed out. Please try again later.');
      } else {
        setError('An error occurred while fetching data. Please try again.');
      }
    } finally {
      clearTimeout(timeoutId);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeaderboardData();
  }, []);

  // Split top 3 users and the rest
  const topUsers = leaderboardData.slice(0, 3);
  const otherUsers = leaderboardData.slice(3);

  if (loading) {
    return <div className="text-center">Loading leaderboard...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="bg-white w-full max-w-4xl mx-auto p-4 rounded-lg shadow-lg">
      {/* Header Section */}
      <div className="bg-red-500 text-white p-3 rounded-t-lg flex items-center justify-center">
        <h3 className="font-bold text-2xl">Leaderboard</h3>
        <span className="text-gray-300 ml-2">i</span>
      </div>

      {/* Top 3 Users Section */}
      <div className="flex flex-col items-center py-4 border-b border-gray-200">
        {/* 1st User - Centered and Slightly Higher */}
        <div className="flex flex-col items-center mb-4">
          <div className="w-30 h-30 rounded-full flex items-center justify-center">
            <span className="text-9xl">🥇</span>
          </div>
          <p className="font-bold mt-2">{topUsers[0]?.profile.name}</p>
          <p className="text-yellow-500">
            {topUsers[0]?.profile.sftokens} 🪙
          </p>
        </div>

        {/* 2nd and 3rd Users */}
        <div className="flex justify-between w-full">
          {/* 2nd User */}
          <div className="flex flex-col items-center">
            <div className="w-30 h-30 rounded-full flex items-center justify-center">
              <span className="text-9xl">🥈</span>
            </div>
            <p className="font-bold mt-2">{topUsers[1]?.profile.name}</p>
            <p className="text-yellow-500">
              {topUsers[1]?.profile.sftokens} 🪙
            </p>
          </div>

          {/* 3rd User */}
          <div className="flex flex-col items-center">
            <div className="w-30 h-30 rounded-full flex items-center justify-center">
              <span className="text-9xl">🥉</span>
            </div>
            <p className="font-bold mt-2">{topUsers[2]?.profile.name}</p>
            <p className="text-yellow-500">
              {topUsers[2]?.profile.sftokens} 🪙
            </p>
          </div>
        </div>
      </div>

      {/* Leaderboard Items (Users beyond top 3) */}
      <div className="py-4 max-h-64 overflow-y-auto">
        {otherUsers.map((user) => (
          <div key={user.email} className="flex items-center justify-between py-2 border-b border-gray-200">
            <div className="flex items-center justify-left w-full">
              <div className="w-8 h-8 rounded-full bg-blue-300"></div>
              <div className="ml-4 text-center">
                <p className="font-semibold text-xl">{user.profile.name}</p>
                <p className="text-yellow-500">
                  {user.profile.sftokens} 🪙
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Current User Section */}
      {currentUser && (
        <div className="flex items-center justify-between border-t border-gray-200 py-4">
          <div className="flex items-center justify-center w-full">
            <div className="w-12 h-12 rounded-full bg-gray-300"></div>
            <div className="ml-4 text-center">
              <p className="font-bold text-lg">{currentUser.profile.name}</p>
              <p className="text-yellow-500 flex items-center justify-center">
                <span>{currentUser.profile.sftokens}</span>
                <span className="ml-1">🪙</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Leaderboard;
