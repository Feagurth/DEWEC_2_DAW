/*
 Copyright (C) 2014 Luis Cabrerizo Gómez
 
 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.
 
 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.
 
 You should have received a copy of the GNU General Public License
 along with this program.  If not, see <http://www.gnu.org/licenses/>.

 * codigo_javascript.js
 */

/**
 * Método que suma dos números y muestra el resultado 
 * @param {type} primerNumero Primer sumando
 * @param {type} segundoNumero Segundo sumando
 * @returns {undefined}
 */
function suma_y_muestra(primerNumero, segundoNumero)
{
    // Almacenamos el resultado en la variable creada
    var resultado = primerNumero + segundoNumero;

    // Mostramos los resultados
    document.write("-------------Suma---------------");
    document.write("<br />");
    document.write("El primer sumando es: " + primerNumero);
    document.write("<br />");
    document.write("El segundo sumando es: " + segundoNumero);
    document.write("<br />");
    document.write("La suma es: " + resultado);
    document.write("<br />");
    document.write("<br />");

    alert("El resultado es " + resultado);
}

/**
 * Método que resta dos números y muestra el resultado 
 * @param {type} primerNumero Minuendo
 * @param {type} segundoNumero Sustraendo
 * @returns {undefined}
 */
function resta_y_muestra(primerNumero, segundoNumero)
{
    // Almacenamos el resultado en la variable creada
    var resultado = primerNumero - segundoNumero;

    // Mostramos los resultados
    document.write("-------------Resta--------------");
    document.write("<br />");
    document.write("El minuendo es: " + primerNumero);
    document.write("<br />");
    document.write("El sustraendo es: " + segundoNumero);
    document.write("<br />");
    document.write("La resta es: " + resultado);
    document.write("<br />");
    document.write("<br />");

    alert("El resultado es " + resultado);
}

/**
 * Método que multiplica dos números y muestra el resultado 
 * @param {type} primerNumero Multiplicando
 * @param {type} segundoNumero Multiplicador
 * @returns {undefined}
 */
function multiplica_y_muestra(primerNumero, segundoNumero)
{
    // Almacenamos el resultado en la variable creada
    var resultado = primerNumero * segundoNumero;

    // Mostramos los resultados
    document.write("--------Multiplicación----------");
    document.write("<br />");
    document.write("El multiplicando es: " + primerNumero);
    document.write("<br />");
    document.write("El multiplicador es: " + segundoNumero);
    document.write("<br />");
    document.write("La producto es: " + resultado);
    document.write("<br />");
    document.write("<br />");

    alert("El resultado es " + resultado);
}

/**
 * Método que divide dos números y muestra el cociente
 * @param {type} primerNumero Dividendo
 * @param {type} segundoNumero Divisor
 * @returns {undefined}
 */
function divide_y_muestra(primerNumero, segundoNumero)
{
    // Almacenamos el resultado en la variable creada
    var resultado = parseInt(primerNumero / segundoNumero);

    // Mostramos los resultados
    document.write("-----------División-------------");
    document.write("<br />");
    document.write("El dividendo es: " + primerNumero);
    document.write("<br />");
    document.write("El divisor es: " + segundoNumero);
    document.write("<br />");
    document.write("El cociente es: " + resultado);
    document.write("<br />");
    document.write("<br />");

    alert("El resultado es " + resultado);
}

/**
 * Método que divide dos números y muestra el rest 
 * @param {type} primerNumero Dividendo
 * @param {type} segundoNumero Divisor
 * @returns {undefined}
 */
function restodeladivision_y_muestra(primerNumero, segundoNumero)
{
    // Almacenamos el resultado en la variable creada
    var resultado = primerNumero % segundoNumero;

    // Mostramos los resultados
    document.write("-------------Resto--------------");
    document.write("<br />");
    document.write("El dividendo es: " + primerNumero);
    document.write("<br />");
    document.write("El divisor es: " + segundoNumero);
    document.write("<br />");
    document.write("La resto es: " + resultado);
    document.write("<br />");
    document.write("<br />");

    alert("El resultado es " + resultado);
}


/**
 * Función para validar un número introducido por teclado
 * @param {String} textoPeticion Texto a mostrar en la petición de datos
 * @returns {int} Valor introducido por el usuario
 */
function peticionValidacionNumero(textoPeticion)
{
    // Declaración de variables
    var control = false;

    // Realizamos un bucle while
    do
    {
        // Pedimos al usuario que introduzca la contraseña
        var valor = prompt(textoPeticion + ": ", "");

        // Comprobamos si la contraseña introducida es un número
        if (!isNaN(valor) && (valor !== ""))
        {
            control = true;
        }
        else
        {
            // Si no es así, mostramos un mensaje al usuario
            alert("Introduzca un número.");
        }

        // Verificamos la variable de control antes de salir del bucle
    } while (control === false);

    // Devolvemos el valor
    return parseInt(valor);
}

/**
 * Método que muestra un menú y realiza las operaciones seleccionadas
 * @returns {undefined}
 */
function menu()
{
    // Declaración de las variables
    var numero1 = 0;
    var numero2 = 0;
    
    // Inicializamos la variable de salida del bucle a falso
    var salida = false;

    // Ejecutamos un bucle mientras la condición de cierre sea verdadera
    do
    {
        // Mostramos el menú y pedimos al usuario que seleccione un valor usando 
        // la función de petición de números validados
        op = peticionValidacionNumero(" 1.- Suma \n 2.- Resta \n " +
                "3.- Multiplicación \n 4.- División \n 5.- Resto \n 6.- "
                + "Salir \n Introduzca una opción: ");

        // Comprobamos si la opción elegida es una operación
        if (op > 0 && op < 6)
        {
            // Si lo es, pedimos dos numeros al usuario, ayudandonos por la 
            // función de petición de números validados
            numero1 = peticionValidacionNumero("Introduzca el primer número");
            numero2 = peticionValidacionNumero("Introduzca el segundo número");
        }

        // Comprobamos la opción elegida por el usuaurio y llamamos a la función 
        // correspondiente para que ejecute la operación seleccionada
        switch (op)
        {
            case 1:
            {
                // Llamamos a la función de calculo de la suma
                suma_y_muestra(numero1, numero2);
                break;
            }
            case 2:
            {
                // Llamamos a la función de calculo de la resta
                resta_y_muestra(numero1, numero2);
                break;
            }
            case 3:
            {
                // Llamamos a la función de calculo de la multiplicación
                multiplica_y_muestra(numero1, numero2);
                break;
            }
            case 4:
            {
                // Llamamos a la función de calculo del cociente de la division
                divide_y_muestra(numero1, numero2);
                break;
            }
            case 5:
            {
                // Llamamos a la función de calculo del resto de la división
                restodeladivision_y_muestra(numero1, numero2);
                break;
            }
            case 6:
            {
                // Asignamos un valor verdadero para permitirnos salir del bucle
                salida = true;
            }
        }
        
        // Iteraremos en el bucle mientras salida sea falso
    } while (!salida)

}

// Programa principal
// Llamamos al menú
menu();

