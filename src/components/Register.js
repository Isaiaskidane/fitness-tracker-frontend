import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Register.css'; // Import the CSS file for styling

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      username,
      email,
      password,
    };

    try {
      const res = await axios.post('http://localhost:4000/api/users/register', formData);
      console.log(res.data); // Check if the request is successful
      navigate('/login'); // Redirect to the login page after successful registration
    } catch (err) {
      if (err.response && err.response.data) {
        setError(err.response.data.message || 'Registration failed. Please try again.');
        console.error(err.response.data); // Log detailed error response
      } else {
        setError('Registration failed. Please try again.');
        console.error(err); // Log the error object
      }
    }
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Register</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={onSubmit} className="register-form">
        <div className="form-group">
          <label className="form-label">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <button type="submit" className="register-button">Register</button>
      </form>
    </div>
  );
};

export default Register;
