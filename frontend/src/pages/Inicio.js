import React from 'react';
import { Grid, Typography, IconButton, Avatar } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'; 
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar'; 
import ChatIcon from '@mui/icons-material/Chat'; 
import { Link } from 'react-router-dom'; 

const Inicio = () => {
    return (
        <div>
            {/* Título principal */}
            <Typography variant="h3" align="center" gutterBottom>
                Bienvenido @nombre
            </Typography>
            
            {/* Grid para los íconos */}
            <Grid container justifyContent="center" spacing={4}>
                {/* Primer ícono: Agendar Cita */}
                <Grid item xs={12} sm={4} textAlign="center">
                    <IconButton component={Link} to="/citasAgregar">
                        <Avatar sx={{ width: 100, height: 100, bgcolor: 'white' }}>
                            <CalendarTodayIcon sx={{ fontSize: 50, color: 'black'}} />
                        </Avatar>
                    </IconButton>
                    <Typography variant="h6" sx={{color: 'white'}}>AGENDAR CITA</Typography>
                </Grid>

                {/* Segundo ícono: Vehículos */}
                <Grid item xs={12} sm={4} textAlign="center">
                    <IconButton>
                        <Avatar sx={{ width: 100, height: 100, bgcolor: 'white' }}>
                            <DirectionsCarIcon sx={{ fontSize: 50, color:'black' }} />
                        </Avatar>
                    </IconButton>
                    <Typography variant="h6">VEHÍCULOS</Typography>
                </Grid>

                {/* Tercer ícono: Mis Citas */}
                <Grid item xs={12} sm={4} textAlign="center">
                    <IconButton>
                        <Avatar sx={{ width: 100, height: 100, bgcolor: 'white' }}>
                            <ChatIcon sx={{ fontSize: 50, color: 'black' }} />
                        </Avatar>
                    </IconButton>
                    <Typography variant="h6">MIS CITAS</Typography>
                </Grid>
            </Grid>
        </div>
    );
};

export default Inicio;
