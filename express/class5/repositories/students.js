const db = require('../models'); // Asegúrate de que esté importando el modelo correctamente

module.exports = {
  getAll() {
    return db.students.findAll({});
  },
  // Método getById agregado
  getById(id) {
    return db.students.findOne({
      where: { id }, // Buscamos un estudiante por su ID
    });
  },
  insert(data) {
    return db.students.create(data);
  },
  // Obtener un estudiante por email
  getByEmail(email) {
    return db.students.findOne({
      where: { email }, // Buscamos un estudiante por su email
    });
  },
};
