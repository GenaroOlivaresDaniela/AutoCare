import React, { useState, useContext  } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppBar, Box, CssBaseline, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography, Divider } from '@mui/material';
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

const drawerWidth = 240;
const closedDrawerWidth = 60;

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

      <AppBar position="fixed" sx={{ width: `calc(100% - ${open ? drawerWidth : closedDrawerWidth}px)`, ml: `${open ? drawerWidth : closedDrawerWidth}px` }}>
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
                 bgcolor:'#cee8ff'
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
                  <ListItemText primary="Citas" />
                </ListItem>
            <ListItem button component={Link} to="/dashboard/citas_serv_usu">
              <ListItemText primary="Citas Servicio Usuario" />
            </ListItem>
            <ListItem button component={Link} to="/dashboard/clientes">
              <ListItemText primary="Clientes" />
            </ListItem>
            <ListItem button component={Link} to="/dashboard/perfiles">
              <ListItemText primary="Perfiles" />
            </ListItem>
            {/* <ListItem button component={Link} to="/dashboard/reportes">
              <ListItemText primary="Reportes" />
            </ListItem> */}
                <ListItem button component={Link} to="/dashboard/servicios">
                  <ListItemText primary="Servicios" />
                </ListItem>
            <ListItem button component={Link} to="/dashboard/servicios_trabajadores">
              <ListItemText primary="Servicios Trabajadores" />
            </ListItem>
                <ListItem button component={Link} to="/dashboard/trabajadores">
                  <ListItemText primary="Trabajadores" />
                </ListItem>
            <ListItem button component={Link} to="/dashboard/vehiculos">
              <ListItemText primary="Vehículos" />
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
