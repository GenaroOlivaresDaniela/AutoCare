import React, { useState, useEffect } from 'react';
import {Grid, Typography } from '@mui/material';
import ServiciosCard from './../components/ServiciosCard'

function Servicios() {
    const [cardsData, setCardsData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:3001/api/servicios');
            const data = await response.json();
            setCardsData(data);
        };

        fetchData();
    }, []);

    return (
      
        <Grid container spacing={2}>
            {cardsData.map((card) => (
                <Grid item xs={12} sm={6} key={card.id}>
                    <ServiciosCard 
                        title={card.servicio} 
                        description={card.descripcion} 
                        image="https://www.serpresur.com/wp-content/uploads/2023/06/serpresur-riesgos-mas-comunes-en-un-taller-mecanico-2-scaled.jpg" 
                    />
                    <ServiciosCard 
                        title={card.servicio} 
                        description={card.descripcion} 
                        image="https://www.serpresur.com/wp-content/uploads/2023/06/serpresur-riesgos-mas-comunes-en-un-taller-mecanico-2-scaled.jpg" 
                    />
                </Grid>
            ))}
        </Grid>
    );
}

export default Servicios;
