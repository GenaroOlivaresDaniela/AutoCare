// src/components/ProtectedRoute.js
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(UserContext);

  // Si no hay un usuario, redirigir a la página de inicio de sesión
  if (!user) {
    return <Navigate to="/login" />;
  }

  // Si el usuario está autenticado, renderizar el componente
  return children;
};

export default ProtectedRoute;
