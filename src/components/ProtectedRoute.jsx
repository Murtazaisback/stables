// components/ProtectedRoute.jsx
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';

const ProtectedRoute = ({ children }) => {
  const { isSignedIn } = useUser();
  const location = useLocation();

  if (!isSignedIn) {
    // Redirect to sign-up page and pass the current location to redirect back after sign-up
    return <Navigate to="/sign-up" state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;
