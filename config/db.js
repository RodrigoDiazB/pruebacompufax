/**Archivo para configuración de base de datos mediante Sequelize */
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('pruebacompufax', 'root', 'root', {
  host: 'localhost', 
  dialect: 'mysql',
  logging: false, 
});

module.exports = sequelize;
