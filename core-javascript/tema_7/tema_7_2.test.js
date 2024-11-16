const obtenerMultiplosConArgumentos = require('./tema_7_2.js');

describe('Pruebas para obtener múltiplos según argumentos', () => {
  test('Debe devolver [4, 8] cuando el tamaño es 2 y el número es 4', () => {
    const resultado = obtenerMultiplosConArgumentos(2, 4);
    expect(resultado).toEqual([4, 8]);
  });

  test('Debe devolver [5, 10, 15] cuando el tamaño es 3 y el número es 5', () => {
    const resultado = obtenerMultiplosConArgumentos(3, 5);
    expect(resultado).toEqual([5, 10, 15]);
  });

  test('Debe devolver un array vacío [] cuando el tamaño es 0', () => {
    const resultado = obtenerMultiplosConArgumentos(0, 7);
    expect(resultado).toEqual([]);
  });

  test('Debe devolver [-3, -6, -9] cuando el tamaño es 3 y el número es -3', () => {
    const resultado = obtenerMultiplosConArgumentos(3, -3);
    expect(resultado).toEqual([-3, -6, -9]);
  });
});
