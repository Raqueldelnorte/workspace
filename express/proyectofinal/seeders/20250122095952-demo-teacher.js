const bcrypt = require('bcryptjs'); // Para encriptar contraseñas
const { User } = require('../models'); // Importamos el modelo de User si es necesario

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Inserción de datos de ejemplo para la tabla teachers
    await queryInterface.bulkInsert('teachers', [
      {
        dni: '12345678A',
        name: 'Rosana',
        lastName: 'López',
        dateOfBirth: new Date('1985-02-20'),
        userId: 1, // Aquí debes asignar el ID del usuario correspondiente
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        dni: '98765432B',
        name: 'Itziar',
        lastName: 'Pérez',
        dateOfBirth: new Date('1990-06-10'),
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    // Revertir la inserción de datos si es necesario
    await queryInterface.bulkDelete('teachers', null, {});
  },
};
