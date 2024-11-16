function capitalizelastname(fullName) {
  if (typeof fullName !== 'string') {
    throw new TypeError('El argumento debe ser una cadena de texto.');
  }

  const parts = fullName.split(' ');

  if (parts.length !== 2) {
    throw new Error('La cadena debe tener exactamente un nombre y un apellido.');
  }
  const firstName = parts[0][0].toUpperCase() + parts[0].slice(1).toLowerCase();
  const lastName = parts[1].toUpperCase();

  return `${firstName} ${lastName}`;
}

module.exports = capitalizelastname;

console.log(capitalizelastname);
