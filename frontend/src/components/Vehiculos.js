import React from 'react';
import { Card, CardContent, CardMedia, Typography} from '@mui/material';



function VehiculosCard({ marca, modelo, image }) {
 

    return (
        <Card sx={{ color: 'green', backgroundColor: '#e2e2e2', marginTop: '30px', marginRight: '25px', marginLeft: '25px', marginBottom: '20px'}}>
            
            <CardContent sx={{ justifyContent: 'center' }}>
                <Typography gutterBottom  component="div" sx={{ textAlign: 'center' }}>
                    {marca}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {modelo}
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