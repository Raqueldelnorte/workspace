const aplicar_descuento = require('./descuento.js');

describe('aplicar_descuento', () => {
  test('aplicar 10% si precio mayor que 200', () => {
    expect(aplicar_descuento(1000)).toBe('Tienes un 10% de descuento. El precio final es: 900.00 euros.');
  });
});
