function aplicar_descuento(precio) {
  const descuento = 0.10;
  const limite_descuento = 200;

  if (precio > limite_descuento) {
    const precio_final = (precio - (precio * descuento));
    return `Tienes un 10% de descuento. El precio final es: ${precio_final.toFixed(2)} euros.`;
  }
  return `No tienes descuento. El precio total es: ${precio.toFixed(2)} euros.`;
}
module.exports = aplicar_descuento;
