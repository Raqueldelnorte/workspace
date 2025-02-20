// src/components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

function ProtectedRoute({ children, roles }) {
  const { auth } = useContext(AuthContext);
  const isAuthenticated = !!auth.user;

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  if (roles && !roles.includes(auth.user.type)) {
    return <Navigate to="/dashboard/profile" />;
  }

  return children;
}

export default ProtectedRoute;


