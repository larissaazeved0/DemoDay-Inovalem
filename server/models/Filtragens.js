module.exports = (sequelize, DataTypes) => {
    const Filtragens = sequelize.define("Filtragens", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cpf: {
            type: DataTypes.STRING,
            allowNull: false,
            notNull: {
                msg: 'Por favor digite seu CPF'
            }
        },
        dataNasc: {
            type: DataTypes.DATE,
            allowNull: false,
            notNull: {
                msg: 'Por favor digite sua data de nascimento.'
            }
        },
        genero: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        comprovante: {
            type: DataTypes.BLOB,
            allowNull: false,
            notNull: {
                msg: 'Por favor digite o valor.'
            }
        },
    });

    return Filtragens;
};

