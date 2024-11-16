const capitalizelastname = require('./eje9.js');

test('debe ser verdadero', () => {
  expect(true).toBe(true);
});

describe('capitalizelastname', () => {
  test('debe capitalizar correctamente un nombre y apellido en minúsculas', () => {
    expect(capitalizelastname('marisa tomei')).toBe('Marisa TOMEI');
  });

  test('debe capitalizar correctamente un nombre y apellido en mayúsculas', () => {
    expect(capitalizelastname('MARISA TOMEI')).toBe('Marisa TOMEI');
  });

  test('debe capitalizar correctamente un nombre y apellido mezclados', () => {
    expect(capitalizelastname('mArIsA ToMeI')).toBe('Marisa TOMEI');
  });

  test('debe lanzar un TypeError si el argumento no es una cadena', () => {
    expect(() => capitalizelastname(123)).toThrow(TypeError);
    expect(() => capitalizelastname({})).toThrow(TypeError);
    expect(() => capitalizelastname([])).toThrow(TypeError);
    expect(() => capitalizelastname(null)).toThrow(TypeError);
  });

  test('debe lanzar un Error si la cadena tiene más de dos palabras', () => {
    expect(() => capitalizelastname('marisa tomei extra')).toThrow(Error);
  });

  test('debe lanzar un Error si la cadena tiene menos de dos palabras', () => {
    expect(() => capitalizelastname('marisa')).toThrow(Error);
    expect(() => capitalizelastname('')).toThrow(Error);
  });

});
