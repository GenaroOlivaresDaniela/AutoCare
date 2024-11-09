// routes.js
const express = require('express');
const router = express.Router();
const connection = require('./db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const authController = require('./Controllers/authController');

/* *********************************************************************************** */

          /* AUTH LOGIN */
          router.post('/register', authController.register);
          router.post('/login', authController.login);
        



/* *********************************************************************************** */
  /* 4. CRUD PERFILES  */
// INDEX
router.get('/perfiles', (req, res) => {
  connection.query('SELECT * FROM perfiles', (err, results) => {
    if (err) {
      console.error('Error al obtener registros:', err);
      res.status(500).json({ error: 'Error al obtener registros' });
      return;
    }
    res.json(results);
  });
});

//STORE
router.post('/perfiles', (req, res) => {
  const nuevoRegistro = req.body;
  connection.query('INSERT INTO perfiles SET ?', nuevoRegistro, (err, results) => {
    if (err) {
      console.error('Error al crear un nuevo registro:', err);
      res.status(500).json({ error: 'Error al crear un nuevo registro' });
      return;
    }
    res.status(201).json({ message: 'Registro creado exitosamente' });
  });
});

//SHOW
router.get('/perfiles/:id', (req, res) => {
  const id = req.params.id;
  connection.query('SELECT * FROM perfiles WHERE id = ?', id, (err, results) => {
    if (err) {
      console.error('Error al obtener el registro:', err);
      res.status(500).json({ error: 'Error al obtener el registro' });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ error: 'Registro no encontrado' });
      return;
    }
    res.json(results[0]);
  });
});

//UPDATE
router.put('/perfiles/:id', (req, res) => {
  const id = req.params.id;
  const datosActualizados = req.body;
  connection.query('UPDATE perfiles SET ? WHERE id = ?', [datosActualizados, id], (err, results) => {
    if (err) {
      console.error('Error al actualizar el registro:', err);
      res.status(500).json({ error: 'Error al actualizar el registro' });
      return;
    }
    res.json({ message: 'Registro actualizado exitosamente' });
  });
});

//DELETE
router.delete('/perfiles/:id', (req, res) => {
  const id = req.params.id;
  connection.query('DELETE FROM perfiles WHERE id = ?', id, (err, results) => {
    if (err) {
      console.error('Error al eliminar el registro:', err);
      res.status(500).json({ error: 'Error al eliminar el registro' });
      return;
    }
    res.json({ message: 'Registro eliminado exitosamente' });
  });
});
/* *********************************************************************************** */
            /* 1. CRUD USUARIOS */
// INDEX
router.get('/usuarios', (req, res) => {
  connection.query('SELECT * FROM usuarios ', (err, results) => {
    if (err) {
      console.error('Error al obtener registros:', err);
      res.status(500).json({ error: 'Error al obtener registros' });
      return;
    }
    res.json(results);
  });
});

//STORE
router.post('/usuarios', (req, res) => {
  const nuevoRegistro = req.body;
  connection.query('INSERT INTO usuarios SET ?', nuevoRegistro, (err, results) => {
    if (err) {
      console.error('Error al crear un nuevo registro:', err);
      res.status(500).json({ error: 'Error al crear un nuevo registro' });
      return;
    }
    res.status(201).json({ message: 'Registro creado exitosamente' });
  });
});

//SHOW
router.get('/usuarios/:id', (req, res) => {
  const id = req.params.id;
  connection.query('SELECT * FROM usuarios WHERE id = ?', id, (err, results) => {
    if (err) {
      console.error('Error al obtener el registro:', err);
      res.status(500).json({ error: 'Error al obtener el registro' });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ error: 'Registro no encontrado' });
      return;
    }
    res.json(results[0]);
  });
});

//UPDATE
router.put('/usuarios/:id', (req, res) => {
  const id = req.params.id;
  const datosActualizados = req.body;
  connection.query('UPDATE usuarios SET ? WHERE id = ?', [datosActualizados, id], (err, results) => {
    if (err) {
      console.error('Error al actualizar el registro:', err);
      res.status(500).json({ error: 'Error al actualizar el registro' });
      return;
    }
    res.json({ message: 'Registro actualizado exitosamente' });
  });
});

//DELETE
router.delete('/usuarios/:id', (req, res) => {
  const id = req.params.id;
  connection.query('DELETE FROM usuarios WHERE id = ?', id, (err, results) => {
    if (err) {
      console.error('Error al eliminar el registro:', err);
      res.status(500).json({ error: 'Error al eliminar el registro' });
      return;
    }
    res.json({ message: 'Registro eliminado exitosamente' });
  });
});

//OBTENER TRABAJADORES
router.get('/trabajadores', (req, res) => {
  connection.query('SELECT * FROM usuarios WHERE id_perfil = 3', (err, results) => {
    if (err) {
      console.error('Error al obtener registros:', err);
      res.status(500).json({ error: 'Error al obtener registros' });
      return;
    }
    res.json(results);
  });
});

//OBTENER CLIENTES
router.get('/clientes', (req, res) => {
  connection.query('SELECT * FROM usuarios WHERE id_perfil = 1', (err, results) => {
    if (err) {
      console.error('Error al obtener registros:', err);
      res.status(500).json({ error: 'Error al obtener registros' });
      return;
    }
    res.json(results);
  });
});


/* *********************************************************************************** */
            /*2. CRUD VEHICULOS  */
// INDEX
router.get('/vehiculos', (req, res) => {
  connection.query('SELECT vehiculos.*, usuarios.nombre, usuarios.app, usuarios.apm FROM vehiculos JOIN usuarios ON vehiculos.id_usuario = usuarios.id', (err, results) => {
    if (err) {
      console.error('Error al obtener registros:', err);
      res.status(500).json({ error: 'Error al obtener registros' });
      return;
    }
    res.json(results);
  });
});

//STORE
router.post('/vehiculos', (req, res) => {
  const nuevoRegistro = req.body;
  connection.query('INSERT INTO vehiculos SET ?', nuevoRegistro, (err, results) => {
    if (err) {
      console.error('Error al crear un nuevo registro:', err);
      res.status(500).json({ error: 'Error al crear un nuevo registro' });
      return;
    }
    res.status(201).json({ message: 'Registro creado exitosamente' });
  });
});

//SHOW
router.get('/vehiculos/:id', (req, res) => {
  const id = req.params.id;
  connection.query('SELECT * FROM vehiculos WHERE id = ?', id, (err, results) => {
    if (err) {
      console.error('Error al obtener el registro:', err);
      res.status(500).json({ error: 'Error al obtener el registro' });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ error: 'Registro no encontrado' });
      return;
    }
    res.json(results[0]);
  });
});

//UPDATE
router.put('/vehiculos/:id', (req, res) => {
  const id = req.params.id;
  const datosActualizados = req.body;
  connection.query('UPDATE vehiculos SET ? WHERE id = ?', [datosActualizados, id], (err, results) => {
    if (err) {
      console.error('Error al actualizar el registro:', err);
      res.status(500).json({ error: 'Error al actualizar el registro' });
      return;
    }
    res.json({ message: 'Registro actualizado exitosamente' });
  });
});

//DELETE
router.delete('/vehiculos/:id', (req, res) => {
  const id = req.params.id;
  connection.query('DELETE FROM vehiculos WHERE id = ?', id, (err, results) => {
    if (err) {
      console.error('Error al eliminar el registro:', err);
      res.status(500).json({ error: 'Error al eliminar el registro' });
      return;
    }
    res.json({ message: 'Registro eliminado exitosamente' });
  });
});


/* *********************************************************************************** */
            /* 3. CRUD DETALLES_DIAGNOSTICO  */
// INDEX
router.get('/detalles_diagnostico', (req, res) => {
  connection.query('SELECT * FROM detalles_diagnostico', (err, results) => {
    if (err) {
      console.error('Error al obtener registros:', err);
      res.status(500).json({ error: 'Error al obtener registros' });
      return;
    }
    res.json(results);
  });
});

//STORE
router.post('/detalles_diagnostico', (req, res) => {
  const nuevoRegistro = req.body;
  connection.query('INSERT INTO detalles_diagnostico SET ?', nuevoRegistro, (err, results) => {
    if (err) {
      console.error('Error al crear un nuevo registro:', err);
      res.status(500).json({ error: 'Error al crear un nuevo registro' });
      return;
    }
    res.status(201).json({ message: 'Registro creado exitosamente' });
  });
});

//SHOW
router.get('/detalles_diagnostico/:id', (req, res) => {
  const id = req.params.id;
  connection.query('SELECT * FROM detalles_diagnostico WHERE id = ?', id, (err, results) => {
    if (err) {
      console.error('Error al obtener el registro:', err);
      res.status(500).json({ error: 'Error al obtener el registro' });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ error: 'Registro no encontrado' });
      return;
    }
    res.json(results[0]);
  });
});

//UPDATE
router.put('/detalles_diagnostico/:id', (req, res) => {
  const id = req.params.id;
  const datosActualizados = req.body;
  connection.query('UPDATE detalles_diagnostico SET ? WHERE id = ?', [datosActualizados, id], (err, results) => {
    if (err) {
      console.error('Error al actualizar el registro:', err);
      res.status(500).json({ error: 'Error al actualizar el registro' });
      return;
    }
    res.json({ message: 'Registro actualizado exitosamente' });
  });
});

//DELETE
router.delete('/detalles_diagnostico/:id', (req, res) => {
  const id = req.params.id;
  connection.query('DELETE FROM detalles_diagnostico WHERE id = ?', id, (err, results) => {
    if (err) {
      console.error('Error al eliminar el registro:', err);
      res.status(500).json({ error: 'Error al eliminar el registro' });
      return;
    }
    res.json({ message: 'Registro eliminado exitosamente' });
  });
});


/* *********************************************************************************** */
  /* 4. CRUD SERVICIOS  */
// INDEX
router.get('/servicios', (req, res) => {
  connection.query('SELECT * FROM servicios', (err, results) => {
    if (err) {
      console.error('Error al obtener registros:', err);
      res.status(500).json({ error: 'Error al obtener registros' });
      return;
    }
    res.json(results);
  });
});

//STORE
router.post('/servicios', (req, res) => {
  const nuevoRegistro = req.body;
  connection.query('INSERT INTO servicios SET ?', nuevoRegistro, (err, results) => {
    if (err) {
      console.error('Error al crear un nuevo registro:', err);
      res.status(500).json({ error: 'Error al crear un nuevo registro' });
      return;
    }
    res.status(201).json({ message: 'Registro creado exitosamente' });
  });
});

//SHOW
router.get('/servicios/:id', (req, res) => {
  const id = req.params.id;
  connection.query('SELECT * FROM servicios WHERE id = ?', id, (err, results) => {
    if (err) {
      console.error('Error al obtener el registro:', err);
      res.status(500).json({ error: 'Error al obtener el registro' });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ error: 'Registro no encontrado' });
      return;
    }
    res.json(results[0]);
  });
});

//UPDATE
router.put('/servicios/:id', (req, res) => {
  const id = req.params.id;
  const datosActualizados = req.body;
  connection.query('UPDATE servicios SET ? WHERE id = ?', [datosActualizados, id], (err, results) => {
    if (err) {
      console.error('Error al actualizar el registro:', err);
      res.status(500).json({ error: 'Error al actualizar el registro' });
      return;
    }
    res.json({ message: 'Registro actualizado exitosamente' });
  });
});

//DELETE
router.delete('/servicios/:id', (req, res) => {
  const id = req.params.id;
  connection.query('DELETE FROM servicios WHERE id = ?', id, (err, results) => {
    if (err) {
      console.error('Error al eliminar el registro:', err);
      res.status(500).json({ error: 'Error al eliminar el registro' });
      return;
    }
    res.json({ message: 'Registro eliminado exitosamente' });
  });
});


/* *********************************************************************************** */
  /* 5. CRUD CITAS  */
// INDEX
router.get('/citas', (req, res) => {
  connection.query('SELECT citas.*, usuarios.nombre, usuarios.app, usuarios.apm, servicios.servicio FROM citas JOIN usuarios ON citas.id_usuario = usuarios.id JOIN citas_servicios_trabajadores ON citas_servicios_trabajadores.id_cita = citas.id JOIN servicios_trabajadores ON citas_servicios_trabajadores.id_servicio_u= servicios_trabajadores.id JOIN servicios ON servicios_trabajadores.id_servicio=servicios.id;', (err, results) => {
    if (err) {
      console.error('Error al obtener registros:', err);
      res.status(500).json({ error: 'Error al obtener registros' });
      return;
    }
    res.json(results);
  });
});

//STORE
router.post('/citas', (req, res) => {
  const nuevoRegistro = req.body;
  connection.query('INSERT INTO citas SET ?', nuevoRegistro, (err, results) => {
    if (err) {
      console.error('Error al crear un nuevo registro:', err);
      res.status(500).json({ error: 'Error al crear un nuevo registro' });
      return;
    }
    res.status(201).json({ message: 'Registro creado exitosamente' });
  });
});

//SHOW
router.get('/citas/:id', (req, res) => {
  const id = req.params.id;
  connection.query('SELECT * FROM citas WHERE id = ?', id, (err, results) => {
    if (err) {
      console.error('Error al obtener el registro:', err);
      res.status(500).json({ error: 'Error al obtener el registro' });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ error: 'Registro no encontrado' });
      return;
    }
    res.json(results[0]);
  });
});

//UPDATE
router.put('/citas/:id', (req, res) => {
  const id = req.params.id;
  const datosActualizados = req.body;
  connection.query('UPDATE citas SET ? WHERE id = ?', [datosActualizados, id], (err, results) => {
    if (err) {
      console.error('Error al actualizar el registro:', err);
      res.status(500).json({ error: 'Error al actualizar el registro' });
      return;
    }
    res.json({ message: 'Registro actualizado exitosamente' });
  });
});

//DELETE
router.delete('/citas/:id', (req, res) => {
  const id = req.params.id;
  connection.query('DELETE FROM citas WHERE id = ?', [id], (err, results) => {
    if (err) {
      console.error('Error al eliminar el registro:', err);
      res.status(500).json({ error: 'Error al eliminar el registro' });
      return;
    }
    res.json({ message: 'Registro eliminado exitosamente' });
  });
});


/* *********************************************************************************** */
  /* 6. CRUD REPORTES  */
// INDEX
router.get('/reportes', (req, res) => {
  connection.query('SELECT * FROM reportes', (err, results) => {
    if (err) {
      console.error('Error al obtener registros:', err);
      res.status(500).json({ error: 'Error al obtener registros' });
      return;
    }
    res.json(results);
  });
});

//STORE
router.post('/reportes', (req, res) => {
  const nuevoRegistro = req.body;
  connection.query('INSERT INTO reportes SET ?', nuevoRegistro, (err, results) => {
    if (err) {
      console.error('Error al crear un nuevo registro:', err);
      res.status(500).json({ error: 'Error al crear un nuevo registro' });
      return;
    }
    res.status(201).json({ message: 'Registro creado exitosamente' });
  });
});

//SHOW
router.get('/reportes/:id', (req, res) => {
  const id = req.params.id;
  connection.query('SELECT * FROM reportes WHERE id = ?', id, (err, results) => {
    if (err) {
      console.error('Error al obtener el registro:', err);
      res.status(500).json({ error: 'Error al obtener el registro' });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ error: 'Registro no encontrado' });
      return;
    }
    res.json(results[0]);
  });
});

//UPDATE
router.put('/reportes/:id', (req, res) => {
  const id = req.params.id;
  const datosActualizados = req.body;
  connection.query('UPDATE reportes SET ? WHERE id = ?', [datosActualizados, id], (err, results) => {
    if (err) {
      console.error('Error al actualizar el registro:', err);
      res.status(500).json({ error: 'Error al actualizar el registro' });
      return;
    }
    res.json({ message: 'Registro actualizado exitosamente' });
  });
});

//DELETE
router.delete('/reportes/:id', (req, res) => {
  const id = req.params.id;
  connection.query('DELETE FROM reportes WHERE id = ?', id, (err, results) => {
    if (err) {
      console.error('Error al eliminar el registro:', err);
      res.status(500).json({ error: 'Error al eliminar el registro' });
      return;
    }
    res.json({ message: 'Registro eliminado exitosamente' });
  });
});


/* *********************************************************************************** */
  /* 7. CRUD STATUS_CITAS  */
// INDEX
router.get('/status_citas', (req, res) => {
  connection.query('SELECT * FROM status_citas', (err, results) => {
    if (err) {
      console.error('Error al obtener registros:', err);
      res.status(500).json({ error: 'Error al obtener registros' });
      return;
    }
    res.json(results);
  });
});

//STORE
router.post('/status_citas', (req, res) => {
  const nuevoRegistro = req.body;
  connection.query('INSERT INTO status_citas SET ?', nuevoRegistro, (err, results) => {
    if (err) {
      console.error('Error al crear un nuevo registro:', err);
      res.status(500).json({ error: 'Error al crear un nuevo registro' });
      return;
    }
    res.status(201).json({ message: 'Registro creado exitosamente' });
  });
});

//SHOW
router.get('/status_citas/:id', (req, res) => {
  const id = req.params.id;
  connection.query('SELECT * FROM status_citas WHERE id = ?', id, (err, results) => {
    if (err) {
      console.error('Error al obtener el registro:', err);
      res.status(500).json({ error: 'Error al obtener el registro' });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ error: 'Registro no encontrado' });
      return;
    }
    res.json(results[0]);
  });
});

//UPDATE
router.put('/status_citas/:id', (req, res) => {
  const id = req.params.id;
  const datosActualizados = req.body;
  connection.query('UPDATE status_citas SET ? WHERE id = ?', [datosActualizados, id], (err, results) => {
    if (err) {
      console.error('Error al actualizar el registro:', err);
      res.status(500).json({ error: 'Error al actualizar el registro' });
      return;
    }
    res.json({ message: 'Registro actualizado exitosamente' });
  });
});

//DELETE
router.delete('/status_citas/:id', (req, res) => {
  const id = req.params.id;
  connection.query('DELETE FROM status_citas WHERE id = ?', id, (err, results) => {
    if (err) {
      console.error('Error al eliminar el registro:', err);
      res.status(500).json({ error: 'Error al eliminar el registro' });
      return;
    }
    res.json({ message: 'Registro eliminado exitosamente' });
  });
});


/* *********************************************************************************** */
  /* 8. CRUD CITAS_SERVICIOS_TRABAJADORES  */
// INDEX
router.get('/citas_servicios_trabajadores', (req, res) => {
  connection.query('SELECT citas_servicios_trabajadores.*,citas.fecha,servicios.servicio,usuario_cita.nombre AS nombre_usuario_cita,usuario_cita.app AS app_usuario_cita,usuario_cita.apm AS apm_usuario_cita,usuario_servicio.nombre AS nombre_usuario_servicio,usuario_servicio.app AS app_usuario_servicio,usuario_servicio.apm AS apm_usuario_servicio FROM citas_servicios_trabajadores JOIN citas ON citas_servicios_trabajadores.id_cita = citas.id JOIN usuarios AS usuario_cita ON citas.id_usuario = usuario_cita.id JOIN servicios_trabajadores ON citas_servicios_trabajadores.id_servicio_u = servicios_trabajadores.id JOIN servicios ON servicios_trabajadores.id_servicio = servicios.id JOIN usuarios AS usuario_servicio ON servicios_trabajadores.id_usuario = usuario_servicio.id;', (err, results) => {
    if (err) {
      console.error('Error al obtener registros:', err);
      res.status(500).json({ error: 'Error al obtener registros' });
      return;
    }
    res.json(results);
  });
});

//STORE
router.post('/citas_servicios_trabajadores', (req, res) => {
  const nuevoRegistro = req.body;
  connection.query('INSERT INTO citas_servicios_trabajadores SET ?', nuevoRegistro, (err, results) => {
    if (err) {
      console.error('Error al crear un nuevo registro:', err);
      res.status(500).json({ error: 'Error al crear un nuevo registro' });
      return;
    }
    res.status(201).json({ message: 'Registro creado exitosamente' });
  });
});

//SHOW
router.get('/citas_servicios_trabajadores/:id', (req, res) => {
  const id = req.params.id;
  connection.query('SELECT * FROM citas_servicios_trabajadores WHERE id = ?', id, (err, results) => {
    if (err) {
      console.error('Error al obtener el registro:', err);
      res.status(500).json({ error: 'Error al obtener el registro' });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ error: 'Registro no encontrado' });
      return;
    }
    res.json(results[0]);
  });
});

//UPDATE
router.put('/citas_servicios_trabajadores/:id', (req, res) => {
  const id = req.params.id;
  const datosActualizados = req.body;
  connection.query('UPDATE citas_servicios_trabajadores SET ? WHERE id = ?', [datosActualizados, id], (err, results) => {
    if (err) {
      console.error('Error al actualizar el registro:', err);
      res.status(500).json({ error: 'Error al actualizar el registro' });
      return;
    }
    res.json({ message: 'Registro actualizado exitosamente' });
  });
});

//DELETE
router.delete('/citas_servicios_trabajadores/:id', (req, res) => {
  const id = req.params.id;
  connection.query('DELETE FROM citas_servicios_trabajadores WHERE id = ?', id, (err, results) => {
    if (err) {
      console.error('Error al eliminar el registro:', err);
      res.status(500).json({ error: 'Error al eliminar el registro' });
      return;
    }
    res.json({ message: 'Registro eliminado exitosamente' });
  });
});


/* *********************************************************************************** */
  /* 9. CRUD GALERIA  */
// INDEX
router.get('/galeria', (req, res) => {
  connection.query('SELECT * FROM galeria', (err, results) => {
    if (err) {
      console.error('Error al obtener registros:', err);
      res.status(500).json({ error: 'Error al obtener registros' });
      return;
    }
    res.json(results);
  });
});

//STORE
router.post('/galeria', (req, res) => {
  const nuevoRegistro = req.body;
  connection.query('INSERT INTO galeria SET ?', nuevoRegistro, (err, results) => {
    if (err) {
      console.error('Error al crear un nuevo registro:', err);
      res.status(500).json({ error: 'Error al crear un nuevo registro' });
      return;
    }
    res.status(201).json({ message: 'Registro creado exitosamente' });
  });
});

//SHOW
router.get('/galeria/:id', (req, res) => {
  const id = req.params.id;
  connection.query('SELECT * FROM galeria WHERE id = ?', id, (err, results) => {
    if (err) {
      console.error('Error al obtener el registro:', err);
      res.status(500).json({ error: 'Error al obtener el registro' });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ error: 'Registro no encontrado' });
      return;
    }
    res.json(results[0]);
  });
});

//UPDATE
router.put('/galeria/:id', (req, res) => {
  const id = req.params.id;
  const datosActualizados = req.body;
  connection.query('UPDATE galeria SET ? WHERE id = ?', [datosActualizados, id], (err, results) => {
    if (err) {
      console.error('Error al actualizar el registro:', err);
      res.status(500).json({ error: 'Error al actualizar el registro' });
      return;
    }
    res.json({ message: 'Registro actualizado exitosamente' });
  });
});

//DELETE
router.delete('/galeria/:id', (req, res) => {
  const id = req.params.id;
  connection.query('DELETE FROM galeria WHERE id = ?', id, (err, results) => {
    if (err) {
      console.error('Error al eliminar el registro:', err);
      res.status(500).json({ error: 'Error al eliminar el registro' });
      return;
    }
    res.json({ message: 'Registro eliminado exitosamente' });
  });
});

/* *********************************************************************************** */
  /* 8. CRUD SERVICIOS_TRABAJADORES  */
// INDEX
router.get('/servicios_trabajadores', (req, res) => {
  connection.query('SELECT servicios.servicio, usuarios.nombre, usuarios.app, usuarios.apm FROM servicios_trabajadores JOIN servicios ON servicios_trabajadores.id_servicio = servicios.id JOIN usuarios ON servicios_trabajadores.id_usuario = usuarios.id', (err, results) => {
    if (err) {
      console.error('Error al obtener registros:', err);
      res.status(500).json({ error: 'Error al obtener registros' });
      return;
    }
    res.json(results);
  });
});

//STORE
router.post('/servicios_trabajadores', (req, res) => {
  const nuevoRegistro = req.body;
  connection.query('INSERT INTO servicios_trabajadores SET ?', nuevoRegistro, (err, results) => {
    if (err) {
      console.error('Error al crear un nuevo registro:', err);
      res.status(500).json({ error: 'Error al crear un nuevo registro' });
      return;
    }
    res.status(201).json({ message: 'Registro creado exitosamente' });
  });
});

//SHOW
router.get('/servicios_trabajadores/:id', (req, res) => {
  const id = req.params.id;
  connection.query('SELECT * FROM servicios_trabajadores WHERE id = ?', id, (err, results) => {
    if (err) {
      console.error('Error al obtener el registro:', err);
      res.status(500).json({ error: 'Error al obtener el registro' });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ error: 'Registro no encontrado' });
      return;
    }
    res.json(results[0]);
  });
});

//UPDATE
router.put('/servicios_trabajadores/:id', (req, res) => {
  const id = req.params.id;
  const datosActualizados = req.body;
  connection.query('UPDATE servicios_trabajadores SET ? WHERE id = ?', [datosActualizados, id], (err, results) => {
    if (err) {
      console.error('Error al actualizar el registro:', err);
      res.status(500).json({ error: 'Error al actualizar el registro' });
      return;
    }
    res.json({ message: 'Registro actualizado exitosamente' });
  });
});

//DELETE
router.delete('/servicios_trabajadores/:id', (req, res) => {
  const id = req.params.id;
  connection.query('DELETE FROM servicios_trabajadores WHERE id = ?', id, (err, results) => {
    if (err) {
      console.error('Error al eliminar el registro:', err);
      res.status(500).json({ error: 'Error al eliminar el registro' });
      return;
    }
    res.json({ message: 'Registro eliminado exitosamente' });
  });
});













// Obtener todos los registros de dos tablas
router.get('/datos', (req, res) => {
  connection.query('SELECT car.id_carrera AS id, car.nombre AS carrera, gru.nombre AS grupo ' +
    'FROM tb_carrera AS car, tb_grupos AS gru ' +
    'WHERE car.id_carrera=gru.id_carrera', (err, results) => {
    if (err) {
      console.error('Error al obtener registros:', err);
      res.status(500).json({ error: 'Error al obtener registros' });
      return;
    }
    res.json(results);
  });
});


module.exports = router;
