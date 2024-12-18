const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');

const clientesRoutes = require('./routes/clientes');
const direccionesRoutes = require('./routes/direcciones');
const ordenesRoutes = require('./routes/ordenes');

const app = express();

app.use(bodyParser.json());

// Rutas
app.use('/clientes', clientesRoutes);
app.use('/direcciones', direccionesRoutes);
app.use('/ordenes', ordenesRoutes);

// Sincronización con la base de datos
sequelize.sync().then(() => console.log('Base de datos sincronizada'));

module.exports = app;
