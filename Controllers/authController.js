const User = require('../Models/Usuario');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {upload} = require('../middlewares/upload');
const path = require('path');


exports.register = async (req, res) => {
  upload.single('foto')(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ message: 'Error al subir la imagen', error: err });
    }

    const { nombre, app, apm, telefono, correo, contrasena } = req.body;
    const foto = req.file ? req.file.filename : null; 

    try {
      const existingUser = await User.findUserByEmail(correo);
      if (existingUser) {
        return res.status(400).json({ message: 'Email ya registrado' });
      }

      await User.createUser(nombre, app, apm, telefono, correo, contrasena, foto);
      res.status(201).json({ message: 'Usuario registrado exitosamente' });
    } catch (error) {
      res.status(500).json({ message: 'Error en el registro', error });
    }
  });
};


exports.login = async (req, res) => {
  const { correo, contrasena } = req.body;
  try {
    const user = await User.findUserByEmail(correo);
    if (!user ) {
      return res.status(400).json({ message: 'Credenciales incorrectas' });
    }

    const token = jwt.sign({ id: user.id }, 'secret_key');

    res.json({ token, user});
  } catch (error) {
    res.status(500).json({ message: 'Error en el login', error });
  }
};
