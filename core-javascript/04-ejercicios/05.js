const array = [2, 5, 7, 15, -5, -100, 55]; // Array de números

function obtenerMenorMayor(arr) { // La función recibe el array como parámetro
  let menor = arr[0]; // Inicializa el menor con el primer elemento
  let mayor = arr[0]; // Inicializa el mayor con el primer elemento

  // Itera sobre los números en el array
  for (const numero of arr) {
    menor = menor < numero ? menor : numero; // Actualiza el menor
    mayor = mayor > numero ? mayor : numero; // Actualiza el mayor
  }

  return [menor, mayor]; // Devuelve un array con el menor y el mayor
}

const resultado = obtenerMenorMayor(array); // Llama a la función con el array
console.log(resultado); // Imprime el resultado
