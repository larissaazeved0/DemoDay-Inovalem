module.exports = (sequelize, DataTypes) => {
    const Workshop = sequelize.define("Workshop", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,

        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
            notNull: {
                msg: 'Por favor digite seu nome'
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            notNull: {
                msg: 'Por favor digite seu email'
            }
        },
        numero: {
            type: DataTypes.FLOAT,
            allowNull: false,
            notNull: {
                msg: 'Por favor digite seu numero'
            }
        },
        dataNasc: {
            type: DataTypes.DATE,
            allowNull: false,
            notNull: {
                msg: 'Por favor digite sua data de nascimento.'
            }
        },
        motivo: {
            type: DataTypes.STRING,
            allowNull: false,
            notNull: {
                msg: 'Por favor digite seu motivo'
            }
        },
    });

    return Workshop;
};

