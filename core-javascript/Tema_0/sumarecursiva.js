function sumaRecursiva(n) {
  // Caso base: si n es 0, la suma es 0
  if (n === 0) {
    return 0;
  }
  // Llamada recursiva: suma el número actual n con la suma de los anteriores
  return n + sumaRecursiva(n - 1);
}

// Pedimos al usuario que ingrese un número
const input = prompt('Ingresa un número entero:');

// Convertimos el input a un número entero
const n = parseInt(input, 10);

// Validamos que el valor ingresado sea un número válido
if (!isNaN(n) && n >= 0) {
  // Calculamos la suma recursiva
  const resultado = sumaRecursiva(n);
  // Mostramos el resultado en pantalla
  alert(`La suma de los primeros ${n} números enteros es: ${resultado}`);
} else {
  // Si el valor ingresado no es un número válido, mostramos un mensaje de error
  alert('Por favor, ingresa un número entero válido.');
}
