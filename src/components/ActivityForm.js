
import React, { useState } from 'react';
import axios from 'axios';
import './ActivityForm.css'; // Import the CSS file for styling

const ActivityForm = () => {
  const [name, setName] = useState('');
  const [duration, setDuration] = useState('');
  const [date, setDate] = useState(''); // New state for date
  const [error, setError] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = { name, duration, date }; // Include date in formData

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No token found');
      }

      const res = await axios.post('http://localhost:4000/api/activities', formData, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      console.log('Activity added:', res.data);
      setName('');
      setDuration('');
      setDate(''); // Reset date field
    } catch (err) {
      setError(err.response ? err.response.data.msg : 'Server error');
      console.error('Error adding activity:', err.response ? err.response.data : err.message);
    }
  };

  return (
    <div className="activity-form">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Activity Name"
        />
        <input
          type="text"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          placeholder="Duration"
        />
        <input
          type="date" // Date input field
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit">Add Activity</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default ActivityForm;
//-------------------