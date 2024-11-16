/* Pedirle al usuario que ingrese un dígito y un número, después llamar a
una función que diga el número de veces que aparece el dígito en el
número. */

function contar_digito_numero(digito, numero) {
  const numero_cadena = numero.toString();
  let contador = 0;

  // Iteramos sobre cada carácter de la cadena del número
  for (let i = 0; i < numero_cadena.length; i++) {
    // Comparamos si el carácter actual es igual al dígito buscado
    if (numero_cadena[i] === digito) {
      contador++;
    }
  }

  return contador;
}

// Función para pedir el dígito a encontrar en el número
function main() {
  const digito = prompt('Por favor, ingresa un dígito entre (0-9):');

  const numero = prompt('Por favor, ingresa un número:');

  // Validamos que el dígito sea un solo carácter y que sea un número del 0 al 9
  if (digito.length === 1 && !isNaN(digito) && digito >= 0 && digito <= 9) {
    // Llamamos a la función y mostramos el resultado
    const cantidad = contar_digito_numero(digito, numero);
    alert(`El dígito ${digito} aparece ${cantidad} veces en el número ${numero}.`);
  } else {
    alert('Por favor, asegúrate de ingresar un dígito válido (0-9).');
  }
}

main();
module.exports = contar_digito_numero;
