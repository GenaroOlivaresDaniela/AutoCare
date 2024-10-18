import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login'
import Principal from './pages/principal'
import AgendarCitas from './pages/AgendarCitas'
import MenuSuperior from './components/Menu'
import Footer from './components/Footer'
import Background from './assets/Fondoo.jpg'
import { Box } from '@mui/material';


const App = () => {
       return (
        <Box
        sx={{
          backgroundImage: `url(${Background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '98.5vw',
          height: '120vh',
        }}
      >
        <Router >
          <MenuSuperior/>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/principal" element={<Principal />} />
                <Route path="/citasAgregar" element={<AgendarCitas />} />
            </Routes>
           
        
            <Footer />
        
        </Router>
        </Box>

    );
};

export default App;
