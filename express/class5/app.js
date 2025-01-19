const express = require('express');
const { body, validationResult } = require('express-validator');
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
  students.getById(studentId)
    .then((student) => {
      if (!student) {
        return res.status(404).send('Student doesn’t exist');
      }
      res.json(student);
    })
    .catch((err) => {
      res.status(500).send('Internal server error');
    });
});

// Endpoint POST para agregar un estudiante
app.post(
  '/students',
  [
    // Validación de los campos
    body('name').notEmpty().withMessage('Name is required'),
    body('last_name').notEmpty().withMessage('Last name is required'),
    body('date_of_birth').notEmpty().withMessage('Date of birth is required'),
    body('email').isEmail().withMessage('Please provide a valid email'), // Validación del email
  ],
  (req, res) => {
    // Verificar si hay errores de validación
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }
    const { email } = req.body;

    // Verificar si ya existe un estudiante con el mismo email
    students.getByEmail(email).then((existingStudent) => {
      if (existingStudent) {
        return res.status(422).json({
          success: false,
          message: 'A user already exists with this email',
        });
      }

      // Si la validación es correcta, proceder a insertar el estudiante
      students
        .insert(req.body)
        .then((result) => {
          res.json({
            success: true,
            message: 'Student was saved successfully',
            student: result,
          });
        })
        .catch((err) => {
          // Enviar un mensaje genérico si hay un error
          console.error(err); // Mostrar el error en consola para depuración
          res.status(500).json({ success: false, message: 'Internal server error' });
        });
    }).catch((err) => {
      // Si la consulta al email falla, responder con error 500
      console.error(err);
      res.status(500).json({ success: false, message: 'Internal server error' });
    });
  },
);

// Middleware para manejar rutas no encontradas
app.use((req, res, next) => {
  res.status(404).send('Route not found');
});

app.listen(port, () => {
  console.log(`Example server listening on http://localhost:${port}`);
});
