function obtenerMultiplos() {
  const tamaño = parseInt(prompt('Introduce el tamaño del array de múltiplos:'));

  const numero = parseInt(prompt('Introduce el número para calcular sus múltiplos:'));

  const multiplos = Array.from({ length: tamaño }, (v, i) => numero * (i + 1));

  console.log('Array de múltiplos:', multiplos);

  return multiplos;
}
module.exports = obtenerMultiplos;
