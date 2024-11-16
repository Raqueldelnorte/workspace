const fetchArticle = require('./ejercicio6');

beforeEach(() => {
  fetch.resetMocks();
});

test('Debería loguear el estado y el contenido del artículo en una petición exitosa', async () => {
  fetch.mockResponseOnce(JSON.stringify({
    userId: 1,
    id: 1,
    title: 'Título del artículo',
    body: 'Contenido del artículo',
  }), { status: 200 });

  console.log = jest.fn();

  await fetchArticle();

  expect(console.log).toHaveBeenCalledWith('Estado de la petición:', 200);
  expect(console.log).toHaveBeenCalledWith('Contenido del artículo:', {
    userId: 1,
    id: 1,
    title: 'Título del artículo',
    body: 'Contenido del artículo',
  });
});

test('Debería manejar errores y loguearlos cuando la petición falla', async () => {
  fetch.mockResponseOnce(null, { status: 404 });

  console.error = jest.fn();

  await fetchArticle();

  expect(console.error).toHaveBeenCalledWith('Hubo un problema con la solicitud:', expect.any(Error));
});
