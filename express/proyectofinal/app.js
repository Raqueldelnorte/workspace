const express = require('express');
const userRoutes = require('./routes/userRoutes');
const teacherRoutes = require('./routes/teacherRoutes');
const studentRoutes = require('./routes/studentRoutes');

const app = express();
app.use(express.json());

// Usar las rutas
app.use('/api/users', userRoutes);
app.use('/api/teachers', teacherRoutes);
app.use('/api/students', studentRoutes);

// Ruta raíz
app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.status(200).send('Bienvenido a mi proyecto final Fausto!!');
});
// Iniciar el servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
