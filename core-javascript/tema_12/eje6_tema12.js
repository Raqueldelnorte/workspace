function entre_rangos(numeros, valor1, valor2) {
  return new Set([...numeros].filter((num) => num >= valor1 && num <= valor2));
}

const numeros = new Set([1, 3, 5, 7, 9, 11, 13, 15]);
const resultado = entre_rangos(numeros, 5, 12);

console.log(resultado);

module.exports = entre_rangos;
