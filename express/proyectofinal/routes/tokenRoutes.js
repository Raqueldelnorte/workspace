const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
// Ajusta la ruta según tu estructura de proyecto
const router = express.Router();

// Endpoint POST /api/token
router.post('/token', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Buscar el usuario en la base de datos
    const user = await User.findOne({ where: { email: username } });
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    // Verificar la contraseña
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Contraseña incorrecta' });
    }

    // Crear el token JWT
    const token = jwt.sign({ username: user.email }, 'clave_secreta', { expiresIn: '15m' });

    // Responder con el token
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

module.exports = router;
