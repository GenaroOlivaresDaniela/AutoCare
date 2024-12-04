import React, { useState, useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import Logo from './../assets/logo.JPG';

const MenuInicio = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar el modal
  const { logoutUser, user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleLogout = () => {
    logoutUser();
    navigate('/');
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
    handleMenuClose(); // Cerrar el menú al abrir el modal
  };

  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <AppBar
        position="static"
        sx={{
          boxShadow: '0px 10px 25px rgba(0, 0, 0, 1)',
          backgroundColor: 'white',
          color: 'black',
        }}
      >
        <Toolbar sx={{ flexGrow: 1, top: 'auto' }} variant="h6" component="div" color="inherit">
          <img src={Logo} alt="Logo Local" width="250" height="100" />
          <Typography sx={{ flexGrow: 1 }}></Typography>

          <Button color="inherit" component={Link} to="/inicio">
            Inicio
          </Button>
          <Button color="inherit" component={Link} to="/servicio">
            Servicios
          </Button>
          <Button color="inherit" component={Link} to="/misAutos">
            Mis Autos
          </Button>

          <IconButton onClick={handleMenuOpen} color="inherit">
            <Avatar
              alt={user.nombre}
              src={user?.foto || 'https://via.placeholder.com/40'}
              sx={{ width: 40, height: 40 }}
            />
          </IconButton>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
            <MenuItem onClick={handleLogout}>Cerrar sesión</MenuItem>
            <MenuItem onClick={handleOpenModal}>Perfil</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      {/* Modal para mostrar el perfil del usuario */}
      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        aria-labelledby="user-profile-title"
        aria-describedby="user-profile-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            display: 'flex',
      flexDirection: 'column',
      alignItems: 'center', 
      textAlign: 'center',
          }}
        >
          <Avatar
              alt={user.nombre}
              src={user?.foto || 'https://via.placeholder.com/40'}
              sx={{ width: 80, height: 80 }}
            />
          <Typography id="user-profile-title" variant="h6" component="h2" gutterBottom>
            Perfil del Usuario
          </Typography>
          <Typography id="user-profile-description" variant="body1">
            <strong>Nombre:</strong> {user.nombre + ' ' + user.app + ' ' + user.apm|| 'N/A'}
          </Typography>
          <Typography variant="body1">
            <strong>Correo:</strong> {user.correo || 'N/A'}
          </Typography>
        
         
          <Button
            variant="contained"
            onClick={handleCloseModal}
            sx={{ mt: 2, display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
          >
            Cerrar
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default MenuInicio;
