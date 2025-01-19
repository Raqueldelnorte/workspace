/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn('students', 'email', {
      type: Sequelize.STRING,
      allowNull: true, // Puedes poner `false` si es obligatorio
    })
      .then(() => {
        return queryInterface.addColumn('students', 'active', {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: true, // Valor predeterminado
        });
      });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeColumn('students', 'email')
      .then(() => {
        return queryInterface.removeColumn('students', 'active');
      });
  },
};
