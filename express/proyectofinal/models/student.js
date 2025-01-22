const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    static associate(models) {
      Student.belongsTo(models.Teacher, { foreignKey: 'teacherId' });
    }
  }

  Student.init({
    dni: DataTypes.STRING,
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    dateOfBirth: DataTypes.DATE,
    teacherId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'teachers', // Asegúrate de que apunte a 'teachers'
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Student',
    tableName: 'students', // Definir explícitamente el nombre de la tabla como 'students'
  });
  return Student;
};
