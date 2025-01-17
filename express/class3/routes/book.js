const express = require('express');

const router = express.Router();

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `Detalles del libro con ID: ${id}` });
});

module.exports = router;
