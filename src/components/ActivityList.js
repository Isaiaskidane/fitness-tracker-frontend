
import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './ActivityList.css';

const ActivityList = ({ activities }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div style={{ 
      textAlign: 'center', 
      backgroundColor: '#f0f0f0', 
      padding: '20px', 
      borderRadius: '10px', 
      maxWidth: '600px', 
      margin: '0 auto' 
    }}>
      <h3 style={{ color: '#333', marginBottom: '20px' }}>Activity List</h3>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {activities.map((activity, index) => (
          <li 
            key={index} 
            style={{ 
              backgroundColor: '#fff', 
              padding: '10px', 
              marginBottom: '10px', 
              borderRadius: '5px', 
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' 
            }}
          >
            {activity.name} - {activity.duration} minutes - {new Date(activity.date).toLocaleDateString()}
          </li>
        ))}
      </ul>
      <button
        onClick={handleLogout}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#f44336',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          fontSize: '16px',
          borderRadius: '5px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default ActivityList;
