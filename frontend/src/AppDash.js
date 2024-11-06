import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import Login from './pages/login'
// import Principal from './pages/principal'
// import AgendarCitas from './pages/AgendarCitas'
// import Background from './assets/Fondoo.jpg'
// import Servicios from './pages/Servicios'
import InicioUsusario from './Dashboard/Usuarios/inicio'
import InicioPrincipal from './Dashboard/Inicio'
// import Vehiculos from './pages/Vehiculos'
// import MisCitas from './pages/MisCitas'
// import { Box } from '@mui/material';


const AppDash = () => {
       return (
       

       
            <Routes>
              
            <Route path="/dashboard" exact element={<InicioPrincipal />} />
            <Route path="/dashboard/usuario/inicio" element={<InicioUsusario />} />
            </Routes>
     
       

    );
};

export default AppDash;
