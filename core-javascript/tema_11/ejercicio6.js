async function fetchArticle() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

    console.log('Estado de la petición:', response.status);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    console.log('Contenido del artículo:', data);
  } catch (error) {
    console.error('Hubo un problema con la solicitud:', error);
  }
}

module.exports = fetchArticle;
