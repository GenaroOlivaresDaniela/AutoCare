import React, { useState,useContext } from 'react';
import { Box, Card, CardContent, TextField, Button, Snackbar, Alert, Grid } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Vehiculo from './../assets/vehiculos.jpg';
import { UserContext } from '../context/UserContext';


function Vehiculos() {
  const [modelo, setModelo] = useState(''); 
  const [no_placa, setPlaca] = useState(''); 
  const [no_serie, setSerie] = useState(''); 
  const [ano, setAno] = useState(''); 
  const [marca, setMarca] = useState(''); 
  const [imagen, setImagen] = useState(null);
  const [open, setOpen] = useState(false); 
  const [error, setError] = useState(''); 
  const navigate = useNavigate(); 
  const { user } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!modelo || !no_placa || !no_serie || !ano || !marca) {
      setError('Todos los campos son requeridos');
      return;
    }

    setError(''); 
    const formData = new FormData();
    formData.append('modelo', modelo);
    formData.append('no_placa', no_placa);
    formData.append('no_serie', no_serie);
    formData.append('ano', ano);
    formData.append('marca', marca);
    formData.append('imagen', imagen);
    formData.append('id_usuario', user.id);

    try {
      const response = await axios.post('http://localhost:3002/api/vehiculos',formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log('Registro exitoso:', response.data);
      setOpen(true); 

      setTimeout(() => {
        navigate('/inicio');
      }, 2000);
    } catch (error) {
      console.error('Error al registrar el vehículo:', error);
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
          width: 500,
          padding: 4,
           boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.9)',borderRadius: '24px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img src={Vehiculo} alt="" width="400" height="100" />
        </Box>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField 
                  fullWidth
                  placeholder="Modelo"
                  type="text"
                  margin="normal"
                  value={modelo}
                  onChange={(e) => setModelo(e.target.value)}
                  InputLabelProps={{ shrink: true }}
                  error={!!error && !modelo}
                  helperText={!!error && !modelo ? 'El campo es requerido' : ''}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  placeholder="Marca"
                  type="text"
                  margin="normal"
                  value={marca}
                  onChange={(e) => setMarca(e.target.value)}
                  InputLabelProps={{ shrink: true }}
                  error={!!error && !marca}
                  helperText={!!error && !marca ? 'El campo es requerido' : ''}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  placeholder="Número de Placa"
                  type="text"
                  margin="normal"
                  value={no_placa}
                  onChange={(e) => setPlaca(e.target.value)}
                  InputLabelProps={{ shrink: true }}
                  error={!!error && !no_placa}
                  helperText={!!error && !no_placa ? 'El campo es requerido' : ''}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  placeholder="Número de Serie"
                  type="text"
                  margin="normal"
                  value={no_serie}
                  onChange={(e) => setSerie(e.target.value)}
                  InputLabelProps={{ shrink: true }}
                  error={!!error && !no_serie}
                  helperText={!!error && !no_serie ? 'El campo es requerido' : ''}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  placeholder="Año"
                  type="text"
                  margin="normal"
                  value={ano}
                  onChange={(e) => setAno(e.target.value)}
                  InputLabelProps={{ shrink: true }}
                  error={!!error && !ano}
                  helperText={!!error && !ano ? 'El campo es requerido' : ''}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                 <input
            type="file"
            name="imagen"
            accept="image/*"
            onChange={(e) => setImagen(e.target.files[0])}
            style={{ marginTop: '20px' }}
          />
              </Grid>
            </Grid>

            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Button variant="contained"  sx={{ backgroundColor: "red",  boxShadow: 5,borderRadius: '10px'}} type="button" onClick={() => navigate('/inicio')}>
                Cancelar
              </Button>
              <Button variant="contained" sx={{ backgroundColor: "#1976D2", boxShadow: 5,borderRadius: '10px' }} type="submit">
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

export default Vehiculos;
