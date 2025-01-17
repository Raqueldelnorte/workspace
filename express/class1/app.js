// Se carga el módulo de Express
const express = require('express');
const mustacheExpress = require('mustache-express');
// Creo la aplicación Express
const app = express();
// Declaro el puerto de escucha
const port = 3000;
app.engine('html', mustacheExpress()); // Indica dónde buscar los partials
app.set('view engine', 'html');
app.set('views', `${__dirname}/views`);

// Defino la ruta que se llamará cuando se reciba una petición HTTP GET
// en la dirección '/'
// La función callback recibe una petición y una respuesta como argumentos
app.get('/', (req, res) => {
  // Se define la cabecera HTTP con el tipo de contenido
  res.set('Content-Type', 'text/plain');
  // Se responde, en el cuerpo de la respuesta con el mensaje "Hello World!!"
  res.status(200).send('Hello World!!');
});
app.get('/user', (req, res) => {
  // Se define la cabecera HTTP con el tipo de contenido
  res.set('Content-Type', 'text/plain');
  // Se responde, en el cuerpo de la respuesta con el mensaje "Hello World!!"
  res.status(200).send('Hello User!!');
});
app.get('/user/:name', (req, res) => {
  res.render('user_partial', { name: req.params.name });
});
app.get('/student/:id', (req, res) => {
  const studentId = req.params.id;
  res.render('student', { title: 'Student', id: studentId });
});

// Creo el servidor en el puerto ${port}
app.listen(port, () => {
  // Se escribe la URL para el acceso al servidor
  console.log(`Example server listening on http://localhost:${port}`);
});
