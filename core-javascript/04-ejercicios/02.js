function nombreResolucion(ancho, alto) {
  if (ancho >= 7680 && alto >= 4320) {
    return '8k';
  } if (ancho >= 3840 && alto >= 2160) {
    return '4k';
  } if (ancho >= 2560 && alto >= 1440) {
    return 'wqhd';
  } if (ancho >= 1920 && alto >= 1080) {
    return 'FHD';
  } if (ancho >= 1280 && alto >= 720) {
    return 'HD';
  }
  return 'no tiene resolución';
}
const nombre = nombreResolucion(3840, 2160);
console.log(nombre);
