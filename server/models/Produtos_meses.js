module.exports = (sequelize, DataTypes) => {
    const Produtos_meses = sequelize.define("Produtos_meses", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        janeiro: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        fevereiro: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        marco: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        abril: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        maio: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        junho: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        julho: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        agosto: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        setembro: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        outubro: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        novembro: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        dezembro: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    });

    return Produtos_meses;
};


