import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import axios from 'axios';

function Login() {
    const [correo, setEmail] = useState('');
    const [contrasena, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            await axios.post('http://localhost:3001/api/auth/login', { correo, contrasena });
            alert('Inicio de sesión exitoso');
            // Redirige o realiza alguna acción post-login
        } catch (err) {
            setError('Credenciales incorrectas');
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 300, mx: 'auto', mt: 5 }}>
            <Typography variant="h4" component="h1" gutterBottom>Login</Typography>
            <TextField
                label="Email"
                type="email"
                fullWidth
                required
                value={correo}
                onChange={(e) => setEmail(e.target.value)}
                margin="normal"
            />
            <TextField
                label="Password"
                type="password"
                fullWidth
                required
                value={contrasena}
                onChange={(e) => setPassword(e.target.value)}
                margin="normal"
            />
            {error && <Typography color="error">{error}</Typography>}
            <Button type="submit" variant="contained" color="primary" fullWidth>Login</Button>
        </Box>
    );
}

export default Login;
