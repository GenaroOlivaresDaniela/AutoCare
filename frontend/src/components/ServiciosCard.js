import React from 'react';
import { Card, CardContent, CardMedia, Typography} from '@mui/material';

function ServiciosCard({ title, description, image }) {
    return (
        <Card sx={{ borderRadius: '24px',color: '#0b4462',boxShadow: '0px 10px 25px rgba(0, 0, 0, 1)', backgroundColor: 'white',fontWeight: 'bold', marginTop: '30px', marginRight: '25px', marginLeft: '25px', marginBottom: '20px'}}>
            
            <CardContent sx={{ justifyContent: 'center' }}>
                <Typography gutterBottom variant="h5" component="div" sx={{fontSize: '30px', textAlign: 'center' }}>
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{fontSize: '15px', color:'black' }}>
                    {description}
                </Typography>
            </CardContent>
            <CardMedia sx={{boxShadow: '0px 10px 25px rgba(0, 0, 0, 1)', marginTop: '10px', marginRight: '10px', marginLeft: '10px', width: '80%', margin: '0 auto', display: 'block', marginBottom: '20px' }}
                component="img"
                height="200"
                image={image}
                alt={title}
            />
        </Card>
    );
}

export default ServiciosCard;