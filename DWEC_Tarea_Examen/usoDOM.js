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
    $('ejemplo6').addEvent('click', ejemplo6);
    $('ejemplo7').addEvent('click', ejemplo7);
    $('ejemplo8').addEvent('click', ejemplo8);
    $('ejemplo9').addEvent('click', ejemplo9);
    $('ejemplo10').addEvent('click', ejemplo10);
    $('ejemplo11').addEvent('click', ejemplo11);

}

function reiniciar()
{
    // Localizamos el div que contendrá el objeto
    var resultado = $("contenedor");

    // Lo vaciamos de contenido
    resultado.empty();

    // Creamos un nuevo elemento div
    div = new Element("div");

    // Le asignamos un id
    div.set({"id": "resultado"});

    // Lo insertamos dentro del contenedor
    div.inject("contenedor", "top");

    // Creamos un elemento parrafo
    parrafo = new Element("p");

    // Le asignamos un id y un texto
    parrafo.set({"html": "Zona de resultados", "id": "tituloResultados"});

    // Lo añadimos al comienzo del div resultado
    parrafo.inject($('contenedor'), "top");

}


/**
 * Función cuya finalidad es mostrar el funcionamiento del uso del DOM por 
 * parte de MooTools
 * 
 * En este ejemplo crearemos un objeto del DOM header2, le asignaremos un 
 * título y lo añadiremos al div con id resultado
 * 
 * @returns {undefined}
 */
function ejemplo1()
{
    // Creamos el objeto h2 haciendo uso de la clase Element de MooTools
    titulo = new Element("h2");

    // Le asignamos propiedades haciendo uso de set
    // En este caso el texto del elemento y su alineación
    titulo.set({"html": "top", "align": "center"});

    // Añadimos el objeto al div con id resultado, al comienzo del mismo
    titulo.inject($("resultado"), "top");

}


/**
 * Función cuya finalidad es mostrar el funcionamiento del uso del DOM por 
 * parte de MooTools
 * 
 * En este ejemplo crearemos un objeto del DOM header2, le asignaremos un 
 * título y lo añadiremos al div con id resultado
 * 
 * @returns {undefined}
 */
function ejemplo2()
{
    // Creamos el objeto h2 haciendo uso de la clase Element de MooTools
    titulo = new Element("h2");

    // Le asignamos propiedades haciendo uso de set
    // En este caso el texto del elemento y su alineación
    titulo.set({"html": "bottom", "align": "center"});

    // Añadimos el objeto al div con id resultado, al comienzo del mismo
    titulo.inject($("resultado"));
}

/**
 * Función cuya finalidad es mostrar el funcionamiento del uso del DOM por 
 * parte de MooTools
 * 
 * En este ejemplo crearemos un objeto del DOM header2, le asignaremos un 
 * título y lo añadiremos al div con id resultado
 * 
 * @returns {undefined}
 */
function ejemplo3()
{
    // Creamos el objeto h2 haciendo uso de la clase Element de MooTools
    titulo = new Element("h2");

    // Le asignamos propiedades haciendo uso de set
    // En este caso el texto del elemento y su alineación
    titulo.set({"html": "before", "align": "center"});

    // Añadimos el objeto al div con id resultado, al comienzo del mismo
    titulo.inject($("resultado"), "before");
}


/**
 * Función cuya finalidad es mostrar el funcionamiento del uso del DOM por 
 * parte de MooTools
 * 
 * En este ejemplo crearemos un objeto del DOM header2, le asignaremos un 
 * título y lo añadiremos al div con id resultado
 * 
 * @returns {undefined}
 */
function ejemplo4()
{
    // Creamos el objeto h2 haciendo uso de la clase Element de MooTools
    titulo = new Element("h2");

    // Le asignamos propiedades haciendo uso de set
    // En este caso el texto del elemento y su alineación
    titulo.set({"html": "after", "align": "center"});

    // Añadimos el objeto al div con id resultado, al comienzo del mismo
    titulo.inject($("resultado"), "after");
}


/**
 * Función cuya finalidad es mostrar el funcionamiento del uso del DOM por 
 * parte de MooTools
 * 
 * En este ejemplo copiamos el contenido del div contenedor con todos sus 
 * hijos y lo añadimos al comienzo del propio div contenedor
 * 
 * @returns {undefined}
 */
function ejemplo5()
{
    // Clonamos el div contenedor con todos sus hijos
    clon = $('contenedor').clone(true);

    // Lo añadimos al comienzo del div contenedor
    clon.inject($('contenedor'), "top");

}

/**
 * Función cuya finalidad es mostrar el funcionamiento del uso del DOM por 
 * parte de MooTools
 * 
 * En este ejemplo copiamos el contenido del div contenedor sin sus 
 * hijos y lo añadimos al comienzo del propio div contenedor
 
 * @returns {undefined}
 */
function ejemplo6()
{
    // Clonamos el div contenedor sin sus hijos
    clon = $('contenedor').clone(false);

    // Lo añadimos al comienzo del div contenedor
    clon.inject($('contenedor'), "top");

}


/**
 * Función cuya finalidad es mostrar el funcionamiento del uso del DOM por 
 * parte de MooTools
 * 
 * En este ejemplo reemplazamos el contenido del div conetenedor por un nuevo 
 * div igual al que había inicialmente generado en tiempo de ejecución
 *
 * @returns {undefined}
 */
function ejemplo7()
{

    // Creamos un nuevo div con id contenedor
    divContenedor = new Element("div", {"id": "contenedor"});

    // Creamos un nuevo parrafo con id tituloResultados y texto Zona de resultados
    parrafo = new Element("p", {"html": "Zona de resultados", "id": "tituloResultados"});

    // Creamos otro div con id resultado
    divResultado = new Element("div", {"id": "resultado"});

    // Añadimos el párrafo al comienzo del div con id contenedor
    parrafo.inject(divContenedor, "top");

    // Añadimos div con id resultado al final del div con id contenedor
    divResultado.inject(divContenedor);

    // Reemplazamos el div con id contenedor por el div creado dinámicamente
    divContenedor.replaces($('contenedor'));
}

/**
 * Función cuya finalidad es mostrar el funcionamiento del uso del DOM por 
 * parte de MooTools
 * 
 * En este ejemplo añadimos texto al párrafo con id tituloResultados
 *
 * @returns {undefined}
 */
function ejemplo8()
{
    // Pedimos al usuario que introduzca el texto a añadir
    texto = prompt("Introduzca un texto para añadir");

    // Verificamos que ha añadido el texto
    if (texto)
    {
        // Anexamos el texto al elemento con id tituloResultados
        $("tituloResultados").appendText(texto);
    }
}

/**
 * Función cuya finalidad es mostrar el funcionamiento del uso del DOM por 
 * parte de MooTools
 * 
 * En este ejemplo eliminamos elementos del div con id resultado usando empty()
 *
 * @returns {undefined}
 */
function ejemplo9()
{
    // Eliminamos el contenido entre las etiquetas del elemento con id resultado
    $("resultado").empty();
}

/**
 * Función cuya finalidad es mostrar el funcionamiento del uso del DOM por 
 * parte de MooTools
 * 
 * En este ejemplo eliminamos elementos del div con id resultado usando dispose() 
 * para posteriormente volver a añadir el elemento eliminado
 *
 * @returns {undefined}
 */
function ejemplo10()
{
    // Eliminamos el elemento con id resultado usando dispose
    var elementoEliminado = $("resultado").dispose();
    
    
    // Lo volvemos a añadir
    elementoEliminado.inject($('contenedor'));
       
}

/**
 * Función cuya finalidad es mostrar el funcionamiento del uso del DOM por 
 * parte de MooTools
 * 
 * En este ejemplo eliminamos elementos del div con id resultado usando destroy()
 *
 * @returns {undefined}
 */
function ejemplo11()
{
    // Eliminamos el elemento resultado
    $("resultado").destroy();
    
    // Creamos un nuevo elemento div con id resultado
    div = new Element("div", {"id":"resultado"});
    
    // Lo añadimos al final del elemento con id contenedor para poder 
    // seguir con los ejemplos
    div.inject($('contenedor'));
    
}
