const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Orden = sequelize.define('Orden', {
    id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
    },
    cliente_id: { 
        type: DataTypes.INTEGER, 
        allowNull: false 
    },
    producto: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },
    cantidad: { 
        type: DataTypes.INTEGER, 
        allowNull: false 
    },
    fecha_pedido: { 
        type: DataTypes.DATE, 
        defaultValue: DataTypes.NOW 
    },
    folio: { 
        type: DataTypes.STRING, 
        unique: true 
    },
}, { 
    tableName: 'ordenes', 
    timestamps: false
 });

module.exports = Orden;
