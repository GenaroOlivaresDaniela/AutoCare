import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'; 
import Logo from './../assets/logo.JPG'

const MenuSuperior = () => {
  return (
    <AppBar position="static"
    sx={{ backgroundColor: 'white', color: 'black' }}>
      <Toolbar sx={{ flexGrow: 1, top:'auto' }} variant="h6" component="div" color="inherit" >
        <img src={Logo} alt="Logo Local" width="300" height="100" />
        <Typography sx={{ flexGrow: 1}}>
        </Typography>
        
        <Button color="inherit" component={Link} to="/">
          Inicio
        </Button>
        <Button color="inherit" component={Link} to="/servicio">
          Servicios
        </Button>
        <Button color="inherit" component={Link} to="/galeria">
          Galeria
        </Button>
       
      </Toolbar>
    </AppBar>
  );
};

export default MenuSuperior;
