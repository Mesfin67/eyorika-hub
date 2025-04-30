// frontend/src/App.jsx
import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavbarComponent from './components/Navbar';
import LandingPage from './components/LandingPage';
import ProtectedRoute from './components/ProtectedRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from './components/Aboutus';
// Lazy-load protected components
const Dashboard = lazy(() => import('./components/Dashboard'));
const Donate = lazy(() => import('./components/Donate'));
const Gallery = lazy(() => import('./components/Gallery'));
const aboutUs = lazy(() => import('./components/Aboutus'));

const App = () => {
  // Initialize user state from localStorage (if available)
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // Update user state on a successful authentication (login or sign up)
  const handleAuth = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  // Logout handler
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <Router>
      <div className="app">
        <NavbarComponent user={user} onLogout={handleLogout} onAuth={handleAuth} />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<LandingPage onAuth={handleAuth} />} />
            <Route element={<ProtectedRoute user={user} />}>
              <Route path="/dashboard" element={<Dashboard user={user} />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/goals" element={<AboutUs />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
