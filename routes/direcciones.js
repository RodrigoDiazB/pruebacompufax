const express = require('express');
const { Direccion } = require('../models');
const router = express.Router();

// Todas las direcciones
router.get('/', async (req, res) => {
  const direcciones = await Direccion.findAll();
  res.json(direcciones);
});

// Actualizar dirección
router.post('/', async (req, res) => {
    const { id } = req.query; 
    const { calle, ciudad, codigo_postal } = req.body;
  
    if (!id) {
      return res.status(400).json({ 
            error: 'El parámetro "id" es obligatorio en query.' 
        });
    }
  
    try {
      const [updated] = await Direccion.update (
        { calle, 
          ciudad, 
          codigo_postal 
        }, 
        { where: { id } }
      );
  
      if (updated) {
        const direccionActualizada = await Direccion.findByPk(id);
        return res.status(201).json ({
          message: 'Dirección actualizada exitosamente.',
          direccion: direccionActualizada,
        });
      }
  
      return res.status(404).json({ message: 'Dirección no encontrada.' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ 
            error: 'Error al actualizar la dirección.', 
            detalles: error.message 
        });
    }
  });

module.exports = router;
