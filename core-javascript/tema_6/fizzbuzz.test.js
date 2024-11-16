const fizzBuzz = require('./fizzbuzz');

test('Solo se aceptan números válidos', () => {
  expect(fizzBuzz('palabra')).toEqual('Introduce solo números');
  expect(fizzBuzz(0)).toEqual('El valor cero no es admisible');
  expect(fizzBuzz(15)).toEqual('fizzbuzz');
  expect(fizzBuzz(9)).toEqual('fizz');
  expect(fizzBuzz(10)).toEqual('buzz');
  expect(fizzBuzz(7)).toEqual(7);
});
