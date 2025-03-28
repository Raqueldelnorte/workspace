// Se carga el módulo de Express
const express = require('express');
const cookieParser = require('cookie-parser');

// Creo la aplicación Express
const app = express();

// Declaro el puerto de escucha
const port = 3000;

// Declaración de los middlewares que vamos a usar
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Importamos los routers
const bookRouter = require('./routes/book');
const taskRouter = require('./routes/task');
const studentRouter = require('./routes/student');
const userRouter = require('./routes/user');

// montamos los routers
app.use('/book', bookRouter);
app.use('/task', taskRouter);
app.use('/students', studentRouter);
app.use('/users', userRouter);

// Middleware para servir archivos estáticos
app.use('/static', express.static(`${__dirname}/public`));

// La función se ejecuta cada vez que la aplicación recibe una solicitud.
app.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

// La función se ejecuta para cualquier tipo de solicitud HTTP en la ruta /user/:id
app.use('/user/:id', (req, res, next) => {
  console.log('Request Type:', req.method);
  next();
});

// La función maneja las solicitudes GET a la ruta /user/:id
// app.get('/user/:id', (req, res, next) => {
//  res.send('USER');
// });

// Subpila de middleware que imprime información de la solicitud
//para cualquier tipo de solicitud HTTP en la ruta /user/:id
app.use(
  '/user/:id',
  (req, res, next) => {
  console.log('Request URL:', req.originalUrl);
  next();
},
(req, res, next) => {
  console.log('Request Type composed:', req.method);
  next();
},
// );

app.get('/error-test', (req, res, next) => {
  try {
    throw new Error('This is a test error');
  } catch (error) {
    next(error); // Propagar el error al middleware de manejo de errores
  }
});

app.get('/', (req, res) => {
  res.send('¡Bienvenido a la clase 2! Esta es la página principal.');
});

// Ruta para servir hello.html
app.get('/hello', (req, res) => {
  res.sendFile(`${__dirname}/public/hello.html`);
});

app.get('/cookie', (req, res) => {
  res.cookie('customCookie', 'cookie value', { maxAge: 900000, httpOnly: true }).send(
    'Cookie is set',
  ); // Establecer cookie con opciones
});

app.get('/check-cookie', (req, res) => {
  console.log('Cookies:', req.cookies);
  res.send(req.cookies.customCookie || 'No hay cookie'); // Manejo si la cookie no existe
});

// Middleware de manejo de errores, siempre va al final
app.use((err, req, res, next) => {
  console.error(err.stack); // Imprime el stack del error en la consola
  res.status(500).send(`Algo ha fallado!: ${err.message}`);
});
// Creo el servidor en el puerto ${port}
app.listen(port, () => {
  console.log(`Example server listening on http://localhost:${port}`);
});
