const TransformadorString = require('./tema_8.js');

describe('TransformadorString', () => {
  let transformador;

  beforeEach(() => {
    transformador = new TransformadorString('Esto es una prueba');
  });

  test('debería convertir el string a un array de caracteres', () => {
    const resultado = transformador.convertirAArrayDeCaracteres();
    expect(resultado).toEqual(['E', 's', 't', 'o', ' ', 'e', 's', ' ', 'u', 'n', 'a', ' ', 'p', 'r', 'u', 'e', 'b', 'a']);
  });

  test('debería ordenar aleatoriamente los caracteres', () => {
    const resultado = transformador.ordenarAleatoriamente();
    expect(resultado).toHaveLength(18);
  });

  test('debería invertir el orden de los caracteres', () => {
    const resultado = transformador.invertirOrdenCaracteres();
    expect(resultado).toEqual(['a', 'b', 'e', 'u', 'r', 'p', ' ', 'a', 'n', 'u', ' ', 's', 'e', ' ', 'o', 't', 's', 'E']);
  });

  test('debería quitar las vocales', () => {
    const resultado = transformador.quitarVocales();
    expect(resultado).toEqual('st s n prb');
  });

  test('debería quitar las consonantes', () => {
    const resultado = transformador.quitarConsonantes();
    expect(resultado).toEqual('Eo e ua uea');
  });

  test('debería retornar un array de palabras', () => {
    const resultado = transformador.arrayDePalabras();
    expect(resultado).toEqual(['Esto', 'es', 'una', 'prueba']);
  });

  test('debería invertir el orden de las palabras', () => {
    const resultado = transformador.invertirOrdenPalabras();
    expect(resultado).toEqual('prueba una es Esto');
  });
});
