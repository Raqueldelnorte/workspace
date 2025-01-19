const express = require('express');
const students = require('./repositories/students');

const app = express();
const port = 3000;

app.use(express.json());
// Obtener todos los estudiantes
app.get('/students', (req, res) => {
  students.getAll().then((results) => res.json(results));
});

// Obtener un estudiante por ID
app.get('/students/:id', (req, res) => {
  const studentId = req.params.id;
  students.getById(studentId).then((student) => {
    if (!student) {
      return res.status(404).send('Student doesn’t exist');
    }
    res.json(student);
  }).catch((err) => {
    res.status(500).send('Internal server error');
  });
});
// Crear un nuevo estudiante
app.post('/students', (req, res) => {
  if (!(req.body.name && req.body.last_name && req.body.date_of_birth)) {
    res.status(422).send('All fields are required (name, last_name, date_of_birth)');
  } else {
    students.insert(req.body)
      .then((result) => {
        res.json({
          success: true,
          message: 'Student was saved successfully',
          student: result, // Incluye el resultado en la respuesta
        });
      })
      .catch((err) => {
        res.json({ success: false, message: err.detail });
      });
  }
});
// Middleware para manejar rutas no encontradas
app.use((req, res, next) => {
  res.status(404).send('Route not found');
});

app.listen(port, () => {
  console.log(`Example server listening on http://localhost:${port}`);
});
