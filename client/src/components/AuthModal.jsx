import React, { useState } from 'react';
import { Modal, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AuthModal = ({ show, handleClose, isLogin, onAuth, onSwitchToLogin }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const clearFields = () => {
    setUsername('');
    setPassword('');
    setConfirmPassword('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Basic validations:
    if (!username || !password) {
      setError("Please fill in all required fields");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    if (isLogin) {
      // LOGIN MODE: Send credentials to the backend.
      try {
        const response = await fetch('https://eyorika-hub-backend-oifq.onrender.com/api/auth/login', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password })
        });
        const data = await response.json();
        if (!response.ok) {
          setError(data.message || "Invalid credentials. Please try again.");
          return;
        }
        // Successful login:
        onAuth({ username: data.username, token: data.token });
        localStorage.setItem('user', JSON.stringify({ username: data.username, token: data.token }));
        navigate('/dashboard');
        clearFields();
        handleClose();
      } catch (err) {
        setError("Login failed. Please try again.");
      }
    } else {
      // SIGN UP MODE: Check that confirmation matches.
      if (!confirmPassword) {
        setError("Please confirm your password.");
        return;
      }
      if (password !== confirmPassword) {
        setError("Passwords do not match.");
        return;
      }
      try {
        const response = await fetch('https://eyorika-hub-backend-oifq.onrender.com/api/auth/signup', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password })
        });
        const data = await response.json();
        if (!response.ok) {
          setError(data.message || "Sign up failed. Please try again.");
          return;
        }
        setSuccess("Successfully signed up. Please log in now.");
        clearFields();
        // After 2 seconds, switch to login mode.
        setTimeout(() => {
          setSuccess('');
          console.log("Calling onSwitchToLogin callback");
          onSwitchToLogin();
        }, 2000);
      } catch (err) {
        setError("Sign up failed. Please try again.");
      }
    }
  };

  return (
    <Modal 
      show={show} 
      onHide={() => { setError(''); clearFields(); handleClose(); }}
      centered 
      animation
    >
      <Modal.Header closeButton>
        <Modal.Title>{isLogin ? "Login" : "Sign Up"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error && <Alert variant="danger">{error}</Alert>}
        {success && <Alert variant="success">{success}</Alert>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter username"
              autoComplete="username"
              autofocus 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Enter password (min 8 characters)"
              autoComplete={isLogin ? "current-password" : "new-password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {!isLogin && (
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Confirm password"
                autoComplete="new-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          )}
          <Button variant="primary" type="submit" className="w-100">
            {isLogin ? "Login" : "Sign Up"}
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default AuthModal;
