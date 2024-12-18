const express = require('express');
const { Orden } = require('../models');
const router = express.Router();

// Función para construir el folio con la palabra TEST concatenado con 6 alfanuméricos
function generarFolio() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let random = '';
    for (let i = 0; i < 6; i++) {
      random += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return `TEST${random}`;
  }
  
  // Crear órden
  router.post('/', async (req, res) => {
    const { cliente_id, items } = req.body;
  
    if (!cliente_id || !items || !Array.isArray(items)) {
      return res.status(400).json({
        error: 'Se requiere "cliente_id" y un arreglo de "items" con producto y cantidad.',
      });
    }
  
    try {
      // Generar el folio como se indicó
      const folio = generarFolio();
  
      // Crear órdenes para cada ítem
      const ordenes = await Promise.all (
        items.map((item) =>
          Orden.create({
            cliente_id,
            producto: item.producto,
            cantidad: item.cantidad,
            folio,
          })
        )
      );
  
      res.status(201).json({
        folio,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error: 'Error al crear las órdenes.',
        detalles: error.message,
      });
    }
  });

// Todas las órdenes
router.get('/', async (req, res) => {
  const ordenes = await Orden.findAll();
  res.json(ordenes);
});

// Orden por Id usuario
router.get('/:cliente_id', async (req, res) => {
  const ordenes = await Orden.findAll({ where: { cliente_id: req.params.cliente_id } });
  res.json(ordenes);
});

// Ordenes por Folio
router.get('/folio/:folio', async (req, res) => {
  const orden = await Orden.findOne({ where: { folio: req.params.folio } });
  res.json(orden);
});

module.exports = router;
