const mapwithcb = require('./mapwithcb');

describe('mapwithcb', () => {
  test('llama a la función de devolución de llamada el número correcto de veces', () => {
    const mockCallback = jest.fn((x) => x * 2); // Función simulada que multiplica por 2
    const array = [1, 2, 3];

    mapwithcb(array, mockCallback);

    // Verifica que la función simulada fue llamada tres veces (una por cada elemento)
    expect(mockCallback).toHaveBeenCalledTimes(array.length);
  });

  test('llama a la función de devolución de llamada con los argumentos correctos', () => {
    const mockCallback = jest.fn((x) => x * 2);
    const array = [1, 2, 3];

    mapwithcb(array, mockCallback);

    // Verifica que la función simulada fue llamada con el valor, índice y array correctos
    expect(mockCallback).toHaveBeenNthCalledWith(1, 1, 0, array); // Primera llamada
    expect(mockCallback).toHaveBeenNthCalledWith(2, 2, 1, array); // Segunda llamada
    expect(mockCallback).toHaveBeenNthCalledWith(3, 3, 2, array); // Tercera llamada
  });

  test('retorna un nuevo array con los valores mapeados correctamente', () => {
    const mockCallback = jest.fn((x) => x * 2);
    const array = [1, 2, 3];

    const result = mapwithcb(array, mockCallback);

    // Verifica que el array resultante es [2, 4, 6] basado en el callback
    expect(result).toEqual([2, 4, 6]);
  });
});
