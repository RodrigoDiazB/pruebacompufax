const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('pruebacompufax', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false, // Desactiva los logs de SQL
});

module.exports = sequelize;
