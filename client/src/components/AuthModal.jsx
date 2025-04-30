// frontend/src/components/AuthModal.jsx
import React, { useState } from 'react';
import { Modal, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AuthModal = ({ show, handleClose, isLogin, onAuth, onSwitchToLogin }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const clearFields = () => {
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    // Validate required fields and password length
    if (!email || !password) {
      setError("Please fill in all required fields.");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }
    
    if (isLogin) {
      // LOGIN MODE
      const registeredUserStr = localStorage.getItem('registeredUser');
      if (!registeredUserStr) {
        setError("No account found. Please sign up first.");
        return;
      }
      const registeredUser = JSON.parse(registeredUserStr);
      if (registeredUser.email !== email || registeredUser.password !== password) {
        setError("Invalid credentials. Please check your email and password, or sign up first.");
        return;
      }
      // Successful login:
      onAuth({ email });
      navigate('/dashboard');
      clearFields();
      handleClose();
    } else {
      // SIGN UP MODE
      if (!confirmPassword) {
        setError("Please confirm your password.");
        return;
      }
      if (password !== confirmPassword) {
        setError("Passwords do not match.");
        return;
      }
      // Save registration details
      const newUser = { email, password };
      localStorage.setItem('registeredUser', JSON.stringify(newUser));
      setSuccess("Successfully signed up. Please log in now.");
      clearFields();
      
      // After 2 seconds, automatically re-open the modal with the login form.
      setTimeout(() => {
        setSuccess('');
        onSwitchToLogin(); // Parent callback to switch mode and re-open modal.
      }, 2000);
    }
  };

  return (
    <Modal
      show={show}
      onHide={() => {
        setError('');
        clearFields();
        handleClose();
      }}
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
              type="email"
              className="form-control"
              placeholder="Enter your email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password (min 8 characters)"
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
                placeholder="Confirm your password"
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
