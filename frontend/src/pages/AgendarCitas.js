import React, { useState, useEffect, useContext } from 'react';
import { Box, Card, CardContent, TextField, Button, Snackbar, Alert, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import Citas from './../assets/agendar_citas.png';
import { UserContext } from '../context/UserContext';

function AgendarCita() {
  const [servicios, setServicio] = useState([]); 
  const [trabajadores, setTrabajadores] = useState([]); 
  const [form, setForm] = useState({ id_servicio: '', id_trabajador: '', fecha: '', hora: '' });
  const [open, setOpen] = useState(false); 
  const [error, setError] = useState(''); 
  const [alerta, setAlerta] = useState(''); // Alerta personalizada
  const navigate = useNavigate(); 
  const { user } = useContext(UserContext);

  useEffect(() => {
    const obtenerServicios = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/servicios');
        setServicio(response.data); 
      } catch (error) {
        console.error('Error al obtener servicios:', error);
      }
    };
    obtenerServicios(); 
  }, []);

  useEffect(() => {
    const obtenerTrabajadores = async () => {
      if (form.id_servicio) {
        try {
          const response = await axios.get(`http://localhost:3001/api/trabajador_serv/${form.id_servicio}`);
          setTrabajadores(response.data);
        } catch (error) {
          console.error('Error al obtener trabajadores:', error);
        }
      } else {
        setTrabajadores([]);
      }
    };
    obtenerTrabajadores();
  }, [form.id_servicio]);

  const handleChange = (field, value) => {
    setForm((prevForm) => ({ ...prevForm, [field]: value }));
  };

  const validarHorarioYDisponibilidad = async () => {
    const {  fecha, hora } = form;

    // Validación del rango de horario
    const horaInicio = '09:00';
    const horaFin = '20:00';
    if (hora < horaInicio || hora > horaFin) {
      setAlerta(`La hora debe de estar dentro del horario laboral que es de ${horaInicio} am a ${horaFin}pm.`);
      return false;
    }

    // Validación de anticipación de 4 horas
    const ahora = new Date();
    const fechaHoraCita = new Date(`${fecha}T${hora}`);
    const diferenciaHoras = (fechaHoraCita - ahora) / (1000 * 60 * 60);
    if (diferenciaHoras < 6) {
      setAlerta('La cita debe agendarse con al menos 6 horas de anticipación.');
      return false;
    }

  
    try {
      
    } catch (error) {
      console.error('Error al verificar disponibilidad:', error);
      setAlerta('Error al verificar disponibilidad del trabajador.');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { id_servicio, id_trabajador, fecha, hora } = form;

    if (!id_servicio || !id_trabajador || !fecha || !hora) {
      setError('Todos los campos son requeridos.');
      return;
    }

    const esValido = await validarHorarioYDisponibilidad();
    if (!esValido) {
      return;
    }

    try {
      const responseCita = await axios.post('http://localhost:3001/api/citas', {
        id_usuario: user.id,
        fecha,
        hora,
      });
      const idCita = responseCita.data.id;

      await axios.post('http://localhost:3001/api/citas_servicios_trabajadores', {
        id_cita: idCita,
        id_trabajador,
        id_servicio,
      });

      setOpen(true); 
      setTimeout(() => {
        navigate('/inicio'); 
      }, 2000);
    } catch (error) {
      console.error('Error al registrar la cita:', error);
      setError('Error al registrar la cita. Inténtalo de nuevo más tarde.');
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false); 
    setAlerta(''); 
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
        sx={{boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.9)',borderRadius: '24px',
          width: 300,
          padding: 4,
         
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
            <FormControl fullWidth margin="normal">
              <InputLabel id="servicio-label">Servicio</InputLabel>
              <Select
                labelId="servicio-label"
                value={form.id_servicio}
                onChange={(e) => handleChange('id_servicio', e.target.value)}
                label="Servicios"
                error={!!error && !form.id_servicio} 
              >
                {servicios.map((serv) => (
                  <MenuItem key={serv.id} value={serv.id}>
                    {serv.servicio}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth margin="normal" disabled={!form.id_servicio}>
              <InputLabel id="trabajador-label">Trabajador</InputLabel>
              <Select
                labelId="trabajador-label"
                value={form.id_trabajador}
                onChange={(e) => handleChange('id_trabajador', e.target.value)}
                label="Trabajador"
                error={!!error && !form.id_trabajador} 
              >
                {trabajadores.map((trab) => (
                  <MenuItem key={trab.id_usuario} value={trab.id_usuario}>
                    {trab.nombre}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              fullWidth
              placeholder="Fecha"
              type="date"
              margin="normal"
              value={form.fecha}
              onChange={(e) => handleChange('fecha', e.target.value)}
              InputLabelProps={{ shrink: true }}
              error={!!error && !form.fecha}
              helperText={!!error && !form.fecha ? 'El campo es requerido' : ''}
            />
            <TextField
              fullWidth
              placeholder="Hora"
              type="time"
              margin="normal"
              value={form.hora}
              onChange={(e) => handleChange('hora', e.target.value)}
              InputLabelProps={{ shrink: true }}
              error={!!error && !form.hora}
              helperText={!!error && !form.hora ? 'El campo es requerido' : ''}
            />
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
      <Snackbar 
        open={!!alerta} 
        autoHideDuration={4000} 
        onClose={handleClose} 
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }} 
      >
        <Alert onClose={handleClose} variant="filled" severity="error" sx={{ width: '100%' }}>
          {alerta}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default AgendarCita;
