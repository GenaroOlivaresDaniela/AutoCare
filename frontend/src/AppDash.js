import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Trabajadores from './Dashboard/Trabajadores'
import InicioPrincipal from './Dashboard/Inicio'
import { Box } from '@mui/material';


const AppDash = () => {
       return (
              
              <Box sx={{flex: 1,}}>
                   <Routes>
            <Route path="/"  element={<InicioPrincipal />} />
            <Route path="/trabajadores" element={<Trabajadores />} />
            </Routes>
            </Box>
     
    );
};

export default AppDash;
