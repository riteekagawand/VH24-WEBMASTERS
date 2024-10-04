import React from 'react';

const Leaderboard = () => {
  const users = [
    { id: 136, name: 'riteekagawand', score: 2180, rank: 136 },
    { id: 1, name: 'haider', score: 49884, rank: 1 },
    { id: 2, name: 'piyush_verma', score: 16820, rank: 2 },
    { id: 3, name: 'hanishpatil', score: 15585, rank: 3 },
  ];

  return (
    <div className='flex justify-center items-center'>
    <div className="border-2 border-black rounded-lg p-6 w-80">
      <div className="flex justify-center items-center mb-4">
        <h2 className="text-2xl font-bold">Leaderboard</h2>
      </div>
      <div>
        {users.map((user) => (
          <div key={user.id} className="flex items-center mb-4 pb-4 border-b border-dashed border-gray-300">
            <div className="text-xl font-bold mr-4">{user.rank}</div>
            <img
              src={`path/to/avatar/${user.id}.png`}
              alt={user.name}
              className="w-10 h-10 rounded-full"
            />
            <div className="ml-4">
              <div className="font-bold">{user.name}</div>
              <div className="flex items-center mt-1">
                <img src="/path/to/coin.png" alt="Coins" className="w-4 h-4 mr-2" />
                {user.score}
              </div>
            </div>
            <div className="ml-auto">
              {/* Display shield icon based on user rank */}
              {user.rank === 1 && <img src="/path/to/gold-shield.png" alt="Gold Shield" className="w-5 h-5" />}
              {user.rank === 2 && <img src="/path/to/silver-shield.png" alt="Silver Shield" className="w-5 h-5" />}
              {user.rank === 3 && <img src="/path/to/bronze-shield.png" alt="Bronze Shield" className="w-5 h-5" />}
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Leaderboard;
