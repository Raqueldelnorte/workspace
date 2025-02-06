/** @type {import('sequelize-cli').Migration} */
const bcrypt = require('bcryptjs');

module.exports = {
  async up(queryInterface, Sequelize) {
    // Insertar datos en la tabla 'users'
    await queryInterface.bulkInsert('users', [
      {
        email: 'admin@example.com',
        password: await bcrypt.hash('admin123', 10), // Encriptación de la contraseña
        type: 'admin',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'user@example.com',
        password: await bcrypt.hash('user123', 10), // Encriptación de la contraseña
        type: 'user',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'inactiveuser@example.com',
        password: await bcrypt.hash('inactive123', 10), // Encriptación de la contraseña
        type: 'user',
        active: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    // Revertir la inserción de datos en la tabla 'users'
    await queryInterface.bulkDelete('users', null, {});
  },
};
