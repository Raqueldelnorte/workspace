/* Script de ejemplo  */

// Añadimos un event listener al botón HTML.
button = document.getElementById('button');
button.addEventListener('click', ajaxCheckWeather);

function ajaxCheckWeather() {
  // obtenemos la información que necesitamos del formulario
  const ubicacion = document.getElementById('location').value;

  // Mostramos la ubicación en el documento HTML
  muestraUbicacion(ubicacion);

  /* LLAMADA AJAX */
  // usamos la API provista en   https://openweathermap.org/current#name */
  // config llamada AJAX
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${ubicacion}&lang=es&appid=2123b15abf5dbccb4b78d19ccea8dd7d`;
  // ejemplo  url = "https://api.openweathermap.org/data/2.5/weather?q=Pamplona,es&&lang=es&appid=xxxxxxxx"
  // hacemos llamada AJAX, gestionamos respuesta con responseManager(resp)
  // gestionamos los errores con una alerta
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
