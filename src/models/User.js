const { DataTypes } = require("sequelize");
const sequelize = require('../utils/connection');

const User = sequelize.define("user", {

    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    birthday: {
        type: DataTypes.STRING,
        allowNull: true,
    },
});

// Después de haber definido el modelo y configurado la conexión

User.sync({ alter: true })
    .then(() => {
        console.log("Modelo sincronizado con la base de datos");
    })
    .catch((error) => {
        console.error("Error al sincronizar el modelo con la base de datos:", error);
    });


module.exports = User;