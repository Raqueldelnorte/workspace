const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class students extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  students.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false, // El campo name no puede ser nulo
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false, // El campo last_name no puede ser nulo
      },
      date_of_birth: {
        type: DataTypes.DATE,
        allowNull: false, // El campo date_of_birth no puede ser nulo
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false, // El campo email no puede ser nulo
        unique: true, // El email debe ser único
      },
    },
    {
      sequelize,
      modelName: 'students',
      tableName: 'students',
      timestamps: true,
    },
  );
  return students;
};
