const Work = (Sequelize, DataTypes)=>{
    return Sequelize.define(
        "Work", 
        { 
            id: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey : true
            },
            name: {
                type: DataTypes.STRING(50),
                allowNull: false,
            },
            wage: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        {
            tableName: "Work",
            freezeTableName: true,
            timestamps: false
        }
    )
}

module.exports = Work;