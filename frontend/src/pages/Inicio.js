import React from 'react';
import { Grid, Typography, IconButton, Avatar } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'; 
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar'; 
import ChatIcon from '@mui/icons-material/Chat'; 
import { Link } from 'react-router-dom'; 

const Inicio = () => {
    return (
        <div>
         
            <Typography variant="h2" align="center" gutterBottom sx={{ flexGrow: 1, marginTop: '50px'}}>
                Bienvenido @nombre
            </Typography>
            
            <Grid container justifyContent="center" spacing={4}>
               
                <Grid item xs={12} sm={4} textAlign="center">
                    <IconButton component={Link} to="/citasAgregar">
                        <Avatar sx={{ width: 100, height: 100, bgcolor: 'white' }}>
                            <CalendarTodayIcon sx={{ fontSize: 50, color: 'black'}} />
                        </Avatar>
                    </IconButton>
                    <Typography variant="h6" sx={{color: 'white'}}>AGENDAR CITA</Typography>
                </Grid>

                <Grid item xs={12} sm={4} textAlign="center">
                    <IconButton component={Link} to="/vehiculo">
                        <Avatar sx={{ width: 100, height: 100, bgcolor: 'white' }}>
                            <DirectionsCarIcon sx={{ fontSize: 50, color:'black' }} />
                        </Avatar>
                    </IconButton>
                    <Typography variant="h6" sx={{color: 'white'}}>VEHÍCULOS</Typography>
                </Grid>

                <Grid item xs={12} sm={4} textAlign="center">
                    <IconButton>
                        <Avatar sx={{ width: 100, height: 100, bgcolor: 'white' }}>
                            <ChatIcon sx={{ fontSize: 50, color: 'black' }} />
                        </Avatar>
                    </IconButton>
                    <Typography variant="h6" sx={{color: 'white'}}>MIS CITAS</Typography>
                </Grid>
            </Grid>
     
        </div>
    );
};

export default Inicio;
