async function fetchArticles() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    console.log('Estado de la petición:', response.status);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    console.log(`Total de artículos: ${data.length}`);

    console.table(data.map((article) => ({
      Title: article.title,
      Body: article.body,
    })));
  } catch (error) {
    console.error('Hubo un problema con la solicitud:', error);
  }
}

module.exports = fetchArticles;
