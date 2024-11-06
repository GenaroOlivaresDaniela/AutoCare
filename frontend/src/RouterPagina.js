import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Login from './pages/login';
import Principal from './pages/principal';
import AgendarCitas from './pages/AgendarCitas';
import MenuSuperior from './components/MenuInicio';
import Footer from './components/Footer';
import Background from './assets/Fondoo.jpg';
import Servicios from './pages/Servicios';
import Inicio from './pages/Inicio';
import Vehiculos from './pages/Vehiculos';
import MisCitas from './pages/MisCitas';
import { Box } from '@mui/material';

const RouterPagina = () => {
  const location = useLocation();

  // Verifica si la ruta actual es una de las rutas del dashboard
  const isDashboard = location.pathname.startsWith("/dashboard");

  return (
    <Box
      position="static"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        // Solo agrega el fondo si no estás en el dashboard
        backgroundImage: isDashboard ? 'none' : `url(${Background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Box sx={{ flex: 1 }}>
        {/* Solo muestra el MenuSuperior si no estamos en el dashboard */}
        {!isDashboard && <MenuSuperior />}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Principal />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/citasAgregar" element={<AgendarCitas />} />
          <Route path="/servicio" element={<Servicios />} />
          <Route path="/vehiculo" element={<Vehiculos />} />
          <Route path="/mis_citas" element={<MisCitas />} />
        </Routes>
      </Box>

      {/* Solo muestra el Footer si no estamos en el dashboard */}
      {!isDashboard && <Footer />}
    </Box>
  );
};

export default RouterPagina;
