module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
            notNull: {
                msg: 'Por favor digite seu nome.'
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            // validate: {
            //     isEmail: true
            // },
            notNull: {
                msg: 'Por favor digite um email.'
            }
        },
        senha: {
            type: DataTypes.STRING(64),
            allowNull: false,
            notNull: {
                msg: 'Por favor digite uma senha.'
            }
        },
        role: {
            type: DataTypes.STRING(64),
            allowNull: false,
        }
    });

    return Users;
};
