import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login'
import Principal from './pages/principal'
import AgendarCitas from './pages/AgendarCitas'
import MenuSuperior from './components/Menu'
import Footer from './components/Footer'
import Background from './assets/Fondoo.jpg'
import Servicios from './pages/Servicios'
import Inicio from './pages/Inicio'
import Vehiculos from './pages/Vehiculos'
import { Box } from '@mui/material';


const App = () => {
       return (
       
        <Box
        position="static" 
        sx={{
          position:'relative',
          minHeight: '100vh',
          width: '100vw',
          display: 'flex',
          flexDirection: 'column',
          '&::before':{
            content:'""',
            position:'absolute',
            backgroundImage: `url(${Background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',  
            opacity: 0.5,
            zIndex: -1
          },
        }}
      >

        <Router >
        <Box sx={{ flex: 1 }}>
          <MenuSuperior/>
            <Routes>
              
                <Route path="/login" element={<Login />} />
                <Route path="/principal" element={<Principal />} />
                <Route path="/inicio" element={<Inicio />} />
                <Route path="/citasAgregar" element={<AgendarCitas />} />
                <Route path="/servicio" element={<Servicios />} />
                <Route path="/vehiculo" element={<Vehiculos />} />
            </Routes>
            </Box>
        
            <Footer />
        
        </Router>
        
        </Box>

    );
};

export default App;
