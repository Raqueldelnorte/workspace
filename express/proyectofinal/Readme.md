### Pruebas de Login y Token

# 1. Prueba el login

POST http://localhost:3000/login
Content-Type: application/json

{
"email": "user@example.com",
"password": "user123"
}  //me intenta buscar los datos del profesor.

# 2. Obtener un token JWT

POST http://localhost:3000/api/token
Content-Type: application/json

{
"username": "user@example.com",
"password": "user123"
}

### Pruebas de Usuarios (/api/users)

# 3. Obtener todos los usuarios

GET http://localhost:3000/api/users

# 4. Obtener un usuario por ID

GET http://localhost:3000/api/users/1

# 5. Crear un nuevo usuario

POST http://localhost:3000/api/users
Content-Type: application/json

{
"email": "newuser@example.com",
"password": "newuser123",
"type": "student"
}

# 6. Actualizar un usuario

PUT http://localhost:3000/api/users/1
Content-Type: application/json

{
"email": "updateduser@example.com",
"password": "updateduser123",
"type": "teacher"
}

# 7. Eliminar un usuario

DELETE http://localhost:3000/api/users/2

# 8. Activar un usuario

POST http://localhost:3000/api/users/3/active

# 9. Verificar si un usuario está activo

GET http://localhost:3000/api/users/3/active

### Pruebas de Profesores (/api/teachers)

# 10. Obtener todos los profesores

GET http://localhost:3000/api/teachers

# 11. Obtener un profesor por ID

GET http://localhost:3000/api/teachers/2

# 12. Crear un nuevo profesor

POST http://localhost:3000/api/teachers
Content-Type: application/json

{
"name": "John Doe",
"email": "johndoe@example.com",
"subject": "Math",
"userId": 1
}

# 13. Actualizar un profesor

PUT http://localhost:3000/api/teachers/2
Content-Type: application/json

{
"name": "Updated Name",
"email": "updatedemail@example.com",
"subject": "Physics",
"userId": 1
}

# 14. Eliminar un profesor

DELETE http://localhost:3000/api/teachers/2

### Pruebas de Home y Logout

# 15. Ver la página de inicio (si no eres admin)

GET http://localhost:3000/home
Cookie: connect.sid=<reemplazar-con-tu-cookie-de-sesión>

# 16. Logout

POST http://localhost:3000/logout

### Ruta raíz

# 17. Prueba la ruta raíz

GET http://localhost:3000/
