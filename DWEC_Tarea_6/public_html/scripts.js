/* 
 * Copyright (C) 2015 Luis Cabrerizo Gómez
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

// Asignación de la inicialización de Javascript en la web
window.onload = inicializar;


function inicializar()
{
    crearTabla(30, 30, 'zonadibujo');

    colores = document.getElementById("paleta").getElementsByTagName("tr")[0].getElementsByTagName("td");

    for (var i = 0; i < colores.length; i++)
    {
        crearEvento(colores[i], 'click', seleccionarColor);
    }


}


/**
 * Función que nos permite crear un evento y asociarlo a una función
 * @param {type} elemento Elemento sobre el que se asociará el evento
 * @param {type} tipoEvento Tipo de evento a crear
 * @param {type} funcion Función asociada al evento
 * @returns {undefined}
 */
function  crearEvento(elemento, tipoEvento, funcion)
{
    // Comprobamos si al elemento se le puede añadir un EventListener, lo que 
    // indica que el navegador es compatible con los standards W3C
    if (elemento.addEventListener)
    {
        // Asignamos el evento
        elemento.addEventListener(tipoEvento, funcion, false);
    }
    // De no ser así, comprobamos si se le puede adjuntar el un evento, lo que 
    // indica que el navegador es compatible con internet explorer
    else if (elemento.attachEvent)
    {
        // Puesto que al usar attachEvent perdemos la capacidad de acceder al 
        // objeto this dentro de la función que asignamos al evento, usamos el 
        // método call() para pasar el elemento como parámetro y asignarlo al 
        // objeto this de la función
        elemento.attachEvent("on" + tipoEvento, function (){funcion.call(elemento);});
    }
    // Finalmente si ninguno de los dos métodos anteriores funcionase, usamos 
    // el método tradicional para asignar eventos
    else
    {
        // Asignamos el evento por el método clásico
        elemento["on" + tipoEvento] = funcion;
    }
}

/**
 * Función que nos permite seleccionar los diversos colores para pintar
 * @returns {seleccionarColor}
 */
function seleccionarColor()
{
    // Comprobamos si podemos usar getElementsByClassName para 
    // seleccionar el objeto del DOM que necesitamos
    if (!document.getElementsByClassName)
    {
        // Usamos querySelectorAll en lugar de getElementsByClassName que no 
        // tiene soporte en IE8
        seleccionado = document.querySelectorAll('.seleccionado')[0];

        // Usaremos className en lugar de classList
        seleccionado.className = seleccionado.className.replace(/\bseleccionado\b/, '');

        this.className = this.className + ' seleccionado';
    }
    else
    {
        seleccionado = document.getElementsByClassName('seleccionado')[0];

        if (seleccionado.classList)
        {
            seleccionado.classList.remove('seleccionado');

            this.classList.add('seleccionado');
        }
        else
        {
            // Usaremos className en lugar de classList
            seleccionado.className = seleccionado.className.replace(/\bseleccionado\b/, '');

            this.className = this.className + ' seleccionado';
        }
    }
}



/**
 * Función que nos permite crear una tabla sobre la que dibujar
 * @param {type} ancho Ancho de la tabla en celdas
 * @param {type} alto Alto de la tabla en celdas
 * @param {type} enganche Id del objeto al que se anclará la tabla
 * @returns {undefined}
 */
function crearTabla(ancho, alto, enganche)
{

    // Creamos un elemento tabla
    var tabla = document.createElement("table");
    tabla.setAttribute('class', 'tablerodibujo');

    // Creamos un bucle para generar las filas necesarias para la tabla
    for (var i = 0; i < ancho; i++)
    {
        // Creamos un objeto fila
        var fila = document.createElement("tr");

        // Creamos otro bucle crear tantas columnas como sean necesarias para la tabla
        for (var j = 0; j < alto; j++)
        {
            // Creamos una columna por cada iteración del bucle
            var columna = document.createElement("td");

            // Añadimos a la columna un nodo de texto con un espacio en blanco
            columna.appendChild(document.createTextNode(' '));

            // Añadimos la columa generada a la fila
            fila.appendChild(columna);
        }

        // Cuando la fila tenga todas las columnas necesarias la 
        // añadimos a la tabla 
        tabla.appendChild(fila);
    }

    // Localicamos el objeto div donde vamos a situar la tabla y 
    // lo volcamos a un objeto
    var marca = document.getElementById(enganche);

    // Añadimos al objeto la tabla generada
    marca.appendChild(tabla);
}