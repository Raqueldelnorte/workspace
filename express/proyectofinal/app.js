const express = require('express');
const path = require('path'); // Para manejar rutas de archivos
const session = require('express-session'); // Middleware para manejo de sesiones
const userRoutes = require('./routes/userRoutes');
const teacherRoutes = require('./routes/teacherRoutes');
const studentRoutes = require('./routes/studentRoutes');
const loginRoutes = require('./routes/loginRoutes');
const tokenRoutes = require('./routes/tokenRoutes'); // Importa las rutas del token

const app = express(); // Declaración de app aquí

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
app.set('view engine', 'ejs'); // Usamos ejs para renderizar
app.engine('html', require('ejs').renderFile);
// Renderizar archivos EJS directamente
app.use(express.static(path.join(__dirname, 'public'))); // Archivos estáticos

// Usar las rutas de la API
app.use('/api/users', userRoutes);
app.use('/api/teachers', teacherRoutes);
app.use('/api/students', studentRoutes);
app.use('/api', tokenRoutes); // Ahora está en el orden correcto

// Rutas para el login y home
app.use('/login', loginRoutes);

// Ruta para servir la vista de home
app.get('/home', async (req, res) => {
  if (req.session.isLoggedIn) {
    try {
      // Obtener el usuario logueado de la sesión
      const { user } = req.session;

      // Buscar el profesor asociado a este usuario
      const teacher = await Teacher.findOne({
        where: { userId: user.id }, // Asegúrate de que user.id esté correcto
      });

      if (teacher) {
        // Si el profesor existe, renderiza la vista con los detalles del profesor
        res.render('home', { teacher });
      } else {
        // Si no hay un profesor asociado, muestra un mensaje adecuado
        res.render('home', { teacher: null });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al obtener los detalles del profesor');
    }
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
