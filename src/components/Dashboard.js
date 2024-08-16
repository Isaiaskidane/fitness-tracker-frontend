

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ActivityForm from './ActivityForm';
import ActivityList from './ActivityList';
import ActivityGraph from './ActivityGraph'; 
import './Dashboard.css';

const Dashboard = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('No token found');
        }
        const res = await axios.get('http://localhost:4000/api/activities', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setActivities(res.data);
      } catch (err) {
        console.error('Error fetching activities:', err);
      }
    };
    fetchActivities();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <ActivityForm />
      <ActivityGraph activities={activities} /> {/* Add the graph */}
      <ActivityList activities={activities} />
    </div>
  );
};

export default Dashboard;

