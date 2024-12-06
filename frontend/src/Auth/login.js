import React, {  useContext, useState } from 'react';
import { TextField, Button, Card, CardContent,Typography, CardActions, Snackbar, Alert,} from '@mui/material';
import axios from 'axios';
import InicioSesion from './../assets/InicioSesion.jpg'
import { useNavigate } from 'react-router-dom'; 
import { UserContext } from '../context/UserContext';

function Login() {
  const { loginUser } = useContext(UserContext);
  const [form, setForm] = useState({ correo: '', contrasena: '' });
  const [error, setError] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const [message, setMessage] = useState('');

  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ( !form.correo || !form.contrasena ) {
        setError('Todos los campos son requeridos');
        return;
      }
  
      setError(''); 
    try {
      const response = await axios.post('http://localhost:3002/api/login', form);
      const { token, user } = response.data;
      if (user.contrasena) {
        delete user.contrasena;
        delete user.telefono;
      }
      localStorage.setItem('token', token);
      loginUser(user);
      console.log('Login exitoso');
      console.log(response.data);
      setSnackbarMessage('Bienvenido!');
                setSnackbarSeverity('success');
                setOpenSnackbar(true);

                setTimeout(() => {
                  if (user.id_perfil === 1) {
                    navigate('/inicio');
                  } else if (user.id_perfil === 2) {
                    navigate('/dashboard/clientes');
                  } else {
                    setMessage('Perfil no autorizado');
                  }
                }, 1500);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Error en el login');
    }
  };

  return (
    <Card sx={{boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.9)',borderRadius: '24px', maxWidth: 380, margin: 'auto', mt: 5, padding: 2, marginBottom: '20px',  }}>
 <img src={InicioSesion} alt="" width="350" height="100" />
      <form onSubmit={handleSubmit}>
        <CardContent>
          <TextField 
            name="correo" 
            placeholder="Correo electrónico"
            value={form.correo} 
            onChange={handleChange} 
            fullWidth 
            margin="normal" 
            InputLabelProps={{ shrink: true }}
            error={!!error && !form.correo}
            helperText={!!error && !form.correo ? 'El campo Correo es requerido' : ''}
            sx={{ marginBottom: 2, marginTop: '10px' }}
          />
          <TextField 
            name="contrasena" 
           placeholder="Contraseña"
            type="password" 
            value={form.contrasena} 
            onChange={handleChange} 
            fullWidth 
            margin="normal"
            InputLabelProps={{ shrink: true }}
      error={!!error && !form.contrasena}
      helperText={!!error && !form.contrasena ? 'El campo Contraseña es requerido' : ''}
      sx={{ marginBottom: 2, marginTop: '10px' }} 
          />
             {message && <Typography color="error">{message}</Typography>}
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button type="submit" variant="contained" color="primary"  sx={{justifyContent: 'center', boxShadow: 5,borderRadius: '24px',maxWidth: 200,}}>
            Iniciar sesión
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

export default Login;
