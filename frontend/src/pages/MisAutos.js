import React, { useContext,useState, useEffect  } from 'react';
import { Grid, Typography} from '@mui/material';
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
                Mis Autos
            </Typography>

            <Grid container spacing={4} sx={{marginTop: '30px'}}>
            {cardsData.map((card) => (
                <Grid item xs={12} sm={6} key={card.id}>
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
