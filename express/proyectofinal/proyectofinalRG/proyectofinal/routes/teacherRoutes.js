const express = require('express');
const { Teacher, User, Student } = require('../models');
// Importamos Student para verificar la relación
const router = express.Router();

// GET /api/teachers
// Endpoint para obtener todos los profesores
router.get('/', async (req, res) => {
  try {
    // Obtenemos todos los profesores, incluyendo información del usuario asociado
    const teachers = await Teacher.findAll({
      include: [{
        model: User, // Incluye la relación con el modelo User
        attributes: ['id', 'email'], // Incluye campos específicos del usuario
      }],
    });
    res.json(teachers); // Retornamos los datos de los profesores
  } catch (error) {
    res.status(500).json({ error: error.message }); // Manejamos errores
  }
});

// GET /api/teachers/:id
router.get('/:id', async (req, res) => {
  try {
    // Obtenemos el profesor según el ID recibido en la URL
    const teacher = await Teacher.findByPk(req.params.id, {
      include: [{
        model: User, // Incluye la relación con el modelo User
        attributes: ['id', 'email'], // Incluye campos específicos del usuario
      }],
    });

    // Si no se encuentra el profesor, respondemos con un error 404
    if (!teacher) {
      return res.status(404).json({ error: 'Teacher not found' });
    }

    res.json(teacher); // Retornamos los datos del profesor
  } catch (error) {
    res.status(500).json({ error: error.message }); // Manejamos errores
  }
});

// POST /api/teachers
// Endpoint para dar de alta un nuevo profesor
router.post('/', async (req, res) => {
  try {
    const {
      dni, name, lastName, dateOfBirth, userId,
    } = req.body;

    // Validación de campos obligatorios
    if (!dni || !name || !lastName || !dateOfBirth || !userId) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Crear el nuevo profesor
    const newTeacher = await Teacher.create({
      dni,
      name,
      lastName,
      dateOfBirth,
      userId, // Relación con el modelo User
    });

    // Retornar el nuevo profesor creado
    res.status(201).json(newTeacher);
  } catch (error) {
    res.status(500).json({ error: error.message }); // Manejamos errores
  }
});

/// GET /api/teachers/:teacher_id/students
router.get('/:teacher_id/students', async (req, res) => {
  try {
    const teacher = await Teacher.findByPk(req.params.teacher_id);
    if (!teacher) {
      return res.status(404).json({ error: 'Teacher not found' });
    }
    const user = await User.findByPk(teacher.userId);
    if (user && user.active) {
      const students = await teacher.getStudents({ order: [['dateOfBirth', 'ASC']] });
      res.json(students);
    } else {
      res.status(401).json({ error: 'Teacher\'s user is not active' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// PUT /api/teachers/:id
// Endpoint para actualizar los datos de un profesor
router.put('/:id', async (req, res) => {
  try {
    const {
      dni, name, lastName, dateOfBirth, userId,
    } = req.body;

    // Validación de campos obligatorios
    if (!dni || !name || !lastName || !dateOfBirth || !userId) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Buscar el profesor por ID
    const teacher = await Teacher.findByPk(req.params.id);

    // Si no se encuentra el profesor, respondemos con un error 404
    if (!teacher) {
      return res.status(404).json({ error: 'Teacher not found' });
    }

    // Actualizar los datos del profesor
    teacher.dni = dni;
    teacher.name = name;
    teacher.lastName = lastName;
    teacher.dateOfBirth = dateOfBirth;
    teacher.userId = userId;

    // Guardar los cambios
    await teacher.save();

    // Retornar el profesor actualizado
    res.json(teacher);
  } catch (error) {
    res.status(500).json({ error: error.message }); // Manejamos errores
  }
});

// DELETE /api/teachers/:id
router.delete('/:id', async (req, res) => {
  try {
    const teacher = await Teacher.findByPk(req.params.id);
    if (teacher) {
      // Verificar si el profesor tiene alumnos asociados
      const students = await Student.findOne({ where: { teacherId: req.params.id } });
      if (students) {
        return res.status(400).json({ error: 'Cannot delete teacher, as they have students associated' });
      }

      // Si no tiene dependencias, eliminar el profesor
      await teacher.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Teacher not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
