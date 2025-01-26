const express = require('express');
const path = require('path');
const bcrypt = require('bcryptjs');
const { User } = require('../models');
// Importa el modelo de usuario
const router = express.Router();

// GET /login
router.get('/', (req, res) => {
  if (req.session.isLoggedIn) {
    return res.redirect('/home');
  }
  res.render('login'); // Renderiza login.ejs (asegúrate de renombrar login.html a login.ejs)
});

// POST /login
router.post('/', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Buscar el usuario por su email (en este caso, username es el email)
    const user = await User.findOne({ where: { email: username } });

    if (!user) {
      return res.render('error-login', { message: 'Usuario no encontrado' }); // Usar render para pasar datos
    }

    // Verificar si la contraseña proporcionada coincide con la almacenada en la base de datos
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.render('error-login', { message: 'Contraseña incorrecta' }); // Usar render para pasar datos
    }

    // Si las credenciales son correctas, guardar los datos del usuario en la sesión
    req.session.isLoggedIn = true;
    req.session.user = {
      id: user.id,
      email: user.email,
      type: user.type,
    };

    // Redirigir a la página home
    res.redirect('/home');
  } catch (error) {
    console.error(error);
    res.status(500).send('Ha ocurrido un error, inténtalo de nuevo más tarde');
  }
});

module.exports = router;
