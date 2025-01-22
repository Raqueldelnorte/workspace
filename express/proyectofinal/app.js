const express = require('express');
const bcrypt = require('bcryptjs');
const { User, Teacher, Student } = require('./models'); // Asegúrate de que las rutas sean correctas

const app = express();
app.use(express.json()); // Para procesar JSON en el cuerpo de las peticiones

// Ruta para obtener todos los usuarios
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los usuarios' });
  }
});

// Ruta para obtener un usuario por ID
app.get('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el usuario' });
  }
});

// Ruta para crear un nuevo usuario
app.post('/api/users', async (req, res) => {
  const {
    email, password, type, active,
  } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      email, password: hashedPassword, type, active,
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el usuario' });
  }
});

// Ruta para actualizar un usuario
app.put('/api/users/:id', async (req, res) => {
  const {
    email, password, type, active,
  } = req.body;
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      if (password) {
        user.password = await bcrypt.hash(password, 10);
      }
      user.email = email;
      user.type = type;
      user.active = active;
      await user.save();
      res.json(user);
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el usuario' });
  }
});

// Ruta para eliminar un usuario
app.delete('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      const teacher = await Teacher.findOne({ where: { userId: user.id } });
      if (teacher) {
        return res.status(400).json({ message: 'No se puede borrar un usuario con profesor asociado' });
      }
      await user.destroy();
      res.status(200).json({ message: 'Usuario eliminado' });
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el usuario' });
  }
});

// Ruta para obtener los estudiantes de un profesor
app.get('/api/teachers/:teacher_id/students', async (req, res) => {
  try {
    const teacher = await Teacher.findByPk(req.params.teacher_id);
    if (!teacher) {
      return res.status(404).json({ message: 'Profesor no encontrado' });
    }

    const user = await User.findByPk(teacher.userId);
    if (!user || !user.active) {
      return res.status(401).json({ message: 'El profesor no está activo o su usuario está inactivo' });
    }

    const students = await Student.findAll({ where: { teacherId: teacher.id }, order: [['dateOfBirth', 'ASC']] });
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los estudiantes' });
  }
});

// Ruta para activar un usuario
app.post('/api/users/:id/active', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      user.active = true;
      await user.save();
      res.json(user);
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al activar el usuario' });
  }
});

// Ruta para obtener el estado "active" de un usuario
app.get('/api/users/:id/active', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      res.json({ active: user.active });
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el estado de usuario' });
  }
});

// Inicia el servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
