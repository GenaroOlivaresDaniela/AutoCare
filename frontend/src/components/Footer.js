import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
// import PhoneIcon from '@mui/icons-material/Phone';
import { IconButton } from '@mui/material';

const Footer = () => {
  return (
    <AppBar 
      position="static" 
      sx={{boxShadow: '0px 10px 25px rgba(0, 0, 0, 1)', top: 'auto',bottom: 0, backgroundColor: 'white', color: 'black', display: 'flex' }} 
    >
      <Toolbar sx={{ justifyContent: 'center'}}>
      <IconButton 
          href="https://wa.me/7228501290" 
          target="_blank" 
          rel="noopener noreferrer"
          sx={{ color: 'black', marginRight: '100px', bottom: 0}} 
        >
         <WhatsAppIcon /> 
        </IconButton>
      <IconButton 
          href="https://www.instagram.com/x.1angeeel?igsh=aXRyOWgyam5rMmxy " 
          target="_blank" 
          rel="noopener noreferrer"
          sx={{ color: 'black', marginRight: '100px', bottom: 0}} 
        >
         <InstagramIcon /> 
        </IconButton>
        {/* <Typography variant="body1" sx={{ flexGrow: 1, textAlign: 'center' }}>
          Contacto: +1 (555) 123-4567 | +1 (555) 987-6543
        </Typography> */}
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
