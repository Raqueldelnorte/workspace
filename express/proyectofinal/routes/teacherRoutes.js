const express = require('express');
const { Teacher, User, Student } = require('../models');
// Importamos Student para verificar la relación
const router = express.Router();

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
