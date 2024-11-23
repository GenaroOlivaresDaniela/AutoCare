import React, { useContext } from 'react';
import { Grid, Typography, IconButton, Avatar } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'; 
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar'; 
import ChatIcon from '@mui/icons-material/Chat'; 
import { Link } from 'react-router-dom'; 
import { UserContext } from '../context/UserContext';

const Inicio = () => {
    const { user } = useContext(UserContext);
    return (
        <div>
         
            <Typography variant="h2" align="center" gutterBottom sx={{  fontSize: '60px', fontWeight: 'bold', flexGrow: 1, marginTop: '50px', color:'black', boxShadow: '0px 10px 25px rgba(0, 0, 0, 1)'}}>
                Bienvenid@ {user.nombre} {user.app} {user.apm}
            </Typography>
            
            <Grid container justifyContent="center" spacing={4} sx={{marginTop:'50px'}}>
               
                <Grid item xs={12} sm={4} textAlign="center">
                    <IconButton component={Link} to="/citasAgregar">
                        <Avatar sx={{ width: 130, height: 130, bgcolor: '#0b4462', boxShadow: '0px 10px 25px rgba(0, 0, 0, 1)' }}>
                            <CalendarTodayIcon sx={{ fontSize: 80, color: 'white'}} />
                        </Avatar>
                    </IconButton>
                    <Typography variant="h6" sx={{fontSize: '22px', fontWeight: 'bold',color: 'black'}}>AGENDAR CITA</Typography>
                </Grid>

                <Grid item xs={12} sm={4} textAlign="center">
                    <IconButton component={Link} to="/vehiculo">
                        <Avatar sx={{ width: 130, height: 130, bgcolor: '#0b4462', boxShadow: '0px 10px 25px rgba(0, 0, 0, 1)' }}>
                            <DirectionsCarIcon sx={{ fontSize: 80, color:'white' }} />
                        </Avatar>
                    </IconButton>
                    <Typography variant="h6" sx={{fontSize: '22px', fontWeight: 'bold',color: 'black'}}>VEHICULOS</Typography>
                </Grid>

                <Grid item xs={12} sm={4} textAlign="center">
                    <IconButton component={Link} to="/mis_citas">
                        <Avatar sx={{ width: 130, height: 130, bgcolor: '#0b4462' , boxShadow: '0px 10px 25px rgba(0, 0, 0, 1)'}}>
                            <ChatIcon sx={{ fontSize: 80, color: 'white' }} />
                        </Avatar>
                    </IconButton>
                    <Typography variant="h6" sx={{fontSize: '22px', fontWeight: 'bold',color: 'black'}}>MIS CITAS</Typography>
                </Grid>
            </Grid>
     
        </div>
    );
};

export default Inicio;
