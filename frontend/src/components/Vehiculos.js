import React from 'react';
import { Card, CardContent, CardMedia, Typography} from '@mui/material';



function VehiculosCard({ marca, modelo,no_placa,no_serie,ano, image }) {
 

    return (
        <Card sx={{ borderRadius: '24px',color: '#0b4462',boxShadow: '0px 10px 25px rgba(0, 0, 0, 1)', backgroundColor: 'white',fontWeight: 'bold',  marginRight: '25px', marginLeft: '25px', marginBottom: '20px'}}>
            
            <CardContent sx={{ justifyContent: 'center' }}>
                <Typography gutterBottom  component="div" sx={{fontSize: '30px', textAlign: 'center' }}>
                    {marca}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{fontSize: '20px', color:'black' }} >
                    {modelo}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{fontSize: '20px', color:'black' }}>
                    {no_placa}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{fontSize: '20px', color:'black' }}>
                    {no_serie}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{fontSize: '20px', color:'black' }}>
                    {ano}
                </Typography>
            </CardContent>
            <CardMedia sx={{boxShadow: '0px 10px 25px rgba(0, 0, 0, 1)', marginTop: '10px', marginRight: '10px', marginLeft: '10px', width: '80%', margin: '0 auto', display: 'block', marginBottom: '20px' }}
                component="img"
                height="200"
                image={image}
                alt='sin foto'
            />
        </Card>
    );
}

export default VehiculosCard;