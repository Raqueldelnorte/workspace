document.getElementById('button').addEventListener('click', obtenerUbicacion);

// Función que obtiene la ubicación del usuario
function obtenerUbicacion() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitud = position.coords.latitude;
        const longitud = position.coords.longitude;
        
        // Mostramos latitud y longitud en el HTML
        document.getElementById('latitud').innerHTML = latitud;
        document.getElementById('longitud').innerHTML = longitud;
        
        // Hacemos la llamada AJAX usando las coordenadas obtenidas
        ajaxCheckWeather(latitud, longitud);
      },
      (error) => {
        alert('No se pudo obtener la ubicación. Permisos denegados o problema de ubicación.');
      }
    );
  } else {
    alert("La Geolocalización no es soportada por este navegador.");
  }
}

// Función que hace la llamada AJAX a OpenWeatherMap usando latitud y longitud
function ajaxCheckWeather(lat, lon) {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };
  const apiKey = '2123b15abf5dbccb4b78d19ccea8dd7d'; // Clave de OpenWeatherMap
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=es&appid=${apiKey}`;

  fetch(url, requestOptions)
    .then((response) => response.text())
    .then((result) => responseManager(JSON.parse(result)))
    .catch((error) => alert('error', error));
}

/* funcion principal que gestiona la respuesta a la llamada AJAX */
function responseManager(resp) {
  console.log(resp);
  cambiaIcono(resp.weather[0].icon);
  muestraDesc(resp.weather[0].description);
  muestraTemperatura(resp.main.temp);
  muestraHumedad(resp.main.humidity);
}

/* funciones auxiliares para cambiar el HTML/CSS */

function cambiaIcono(nombreIco) {
  // añade o cambia el icono que tiene el id icono
  // utiliza iconos que se enecuentran en el directorio "img" y que tienen el nombre en formato  nombreIco@2x.png
  icono = document.getElementById('icono');
  icono.src = `img/${nombreIco}@2x.png`;
}

function muestraDesc(desc) {
  // Lleva un texto ( que contiene la descripción de la previsión) a la página HTML
  prev = document.getElementById('prevision');
  prev.innerHTML = desc;
}

function muestraUbicacion(ubicacion) {
  // Lleva un texto (que contiene la ubicación pedida por el usuario) a la pagina HTML
  elemento = document.getElementById('ubicacionPedida');
  elemento.innerHTML = ubicacion;
}
// Muestra la temperatura en Celsius
function muestraTemperatura(temp) {
  // Convierte de Kelvin a Celsius
  const temperaturaCelsius = temp - 273.15;

  // Coloca la temperatura en el HTML, redondeada a un decimal
  const tempElement = document.getElementById('temp');
  tempElement.innerHTML = temperaturaCelsius.toFixed(1);
}

// Muestra la humedad
function muestraHumedad(humidity) {
  const humidityElement = document.getElementById('humedad');
  humidityElement.innerHTML = humidity;
}
