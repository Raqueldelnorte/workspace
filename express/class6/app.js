// Se carga el módulo de Express
const express = require('express');
// Creo la aplicación Express
const app = express();
// Declaro el puerto de escucha
const port = 3000;
// 2-Cargo el módulo de cookie-parser
const cookieParser = require('cookie-parser');
// 2.2 Cargo el módulo de express-session
const session = require('express-session');
const jwt = require('jsonwebtoken');
const path = require('path');

// 3-Cargo la función middleware de cookies
app.use(cookieParser('ClaveSuperSecreta'));
// Para procesar los datos del formulario
app.use(express.urlencoded({ extended: true }));

// 3.2-Cargo la función middleware de session
app.use(session({
  secret: 'ClaveUltraSecreta',
  resave: false,
  saveUninitialized: false,
}));

// Declaro la clave secreta para JWT
const JWT_SECRET = 'ClaveMegaSecreta';

// Ejercicio 1: Endpoint para la ruta /login (GET)
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

// Ejercicio 2: Endpoint para la ruta /login (POST)
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Verificar las credenciales
  if (username === 'foo' && password === 'bar') {
    req.session.isLoggedIn = true; // Establecer la sesión
    return res.redirect('/home'); // Redirigir a /home
  }

  res.status(401).send('Invalid credentials'); // Si no son válidos
});

// Ejercicio 3: Ruta GET /home (mostrará home.html si está logueado, de lo contrario redirige a /login)
app.get('/home', (req, res) => {
  if (req.session.isLoggedIn) {
    // Si está logueado, renderiza home.html
    res.send('<h1>Welcome to Home Page</h1><button><a href="/logout">Logout</a></button>');
  } else {
    // Si no está logueado, redirige a /login
    res.redirect('/login');
  }
});

// Ejercicio 4: Ruta POST /logout (Elimina la sesión y redirige a /login)
app.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send('Failed to logout');
    }
    res.redirect('/login'); // Redirigir a login después de cerrar sesión
  });
});

// **Nuevo Endpoint**: POST /api/token para generar un JWT
app.post('/api/token', (req, res) => {
  const { username, password } = req.body;

  // Verificar las credenciales
  if (username === 'foo' && password === 'bar') {
    // Crear el payload para el token
    const token = jwt.sign(
      { username }, // El payload contiene el username
      JWT_SECRET, // Clave secreta para firmar el JWT
      { expiresIn: '5m' }, // El token expira en 5 minutos
    );

    // Enviar el token en la respuesta
    return res.json({ token });
  }

  // Si las credenciales no son válidas, devolver un error
  return res.status(401).json({ message: 'Invalid credentials' });
});

// Ruta para asignar las cookies
app.get('/cookies/set', (req, res) => {
  const date = new Date();
  date.setHours(date.getHours() + 5);
  res.cookie('customCookie', 'Cookie value', {
    secure: false,
    httpOnly: true,
    expires: date,
    sameSite: 'strict',
  });
  res.cookie(
    'customSignedCookie',
    'Cookie value signed',
    {
      signed: true,
      httpOnly: true,
      expires: date,
      sameSite: 'strict',
    },
  );
  res.send('Cookies set!');
});

// Ruta para obtener los valores de las cookies
app.get('/cookies', (req, res) => {
  console.log('Cookies: ', req.cookies);
  console.log('Signed Cookies: ', req.signedCookies);
  res.json({
    customCookie: req.cookies.customCookie,
    customSignedCookie: req.signedCookies.customSignedCookie,
  });
});

// Ruta protegida para las cookies
app.get('/protected', (req, res) => {
  if (req.cookies.customCookie) {
    res.send('Cookie has been set!');
  } else {
    res.send("The Cookie doesn't exist!");
  }
});

// Ruta para eliminar las cookies
app.get('/cookies/delete', (req, res) => {
  res.clearCookie('customCookie');
  res.clearCookie('customSignedCookie');
  res.send('Cookies removed!');
});

// Ruta para asignar la session
app.get('/sessions/set', (req, res) => {
  req.session.isSessionSet = true;
  res.send('isSessionSet set!');
});

// Ruta para obtener los valores de la session
app.get('/sessions', (req, res) => {
  console.log('Sessions: ', req.session);
  res.json({
    isSessionSet: req.session.isSessionSet,
  });
});

// Ruta protegida, necesita que la variable haya sido configurada
app.get('/protected-by-session', (req, res) => {
  if (req.session.isSessionSet) {
    res.send('isSessionSet has been set!');
  } else {
    res.send("The session variable doesn't exist!");
  }
});

// Ruta para eliminar la variable de la session
app.get('/sessions/delete', (req, res) => {
  delete req.session.isSessionSet;
  res.send('Session variable removed!');
});

// Ruta para generar el token JWT
app.get('/jwt/set', (req, res) => {
  const token = jwt.sign(
    { data: 'jwt value' },
    JWT_SECRET,
    { expiresIn: '5m' },
  );
  res.json({ token });
});

// Middleware para obtener el data de JWT
const isAuth = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({
      message: 'Authorization Header missing',
    });
  }
  const { authorization } = req.headers;
  const token = authorization.split(' ')[1];
  let jwtData;
  try {
    jwtData = jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return res.status(401).json({
      message: 'Invalid Token.',
    });
  }
  req.data = jwtData.data;
  next();
};

// Ruta protegida para obtener datos de JWT
app.get('/jwt', isAuth, (req, res) => {
  res.json({ data: req.data });
});

// **Nuevo Endpoint: GET /api/protected**
app.get('/api/protected', isAuth, (req, res) => {
  // Si el token es válido, devolver el username
  res.json({
    username: req.data.username, // El username decodificado
  });
});

// Ruta raíz
app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.status(200).send('Hello World!!');
});

// Arrancar el servidor en el puerto 3000
app.listen(port, () => {
  console.log(`Example server listening on http://localhost:${port}`);
});
