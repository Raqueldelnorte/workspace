const express = require('express');
const bcrypt = require('bcryptjs');
const { User, Teacher } = require('../models'); // Asegúrate de importar el modelo Teacher

const router = express.Router();

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

module.exports = router;
