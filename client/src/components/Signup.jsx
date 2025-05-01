import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '../api/auth';

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const data = await signup(username, password);
      // After successful signup, redirect to login with a success message
      navigate("/login", { state: { successMessage: data.message } });
    } catch (err) {
      setError(err.error || "Signup failed. Please try again.");
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: "80vh" }}>
      <div className="transparent-form p-4" style={{ width: '300px' }}>
        <h3 className="text-center mb-3">Sign Up</h3>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="signupUsername" className="form-label">Username</label>
            <input
              type="text"
              className="form-control form-control-sm"
              id="signupUsername"
              autofocus 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="signupPassword" className="form-label">Password</label>
            <input
              type="password"
              className="form-control form-control-sm"
              id="signupPassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary btn-sm w-100">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
