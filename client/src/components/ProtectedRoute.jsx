// frontend/src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ user }) => {
  // Redirect unauthenticated users to the landing page instead of /login
  return user ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
