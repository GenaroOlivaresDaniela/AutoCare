const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes');
const cors = require('cors');
app.use(bodyParser.json());

// Middleware para configurar las cabeceras CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});


app.use(cors({
  origin: 'http://localhost:3000', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type'], 
  credentials: true 
}));

app.use('/imagenes/usuarios', express.static(path.join(__dirname, 'imagenes', 'usuarios')));
app.use('/imagenes/vehiculos', express.static(path.join(__dirname, 'imagenes/vehiculos')));

// Rutas de la API
app.use('/api', routes);

// Puerto
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Servidor API a la espera de consulta, por el puerto ${PORT}`);
});
