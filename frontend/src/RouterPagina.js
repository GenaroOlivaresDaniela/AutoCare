import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import InicioSesion from './Auth/login';
import Register from './Auth/register';
import Principal from './pages/principal';
import AgendarCitas from './pages/AgendarCitas';
import MenuInicio from './components/MenuInicio';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Background from './assets/fondo.jpg'; 
import Servicios from './pages/Servicios';
import Inicio from './pages/Inicio';
import Vehiculos from './pages/Vehiculos';
import MisCitas from './pages/MisCitas';
import { Box } from '@mui/material';
import ProtectedRoute from './components/ProtectedRoute';

const RouterPagina = () => {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");

  const isAuthenticated = !!localStorage.getItem('token');


  return (
    <Box
      position="static"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        backgroundImage: isDashboard ? 'none' : `url(${Background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Box sx={{ flex: 1 }}>
      {!isDashboard && (isAuthenticated ? <MenuInicio /> : <Menu />)}
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<InicioSesion />} />
          <Route path="/" element={<Principal />} />

          <Route path="/servicio" element={<Servicios/>} />
          <Route path="/inicio" element={<ProtectedRoute><Inicio/></ProtectedRoute>} />
          <Route path="/citasAgregar" element={<ProtectedRoute><AgendarCitas/></ProtectedRoute>} />
          <Route path="/vehiculo" element={<ProtectedRoute><Vehiculos /></ProtectedRoute>} />
          <Route path="/mis_citas" element={<ProtectedRoute><MisCitas /></ProtectedRoute>} />
        </Routes>
      </Box>

      {!isDashboard && <Footer />}
    </Box>
  );
};

export default RouterPagina;
