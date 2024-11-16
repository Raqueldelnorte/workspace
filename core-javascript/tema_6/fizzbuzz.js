function fizzBuzz(num) {
  if (typeof num !== 'number' || isNaN(num)) {
    return 'Introduce solo números';
  } if (num === 0) {
    return 'El valor cero no es admisible';
  } if (num % 3 === 0 && num % 5 === 0) {
    return 'fizzbuzz';
  } if (num % 3 === 0) {
    return 'fizz';
  } if (num % 5 === 0) {
    return 'buzz';
  }
  return num; // Devuelve el número si no es divisible entre 3 o 5
}
module.exports = fizzBuzz;
