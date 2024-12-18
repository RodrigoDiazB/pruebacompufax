const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Direccion = sequelize.define('Direccion', {
    id: {
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    },
    cliente_id: {
        type: DataTypes.INTEGER, 
        allowNull: false 
    },
    calle: { 
        type: DataTypes.STRING, 
        allowNull: false
    },
    ciudad: {
        type: DataTypes.STRING, 
        allowNull: false
        },
    codigo_postal: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },
}, { 
    tableName: 'direcciones', 
    timestamps: false 
});

module.exports = Direccion;
