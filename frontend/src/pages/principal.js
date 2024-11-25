import React from 'react';
import { Typography, Box, Button} from '@mui/material';
import { useNavigate } from 'react-router-dom'; 

const Principal = () => {
    const navigate = useNavigate();
    return (
        <div>
         
            <Typography variant="h2" align="left" gutterBottom sx={{fontSize: '70px',marginBottom: '20px',marginLeft: '80px', fontWeight: 'bold', flexGrow: 1, marginTop: '90px', color:'black'}}>
                TU AUTO EN LAS <p style={{margin: '10px'}}>MEJORES</p> <p style={{margin: '10px'}}>MANOS</p>
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
              <Button variant="contained"  sx={{color: 'black',backgroundColor: 'transparent',border: '1px solid black',marginBottom: '30px',marginTop: '1px',marginLeft: '150px',boxShadow: 5,borderRadius: '5px'}} type="button" onClick={() => navigate('/register')}>
                REGISTRARSE
              </Button>
            </Box>

        </div>
    );
};

export default Principal;
