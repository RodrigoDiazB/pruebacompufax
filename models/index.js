/**Archivo para especificar las tablas y las relaciones entre ellas mediante Sequelize */
const sequelize = require('../config/db');
const Cliente = require('./cliente');
const Direccion = require('./direccion');
const Orden = require('./orden');

Cliente.hasMany(Direccion, { foreignKey: 'cliente_id' });
Direccion.belongsTo(Cliente, { foreignKey: 'cliente_id' });

Cliente.hasMany(Orden, { foreignKey: 'cliente_id' });
Orden.belongsTo(Cliente, { foreignKey: 'cliente_id' });

module.exports = {
  sequelize,
  Cliente,
  Direccion,
  Orden,
};

