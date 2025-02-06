PROYECTO FINAL

Este proyecto se base en una aplicación web desarrollada con Express y Sequelize que gestiona usuarios, profesores y estudiantes. Los usuarios pueden ser administradores, profesores o estudiantes, con diferentes permis y funcionalidades disponibles según el rol. El proyecto incluye autenticación y autorización mediante sesiones y tokens JWT. Además, se realizan operaciones CRUD para manejar los datos de usuarios, profesores y estudiantes.

ESTRUCTURA DEL PROYECTO
* app.js (archivo principal que configura la aplicación Express y establece las rutas), usa middelware para manejar las sesiones, archivos estáticos y rutas API, configura sesión y control de acceso a través de la autenticación de usuarios.
* La carpeta routes contiene:
- loginRoutes.js este archivo maneja el login de los usuarios, validando las credenciales a través de bcrypt y gestionando la sesión.
- StudentRoutes.js permite las operaciones CRUD para gestionar los estudiantes. Además, valida si los profesores existen antes de asociarlos con los estudiantes.
- teacherRoutes.js gestiona los profesores y su relación con los usuarios y los estudiantes. Incluye operaciones como ver todos los profesores, agregar nuevos, actualizar y eliminar.

- tokenRoutes.js genera un token JWT cuando un usuario proporcina sus credenciales correctamente.


EJEMPLOS CON CURL

### Probando endpoints de USUARIOS

### Obtener todos los usuarios

curl -X GET http://localhost:3000/api/users

### Obtener un usuario por id

curl -X GET http://localhost:3000/api/users/1

### Crear un nuevo usuario con datos válidos

curl -X POST http://localhost:3000/api/users \
-H "Content-Type: application/json" \
-d '{"email": "otheruser@example.com", "password": "otherpassword", "type": "user"}'

### Actualizar un usuario por su ID

curl -X PUT http://localhost:3000/api/users/1 \
-H "Content-Type: application/json" \
-d '{"email": "actualizo@example.com", "password": "newsecurepassword", "type": "admin"}'

### Eliminar un usuario por su ID

curl -X DELETE http://localhost:3000/api/users/7 -H "Content-Type: application/json"

### Endpoints para activar usuario

curl -X POST http://localhost:3000/api/users/3/active \
-H "Content-Type: application/json"

### Obtener el estado de activación de un usuario.

curl -X GET http://localhost:3000/api/users/1/active \
-H "Content-Type: application/json"

### Endpoints para PROFESORES

### Obtener todos los profesores

curl -X GET http://localhost:3000/api/teachers

### Obtener un profesor por id

curl -X GET http://localhost:3000/api/teachers/1 \
-H "Content-Type: application/json"

### Dar de alta un profesor

curl -X POST http://localhost:3000/api/teachers \
-H "Content-Type: application/json" \
-d '{"dni": "12348878A", "name": "Francisco", "lastName": "Cruz", "dateOfBirth": "1989-02-20 00:00:00+00", "userId": 1}'

### Actualizar los datos de un profesor

curl -X PUT http://localhost:3000/api/teachers/1 \
-H "Content-Type: application/json" \
-d '{"dni": "12345678A", "name": "Rosanita", "lastName": "López", "dateOfBirth": "1985-02-20 00:00:00+00", "userId": 1}'

### Eliminar un profesor por ID

curl -X DELETE http://localhost:3000/api/teachers/4 \
-H "Content-Type: application/json"

### Probando endpoints de STUDENTS

### Obtener todos los estudiantes

curl -X GET http://localhost:3000/api/students \
-H "Content-Type: application/json"

### Obtener un estudiante por su ID

curl -X GET http://localhost:3000/api/students/1 \
-H "Content-Type: application/json"

### Crear un nuevo estudiante

curl -X POST http://localhost:3000/api/students \
-H "Content-Type: application/json" \
-d '{"dni": "1231233435A", "name": "Alberto", "lastName": "Cruz", "dateOfBirth": "2006-03-15 00:00:00+00", "teacherId": 2}'

### Actualizar un estudiante por su ID

curl -X PUT http://localhost:3000/api/students/1 \
-H "Content-Type: application/json" \
-d '{"dni": "1231233435A", "name": "Ionete", "lastName": "Cruz", "dateOfBirth": "2006-03-15 00:00:00+00", "teacherId": 2}'

### Borrar un estudiante por su ID

curl -X DELETE http://localhost:3000/api/students/3 \
-H "Content-Type: application/json"

### Ver estudiantes de un profesor. En este caso el 2.

curl -X GET http://localhost:3000/api/teachers/2/students \
-H "Content-Type: application/json"

### Usuario NO borrado con profesor asociado

curl -X DELETE http://localhost:3000/api/users/2 \
-H "Content-Type: application/json"

### Borra profesor sin alumnos asociados. Borrado teachers 5

curl -X DELETE http://localhost:3000/api/teachers/5 \
-H "Content-Type: application/json"

### El profesor existe y el usuario asociado está activo (el 2 es false)

curl -X GET http://localhost:3000/api/teachers/2/students \
-H "Content-Type: application/json"

### JSON de alumnos del profesor ordenados por fecha nacimiento. He tenido que cambiar el teacher 2 a active para que funcione.

curl -X GET http://localhost:3000/api/teachers/2/students \
 -H "Content-Type: application/json"

### Usuario existe y actualizar el campo active a true
 curl -X POST http://localhost:3000/api/users/1/activate \
  -H "Content-Type: application/json"

### Usuario existe solo muestra campo active
curl -X GET http://localhost:3000/api/users/1/active \
-H "Content-Type: application/json"

### Prueba de login
curl -X POST http://localhost:3000/login \
-H "Content-Type: application/json" \
-d '{"username": "user@example.com", "password": "user123"}'



### Probando el /api/token

curl -X POST http://localhost:3000/api/token \
-H "Content-Type: application/json" \
-d '{"username": "user@example.com", "password": "user123"}'
