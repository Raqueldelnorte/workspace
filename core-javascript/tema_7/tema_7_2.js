function obtenerMultiplosConArgumentos(tamaño, numero) {
  return Array.from({ length: tamaño }, (v, i) => numero * (i + 1));
}
module.exports = obtenerMultiplosConArgumentos;
