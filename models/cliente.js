const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Cliente = sequelize.define('Cliente', {
    id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
    },
    nombre: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },
    apellido: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },
    edad: { 
        type: DataTypes.INTEGER 
    },
    email: { 
        type: DataTypes.STRING, 
        unique: true 
    },
    fecha_registro: { 
        type: DataTypes.DATE, 
        defaultValue: DataTypes.NOW 
    },
}, { 
    tableName: 'clientes', 
    timestamps: false 
});

module.exports = Cliente;
