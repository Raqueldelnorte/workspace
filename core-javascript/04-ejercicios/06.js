const arr = [2, 5, 7, 15, -5, -100, 55];

function contadordepositivos(arr) {
  let contador = 0;
  for (const desde of arr) {
    if (desde > 0) {
      contador++;
    }
  }
  return contador;
}

const resultado = contadordepositivos(arr);
console.log(resultado);
