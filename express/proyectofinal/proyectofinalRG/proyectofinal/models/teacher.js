const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Teacher extends Model {
    static associate(models) {
      Teacher.belongsTo(models.User, { foreignKey: 'userId' });
      Teacher.hasMany(models.Student, { foreignKey: 'teacherId' });
    }
  }

  Teacher.init({
    dni: DataTypes.STRING,
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    dateOfBirth: DataTypes.DATE,
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Teacher',
    tableName: 'teachers', // Definir explícitamente el nombre de la tabla como 'teachers'
  });
  return Teacher;
};
