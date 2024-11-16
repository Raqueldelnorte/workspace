const fetchArticle = require('./ejercicio7');
require('jest-fetch-mock').enableMocks();

describe('fetchArticle', () => {
  beforeEach(() => {
    fetch.resetMocks();
    jest.clearAllMocks();
    jest.spyOn(console, 'log').mockImplementation(() => {});
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  test('Debería loguear el estado y el contenido del artículo en una petición exitosa', async () => {
    const articleId = 1;

    fetch.mockResponseOnce(JSON.stringify({
      userId: 1,
      id: articleId,
      title: 'Título del artículo',
      body: 'Contenido del artículo',
    }), { status: 200 });

    await fetchArticle(articleId);

    expect(console.log).toHaveBeenCalledWith('Estado de la petición:', 200);
    expect(console.log).toHaveBeenCalledWith('Contenido del artículo:', expect.objectContaining({
      userId: 1,
      id: articleId,
      title: 'Título del artículo',
      body: 'Contenido del artículo',
    }));
  });

  test('Debería manejar errores y loguearlos cuando la petición falla', async () => {
    const articleId = 1;

    fetch.mockReject(new Error('Network error'));

    await fetchArticle(articleId);

    expect(console.error).toHaveBeenCalledWith('Hubo un problema con la solicitud:', expect.any(Error));
  });
});
