// src/components/Register.js
import React, { useState } from 'react';
import { TextField, Button, Card, CardContent, Snackbar, Alert, CardActions } from '@mui/material';
import axios from 'axios';
import Registro from './../assets/registro.jpg'

function Register() {
  const [form, setForm] = useState({ nombre: '', app: '', apm:'', telefono:'', correo: '', contrasena: '' });
  const [error, setError] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ( !form.nombre || !form.app || !form.apm || !form.telefono || !form.correo || !form.contrasena ) {
        setError('Todos los campos son requeridos');
        return;
      }
  
      setError(''); 
    try {
      const response = await axios.post('http://localhost:3001/api/register', form);
      console.log(response.data.message);
      setSnackbarMessage('Se guardo correctamente!');
                setSnackbarSeverity('success');
                setOpenSnackbar(true);
    } catch (error) {
      setError(error.response.data.message || 'Error en el registro');
    }
  };

  return (
    <Card sx={{ maxWidth: 400, margin: 'auto', mt: 5, padding: 2, marginBottom: '20px' }}>
         <img src={Registro} alt="" width="400" height="100" />
    <form onSubmit={handleSubmit}>
    <CardContent>
      <TextField 
      name="nombre" 
      label="Nombre" 
      value={form.nombre} 
      onChange={handleChange} 
      fullWidth 
      InputLabelProps={{ shrink: true }}
      error={!!error && !form.nombre}
      helperText={!!error && !form.nombre ? 'El campo nombre es requerido' : ''}
      sx={{ marginBottom: 2, marginTop: '10px' }}
      />
      
      <TextField 
      name="app" 
      label="Apellido Paterno" 
      value={form.app} 
      onChange={handleChange} 
      fullWidth 
      InputLabelProps={{ shrink: true }}
      error={!!error && !form.app}
      helperText={!!error && !form.app ? 'El campo Apellido Paterno es requerido' : ''}
      sx={{ marginBottom: 2, marginTop: '10px' }}
      />
      
      <TextField 
      name="apm" 
      label="Apellido Materno" 
      value={form.apm} 
      onChange={handleChange} 
      fullWidth 
      InputLabelProps={{ shrink: true }}
      error={!!error && !form.apm}
      helperText={!!error && !form.apm ? 'El campo Apellido Materno es requerido' : ''}
      sx={{ marginBottom: 2, marginTop: '10px' }}
      />
      
      <TextField 
      name="telefono" 
      label="Teléfono" 
      type="numeric"
      value={form.telefono} 
      onChange={handleChange} 
      fullWidth 
      InputLabelProps={{ shrink: true }}
      error={!!error && !form.telefono}
      helperText={!!error && !form.telefono ? 'El campo Teléfono es requerido' : ''}
      sx={{ marginBottom: 2, marginTop: '10px' }}
      />

      <TextField 
      name="correo" 
      label="Correo electrónico" 
      value={form.correo} 
      onChange={handleChange} 
      fullWidth 
      InputLabelProps={{ shrink: true }}
      error={!!error && !form.correo}
      helperText={!!error && !form.correo ? 'El campo Correo es requerido' : ''}
      sx={{ marginBottom: 2, marginTop: '10px' }}
      />

      <TextField 
      name="contrasena" 
      label="Contraseña" 
      type="password" 
      value={form.contrasena} 
      onChange={handleChange} 
      fullWidth 
      InputLabelProps={{ shrink: true }}
      error={!!error && !form.contrasena}
      helperText={!!error && !form.contrasena ? 'El campo Contraseña es requerido' : ''}
      sx={{ marginBottom: 2, marginTop: '10px' }}
      />
 </CardContent>

        <CardActions>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Registrarse
          </Button>
        </CardActions>
    
    </form>
    <Snackbar 
                open={openSnackbar} 
                autoHideDuration={2000} 
                onClose={() => setOpenSnackbar(false)} 
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }} >
                <Alert onClose={() => setOpenSnackbar(false)} variant="filled" severity={snackbarSeverity} sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
    </Card>
  );
}

export default Register;
