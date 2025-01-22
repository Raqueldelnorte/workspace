const express = require('express');
const path = require('path'); // Para manejar rutas de archivos
const session = require('express-session'); // Middleware para manejo de sesiones
const userRoutes = require('./routes/userRoutes');
const teacherRoutes = require('./routes/teacherRoutes');
const studentRoutes = require('./routes/studentRoutes');
const loginRoutes = require('./routes/loginRoutes'); // Ruta para login

const app = express();

// Configuración de sesión
app.use(
  session({
    secret: 'aleatorioyseguro',
    resave: false,
    saveUninitialized: true,
  }),
);

// Configuración para poder manejar datos de formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuración de vistas y archivos estáticos
app.set('views', path.join(__dirname, 'views')); // Directorio de vistas
app.set('view engine', 'html'); // Usamos HTML para renderizar
app.engine('html', require('ejs').renderFile);
// Renderizar archivos HTML con EJS
app.use(express.static(path.join(__dirname, 'public'))); // Archivos estáticos

// Usar las rutas de la API
app.use('/api/users', userRoutes);
app.use('/api/teachers', teacherRoutes);
app.use('/api/students', studentRoutes);

// Rutas para el login y home
app.use('/login', loginRoutes);

// Ruta para servir la vista de home
app.get('/home', (req, res) => {
  if (req.session.isLoggedIn) {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
  } else {
    res.redirect('/login');
  }
});

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
