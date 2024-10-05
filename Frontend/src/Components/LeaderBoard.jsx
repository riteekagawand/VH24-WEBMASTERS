import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const scrollRef = useRef(null);
  const redLineRef = useRef(null);

  useEffect(() => {
    const fetchLeaderboardData = async () => {
      try {
        const response = await axios.get('/api/leaderboard'); // Ensure the URL is correct
        const data = response.data;
        console.log('Fetched Leaderboard Data:', JSON.stringify(data, null, 2));
        setLeaderboardData(data);
        // Replace this with logic to get the actual logged-in user
        // For example, assuming you have an API or user context:
        // setCurrentUser(loggedInUser);
      } catch (err) {
        setError('Failed to fetch leaderboard data');
      } finally {
        setLoading(false);
      }
    };

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

  // Update red line position on scroll
  const handleScroll = () => {
    const scrollHeight = scrollRef.current.scrollHeight;
    const clientHeight = scrollRef.current.clientHeight;
    const scrollTop = scrollRef.current.scrollTop;
    const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
    if (redLineRef.current) {
      redLineRef.current.style.top = `${scrollPercent}%`;
    }
  };

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
          <p className="font-bold mt-2">{topUsers[0]?.name}</p>
          <p className="text-yellow-500">
            {topUsers[0]?.coins.toLocaleString()} 🪙
          </p>
        </div>

        {/* 2nd and 3rd Users */}
        <div className="flex justify-between w-full">
          {/* 2nd User */}
          <div className="flex flex-col items-center">
            <div className="w-30 h-30 rounded-full flex items-center justify-center">
              <span className="text-9xl">🥈</span>
            </div>
            <p className="font-bold mt-2">{topUsers[1]?.name}</p>
            <p className="text-yellow-500">
              {topUsers[1]?.coins.toLocaleString()} 🪙
            </p>
          </div>

          {/* 3rd User */}
          <div className="flex flex-col items-center">
            <div className="w-30 h-30 rounded-full flex items-center justify-center">
              <span className="text-9xl">🥉</span>
            </div>
            <p className="font-bold mt-2">{topUsers[2]?.name}</p>
            <p className="text-yellow-500">
              {topUsers[2]?.coins.toLocaleString()} 🪙
            </p>
          </div>
        </div>
      </div>

      
      <div className="relative max-h-64 overflow-hidden">
        <div
          ref={scrollRef}
          className="py-4 max-h-64 overflow-y-auto"
          onScroll={handleScroll}
        >
          {otherUsers.map((user) => (
            <div key={user.name} className="flex items-center justify-between py-2 border-b border-gray-200">
              <div className="flex items-center justify-left w-full">
                <div className="w-8 h-8 rounded-full bg-blue-300"></div>
                <div className="ml-4 text-center">
                  <p className="font-semibold text-xl">{user.name}</p>
                  <p className="text-yellow-500">
                    {user.coins.toLocaleString()} 🪙
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

        
        <div
          ref={redLineRef}
          className="absolute left-full w-2 h-full bg-red-500"
          style={{ transition: 'top 0.2s', top: '0%' }}
        />
      </div>

      {/* Current User Section */}
      {currentUser && (
        <div className="flex items-center justify-between border-t border-gray-200 py-4">
          <div className="flex items-center justify-center w-full">
            <div className="w-12 h-12 rounded-full bg-gray-300"></div>
            <div className="ml-4 text-center">
              <p className="font-bold text-lg">{currentUser.name}</p>
              <p className="text-yellow-500 flex items-center justify-center">
                <span>{currentUser.coins.toLocaleString()}</span>
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
