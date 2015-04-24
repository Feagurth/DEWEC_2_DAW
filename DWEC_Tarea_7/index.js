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

crearEvento(window, "load", iniciar);

function iniciar()
{

    var id = "";
    var first = "";
    var last = "";
    var feeds;

    crearEvento(document.getElementById('campoSelect'), "change", cambioFeed);
    crearEvento(document.getElementById('anterior'), "click", anterior);
    crearEvento(document.getElementById('siguiente'), "click", siguiente);
    crearEvento(document.getElementById('crearRSS'), "click", crearRSS);
    crearEvento(document.getElementById('borrarRSS'), "click", borrarRSS);

    cargarCombo();
}


function cargarCombo()
{
    activarIndicadorAjax();

    $.ajax({
        url: 'rss.php',
        type: 'GET',
        async: true,
        data: 'accion=recursosRSS',
        success: function (respuesta)
        {
            var datos = eval(respuesta);

            resultado = "";
            id_feed = "";

            for (var clave in datos)
            {
                resultado += "<option value='" + datos[clave].id + "'>" + datos[clave].titulo + "</option>";
                if (id_feed === "")
                {
                    id_feed = datos[clave].id;
                }
            }

            $("#campoSelect").empty();
            $("#campoSelect").append(resultado);

            feeds = Object.keys(datos);
            first = Object.keys(datos).sort()[0];
            last = Object.keys(datos).sort().reverse()[0];


            cambioFeed(id_feed);

        },
        error: function (respuesta)
        {
            capturaErrores(respuesta);
        },
        complete: desactivarIndicadorAjax
    });
}


function cambioFeed(id_feed)
{

    $("#noticias").fadeOut();

    if (isNaN(id_feed))
    {
        id = $("select option:selected").val();
    }
    else
    {
        id = id_feed;
    }

    if (id === last)
    {
        $("#siguiente").attr('disabled', 'disabled');

    }
    else
    {
        $("#siguiente").removeAttr('disabled');
    }

    if (id === first)
    {
        $("#anterior").attr('disabled', 'disabled');
    }
    else
    {
        $("#anterior").removeAttr('disabled');
    }

    activarIndicadorAjax();

    $.ajax({
        url: 'rss.php',
        type: 'GET',
        async: true,
        data: 'accion=cargar&id=' + id,
        success: function (respuesta)
        {
            var datos = eval(respuesta);

            resultado = "";

            for (var clave in datos)
            {
                resultado += "<h3><a href='" + datos[clave].url + "' target='_blank'>" + datos[clave].titulo + "</a></h3>";
                resultado += "<p>" + datos[clave].descripcion + "</p>";
                resultado += "<hr />";
            }

            $("#noticias").empty();

            $("select option:selected").removeAttr('selected');
            $("select option[value=" + id + "]").attr('selected', 'selected');

            $("#titulo").text("Lector de Titulares RSS con AJAX y jQuery >>> Fuente RSS: " + $("select option:selected").text());

            $("#noticias").append(resultado);



            $("#noticias").fadeIn();

        },
        error: function (respuesta)
        {
            capturaErrores(respuesta);
        },
        complete: desactivarIndicadorAjax
    });


}

function anterior()
{
    cambioFeed(feeds[(feeds.indexOf(id)) - 1]);

}


function siguiente()
{
    cambioFeed(feeds[(feeds.indexOf(id)) + 1]);
}


function pedirURL()
{
    // Definimos dos variables, una para almacenar los datos del 
    // usuaario y otra para controar las validaciones
    var valor;
    var salida;
    do
    {
        // Pedimos el nombre al usuario
        valor = window.prompt("Introduzca la url del feed");

        // Creamos la expresión regular con la que validaremos los datos
        regExp = /^(ht|f)tps?:\/\/[a-z0-9-\.]+\.[a-z]{2,4}\/?([^\s<>\#%\,\{\}\\|\\\^\[\]`]+)?$/;
        
        // Ejecutamos la validación y guardamos el resultado en una variable
        salida = regExp.exec(valor);

        // Comprobamos si la validación es correcta
        if (!salida)
        {
            // Si no es correcta, mostramos un mensaje de aviso al 
            // usuario
            alert("Introduzca una url correcta");
        }

        // Iteramos mientras la validación no sea correcta
    } while (!salida)

    // Devolvemos el valor al usuario
    return valor;
}

/**
 * Función que nos permite validar un nombre usando expresiones regulares
 * @returns {null|String}
 */
function pedirNombre()
{
    // Definimos dos variables, una para almacenar los datos del 
    // nombre y otra para controlar las validaciones
    var valor;
    var salida;
    do
    {
        // Pedimos el nombre al usuario
        valor = window.prompt("Introduzca un nombre para el feed");

        // Creamos la expresión regular con la que validaremos los datos
        regExp = /^[a-zA-ZñÑáÁéÉíÍóÓúÚ ]+$/;
        
        // Ejecutamos la validación y guardamos el resultado en una variable
        salida = regExp.exec(valor);

        // Comprobamos si la validación es correcta
        if (!salida)
        {
            // Si no es correcta, mostramos un mensaje de aviso al 
            // usuario
            alert("Introduzca un nombre correcto");
        }

        // Iteramos mientras la validación no sea correcta
    } while (!salida)

    // Devolvemos el valor al usuario
    return valor;
}


function crearRSS()
{

    nombreRSS = pedirNombre();

    feedRss = pedirURL();

    if (nombreRSS !== null && feedRss !== null)
    {

        alert(nombreRSS + " - " + feedRss);
    }


}

function borrarRSS()
{

}




function capturaErrores(error)
{

    alert(error);


}