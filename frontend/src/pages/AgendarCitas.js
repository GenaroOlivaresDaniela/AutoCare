import React, { useState, useEffect, useContext } from 'react';
import { Box, Card, CardContent, TextField, Button, Snackbar, Alert, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import Citas from './../assets/agendar_citas.png'
import { UserContext } from '../context/UserContext';

function AgendarCita() {
  // const [id_usuario, setTrabajador] = useState(''); 
  const [fecha, setFecha] = useState(''); 
  const [hora, setHora] = useState(''); 
  // const [trabajadores, setTrabajadores] = useState([]); 
  const [open, setOpen] = useState(false); 
  const [error, setError] = useState(''); 
  const navigate = useNavigate(); 
  const { user } = useContext(UserContext);

  
  // useEffect(() => {
    // const obtenerTrabajadores = async () => {
    //   try {
    //     const response = await axios.get('http://localhost:3001/api/trabajadores');
    //     setTrabajadores(response.data); 
    //   } catch (error) {
    //     console.error('Error al obtener servicios:', error);
    //   }
    // };

    // obtenerTrabajadores(); 
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fecha || !hora ) {
      setError('Todos los campos son requeridos');
      return;
    }

    setError(''); 

    try {
      const response = await axios.post('http://localhost:3001/api/citas', {
        id_usuario: user.id,
        fecha,
        hora,
       
      });
      console.log('Registro exitoso:', response.data);
      setOpen(true); 
      
      setTimeout(() => {
        navigate('/inicio');
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
        <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img src={Citas} alt="" width="400" height="100" />
    </Box>
          <form onSubmit={handleSubmit}>
           
            {/* <FormControl fullWidth margin="normal">
              <InputLabel id="trabajador-label">Trabajador</InputLabel>
              <Select
                labelId="trabajador-label"
                value={id_usuario}
                onChange={(e) => setTrabajador(e.target.value)}
                label="Trabajador"
                error={!!error && !id_usuario} 
              >
               
              
                {trabajadores.map((trab) => (
                  <MenuItem key={trab.id} value={trab.id}>
                    {trab.nombre} {trab.app} {trab.apm}
                  </MenuItem>
                ))}
              </Select>
            </FormControl> */}

           
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
              <Button variant="contained" sx={{ backgroundColor: "red" }} type="button" onClick={() => navigate('/inicio')}>
                Cancelar
              </Button>
              <Button variant="contained" sx={{ backgroundColor: "#1976D2" }} type="submit">
                Agendar
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
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
