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
import { Box } from '@mui/material';


const App = () => {
       return (
        <Box
        position="static" 
        sx={{
          backgroundImage: `url(${Background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',  
          minHeight: '100vh',
          width: '100vw',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Router >
          <MenuSuperior/>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/principal" element={<Principal />} />
                <Route path="/inicio" element={<Inicio />} />
                <Route path="/citasAgregar" element={<AgendarCitas />} />
                <Route path="/servicio" element={<Servicios />} />
            </Routes>
           
        
            <Footer />
        
        </Router>
        </Box>

    );
};

export default App;
