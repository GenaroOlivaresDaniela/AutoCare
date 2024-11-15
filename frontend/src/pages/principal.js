import React from 'react';
import { Typography, } from '@mui/material';
// import { UserContext } from '../context/UserContext';

const Principal = () => {
    // const { user } = useContext(UserContext);
    return (
        <div>
         
            <Typography variant="h2" align="center" gutterBottom sx={{ flexGrow: 1, marginTop: '50px', color:'black'}}>
                Bienvenido 
            </Typography>

        </div>
    );
};

export default Principal;
