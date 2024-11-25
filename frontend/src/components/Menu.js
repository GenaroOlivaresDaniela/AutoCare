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
    sx={{boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.9)', backgroundColor: 'white', color: 'black', display: "flex",}}>
      <Toolbar sx={{ flexGrow: 1, top:'auto' }} variant="h6" component="div" color="inherit" >
        <img src={Logo} alt="Logo Local" width="250" height="100" />
        <Typography sx={{ flexGrow: 1}}>
        </Typography>
        
      
        <Button color="inherit" component={Link} to="/">
          Inicio
        </Button>
        <Button color="inherit" component={Link} to="/servicio">
          Servicios
        </Button>
        <Button color="inherit" component={Link} to="/login">
          Iniciar Sesion
        </Button>
        <Button color="inherit" component={Link} to="/register">
          Registrarse
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default MenuSuperior;
