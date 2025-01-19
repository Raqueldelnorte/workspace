const db = require('../models');
// Forma abreviada de

module.exports = {
  getAll() {
    return db.students.findAll({});
  },
  insert(data) {
    return db.students.create(data);
  },
};
