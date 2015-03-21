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

/**
 * Función para inicializar la página, las variables y eventos necesarios para 
 * su funcionamiento
 * @returns {undefined}
 */
function inicializar()
{
    // Creamos la tabla usando la función creada para tal efecto
    crearTabla(30, 30, 'tablaceldas', 'tablerodibujo', 'zonadibujo');

    // Recuperamos las columnas que se encuentran dentro de la tabla paleta, 
    // que corresponden con los colores seleccionables para pintar
    colores = document.getElementById("paleta").getElementsByTagName("tr")[0].getElementsByTagName("td");

    // Comprobamos usando la primera columna de los colores los tipos de sistemas 
    // que se pueden usar para enlazar elementos y los almacenamos en una variables 
    // globales para poder usar en la función crearEvento
    tieneEventlistener = (colores[0].addEventListener ? true : false);
    tieneAttachEvent = (colores[0].attachEvent ? true : false);

    // Recorremos las columnas de colores y les asignamos la funcion 
    // seleccionarColor en el evento click
    for (i = 0; i < colores.length; i++)
    {
        crearEvento(colores[i], 'click', seleccionarColor);
    }

    // Almacenamos el valor del color seleccionado, al comienzo el color1, en 
    // una variable global
    colorSel = 'color1';

    // Definimos una variable global para el estado del pincel
    pincelActivo = false;

    // Modificamos el texto de ayuda al usuario para mostrar el estado del pincel
    document.getElementById('pincel').innerHTML = "PINCEL DESACTIVADO";

    // Recuperamos todas las celdas que hay en la tabla que hemos creado anteriormente
    celdas = document.getElementById('tablaceldas').getElementsByTagName('td');

    // Recorremos todas las celdas para asignarles los eventos necesarios
    for (i = 0; i < celdas.length; i++)
    {
        // Asignamos a todas las celdas la función activarPincel en el 
        // evento click, para poder activar el pincel y pintar la celdas sobre 
        // la que estamos del color seleccionado
        crearEvento(celdas[i], 'click', activarPincel);

        // Asignamos también la función pintar en el evento mouseover para 
        // pintar las celdas del color seleccionado al pasar el ratón sobre 
        // ellas
        crearEvento(celdas[i], 'mouseover', pintar);
    }

    // Finalmente asignamos la función limpiar al botón en el evento click
    crearEvento(document.getElementById('reiniciar'), 'click', reiniciar);
}

/**
 * Función que nos permite crear una tabla sobre la que dibujar
 * @param {int} ancho Ancho de la tabla en celdas
 * @param {int} alto Alto de la tabla en celdas
 * @param {string} id Id de la tabla a crear
 * @param {string} clase Clase de la tabla a crear
 * @param {string} enganche Id del objeto al que se anclará la tabla
 * @returns {undefined}
 */
function crearTabla(ancho, alto, id, clase, enganche)
{

    // Creamos un elemento tabla asignandole un id y una clase específica 
    // pasadas a la función
    var tabla = document.createElement("table");
    tabla.setAttribute('id', id);
    tabla.setAttribute('class', clase);

    // Creamos un bucle para generar las filas necesarias para la tabla
    for (var i = 0; i < alto; i++)
    {
        // Creamos un objeto fila
        var fila = document.createElement("tr");

        // Creamos otro bucle crear tantas columnas como sean necesarias para la tabla
        for (var j = 0; j < ancho; j++)
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

    // Añadimos una leyenda para explicar la activación del pincel antes de incluir la tabla generada
    marca.appendChild(document.createTextNode('Haga CLICK en cualquier celda para activar/desactivar el Pincel'));

    // Añadimos al objeto la tabla generada
    marca.appendChild(tabla);
}

/**
 * Función que nos permite crear un evento y asociarlo a una función
 * @param {document.element} elemento Elemento sobre el que se asociará el evento
 * @param {string} tipoEvento Tipo de evento a crear
 * @param {function} funcion Función asociada al evento
 * @returns {undefined}
 */
function  crearEvento(elemento, tipoEvento, funcion)
{
    // Comprobamos si al elemento se le puede añadir un EventListener, lo que 
    // indica que el navegador es compatible con los standards W3C
    if (tieneEventlistener)
    {
        // Asignamos el evento
        elemento.addEventListener(tipoEvento, funcion, false);
    }
    // De no ser así, comprobamos si se le puede adjuntar el un evento, lo que 
    // indica que el navegador es compatible con internet explorer
    else if (tieneAttachEvent)
    {
        // Puesto que al usar attachEvent perdemos la capacidad de acceder al 
        // objeto this dentro de la función que asignamos al evento, usamos el 
        // método call() para pasar el elemento como parámetro y asignarlo al 
        // objeto this de la función
        elemento.attachEvent("on" + tipoEvento, function () {
            funcion.call(elemento);
        });
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
    }
    else
    {
        // Seleccionamos el elemento que tenga de nombre de lcase 'seleccionado'
        seleccionado = document.getElementsByClassName('seleccionado')[0];
    }

    // Usaremos className en lugar de classList para modificar el valor de 
    // la clase del elemento y quitar el texto seleccionado
    seleccionado.className = seleccionado.className.replace(/\bseleccionado\b/, '');

    // Almacenamos el valor del color seleccionado en la variable global a tal efecto
    colorSel = this.className;

    // Finalmente incluimos seleccionado en el nombre de la clase del elemento 
    // en el que se ha lanzado el evento
    this.className = this.className + ' seleccionado';

}

/**
 * Función que activa el pincel para poder dibujar en la cuadrícula
 * @returns {undefined}
 */
function activarPincel()
{
    // Recuperamos el elemento que contiene el texto de aviso al usuario
    texto = document.getElementById('pincel');

    // Comprobamos si el pincel está activo
    if (!pincelActivo)
    {
        // Si no lo está, lo activamos
        pincelActivo = true;

        // Y cambiamos el texto avisando del nuevo estado del pincel
        texto.innerHTML = "PINCEL ACTIVADO";

        // Finalemnte asignamos al objeto que ha lanzado el evento la clase del 
        // color seleccionado actualmente, sobreescribiendo cualquier otra que 
        // pudiese poseer anteriormente
        this.className = colorSel;
    }
    else
    {
        // Si está activado, lo desactivamos
        pincelActivo = false;

        // Y cambiamos el texto de aviso al usuario en consonancia al nuevo estado
        texto.innerHTML = "PINCEL DESACTIVADO";
    }
}


/**
 * Función que nos ayuda a pintar las cuadrículas al pasar el ratón sobre ellas
 * @returns {undefined}
 */
function pintar()
{
    // Comprobamos si el pincel se encuentra activo
    if (pincelActivo)
    {
        // Si está activo asignamos el color seleccionado a la clase del mismo, 
        // sobreescribiendo cualquier otra clase que pudiese tener
        this.className = colorSel;
    }
}


/**
 * Función que nos permite reiniciar el grid y los colores selecionado a su estado inicial
 * @returns {undefined}
 */
function reiniciar()
{
    // Recuperamos las celdas que hay en la tabla de colorear
    celdas = document.getElementById('tablaceldas').getElementsByTagName('td');

    // Recorremos todas las celdas 
    for (i = 0; i < celdas.length; i++)
    {
        // Limpiamos las clases que puedan tener usando la propiedad className
        celdas[i].className = '';
    }

    // Recuperamos las celdas que contienen los colores para pintar
    colores = document.getElementById("paleta").getElementsByTagName("tr")[0].getElementsByTagName("td");

    // Las recorremos
    for (i = 0; i < colores.length; i++)
    {
        // Eliminamos la clase 'seleccionado' si estuviese en alguna de las celdas
        colores[i].className = colores[i].className.replace(/\bseleccionado\b/, '');
    }

    // Finalmente le asignamos la clase seleccionado al primer color
    colores[0].className += " seleccionado";

    // Seleccionamos el primer color
    colorSel = 'color1';

    // Deshabilitamos el pincel
    pincelActivo = false;

    // Modificamos el texto de ayuda al usuario reflejando el cambio
    document.getElementById('pincel').innerHTML = "PINCEL DESACTIVADO";

}