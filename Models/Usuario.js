const db = require('../db');
const bcrypt = require('bcryptjs');

module.exports = {
  async createUser(nombre, app, apm, telefono, correo, contrasena, id_perfil) {
    const hashedPassword = await bcrypt.hash(contrasena, 10);
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO usuarios (nombre, app, apm, telefono, correo, contrasena, id_perfil) VALUES (?, ?, ?, ?, ?, ?, 1)', [nombre, app, apm, telefono, correo, hashedPassword, id_perfil], (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },

  findUserByEmail(correo) {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM usuarios WHERE correo = ?', [correo], (err, result) => {
        if (err) reject(err);
        resolve(result[0]);
      });
    });
  },
};
