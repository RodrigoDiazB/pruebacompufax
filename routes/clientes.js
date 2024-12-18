const express = require('express');
const { Cliente } = require('../models');
const router = express.Router();

// Crear cliente
router.post('/', async (req, res) => {
    try {
        const clientes = await Cliente.create(req.body);
        res.json({
              message: 'Cliente creado'
          });
    } catch( error) {
        console.error(error);
        return res.status(500).json({ 
            error: 'Error al crear al cliente.', 
            detalles: error.message 
        });
    }

});

// Todos los clientes
router.get('/', async (req, res) => {
  const clientes = await Cliente.findAll();
  res.json(clientes);
});

// Clientes por ID
router.get('/:id', async (req, res) => {
  const cliente = await Cliente.findByPk(req.params.id);
  res.json(cliente);
});

module.exports = router;
