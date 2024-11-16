const fetchArticles = require('./ejercicio8');
require('jest-fetch-mock').enableMocks();

describe('fetchArticles', () => {
  beforeEach(() => {
    fetch.resetMocks();
    jest.clearAllMocks();

    jest.spyOn(console, 'log').mockImplementation(() => {});
    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(console, 'table').mockImplementation(() => {});
  });

  test('Debería loguear el estado y el número total de artículos en una petición exitosa', async () => {
    const mockArticles = [
      {
        userId: 1, id: 1, title: 'Título 1', body: 'Contenido 1',
      },
      {
        userId: 1, id: 2, title: 'Título 2', body: 'Contenido 2',
      },
      {
        userId: 1, id: 3, title: 'Título 3', body: 'Contenido 3',
      },
    ];

    fetch.mockResponseOnce(JSON.stringify(mockArticles), { status: 200 });

    await fetchArticles();

    expect(console.log).toHaveBeenCalledWith('Estado de la petición:', 200);
    expect(console.log).toHaveBeenCalledWith(`Total de artículos: ${mockArticles.length}`);
    expect(console.table).toHaveBeenCalledWith(mockArticles.map((article) => ({
      Title: article.title,
      Body: article.body,
    })));
  });

  test('Debería manejar errores y loguearlos cuando la petición falla', async () => {
    fetch.mockReject(new Error('Network error'));

    await fetchArticles();

    expect(console.error).toHaveBeenCalledWith('Hubo un problema con la solicitud:', expect.any(Error));
  });
});
