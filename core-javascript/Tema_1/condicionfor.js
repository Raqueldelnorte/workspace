for (let i = 0; i < 10; i++) {
    const esPar = i % 2 === 0
    if (esPar) {
      continue
    }
  
    // Solo mostramos este consola.log si es impar
    console.log(i)
  
    // Salimos del bucle al llegar al 7
    if (i === 7) {
      break
    }
  }