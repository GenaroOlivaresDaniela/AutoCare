import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import PhoneIcon from '@mui/icons-material/Phone';
import { IconButton } from '@mui/material';

const Footer = () => {
  return (
    <AppBar 
      position="static" 
      sx={{bottom: 0, backgroundColor: 'gray', color: 'black'}} 
    >
      <Toolbar sx={{ justifyContent: 'center', bottom: 0 }}>
      <IconButton 
          href="https://wa.me/7228501290" 
          target="_blank" 
          rel="noopener noreferrer"
          sx={{ color: 'green', marginRight: '10px', bottom: 0}} 
        >
         <WhatsAppIcon /> 
        </IconButton>
        {/* <Typography variant="body1" sx={{ flexGrow: 1, textAlign: 'center' }}>
          Contacto: +1 (555) 123-4567 | +1 (555) 987-6543
        </Typography> */}
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
