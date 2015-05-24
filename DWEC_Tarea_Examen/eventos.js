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


window.addEvent('domready', inicio);

/**
 * Función que nos sirve para inicializar los valores y eventos necesarios para 
 * el funcionamiento de la página
 * @returns {undefined}
 */
function inicio()
{
    // Asignación de eventos a los botones
    $('reiniciar').addEvent('click', reiniciar);
    $('ejemplo1').addEvent('click', ejemplo1);
    $('ejemplo2').addEvent('click', ejemplo2);
    $('ejemplo3').addEvent('click', ejemplo3);
    $('ejemplo4').addEvent('click', ejemplo4);
    $('ejemplo5').addEvent('click', ejemplo5);
}


/**
 * Función que sirve para limpiar el div de resultados de contenido generado durante las pruebas
 * @returns {undefined}
 */
function reiniciar()
{

    // Creamos el div de resultados
    divResultado = new Element("div", {"id": "resultado"});

    // Creamos el div cuadrado especificando id, clase y title
    divCuadrado = new Element("div", {"id": "cuadrado", "class": "pruebas", "title": "Cuadro de pruebas para probar eventos"});

    // Añadimos texto al cuadrado
    divCuadrado.appendText("Cuadro de pruebas");

    // Añadimos el cudrado al div de resultados
    divCuadrado.inject(divResultado);

    // Cambiamos el nuevo div por el antiguo
    divResultado.replaces($('resultado'));

}


/**
 * Función cuya finalidad es mostrar el funcionamiento del manejo de eventos en 
 * MooTools
 * 
 * En este ejemplo podemos ver como se asigna una función que muestra un 
 * mensaje emergente en el evento click del elemento con id pruebas
 * 
 * @returns {undefined}
 */
function ejemplo1()
{
    // Seleccionamos el elemento con id pruebas y le asignamos la función que 
    // hemos definido anteriormente
    $('cuadrado').addEvent('click', alerta);
}

/**
 * Función cuya finalidad es mostrar el funcionamiento del manejo de eventos en 
 * MooTools
 * 
 * En este ejemplo podemos ver como se asigna varios eventos a la vez haciendo uso 
 * de addEvents. El primer evento cambia el color de fondo del elemento con id 
 * pruebas a rojo cuando el ratón está encima de el, mientras que el segundo 
 * cambia el color de fondo del elemento a transparente cuando el ratón no está 
 * sobre él
 
 * @returns {undefined}
 */
function ejemplo2()
{
    // Seleccionamos el elemento con id pruebas
    $("cuadrado").addEvents({
        // Añadimos el primer evento cuando el ratón está encima del objeto
        mouseover: function () {
            this.setStyles({"background-color": "red"});
        },
        // Añadimos el segundo evento cuando el ratón sale de la zona que contiene el objeto
        mouseout: function () {
            this.setStyles({"background-color": "transparent"});
        }
    });
}



/**
 * Función cuya finalidad es mostrar el funcionamiento del manejo de eventos en 
 * MooTools
 * 
 * En este caso comprobamos inicialmente si el elmento con id pruebas tiene un 
 * evento, de ser así, lo lanzams usando fireEvent sin que se produzca el 
 * evento en sí
 *   
 * @returns {undefined}
 */
function ejemplo3()
{

    // Recuperamos los eventos del objeto con id pruebsa
    var eventos = $('cuadrado').retrieve('events');

    // Verificamos qque haya eventos, y que haya un evento click
    var tieneClick = eventos && eventos['click'];

    // Verificamos si tiene evento click
    if (tieneClick)
    {
        // Si es así, lo lanzamos con fireEvent
        $('cuadrado').fireEvent('click');
    }
}

/**
 * Función cuya finalidad es mostrar el funcionamiento del manejo de eventos en 
 * MooTools
 * 
 * En este caso clonamos el elemento con id cuadrado y todos sus elementos. 
 * Posteriormente clonamos todos los eventos del elemento con id cuadrado y los 
 * asignamos al elemento clon para finalizar insertandolo en el elemento con 
 * id resultado
 *   
 * @returns {undefined}
 */
function ejemplo4()
{
    // Clonamos el elemento con id cuadrado, junto con sus elementos hijos
    clon = $('cuadrado').clone(true);

    // Clonamos los eventos del elemento con id cuadrado
    clon.cloneEvents($('cuadrado'));

    // Añadimos el clon al objeto con id resultado al final del mismo
    clon.inject($('resultado'));
}


/**
 * Función cuya finalidad es mostrar el funcionamiento del manejo de eventos en 
 * MooTools
 * 
 * En este caso clonamos el elemento con id cuadrado y todos sus elementos. 
 * Posteriormente clonamos todos los eventos del elemento con id cuadrado y los 
 * asignamos al elemento clon para finalizar insertandolo en el elemento con 
 * id resultado
 *   
 * @returns {undefined}
 */
function ejemplo5()
{
    // Seleccionamos el elemento con id cuadrado y eliminamos el evento click
    $('cuadrado').removeEvent('click', alerta);
}


/**
 * Función que muestra un mensaje de alerta y que asignaremos al evento click del elemento con id cudrado
 * @returns {undefined}
 */
function alerta()
{
    alert("Evento creado en click");
}