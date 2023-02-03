const User = (Sequelize, DataTypes) => {
  return Sequelize.define(
    'User',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.STRING(50),
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      pw: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    },
    {
      tableName: 'User',
      freezeTableName: true,
      timestamps: false,
    }
  );
};

module.exports = User;
