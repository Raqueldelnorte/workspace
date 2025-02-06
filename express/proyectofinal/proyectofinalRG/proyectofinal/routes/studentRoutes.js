// routes/studentRoutes.js
const express = require('express');
const { Student, Teacher } = require('../models');

const router = express.Router();

// GET /api/students
router.get('/', async (req, res) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/students/:id
router.get('/:id', async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST /api/students
router.post('/', async (req, res) => {
  try {
    const {
      dni, name, lastName, dateOfBirth, teacherId,
    } = req.body;

    // Verifica si el profesor existe
    const teacher = await Teacher.findByPk(teacherId);
    if (!teacher) {
      return res.status(400).json({ error: 'Profesor no encontrado' });
    }

    // Crea el nuevo estudiante
    const newStudent = await Student.create({
      dni,
      name,
      lastName,
      dateOfBirth,
      teacherId,
    });

    res.status(201).json(newStudent); // Devuelve el estudiante creado
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT /api/students/:id
router.put('/:id', async (req, res) => {
  try {
    const {
      dni, name, lastName, dateOfBirth, teacherId,
    } = req.body;

    // Buscar al estudiante por su ID
    const student = await Student.findByPk(req.params.id);
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }

    // Verificamos si el profesor con teacherId existe
    const teacher = await Teacher.findByPk(teacherId);
    if (!teacher) {
      return res.status(404).json({ error: 'Teacher not found' });
    }

    // Actualizar los datos del estudiante
    student.dni = dni || student.dni;
    student.name = name || student.name;
    student.lastName = lastName || student.lastName;
    student.dateOfBirth = dateOfBirth || student.dateOfBirth;
    student.teacherId = teacherId || student.teacherId;

    // Guardamos los cambios
    await student.save();

    res.json(student); // Respondemos con el estudiante actualizado
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE /api/students/:id
router.delete('/:id', async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }

    await student.destroy();

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
