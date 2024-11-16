function getbyIdx(arr, idx) {
  if (idx < 0 || arr.length <= idx) {
    return 'El índice no existe';
  }
  return arr[idx];
}
const resultado = getbyIdx([1, 2],4);
console.log(resultado);
