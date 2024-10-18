import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const Formulario = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    matricula: '',
    app: '',
    apm:'',
    fn:'',
    sexo:''
  });
  const [open, setOpen] = useState(false); // Estado para controlar el Snackbar
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/registros', formData);
      setOpen(true);

      setTimeout(() => {
        navigate('/');
      }, 2000);

      console.log('Datos guardados:', response.data);
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>

    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>matricula:</label>
        <input
          type="matricula"
          name="matricula"
          value={formData.matricula}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>app:</label>
        <input
          type="text"
          name="app"
          value={formData.app}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>apm:</label>
        <input
          type="text"
          name="apm"
          value={formData.apm}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>fn:</label>
        <input
          type="text"
          name="fn"
          value={formData.fn}
          onChange={handleChange}
        />
      </div>
     
      <div>
        <label>sexo:</label>
        <input
          type="text"
          name="sexo"
          value={formData.sexo}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Enviar</button>
    </form>

    <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} variant="filled" severity="success" sx={{ width: '100%' }}>
          Formulario guardado con éxito!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Formulario;
