function mayuscula_primera(cadena) {
  const [primera_letra, ...resto] = cadena;
  return primera_letra.toUpperCase() + resto.join('');
}

const texto = prompt('Introduce una cadena de texto:');

if (texto) {
  const textoenmayuscula = mayuscula_primera(texto);

  alert(textoenmayuscula);
} else {
  alert('No has introducido una cadena de texto.');
}
