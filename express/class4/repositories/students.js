const db = require('./db');

module.exports = {
  getAll() {
    return db('students');
  },
  insert(data) {
    return db('students').insert(data);
  },
  getById(id) { // Método correctamente definido
    return db('students')
      .where({ id })
      .first(); // Devuelve solo el primer resultado
  },
};
