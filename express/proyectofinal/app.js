const express = require('express');
const path = require('path');
const session = require('express-session');
const userRoutes = require('./routes/userRoutes');
const teacherRoutes = require('./routes/teacherRoutes');
const studentRoutes = require('./routes/studentRoutes');
const loginRoutes = require('./routes/loginRoutes');
const tokenRoutes = require('./routes/tokenRoutes');
const { Teacher } = require('./models'); // Asegúrate de importar el modelo Teacher
require('dotenv').config(); // Para manejar variables de entorno (como la clave de sesión)

const app = express();

// Configuración de sesión
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'clave_por_defecto_segura', // Clave de sesión segura desde .env
    resave: false,
    saveUninitialized: true,
  }),
);

// Configuración para manejar datos de formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuración de vistas y archivos estáticos
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, 'public')));

// Middleware para verificar sesión
function isLoggedIn(req, res, next) {
  if (req.session.isLoggedIn) {
    return next();
  }
  res.redirect('/login');
}

// Usar las rutas de la API
app.use('/api/users', userRoutes);
app.use('/api/teachers', teacherRoutes);
app.use('/api/students', studentRoutes);
app.use('/api', tokenRoutes);

// Rutas para login
app.use('/login', loginRoutes);

// Ruta para servir la vista de home (requiere sesión)
app.get('/home', isLoggedIn, async (req, res) => {
  try {
    const { user } = req.session; // Usuario logueado

    // Buscar el profesor asociado
    const teacher = await Teacher.findOne({
      where: { userId: user.id },
    });

    // Renderizar la vista home con los datos del profesor
    res.render('home', { teacher: teacher || null }); // Si no hay profesor, renderiza sin datos
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener los detalles del profesor');
  }
});

// Ruta raíz
app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.status(200).send('Bienvenido a mi proyecto final Fausto!!');
});

// Middleware global para manejar errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Error interno del servidor' });
});

// Iniciar el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
