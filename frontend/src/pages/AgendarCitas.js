import React, { useState } from 'react';
import { Box, Card, CardContent, TextField, Button, Typography, Snackbar, Alert, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

function AgendarCita() {
  const [id_usuario, setTrabajador] = useState(''); 
  const [fecha, setFecha] = useState(''); 
  const [hora, setHora] = useState(''); 
  const [servicio, setServicio] = useState(''); 
  const [open, setOpen] = useState(false); 
  const [error, setError] = useState(''); 
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    if (!id_usuario || !fecha || !hora || !servicio) {
      setError('Todos los campos son requeridos');
      return; 
    }

    setError(''); 

    try {
      const response = await axios.post('http://localhost:3001/api/citas', {
        id_usuario,
        fecha,
        hora,
        servicio, 
      });
      console.log('Registro exitoso:', response.data);
      setOpen(true); 
      
      
      setTimeout(() => {
        navigate('/'); 
      }, 2000); 

    } catch (error) {
      console.error('Error al registrar la cita:', error);
      setOpen(false); 
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false); 
  };

  return (
    <Box
      sx={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          width: 300,
          padding: 4,
          boxShadow: 3,
        }}
      >
        <CardContent>
          <Typography variant="h6" align="center" gutterBottom>
            AGENDAR CITA
          </Typography>
          <form onSubmit={handleSubmit}>
            {/* Select para el servicio */}
            <FormControl fullWidth margin="normal">
              <InputLabel id="servicio-label">Servicio</InputLabel>
              <Select
                labelId="servicio-label"
                value={servicio}
                onChange={(e) => setServicio(e.target.value)}
                label="Servicio"
                error={!!error && !servicio} 
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Consulta médica">Consulta médica</MenuItem>
                <MenuItem value="Examen">Examen</MenuItem>
                <MenuItem value="Terapia">Terapia</MenuItem>
              </Select>
            </FormControl>

            <TextField
              fullWidth
              label="Trabajador"
              margin="normal"
              value={id_usuario}
              onChange={(e) => setTrabajador(e.target.value)}
              error={!!error && !id_usuario}
              helperText={!!error && !id_usuario ? 'El campo es requerido' : ''}
            />
            <TextField
              fullWidth
              label="Fecha"
              type="date"
              margin="normal"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              InputLabelProps={{ shrink: true }}
              error={!!error && !fecha}
              helperText={!!error && !fecha ? 'El campo es requerido' : ''}
            />
            <TextField
              fullWidth
              label="Hora"
              type="time"
              margin="normal"
              value={hora}
              onChange={(e) => setHora(e.target.value)}
              InputLabelProps={{ shrink: true }}
              error={!!error && !hora}
              helperText={!!error && !hora ? 'El campo es requerido' : ''}
            />
            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
              <Button variant="contained" sx={{ backgroundColor: "red" }} type="button" onClick={() => navigate('/')}>
                Cancelar
              </Button>
              <Button variant="contained" sx={{ backgroundColor: "#1976D2" }} type="submit">
                Agendar
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
      {/* Snackbar para mostrar mensajes */}
      <Snackbar 
        open={open} 
        autoHideDuration={2000} 
        onClose={handleClose} 
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }} 
      >
        <Alert onClose={handleClose} variant="filled" severity="success" sx={{ width: '100%' }}>
          Formulario guardado con éxito!
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default AgendarCita;
