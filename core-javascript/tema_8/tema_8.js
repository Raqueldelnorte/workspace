class TransformadorString {
  constructor(texto) {
    this.texto = texto;
  }

  convertirAArrayDeCaracteres() {
    return [...this.texto];
  }

  ordenarAleatoriamente() {
    const arrayCaracteres = this.convertirAArrayDeCaracteres();
    for (let i = arrayCaracteres.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arrayCaracteres[i], arrayCaracteres[j]] = [arrayCaracteres[j], arrayCaracteres[i]];
    }
    return arrayCaracteres;
  }

  invertirOrdenCaracteres() {
    return this.convertirAArrayDeCaracteres().reverse();
  }

  quitarVocales() {
    return this.texto.replace(/[aeiouAEIOU]/g, '');
  }

  quitarConsonantes() {
    return this.texto.replace(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g, '');
  }

  arrayDePalabras() {
    return this.texto.split(' ');
  }

  invertirOrdenPalabras() {
    return this.arrayDePalabras().reverse().join(' ');
  }
}

const transformador = new TransformadorString('Esto es una prueba');

module.exports = TransformadorString;

console.log(transformador.convertirAArrayDeCaracteres());
console.log(transformador.ordenarAleatoriamente());
console.log(transformador.invertirOrdenCaracteres());
console.log(transformador.quitarVocales());
console.log(transformador.quitarConsonantes());
console.log(transformador.arrayDePalabras());
console.log(transformador.invertirOrdenPalabras());
