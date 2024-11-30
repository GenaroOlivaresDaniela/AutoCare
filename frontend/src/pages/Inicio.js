import React, { useContext,useState, useEffect  } from 'react';
import { Grid, Typography, IconButton, Avatar } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'; 
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar'; 
import ChatIcon from '@mui/icons-material/Chat'; 
import { Link } from 'react-router-dom'; 
import { UserContext } from '../context/UserContext';
import VehiculosCard from './../components/Vehiculos'

const Inicio = () => {
    const { user } = useContext(UserContext);
    const [cardsData, setCardsData] = useState([]);
    const id_usuario = user.id;
    
    const BaseUrl = 'http://localhost:3001/imagenes/vehiculos/'
    useEffect(() => {
        const fetchData = async () => {
            try {
            const response = await fetch(`http://localhost:3001/api/vehiculos/${id_usuario}`);
            const data = await response.json();
           
            setCardsData(data);
        } catch (error) {
            console.log("Error al obtener los datos:", error);
        }
       
        };

        fetchData();
    });
    return (
        <div>
         
            <Typography variant="h2" align="center" gutterBottom sx={{fontSize: '60px', fontWeight: 'bold', flexGrow: 1, marginTop: '50px', color:'black', boxShadow: '0px 10px 25px rgba(0, 0, 0, 1)'}}>
                Bienvenid@ {user.nombre} {user.app} {user.apm}
            </Typography>
            
            <Grid container justifyContent="center" spacing={4} sx={{marginTop:'50px'}}>
               
                <Grid item xs={12} sm={3} textAlign="center">
                    <IconButton component={Link} to="/citasAgregar">
                        <Avatar sx={{ width: 180, height: 180, bgcolor: '#0b4462', boxShadow: '0px 10px 25px rgba(0, 0, 0, 1)' }}>
                            <CalendarTodayIcon sx={{ fontSize: 80, color: 'white'}} />
                        </Avatar>
                    </IconButton>
                    <Typography variant="h6" sx={{fontSize: '22px', fontWeight: 'bold',color: 'black'}}>AGENDAR CITA</Typography>
                </Grid>

                <Grid item xs={12} sm={3} textAlign="center">
                    <IconButton component={Link} to="/vehiculo">
                        <Avatar sx={{ width: 180, height: 180, bgcolor: '#0b4462', boxShadow: '0px 10px 25px rgba(0, 0, 0, 1)' }}>
                            <DirectionsCarIcon sx={{ fontSize: 80, color:'white' }} />
                        </Avatar>
                    </IconButton>
                    <Typography variant="h6" sx={{fontSize: '22px', fontWeight: 'bold',color: 'black'}}>VEHICULOS</Typography>
                </Grid>

                <Grid item xs={12} sm={3} textAlign="center">
                    <IconButton component={Link} to="/mis_citas">
                        <Avatar sx={{ width: 180, height: 180, bgcolor: '#0b4462' , boxShadow: '0px 10px 25px rgba(0, 0, 0, 1)'}}>
                            <ChatIcon sx={{ fontSize: 80, color: 'white' }} />
                        </Avatar>
                    </IconButton>
                    <Typography variant="h6" sx={{fontSize: '22px', fontWeight: 'bold',color: 'black'}}>MIS CITAS</Typography>
                </Grid>
            </Grid>

        

            <Grid container spacing={4} sx={{marginTop: '50px'}}>
            {cardsData.map((card) => (
                <Grid item xs={12} sm={8} key={card.id}>
                    <VehiculosCard 
                        marca={card.marca} 
                        modelo={card.modelo} 
                        image={`${BaseUrl}${card.imagen}`}
                    />
                  
                </Grid>
            ))}
        </Grid>

     
        </div>
    );
};

export default Inicio;
