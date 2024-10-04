/*Página web ejecutada en bucle infinito que pregunta por una
multiplicación y te responde con la solución mientras te vuelve a
preguntar de nuevo.*/

function multiplicacion() {
    while (true) {
        const numero1 = prompt("Dame el primer número (o escribe 'salir' para detener):");
        
        // bucle infinito sería sin control de salida.
        if (numero1.toLowerCase() === "salir") {
            alert("Has salido del programa.");
            break;
        }
        
        const numero2 = prompt("Dame el segundo número (o escribe 'salir' para detener):");
        
        // bucle infinito sería sin control de salida.
        if (numero2.toLowerCase() === "salir") {
            alert("Has salido del programa.");
            break;
        }
        
            alert(`El resultado de ${numero1} * ${numero2} es ${numero1 * numero2}.`);
    }
}

multiplicacion();
