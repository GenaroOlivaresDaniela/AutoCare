import React from 'react';
import { Card,Typography} from '@mui/material';

function Mensaje() {
  return (
    <Card sx={{boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.9)',borderRadius: '24px', maxWidth: 500, margin: 'auto', marginTop: '100px', mt: 5, padding: 2, marginBottom: '20px',  }}>
 <Typography variant="h2" align="center" gutterBottom sx={{fontSize: '45px', fontWeight: 'bold', flexGrow: 1, marginTop: '40px', color:'black'}}>
              Revisa tu correo eléctronico para obtener el código de verificación que te enviamos!!  
            </Typography>
    </Card>
  );
}

export default Mensaje;
