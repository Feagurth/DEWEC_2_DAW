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
    $('ejemplo12').addEvent('click', ejemplo12);
    $('ejemplo13').addEvent('click', ejemplo13);
    $('ejemplo14').addEvent('click', ejemplo14);
    $('ejemplo15').addEvent('click', ejemplo15);
    $('ejemplo16').addEvent('click', ejemplo16);
    $('ejemplo17').addEvent('click', ejemplo17);

}

/**
 * Función cuya finalidad es mostrar el funcionamiento de los selectores en MooTools
 * 
 * En este ejemplo podemos ver la selección por id que realiza MooTools. En este 
 * caso se selecciona el elemento con id cuerpo y se recupera el color de fondo 
 * dependiendo del color anterior que tuviese, cambiando de transparente a rojo 
 * y viceversa
 * 
 * @returns {undefined}
 */
function ejemplo1()
{
    // Seleccionamos el elemento con el que queremos trabajar. En este caso el 
    // elemento con id cuerpo
    var elemento = $('cuerpo');

    // Recuperamos el valor del color de fondo del elemento
    var colorFondo = elemento.getStyle('background-color');

    // Comprobamos si el color es transparente
    if (colorFondo === "transparent")
    {
        // Si lo es, lo cambiamos a rojo
        elemento.setStyle('background-color', 'darkseagreen');
    }
    else
    {
        // Si no lo es, lo cambiamos a transparente
        elemento.setStyle('background-color', 'transparent');
    }
}

/**
 * Función cuya finalidad es mostrar el funcionamiento de los selectores en MooTools
 * 
 * En este ejemplo podemos ver la selección de elemento simple que realiza MooTools. 
 * En este caso se selecciona el elemento con id cuerpo y dentro de el el primer 
 * elemento p del que se recupera el color de fondo dependiendo del color anterior 
 * que tuviese, cambiando de transparente a rojo y viceversa
 * 
 * @returns {undefined}
 */
function ejemplo2()
{

    // Seleccionamos el elemento con el que queremos trabajar. En este caso el 
    // primer elemento p dentro del elemento con id cuerpo
    var elemento = $('cuerpo').getElement('p');

    // Recuperamos el valor del color de fondo del elemento
    var colorFondo = elemento.getStyle('background-color');

    // Comprobamos si el color es transparente
    if (colorFondo === "transparent")
    {
        // Si lo es, lo cambiamos a rojo
        elemento.setStyle('background-color', 'darkseagreen');
    }
    else
    {
        // Si no lo es, lo cambiamos a transparente
        elemento.setStyle('background-color', 'transparent');
    }
}

/**
 * Función cuya finalidad es mostrar el funcionamiento de los selectores en MooTools
 * 
 * En este ejemplo podemos ver la selección de elemento simple que realiza MooTools. 
 * En este caso se selecciona el elemento con id cuerpo y dentro de el el primer 
 * elemento p con clase error, del que se recupera el color de fondo dependiendo 
 * del color anterior que tuviese, cambiando de transparente a rojo y viceversa
 * 
 * @returns {undefined}
 */
function ejemplo3()
{
    // Seleccionamos el elemento con el que queremos trabajar. En este caso el 
    // primer elemento p con clase error dentro del elemento elemento con id cuerpo
    var elemento = $('cuerpo').getElement('p.error');

    // Recuperamos el valor del color de fondo del elemento
    var colorFondo = elemento.getStyle('background-color');

    // Comprobamos si el color es transparente
    if (colorFondo === "transparent")
    {
        // Si lo es, lo cambiamos a rojo
        elemento.setStyle('background-color', 'darkseagreen');
    }
    else
    {
        // Si no lo es, lo cambiamos a transparente
        elemento.setStyle('background-color', 'transparent');
    }
}

/**
 * Función cuya finalidad es mostrar el funcionamiento de los selectores en MooTools
 * 
 * En este ejemplo podemos ver la selección de elemento simple que realiza MooTools. 
 * En este caso se selecciona el elemento con id cuerpo y dentro de el el primer 
 * elemento con id pie de donde se seleccione el primer elemento de tipo p, 
 * del que se recupera el color de fondo dependiendo del color anterior que 
 * tuviese, cambiando de transparente a rojo y viceversa
 * 
 *   * @returns {undefined}
 */
function ejemplo4()
{
    // Seleccionamos el elemento con el que queremos trabajar. En este caso el 
    // elemento con id pie dentro del elemento con id cuerpo
    var elemento = $('cuerpo').getElement('#pie p');

    // Recuperamos el valor del color de fondo del elemento
    var colorFondo = elemento.getStyle('background-color');

    // Comprobamos si el color es transparente
    if (colorFondo === "transparent")
    {
        // Si lo es, lo cambiamos a rojo
        elemento.setStyle('background-color', 'darkseagreen');
    }
    else
    {
        // Si no lo es, lo cambiamos a transparente
        elemento.setStyle('background-color', 'transparent');
    }
}

/**
 * Función cuya finalidad es mostrar el funcionamiento de los selectores en MooTools
 * 
 * En este ejemplo podemos ver la selección de elementos múltiples que realiza MooTools. 
 * En este caso se selecciona todos los elementos div de la página de los que se 
 * recupera el color de fondo y dependiendo del color anterior que tuviesen, son
 * cambiados de transparente a rojo y viceversa
 * 
 * @returns {undefined}
 */
function ejemplo5()
{
    // Seleccionamos el elemento con el que queremos trabajar. En este caso, 
    // todos los elementos de tipo div
    var elementos = $$('div');

    // Iteramos por todos los elementos de la seleccio´n
    elementos.forEach(function (elemento) {
        {
            // Recuperamos el valor del color de fondo del elemento
            var colorFondo = elemento.getStyle('background-color');

            // Comprobamos si el color es transparente
            if (colorFondo === "transparent")
            {
                // Si lo es, lo cambiamos a rojo
                elemento.setStyle('background-color', 'darkseagreen');
            }
            else
            {
                // Si no lo es, lo cambiamos a transparente
                elemento.setStyle('background-color', 'transparent');
            }
        }
    });
}


/**
 * Función cuya finalidad es mostrar el funcionamiento de los selectores en MooTools
 * 
 * En este ejemplo podemos ver la selección de elementos múltiples de distinto tipo 
 * que realiza MooTools. 
 * 
 * En este caso se seleccionan los elementos div con id cabecera y botones, 
 * aparte de los elemento p del div con id pie de la página de los que se 
 * recupera el color de fondo y dependiendo del color anterior que tuviesen, son
 * cambiados de transparente a rojo y viceversa
 * 
 * @returns {undefined}
 */
function ejemplo6()
{
    // Seleccionamos el elemento con el que queremos trabajar. En este caso, 
    // el div con id botones, el div con id cabecera y dentro del div con id pie, 
    // todos los elementos p
    var elementos = $$('div#botones, div#cabecera, div#pie p');

    // Iteramos por todos los elementos de la seleccio´n
    elementos.forEach(function (elemento) {
        {
            // Recuperamos el valor del color de fondo del elemento
            var colorFondo = elemento.getStyle('background-color');

            // Comprobamos si el color es transparente
            if (colorFondo === "transparent")
            {
                // Si lo es, lo cambiamos a rojo
                elemento.setStyle('background-color', 'darkseagreen');
            }
            else
            {
                // Si no lo es, lo cambiamos a transparente
                elemento.setStyle('background-color', 'transparent');
            }
        }
    });
}


/**
 * Función cuya finalidad es mostrar el funcionamiento de los selectores en MooTools
 * 
 * En este ejemplo podemos ver la selección de elementos múltiples del mismo tipo
 * que realiza MooTools. 
 * 
 * En este caso se seleccionan todos los elementos de tipo p que se encuentren 
 * dentro del elemento con id cuerpo de los que se recupera el color de fondo y 
 * dependiendo del color anterior que tuviesen, son cambiados de transparente a 
 * rojo y viceversa
 * 
 * @returns {undefined}
 */
function ejemplo7()
{
    // Seleccionamos el elemento con el que queremos trabajar. En este caso, 
    // todos los elementos de tipo p dentro del elemento con id cuerpo
    var elementos = $('cuerpo').getElements('p');

    // Iteramos por todos los elementos de la seleccio´n
    elementos.forEach(function (elemento) {
        {
            // Recuperamos el valor del color de fondo del elemento
            var colorFondo = elemento.getStyle('background-color');

            // Comprobamos si el color es transparente
            if (colorFondo === "transparent")
            {
                // Si lo es, lo cambiamos a rojo
                elemento.setStyle('background-color', 'darkseagreen');
            }
            else
            {
                // Si no lo es, lo cambiamos a transparente
                elemento.setStyle('background-color', 'transparent');
            }
        }
    });
}

/**
 * Función cuya finalidad es mostrar el funcionamiento de los selectores en MooTools
 * 
 * En este ejemplo podemos ver la selección de elementos múltiples del mismo tipo
 * que realiza MooTools. 
 * 
 * En este caso se seleccionan todos los elementos de tipo p dentro del elemento 
 * con id pie que se encuentren dentro del elemento con id cuerpo de los que se 
 * recupera el color de fondo y dependiendo del color anterior que tuviesen, son 
 * cambiados de transparente a rojo y viceversa
 
 * @returns {undefined}
 */
function ejemplo8()
{
    // Seleccionamos el elemento con el que queremos trabajar. En este caso, 
    // todos los elementos de tipo p dentro del elemento con id pie
    var elementos = $('cuerpo').getElements('#pie p');

    // Iteramos por todos los elementos de la seleccio´n
    elementos.forEach(function (elemento) {
        {
            // Recuperamos el valor del color de fondo del elemento
            var colorFondo = elemento.getStyle('background-color');

            // Comprobamos si el color es transparente
            if (colorFondo === "transparent")
            {
                // Si lo es, lo cambiamos a rojo
                elemento.setStyle('background-color', 'darkseagreen');
            }
            else
            {
                // Si no lo es, lo cambiamos a transparente
                elemento.setStyle('background-color', 'transparent');
            }
        }
    });
}

/**
 * Función cuya finalidad es mostrar el funcionamiento de los selectores en MooTools
 * 
 * En este ejemplo podemos ver la selección de elementos usando el orden de elementos
 * 
 * En este caso se seleccionan todos los elementos de tipo div que sean pares 
 * en su orden de los que se recupera el color de fondo y dependiendo del color 
 * anterior que tuviesen, son cambiados de transparente a rojo y viceversa
 * 
 * @returns {undefined}
 */
function ejemplo9()
{
    // Seleccionamos el elemento con el que queremos trabajar. En este caso, 
    // todos los elementos de tipo input cuyo nombre sea distinto a control2
    var elementos = $$('div:even');

    // Iteramos por todos los elementos de la seleccio´n
    elementos.forEach(function (elemento) {
        {
            // Recuperamos el valor del color de fondo del elemento
            var colorFondo = elemento.getStyle('background-color');

            // Comprobamos si el color es transparente
            if (colorFondo === "transparent")
            {
                // Si lo es, lo cambiamos a rojo
                elemento.setStyle('background-color', 'darkseagreen');
            }
            else
            {
                // Si no lo es, lo cambiamos a transparente
                elemento.setStyle('background-color', 'transparent');
            }
        }
    });
}


/**
 * Función cuya finalidad es mostrar el funcionamiento de los selectores en MooTools
 * 
 * En este ejemplo podemos ver la selección de elementos usando el orden de elementos
 * 
 * En este caso se seleccionan todos los elementos de tipo div que sean impares 
 * en su orden de los que se recupera el color de fondo y dependiendo del color 
 * anterior que tuviesen, son cambiados de transparente a rojo y viceversa
 * 
 * @returns {undefined}
 */
function ejemplo10()
{
    // Seleccionamos el elemento con el que queremos trabajar. En este caso, 
    // todos los elementos de tipo input cuyo nombre sea distinto a control2
    var elementos = $$('div:odd');

    // Iteramos por todos los elementos de la seleccio´n
    elementos.forEach(function (elemento) {
        {
            // Recuperamos el valor del color de fondo del elemento
            var colorFondo = elemento.getStyle('background-color');

            // Comprobamos si el color es transparente
            if (colorFondo === "transparent")
            {
                // Si lo es, lo cambiamos a rojo
                elemento.setStyle('background-color', 'darkseagreen');
            }
            else
            {
                // Si no lo es, lo cambiamos a transparente
                elemento.setStyle('background-color', 'transparent');
            }
        }
    });
}

/**
 * Función cuya finalidad es mostrar el funcionamiento de los selectores en MooTools
 * 
 * En este ejemplo podemos ver la selección de elementos usando operadores
 * 
 * En este caso se seleccionan todos los elementos de tipo input cuyo nombre 
 * sea igual a control2 y que sean de tipo texto de los que se recupera el 
 * color de fondo de los que se recupera el color de fondo y dependiendo del 
 * color anterior que tuviesen, son cambiados de transparente a rojo y viceversa
 
 * @returns {undefined}
 */
function ejemplo11()
{
    // Seleccionamos el elemento con el que queremos trabajar. En este caso, 
    // todos los elementos de tipo input cuyo nombre sea igual a control2
    var elementos = $('cuerpo').getElements('input[name=control2][type=text]');

    // Iteramos por todos los elementos de la seleccio´n
    elementos.forEach(function (elemento) {
        {
            // Recuperamos el valor del color de fondo del elemento
            var colorFondo = elemento.getStyle('background-color');

            // Comprobamos si el color es transparente
            if (colorFondo === "#ffffff")
            {
                // Si lo es, lo cambiamos a rojo
                elemento.setStyle('background-color', 'darkseagreen');
            }
            else
            {
                // Si no lo es, lo cambiamos a transparente
                elemento.setStyle('background-color', '#ffffff');
            }
        }
    });
}

/**
 * Función cuya finalidad es mostrar el funcionamiento de los selectores en MooTools
 * 
 * En este ejemplo podemos ver la selección de elementos usando operadores
 * 
 * En este caso se seleccionan todos los elementos de tipo input cuyo nombre 
 * sea distinto a control2 y que sean de tipo texto de los que se recupera el 
 * color de fondo de los que se recupera el color de fondo y dependiendo del 
 * color anterior que tuviesen, son cambiados de transparente a rojo y viceversa
 
 * @returns {undefined}
 */
function ejemplo12()
{
    // Seleccionamos el elemento con el que queremos trabajar. En este caso, 
    // todos los elementos de tipo input cuyo nombre sea distinto a control2
    var elementos = $('cuerpo').getElements('input[name!=control2][type=text]');

    // Iteramos por todos los elementos de la seleccio´n
    elementos.forEach(function (elemento) {
        {
            // Recuperamos el valor del color de fondo del elemento
            var colorFondo = elemento.getStyle('background-color');

            // Comprobamos si el color es transparente
            if (colorFondo === "#ffffff")
            {
                // Si lo es, lo cambiamos a rojo
                elemento.setStyle('background-color', 'darkseagreen');
            }
            else
            {
                // Si no lo es, lo cambiamos a transparente
                elemento.setStyle('background-color', '#ffffff');
            }
        }
    });
}



/**
 * Función cuya finalidad es mostrar el funcionamiento de los selectores en MooTools
 * 
 * En este ejemplo podemos ver la selección de elementos usando operadores
 * 
 * En este caso se seleccionan todos los elementos de tipo input cuyo nombre 
 * comience por control y que sean de tipo texto de los que se recupera el 
 * color de fondo de los que se recupera el color de fondo y dependiendo del 
 * color anterior que tuviesen, son cambiados de transparente a rojo y viceversa
 
 * @returns {undefined}
 */
function ejemplo13()
{
    // Seleccionamos el elemento con el que queremos trabajar. En este caso, 
    // todos los elementos de tipo input cuyo nombre sea distinto a control2
    var elementos = $('cuerpo').getElements('input[name^=control][type=text]');

    // Iteramos por todos los elementos de la seleccio´n
    elementos.forEach(function (elemento) {
        {
            // Recuperamos el valor del color de fondo del elemento
            var colorFondo = elemento.getStyle('background-color');

            // Comprobamos si el color es transparente
            if (colorFondo === "#ffffff")
            {
                // Si lo es, lo cambiamos a rojo
                elemento.setStyle('background-color', 'darkseagreen');
            }
            else
            {
                // Si no lo es, lo cambiamos a transparente
                elemento.setStyle('background-color', '#ffffff');
            }
        }
    });
}

/**
 * Función cuya finalidad es mostrar el funcionamiento de los selectores en MooTools
 * 
 * En este ejemplo podemos ver la selección de elementos usando operadores
 * 
 * En este caso se seleccionan todos los elementos de tipo input cuyo nombre 
 * acabe por 2 y que sean de tipo texto de los que se recupera el color de fondo 
 * y dependiendo del color anterior que tuviesen, son cambiados de transparente a 
 * rojo y viceversa
 
 * @returns {undefined}
 */
function ejemplo14()
{
    // Seleccionamos el elemento con el que queremos trabajar. En este caso, 
    // todos los elementos de tipo input cuyo nombre sea distinto a control2
    var elementos = $('cuerpo').getElements('input[name$=2][type=text]');

    // Iteramos por todos los elementos de la seleccio´n
    elementos.forEach(function (elemento) {
        {
            // Recuperamos el valor del color de fondo del elemento
            var colorFondo = elemento.getStyle('background-color');

            // Comprobamos si el color es transparente
            if (colorFondo === "#ffffff")
            {
                // Si lo es, lo cambiamos a rojo
                elemento.setStyle('background-color', 'darkseagreen');
            }
            else
            {
                // Si no lo es, lo cambiamos a transparente
                elemento.setStyle('background-color', '#ffffff');
            }
        }
    });
}


/**
 * Función cuya finalidad es mostrar el funcionamiento de los selectores en MooTools
 * 
 * En este ejemplo podemos ver la selección de elemento padre de un elemento
 * 
 * En este caso se selecciona el padre del elemento con id pie2 del  que se 
 * recupera el color de fondo y dependiendo del color anterior que tuviesen, 
 * son cambiados de transparente a rojo y viceversa
 
 * @returns {undefined}
 */
function ejemplo15()
{
    // Seleccionamos el elemento con el que queremos trabajar. En este caso, 
    // todos los elementos de tipo input cuyo nombre sea distinto a control2
    var elemento = $('pie2').getParent();


    // Recuperamos el valor del color de fondo del elemento
    var colorFondo = elemento.getStyle('background-color');

    // Comprobamos si el color es transparente
    if (colorFondo === "transparent")
    {
        // Si lo es, lo cambiamos a rojo
        elemento.setStyle('background-color', 'darkseagreen');
    }
    else
    {
        // Si no lo es, lo cambiamos a transparente
        elemento.setStyle('background-color', 'transparent');
    }
}


/**
 * Función cuya finalidad es mostrar el funcionamiento de los selectores en MooTools
 * 
 * En este ejemplo podemos comprobar como usar la función get para recuperar 
 * valores de las propiedades del elemento seleccionado
 * 
 * @returns {undefined}
 */
function ejemplo16()
{
    // Seleccionamos el elemento con id control3 y recuperamos su valor
    valor = $('control3').get('value');

    // Lo mostramos al usuario con una ventana emergente
    alert(valor);
}


/**
 * Función cuya finalidad es mostrar el funcionamiento de los selectores en MooTools
 * 
 * En este ejemplo podemos comprobar como usar la función set para asignar
 * valores de las propiedades del elemento seleccionado
 * 
 * @returns {undefined}
 */
function ejemplo17()
{

    // Pedimos al usuario que introduzca un valor
    valor = prompt("Introduzca un valor");

    // Verificamos que realmente haya introducido un valor
    if (valor)
    {
        // Seleccionamos el elemento con id control3 y asignamos el valor 
        // introducido por el usuario
        $('control3').set('value', valor);
    }

}
