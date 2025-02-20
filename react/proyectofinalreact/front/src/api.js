// src/api.js
const API_AUTH_BASE_URL = 'https://localhost:1443';
const API_BASE_URL = 'https://localhost:1443/api'; // Reemplaza con la URL base de tu API Express (¡HTTPS!)

// Función genérica para hacer peticiones fetch reutilizable
async function fetchData(url, method = 'GET', body = null, headers = {}) {
  const config = {
    method,
    headers: {
      'Content-Type': 'application/json', // Indica que enviamos y esperamos JSON
      ...headers, // Permite añadir headers adicionales si es necesario
    },
  };
  console.log("URL que se pasa a fetchData:", url); // *** AÑADIDO: Log de la URL ***
  console.log("API_BASE_URL:", API_BASE_URL); // *** AÑADIDO: Log de API_BASE_URL ***
  
  if (url.startsWith(API_BASE_URL)) { // *** Añadido: Verifica si la URL empieza con /api ***
    console.log("La URL SÍ comienza con API_BASE_URL"); // *** AÑADIDO: Log de condición URL ***
    const token = localStorage.getItem('jwtToken'); // Obtiene el token de localStorage
    console.log("Token JWT obtenido de localStorage:", token); // *** AÑADIDO: Log del token ***
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`; // Añade el header Authorization con el token
    }
  } else {
    console.log("La URL NO comienza con API_BASE_URL"); // *** AÑADIDO: Log de condición URL (else) ***
  }
 // ***  Log de los headers justo DESPUÉS de (intentar) añadir Authorization, ANTES del fetch ***
 console.log("Headers de la petición fetch (justo antes de fetch):", config.headers);

  if (body) {
    config.body = JSON.stringify(body); // Convierte el body a JSON si existe
  }

  try {
    const response = await fetch(url, config);

    if (!response.ok) {
      // Si la respuesta no es exitosa (códigos 4xx o 5xx), lanza un error
      const message = `Error HTTP: ${response.status} - ${response.statusText} en URL: ${url}`;
      console.error(message); // Opcional: Log para debugging
      throw new Error(message);
    }

    return await response.json(); // Parsea la respuesta como JSON y la retorna
  } catch (error) {
    console.error("Error al hacer fetch:", error);
    throw error; // Re-lanza el error para que el componente que llama pueda manejarlo
  }
}

// Funciones específicas para cada endpoint (¡las iremos añadiendo en los siguientes pasos!)

const api = {

  getToken: async (loginData) => {
    return fetchData(`${API_AUTH_BASE_URL}/token`, 'POST', loginData);
  },
  getAllUsers: async () => {
    return fetchData(`${API_BASE_URL}/user`);
  },
  
  // Ejemplo para obtener todos los profesores (si tienes endpoint /api/teacher/)
  getAllTeachers: async () => {
    return fetchData(`${API_BASE_URL}/teacher`);
  },
  // Dentro del objeto api
  getStudentsByTeacherId: async (teacherId) => {
  return fetchData(`${API_BASE_URL}/teacher/${teacherId}/students`);
},

  // Ejemplo para crear un nuevo usuario (si tienes endpoint POST /api/user/)
  createUser: async (userData) => {
    return fetchData(`${API_BASE_URL}/user`, 'POST', userData);
  },
  
  // ...  Añade aquí las funciones para todos los endpoints de tu API que vayas a usar ...
  };

export default api;