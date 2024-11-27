import React, { useState, useContext  } from 'react';
import { Routes, Route } from 'react-router-dom';
import {Button, AppBar, Box, CssBaseline, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Trabajadores from './Dashboard/Trabajadores';
import Clientes from './Dashboard/Clientes';
import Perfiles from './Dashboard/Perfiles';
import Servicios from './Dashboard/Servicios';
import Vehiculos from './Dashboard/Vehiculos';
import ServiciosTrabajadores from './Dashboard/ServiciosTrabajadores';
import Citas from './Dashboard/Citas';
import CitasSerUsu from './Dashboard/CitasSerUsu';
import Reportes from './Dashboard/Reportes';
// import InicioPrincipal from './Dashboard/Inicio';
import { Link } from 'react-router-dom';
import Logo from './assets/logo.JPG';
import { useNavigate } from 'react-router-dom'; 
import { UserContext } from './context/UserContext';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const drawerWidth = 250;
const closedDrawerWidth = 0;

const AppDash = () => {
  const [open, setOpen] = useState(true);  

  const toggleDrawer = () => setOpen(!open); 

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const {logoutUser, user} = useContext(UserContext);
  const navigate = useNavigate(); 

  const handleLogout = () => {
    logoutUser();
    navigate('/');
  };

    

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <AppBar position="fixed" sx={{boxShadow: '0px 10px 25px rgba(0, 0, 0, 1)', width: `calc(100% - ${open ? drawerWidth : closedDrawerWidth}px)`, ml: `${open ? drawerWidth : closedDrawerWidth}px` }}>
        <Toolbar x={{ flexGrow: 1, top:'auto' }}  component="div" color="inherit">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawer}
            sx={{ mr: 2 }}  
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flex: 1, textAlign: 'center' }} >
          
          </Typography>

          <IconButton onClick={handleMenuOpen} color="inherit">
          <Typography variant="body1" sx={{ fontSize: '16px', marginRight: 1 }}>
    {user.nombre} {user.app} {user.apm}
  </Typography>
        <Avatar 
        
            src={ ''} 
            sx={{ width: 40, height: 40, }} 
          /> 
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleLogout}>Cerrar sesión</MenuItem>
        </Menu>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
              width: open ? drawerWidth : closedDrawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
              width: open ? drawerWidth : closedDrawerWidth,
                 boxSizing: 'border-box',
                 transition: 'width 0.3s',
                 bgcolor:'#0b4462',
                 boxShadow: '0px 10px 25px rgba(0, 0, 0, 1)',
              },
            
       }}
        variant="persistent"
        anchor="left"
        open={open}  
      >
        <div>
         
       <img src={Logo} alt="Logo Local" width="200" height="80" />
          <Divider />
          <List>
            {/* <ListItem button component={Link} to="/dashboard/">
              <ListItemText primary="Inicio" />
            </ListItem> */}

                <ListItem button component={Link} to="/dashboard/citas">
                <Button fullWidth sx={{ textAlign: 'left', color:'white' }}>
                  <ListItemText primary="Citas" />
                  </Button>
                </ListItem>
            <ListItem button component={Link} to="/dashboard/citas_serv_usu">
           <Button fullWidth sx={{ textAlign: 'left', color:'white' }}>
              <ListItemText primary="Citas Servicio Usuario" />
              </Button>
            </ListItem>
            <ListItem button component={Link} to="/dashboard/clientes">
            <Button fullWidth sx={{ textAlign: 'left', color:'white' }}>
              <ListItemText primary="Clientes" />
              </Button>
            </ListItem>
            <ListItem button component={Link} to="/dashboard/perfiles">
            <Button fullWidth sx={{ textAlign: 'left', color:'white' }}>
          <ListItemText primary="Perfiles" />
        </Button>
            </ListItem>
            {/* <ListItem button component={Link} to="/dashboard/reportes">
              <ListItemText primary="Reportes" />
            </ListItem> */}
                <ListItem button component={Link} to="/dashboard/servicios">
                <Button fullWidth sx={{ textAlign: 'left', color:'white' }}>
                  <ListItemText primary="Servicios" />
                  </Button>
                </ListItem>
            <ListItem button component={Link} to="/dashboard/servicios_trabajadores">
            <Button fullWidth sx={{ textAlign: 'left', color:'white' }}>
              <ListItemText primary="Servicios Trabajadores" />
              </Button>
            </ListItem>
                <ListItem button component={Link} to="/dashboard/trabajadores">
                <Button fullWidth sx={{ textAlign: 'left', color:'white' }}>
                  <ListItemText primary="Trabajadores" />
                  </Button>
                </ListItem>
            <ListItem button component={Link} to="/dashboard/vehiculos">
            <Button fullWidth sx={{ textAlign: 'left', color:'white' }}>
              <ListItemText primary="Vehículos" />
              </Button>
            </ListItem>
          </List>
        </div>
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: 'background.default',
          p: 3,
          width: `calc(100% - ${open ? drawerWidth : closedDrawerWidth}px)`,
          marginTop: '64px',
          transition: 'width 0.3s', 
        }}
      >
        <Routes>
          {/* <Route path="/" element={<InicioPrincipal />} /> */}
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
    </Box>
  );
};

export default AppDash;
