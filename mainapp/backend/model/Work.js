const Work = (Sequelize, DataTypes) => {
  return Sequelize.define(
    'Work',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      wage: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      payday: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      worktime: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      pay: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      benefit: {
        type: DataTypes.STRING(5),
        allowNull: false,
      },
      tax: {
        type: DataTypes.STRING(5),
        allowNull: false,
      },
    },
    {
      tableName: 'Work',
      freezeTableName: true,
      timestamps: false,
    }
  );
};

module.exports = Work;
