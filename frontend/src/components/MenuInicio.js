import React, { useState, useContext  } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import Logo from './../assets/logo.JPG';
import { useNavigate } from 'react-router-dom'; 
import { UserContext } from '../context/UserContext';

const MenuInicio = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const {logoutUser, user } = useContext(UserContext);
  const navigate = useNavigate(); 

  const handleLogout = () => {
    logoutUser();
    navigate('/');
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black' }}>
      <Toolbar sx={{ flexGrow: 1, top: 'auto' }} variant="h6" component="div" color="inherit">
        <img src={Logo} alt="Logo Local" width="300" height="100" />
        <Typography sx={{ flexGrow: 1 }}></Typography>

        <Button color="inherit" component={Link} to="/inicio">
          Inicio
        </Button>
        <Button color="inherit" component={Link} to="/servicio">
          Servicios
        </Button>
        {/* <Button color="inherit" component={Link} to="/galeria">
          Galeria
        </Button> */}

        
        <Typography variant="body1" sx={{ marginRight: 2 }}>
         
        </Typography>
        <IconButton onClick={handleMenuOpen} color="inherit">
        <Avatar 
            alt={user.nombre} 
            src={user.foto || 'https://via.placeholder.com/40'} // Usar foto del usuario o una por defecto
            sx={{ width: 40, height: 40 }} 
          />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          {/* <MenuItem onClick={handleMenuClose}>Perfil</MenuItem> */}
          <MenuItem onClick={handleLogout}>Cerrar sesión</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default MenuInicio;
