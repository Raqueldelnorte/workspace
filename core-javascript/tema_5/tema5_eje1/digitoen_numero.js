function contar_digitos(digito, numero) {
  const str_numero = numero.toString();
  const str_digito = digito.toString();
  let contador = 0;

  for (let i = 0; i < str_numero.length; i++) {
    if (str_numero[i] === str_digito) {
      contador++;
    }
  }
  return contador;
}

const digito = prompt('Ingrese un dígito:').trim();
const numero = prompt('Ingrese un número:').trim();

if (digito !== "" && numero !== "" && !isNaN(digito) && !isNaN(numero) && digito.length === 1) {
  const resultado = contar_digitos(digito, numero);
  alert(`El dígito ${digito} aparece ${resultado} veces en el número ${numero}.`);
} else {
  alert('Por favor, ingrese un dígito válido y un número válido.');
}
