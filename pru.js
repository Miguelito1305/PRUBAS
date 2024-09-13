// Clase que contiene dos métodos: uno con función regular y otro con función flecha
class NumeroAnalizador {
    constructor(numeros) {
        this.numeros = numeros; // Array de números
    }

    // Método con función regular
    verificarParImparRegular() {
        console.log("Verificación usando función regular:");
        
        // Recorrer el array de números
        for (let i = 0; i < this.numeros.length; i++) {
            const numero = this.numeros[i];
            
            // Condicional para verificar si es par o impar
            if (numero % 2 === 0) {
                console.log(`El número ${numero} es par.`);
            } else {
                console.log(`El número ${numero} es impar.`);
            }
        }
    }

    // Método con función flecha
    verificarParImparArrow = () => {
        console.log("Verificación usando función flecha:");
        
        // Recorrer el array de números
        this.numeros.forEach(numero => {
            // Condicional para verificar si es par o impar
            if (numero % 2 === 0) {
                console.log(`El número ${numero} es par.`);
            } else {
                console.log(`El número ${numero} es impar.`);
            }
        });
    }
}

// Función que crea una matriz de números y utiliza la clase para analizarla
function crearYAnalizarNumeros() {
    // Matriz (array bidimensional) de números
    let matriz = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];

    // Convertir la matriz en un array de una dimensión
    let numeros = [].concat(...matriz);

    // Crear una instancia de la clase NumeroAnalizador
    let analizador = new NumeroAnalizador(numeros);

    // Llamar a los métodos de la clase
    analizador.verificarParImparRegular();  // Usando función regular
    analizador.verificarParImparArrow();    // Usando función flecha
}

// Llamar a la función principal
crearYAnalizarNumeros();
