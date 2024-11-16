const entre_rangos = require('./eje6_tema12.js');

describe('entre_rangos', () => {
  test('En el rango', () => {
    const numeros = new Set([1, 3, 5, 7, 9, 11, 13, 15]);
    const resultado = entre_rangos(numeros, 5, 12);
    expect(resultado).toEqual(new Set([5, 7, 9, 11]));
  });

  test('Fuera de rango', () => {
    const numeros = new Set([1, 3, 5, 7, 9]);
    const resultado = entre_rangos(numeros, 10, 12);
    expect(resultado).toEqual(new Set());
  });

  test('Incluyendo cero en el rango', () => {
    const numeros = new Set([-2, -1, 0, 1, 2]);
    const resultado = entre_rangos(numeros, -1, 1);
    expect(resultado).toEqual(new Set([-1, 0, 1]));
  });

  test('Devuelve todos los elementos si todos están dentro del rango', () => {
    const numeros = new Set([1, 2, 3, 4, 5]);
    const resultado = entre_rangos(numeros, 1, 5);
    expect(resultado).toEqual(new Set([1, 2, 3, 4, 5]));
  });

  test('Con un solo número en array', () => {
    const numeros = new Set([5]);
    const resultado = entre_rangos(numeros, 6, 10);
    expect(resultado).toEqual(new Set());
  });
});
