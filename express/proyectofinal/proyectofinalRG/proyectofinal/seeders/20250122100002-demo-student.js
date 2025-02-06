/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Inserción de datos de ejemplo para la tabla students
    await queryInterface.bulkInsert('students', [
      {
        dni: '11111111C',
        name: 'Ion',
        lastName: 'Martínez',
        dateOfBirth: new Date('2005-03-15'),
        teacherId: 1, // Aquí debes asignar el ID del profesor correspondiente
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        dni: '22222222D',
        name: 'Raquel',
        lastName: 'Suescun',
        dateOfBirth: new Date('2006-08-20'),
        teacherId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    // Revertir la inserción de datos si es necesario
    await queryInterface.bulkDelete('students', null, {});
  },
};
