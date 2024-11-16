PROYECTO HTML/CSS

//INDEX.HTML//

    //3.A.B.- PAGINA PRINCIPAL CON MENSAJE Y NAVEGACIÓN CON LINKS//
Se declara el documento y se indica que el documento es una página HTML5.
Se especifica que el contenido de la página es en inglés. La costumbre porque está en español.

<head>
Se establece la codificación de los caracteres, formato universal.
Se indica que el ancho de la página debe coincidir con el ancho del dispositivo a usar.
Se establece el nivel de zoom inicial. Escala 1.
Se da nombre a la pestaña del navegador cuando se visita la página web.
Se carga la página de estilos css

    //FAVICON ESPECIFICACIONES//
Se carga el icono de la página web.</head>

<body> 
En el encabezado de la página se ha incluido el logo de la empresa, el nombre y la barra de navegación. Para ello se han usado estilos.
1.- .logo: se establece el ancho del logo, se mantiene la proporción original de la imagen al ajustar el ancho y se da un margen derecho para que no esté junto al nombre de la empresa.

2.- .header-container: diseño flexible, los elementos se alinearn verticalemente en el centro del contenedor, color de fondo grisáceo, espaciado interno 10px (superior, inferior), 20 px (izquierda y derecha).

3.- .company-name: tamaño de la letra, y color del texto.

4.- .navbar y ...: he creado una área de navegación con un estilo concreto para el ménu, con una lista no ordenada que se usará como menú de navegación con unos href que redirige a páginas diferentes. Color de fondo negro, centro centrado, espaciado superior e inferior.
    
    .navbar ul li: cada elemento se muestra en línea y le aplica margen horizontal separando cada enlace.
    .navbar ul li a: estilos aplicados a los enlaces del menú.
    .navbar ul li a:hover: aplica estilo cuando el ratón pasa por el enlace (color y subrayado).

5.- .mensaje-bienvenida: aplica formato al texto de bienvenida.Y pasa la animación durante 5 segundos.

6.- *: el selector universal hace que el estilo se aplique a todos los elementos de la página.

    //VÍDEO DE ANIMACIÓN QUE SE APLICA DURANTE X SEGUNDOS//
    
7.- .video-section: este estilo aplica formato a la animación. Lo destacado que cubra todo el espacio y que esté por detrás.

//SERVICIOS//

    4.A.B.C. PÁGINAS DE CONTENIDO, AL PULSAR EL LOGO DE EMPRESA VUELVE A HOME //
Se declara el documento y se indica que el documento es una página HTML5.
Se especifica que el contenido de la página es en inglés. La costumbre porque está en español.

<head>
Se establece la codificación de los caracteres, formato universal.
Se indica que el ancho de la página debe coincidir con el ancho del dispositivo a usar.
Se establece el nivel de zoom inicial. Escala 1.
Se da nombre a la pestaña del navegador cuando se visita la página web.
Se carga la página de estilos css
Se carga el icono de la página web.</head>

En el encabezado de la página se ha incluido el logo de la empresa, el nombre y la barra de navegación. Para ello se han usado estilos.
1.- .logo: se establece el ancho del logo, se mantiene la proporción original de la imagen al ajustar el ancho y se da un margen derecho para que no esté junto al nombre de la empresa.

2.- .header-container: diseño flexible, los elementos se alinean verticalemente en el centro del contenedor, color de fondo grisáceo, espaciado interno 10px (superior, inferior), 20 px (izquierda y derecha).

3.- .company-name: tamaño de la letra, y color del texto.

4.- .navbar y ...: he creado una área de navegación con un estilo concreto para el ménu, con una lista no ordenada que se usará como menú de navegación con unos href que redirige a páginas diferentes. Color de fondo negro, centro centrado, espaciado superior e inferior.

5.- .services-section: se define el modelo de cuadrícula con dos columnas de igual tamaño. Separación entre columnas, centrado horizontal y espacio interno vertical.

6.- service-card: establece fondo, borde, espacio y ancho de cada bloque. Además se ha incluido imágenes bajadas y colgadas en la carpeta img en cada caja.

//EVENTOS//
     4.A.B.C. PÁGINAS DE CONTENIDO, AL PULSAR EL LOGO DE EMPRESA VUELVE A HOME //
Sigue la misma línea que servicios con diferentes imágenes.

//SOBRE MÍ//
     4.A.B.C. PÁGINAS DE CONTENIDO, AL PULSAR EL LOGO DE EMPRESA VUELVE A HOME //
Sigue la misma línea que servicios y eventos con diferentes imágenes.

//CONTACTO//

    //VALIDACIÓN DEL EMAIL Y MENSAJE DE ERROR//
    5.A.B. MAPA DE UNA LOCALIZACIÓN DE GOOGLE MAPS Y UN FORMULARIO EN EL QUE INTRODUCIR EMAIL Y MENSAJE Y BOTÓN DE ENVIAR QUE NO HACE NADA
1.- La parte inicial del código de head y parte del body es idéntica que en casos anteriores, pero en este caso hay dos aportaciones más.
2.- . iframe: incorporacion de un mapa en el body.

.container y .colum: dos columnas que se disponen en horizontal y con un ancho en concreto.
.title: formato de los títulos de las columnas.

3.- .login-container: he creado un formulario de inicio con un modelo de contenedor formateado. Se solicita email y escribir un mensaje. En el caso de que el email no sea correcto reproduce un texto de error... al pulsar enviar no lleva a ningún sitio y recarga la página con el contenedor vacío.
.login-container button: le aplica formato al botón de enviar.
.login-container button:hover : le aplicar color azul cuando pasas cursor.

//INICIAR SESIÓN//

1.- La parte inicial del código de head y parte del body es idéntica que en casos anteriores, pero en este caso hay dos aportaciones más.
2.- . iframe: incorporacion de un mapa en el body.

    1.A.B.C. //PÁGINA DE LOGIN CON USUARIO Y CONTRASEÑA (OCULTA Y BOTÓN DE ACCIÓN Y DE RECUPERACIÓN DE CONTRASEÑA)

3.- La página iniciar sesión está en blanco. En el momento que alguien se loguea aparece la planificación de la boda de esa persona registrada (solo hay una y evidentemente no se ha creado una base de datos donde se recoge la información de nadie).

3.- .login-container: he creado un formulario de inicio con un modelo de contenedor formateado. Se solicita email y contraseña. Y al pulsar Acceder aparece el texto escrito.

4.- En el propio formulario de usuario y contraseña se da la opción de recuperar la contraseña y para ello al pulsar ¿Olvidaste tu contraseña? te lleva a la página de recuperación de contraseña que tiene el mismo formato que el resto y te pide para la recuperación el email, el teléfono y la fecha de nacimiento al pulsar recuperar te lleva a la home.

5.- Si el logueo es correcto. Aparece el texto correspondiente al usuario que se registra. Obviamente simula el envío del logueo y además deja la cuadrícula de iniciar sesión en blanco. 

.login-container a:hover subraya el olvidaste la contraseña al pasar cursor.
.login-container p: centrado y márgenes.
.login-container button hover: azul 

//RECOVER//
    //2.A.B. PÁGINA DE RECUPERAR CONTRASEÑA Y VUELTA A HOME//
1.- En el propio formulario de usuario y contraseña se da la opción de recuperar la contraseña y para ello al pulsar ¿Olvidaste tu contraseña? te lleva a la página de recuperación de contraseña que tiene el mismo formato que el resto y te pide para la recuperación el email, el teléfono y la fecha de nacimiento al pulsar recuperar te lleva a la home.
