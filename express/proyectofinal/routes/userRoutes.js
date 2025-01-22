const express = require('express');
const bcrypt = require('bcryptjs');
const path = require('path');
const jwt = require('jsonwebtoken');
const { User, Teacher } = require('../models');

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

// Middleware para verificar que el usuario es admin
function isAdmin(req, res, next) {
  if (req.session.isLoggedIn && req.session.user.type === 'admin') {
    return next(); // El usuario es admin, continúa con la siguiente función
  }
  return res.status(401).send('No tienes permisos para acceder a esta página');
}

// GET /home
router.get('/home', async (req, res) => {
  if (!req.session.isLoggedIn) {
    return res.redirect('/login'); // Redirigir a login si no está logueado
  }

  const { user } = req.session;

  if (user.type === 'admin') {
    return res.redirect('/users'); // Si es admin, redirigir a /users
  }

  try {
    // Buscar el profesor asociado al usuario logueado
    const teacher = await Teacher.findOne({
      where: { userId: user.id },
    });

    if (!teacher) {
      return res.status(404).send('Profesor no encontrado');
    }

    // Renderizar la vista home.html con los datos del profesor
    res.render('home', { teacher });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener los datos del profesor');
  }
});

// POST /logout (Cerrar sesión)
router.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send('Error al cerrar sesión');
    }
    res.redirect('/login'); // Redirige a la página de login
  });
});

// GET /api/users
router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/users/:id
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST /api/users
router.post('/', async (req, res) => {
  try {
    const { email, password, type } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      email,
      password: hashedPassword,
      type,
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT /api/users/:id
router.put('/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      const { email, password, type } = req.body;
      const hashedPassword = password ? await bcrypt.hash(password, 10) : user.password;
      await user.update({
        email,
        password: hashedPassword,
        type,
      });
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE /api/users/:id
router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      // Verificar si el usuario tiene un profesor asociado
      const teacher = await Teacher.findOne({ where: { userId: req.params.id } });
      if (teacher) {
        return res.status(400).json({ error: 'Cannot delete user, as they are associated with a teacher' });
      }

      // Si no tiene dependencias, eliminar el usuario
      await user.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST /api/users/:id/active
router.post('/:id/active', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      user.active = true;
      await user.save();
      res.status(200).json(user); // Devuelve todos los datos del usuario actualizado
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/users/:id/active
router.get('/:id/active', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, {
      attributes: ['active'], // Solo devuelve el campo "active"
    });
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /users (Vista con listado de usuarios, solo accesible por admin)
router.get('/users', isAdmin, async (req, res) => {
  try {
    // Obtener todos los usuarios
    const users = await User.findAll();
    // Renderizar la vista users.html con el listado de usuarios
    res.render('users', { users });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener los usuarios');
  }
});

module.exports = router;
