/* 
 * Copyright (C) 2014 Luis Cabrerizo Gómez
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Función realizara para el ejercicio 1
 * @returns {Array} Devuelve un array con los meses del año
 */
function ejercicio1()
{
    // Creamos el array con los nombres de los meses del año
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
        "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    // Devolvemos el array de meses para que pueda mostrarse tanto con un alert 
    // como para usarlo en otras funciones
    return meses;
}

/**
 * Método realizado para el ejercicio 2
 * El método sirve para validar si un DNI introducido es correcto
 * @returns {undefined} null
 */
function ejercicio2()
{
    // Array que contiene las posibles letras a asignar a un DNI
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    // Pedimos al usuario que introduzca el número del DNI sin la letra
    var numero = prompt("Introduce tu número de DNI (sin la letra)");

    // Pedimos al usuario que introduzca únicamente la letra del DNI en mayúsculas
    var letra = prompt("Introduce la letra de tu DNI (en mayúsculas)");

    // Convertimos la letra introducida por el usuario a mayúsculas, por si 
    // acaso hubiese introducido la letra en minúsculas
    letra = letra.toUpperCase();

    // Verificamos que el número introducido es correcto
    // Con la comparación verificamos que el número no sea negativo, ni tenga 
    // más números que los necesarios para definir un DNI
    if (numero < 0 || numero > 99999999) {

        // Si es el caso, mostramos un mensaje de aviso
        alert("El número proporcionado no es válido");
    }
    else {

        // Para calcular la letras correspondiente al DNI, calculamos el resto 
        // de la división del número del DNI dividido entre 23. La letra que le 
        // corresponde al número será la letra que se encuentre en el array de 
        // letras en la posición que especifica el resto de la división
        var letraCalculada = letras[numero % 23];

        // Si la letra calculada es distinta que la letra introducida, los 
        // valores introducidos por el usuario no son correctos
        if (letraCalculada !== letra) {
            // Mostramos un mensaje de aviso al usuario
            alert("La letra o el número proporcionados no son correctos");
        }
        else {
            // Si todo es correcto, mostramos un mensaje de confirmación al 
            // usuario
            alert("El número de DNI y su letra son correctos");
        }
    }
}

/**
 * Método realizado para el ejercicio3
 * @returns {Number} Devuelve el factorial de el número introducido por el 
 * usuario
 */
function ejercicio3()
{
    // Se pide un número al usuario y se almacena en la variable número
    var numero = prompt("Introduce un número");

    // Se inicializa el resultado a 1
    var resultado = 1;

    // Se realiza un bucle que va desde 1 hasta el valor introducido por el 
    // usuario
    for (var i = 1; i <= numero; i++) {
        // Se multiplica el indice de iteración por el resultado acumulado
        resultado *= i;
    }

    // Se devuelve el resultado de la operación
    return resultado;

}

/**
 * Función realizada para calcular si un número es par o impar
 * @returns {undefined} 
 */
function ejercicio4()
{
    // Pedimos un número al usuario
    var numero = prompt("Introduce un número entero");

    // Llamamos a la funcion parImpar, pasándole el valor introducido por el 
    // usuario como parámetro
    var resultado = parImparAlternativo(numero);

    // Mostramos el resultado al usuario
    alert("El número " + numero + " es " + resultado);    
}

/**
 * Función para calcular si un número es par o impar
 * @param {type} numero Número a comprobar
 * @returns {String} par si el número es par, impar en caso contrario
 */
function parImpar(numero) {

    // Comprobamos si el resto de la división del número entre 2 es nulo
    if (numero % 2 === 0) {
        // Si lo es, devolvemos la palabra par
        return "par";
    }
    else {
        // Si no lo es, devolvemos la palabra impar
        return "impar";
    }
}


/**
 * Función para calcular si un número es par o impar mediante operaciones a 
 * nivel de de bits
 * @param {type} numero Número a comprobar
 * @returns {String} par si el número es par, impar en caso contrario
 */
function parImparAlternativo(numero) {

    // Realizamos una operacion AND a nivel de bits entre en número y 1.
    // Si el resultado es 0 es un número par, si es 1, es impar
    // Ej 101 & 001 = 001 -> Resultado 1, número impar
    // Ej 110 & 001 = 000 -> Resultado 0, número par
    if ((numero & 1) === 0) {
        // Si lo es, devolvemos la palabra par
        return "par";
    }
    else {
        // Si no lo es, devolvemos la palabra impar
        return "impar";
    }
}