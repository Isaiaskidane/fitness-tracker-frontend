import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import './ActivityGraph.css';

const ActivityGraph = ({ activities }) => {
  const data = {
    labels: activities.map(activity => activity.name),
    datasets: [
      {
        label: 'Duration (minutes)',
        data: activities.map(activity => activity.duration),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false, // Allows the chart to resize within the container
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ width: '50%', height: '400px', margin: 'auto' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ActivityGraph;



