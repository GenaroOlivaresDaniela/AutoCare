import React from 'react';
import { Card, CardContent, CardMedia, Typography} from '@mui/material';

function ServiciosCard({ title, description, image }) {
    return (
        <Card sx={{ color: 'green', backgroundColor: '#e2e2e2', marginTop: '30px', marginRight: '25px', marginLeft: '25px', marginBottom: '20px'}}>
            
            <CardContent sx={{ justifyContent: 'center' }}>
                <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center' }}>
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardMedia sx={{ marginTop: '10px', marginRight: '10px', marginLeft: '10px', width: '80%', margin: '0 auto', display: 'block', marginBottom: '20px' }}
                component="img"
                height="200"
                image={image}
                alt={title}
            />
        </Card>
    );
}

export default ServiciosCard;