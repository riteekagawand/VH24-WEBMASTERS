import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { addXP } from '../api';

const AddXP = ({ userId }) => {
  const [xp, setXP] = useState(0);
  const [message, setMessage] = useState('');

  const handleAddXP = async (e) => {
    e.preventDefault();
    try {
      const response = await addXP(userId, xp);
      setMessage(response.message);
      setXP(0); // Reset the input field
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <div>
      <h2>Add XP</h2>
      <form onSubmit={handleAddXP}>
        <input
          type="number"
          value={xp}
          onChange={(e) => setXP(Number(e.target.value))}
          placeholder="Enter XP to add"
          required
        />
        <button type="submit">Add XP</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

AddXP.propTypes = {
  userId: PropTypes.string.isRequired, // Ensure userId is a required string
};

export default AddXP;
