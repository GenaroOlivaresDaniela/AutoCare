import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Trabajadores from './Dashboard/Trabajadores'
import Clientes from './Dashboard/Clientes'
import Perfiles from './Dashboard/Perfiles'
import Servicios from './Dashboard/Servicios'
import Vehiculos from './Dashboard/Vehiculos'
import ServiciosTrabajadores from './Dashboard/ServiciosTrabajadores'
import Citas from './Dashboard/Citas'
import CitasSerUsu from './Dashboard/CitasSerUsu'
import Reportes from './Dashboard/Reportes'
import InicioPrincipal from './Dashboard/Inicio'
import { Box } from '@mui/material';


const AppDash = () => {
       return (
              
              <Box sx={{flex: 1,}}>
                   <Routes>
            <Route path="/"  element={<InicioPrincipal />} />
            <Route path="/trabajadores" element={<Trabajadores />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/perfiles" element={<Perfiles />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/vehiculos" element={<Vehiculos />} />
            <Route path="/servicios_trabajadores" element={<ServiciosTrabajadores />} />
            <Route path="/citas" element={<Citas />} />
            <Route path="/citas_serv_usu" element={<CitasSerUsu />} />
            <Route path="/reportes" element={<Reportes />} />
            </Routes>
            </Box>
     
    );
};

export default AppDash;
