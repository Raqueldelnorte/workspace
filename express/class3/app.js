const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();
const port = 3000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Archivos estáticos
app.use('/static', express.static(path.join(__dirname, 'public')));

// Rutas
const bookRouter = require('./routes/book');
const taskRouter = require('./routes/task');
const studentRouter = require('./routes/student');
const userRouter = require('./routes/user');

app.use('/book', bookRouter);
app.use('/task', taskRouter);
app.use('/students', studentRouter);
app.use('/users', userRouter);

// Métodos de response
app.get('/methods/json', (req, res) => {
  res.json({ message: 'Respuesta JSON', success: true });
});

app.get('/methods/download', (req, res) => {
  res.download('./public/example.pdf', 'archivo.pdf');
});

app.get('/methods/redirect', (req, res) => {
  res.redirect('/methods/json');
});

app.get('/methods/render', (req, res) => {
  res.render('index', { title: 'Ejemplo Render' });
});

app.get('/methods/status', (req, res) => {
  res.sendStatus(404);
});

// Propiedades de request
app.get('/book/:id', (req, res) => {
  const {
    hostname, ip, params, route,
  } = req;
  res.json({
    hostname, ip, params, route,
  });
});

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(`Error: ${err.message}`);
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
