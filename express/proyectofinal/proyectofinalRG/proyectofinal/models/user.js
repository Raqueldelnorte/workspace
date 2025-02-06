const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasOne(models.Teacher, { foreignKey: 'userId' });
    }
  }

  User.init({
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    type: DataTypes.STRING,
    active: { type: DataTypes.BOOLEAN, defaultValue: true },
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users', // Definir explícitamente el nombre de la tabla como 'users'
  });
  return User;
};
