// Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">PÁGINA PRINCIPAL</Typography>
          </Toolbar>
        </AppBar>
        <Box sx={{ p: 3 }}>
          {/* El Outlet renderiza el contenido de cada página */}
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
