function esPrimo(numero) {
    // Si el número es menor o igual a 1, no es primo
    if (numero <= 1) {
        return false;
    }

    // Iteramos desde 2 hasta la raíz cuadrada del número
    // Si el número tiene algún divisor en este rango, no es primo
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }

    // Si no se encontraron divisores, el número es primo
    return true ,'El numero es primo';
}

console.log(esPrimo(3))