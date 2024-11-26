const db = require('../db');
const bcrypt = require('bcryptjs');

module.exports = {
  async createUser(nombre, app, apm, telefono, correo, contrasena, foto) {
    const hashedPassword = await bcrypt.hash(contrasena, 10);
    const creacion= new Date();
    const update= new Date();
    return new Promise((resolve, reject) => {
      db.query(
        'INSERT INTO usuarios (nombre, app, apm, telefono, correo, contrasena, id_perfil, foto,created_at,updated_at) VALUES (?, ?, ?, ?, ?, ?, 1, ?,?,?)',
        [nombre, app, apm, telefono, correo, hashedPassword, foto,creacion,update],
        (err, result) => {
          if (err) reject(err);
          resolve(result);
        }
      );
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
