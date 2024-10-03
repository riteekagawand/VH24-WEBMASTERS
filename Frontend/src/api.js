const API_URL = 'http://localhost:5000/api/users'; // Update if your backend URL changes

// Get user profile by ID
export const getUserProfile = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch user profile');
  }
  return await response.json();
};

// Add XP to a user
export const addXP = async (id, xp) => {
  const response = await fetch(`${API_URL}/${id}/add-xp`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ xp }),
  });

  if (!response.ok) {
    throw new Error('Failed to add XP');
  }
  return await response.json();
};

// Get leaderboard
export const getLeaderboard = async () => {
  const response = await fetch(`${API_URL}/leaderboard`);
  if (!response.ok) {
    throw new Error('Failed to fetch leaderboard');
  }
  return await response.json();
};
