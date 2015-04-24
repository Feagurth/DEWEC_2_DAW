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

// Creamos un evento para que se ejecute cuando la página esté cargada
crearEvento(window, "load", iniciar);

/**
 * Función de inicialización de la aplicación
 * @returns {undefined}
 */
function iniciar()
{

    // Creamos unas variables que contendrán el id el feed que estemos leyendo 
    // actualmente, el id del primer feed, el id del último feed y un 
    // array con los identificadores de todos los feeds que hay cargados
    var id = "";
    var first = "";
    var last = "";
    var feeds;

    // Creamos los eventos necesarios para el funcionamiento de la web y los 
    // asignamos a sus funciones correspondientes
    crearEvento(document.getElementById('campoSelect'), "change", cambioFeed);
    crearEvento(document.getElementById('anterior'), "click", anterior);
    crearEvento(document.getElementById('siguiente'), "click", siguiente);
    crearEvento(document.getElementById('crearRSS'), "click", crearRSS);
    crearEvento(document.getElementById('borrarRSS'), "click", borrarRSS);

    // Cargamos el desplegable con los feed de la base de datos y cargamos el 
    // primero de ellos
    cargarCombo();
}

/**
 * Función que carga el desplegable con los feeds recuperados asíncronamente de 
 * la base de datos, tras lo cual carga la información del primero de ellos
 * @returns {undefined}
 */
function cargarCombo()
{
    // Activamos el indicador AJAX para que el usuario sepa que se está 
    // realizando una petición
    activarIndicadorAjax();

    // Mediante JQuery hacemos una llamada AJAX a la página rss.php, de tipo 
    // asíncrono, parado como parámetros 'accion=recursosRSS'
    $.ajax({
        url: 'rss.php',
        type: 'GET',
        async: true,
        data: 'accion=recursosRSS',
        // Si la operación ha tenido éxito, procesamos la respuesta en la 
        // siguiente función
        success: function (respuesta)
        {
            // Verificamos si la respuesta trae alguna información o no.
            if (respuesta !== "")
            {
                //Recuperamos los datos de la respuesta en formato JSON y los 
                //transformamos en un array usando eval            
                var datos = eval(respuesta);

                // Inicializamos una variable para almacenar el HTML que 
                // generaremos con la información recuperada por la respuesta para 
                // posteriormente agregarlo a la web y crear el desplegable. 
                resultado = "";

                // Recorremos el array
                for (var clave in datos)
                {
                    // Vamos concatenando a la variable la estructura HTML generada con la información recibida
                    resultado += "<option value='" + datos[clave].id + "'>" + datos[clave].titulo + "</option>";
                }

                // Vaciamos el contenido del objeto HTML que corresponde al selector del desplegable
                $("#campoSelect").empty();

                // Añadimos al objeto HTML el contenido generado dinámicamente
                $("#campoSelect").append(resultado);

                // Guardamos el array de id's de los feeds
                feeds = Object.keys(datos);

                // Y guardamos así mismo el id del primer y el último feed del array
                first = Object.keys(datos).sort()[0];
                last = Object.keys(datos).sort().reverse()[0];

                // Si hay registros de rss, podemos volver a habilitar el botón de eliminar feeds
                $("#borrarRSS").removeAttr('disabled').removeClass("deshabilitado");

                // Para finalizar, cargamos los datos del primer feed que tenemos 
                // en el desplegable
                cambioFeed(first);
            }
            else
            {
                // Si la respuesta es vacía, eso quiere decir que no hay feeds 
                // rss que añadir al desplegable y por tanto hay que 
                // deshabilitar el botón de borrar rss, así como los botones de anterior y posterio
                $("#borrarRSS").attr('disabled', 'disabled').addClass("deshabilitado");
                $("#anterior").attr('disabled', 'disabled').addClass("deshabilitado");
                $("#siguiente").attr('disabled', 'disabled').addClass("deshabilitado");

                // Así mismo limpiamos el desplegable y la sección de noticias
                $("#campoSelect").empty();
                $("#noticias").empty();
            }

        },
        // Si se produce algún error pasamos la respuesta de la petición a la 
        // función capturaErrores para que se encargue de su tratamiento
        error: function (respuesta)
        {
            // Añadimos a la respuesta la función donde se ha producido el error
            respuesta['funcion'] = 'cargarCombo';
            capturaErrores(respuesta);
        },
        // Cuando la operación esté realizada completamente, desactivamos 
        // el indicador AJAX                
        complete: desactivarIndicadorAjax
    });
}

/**
 * Función que nos permite añadir un feed rss
 * @returns {undefined}
 */
function crearRSS()
{

    // Creamos una variable y le asignamos el valor devuelto por la función 
    // pedirNombre
    nombreFeed = pedirNombre();

    // Verificamos que la variable tenga contenido
    if (nombreFeed !== null)
    {
        // Creamos una variable y le asignamos el valor devuelto por la función 
        // pedirURL        
        urlFeed = pedirURL();

        // Verificamos que la variable tenga contenido
        if (urlFeed !== null)
        {

            // Activamos el indicador AJAX para que el usuario sepa que se está 
            // realizando una petición
            activarIndicadorAjax();

            // Mediante JQuery hacemos una llamada AJAX a la página rss.php, de tipo 
            // asíncrono, parado como parámetros 'accion=nueva&titulo=xxxx&url=yyyyyy' 
            // donde pondremos el nombre y la dirección del feed
            $.ajax({
                url: 'rss.php',
                type: 'GET',
                async: true,
                data: 'accion=nueva&titulo=' + nombreFeed + '&url=' + urlFeed,
                // Si la operación ha tenido éxito, procesamos la respuesta en la 
                // siguiente función                
                success: function (respuesta)
                {
                    // Comprobamos que la respuesta no sea nula
                    if (respuesta !== null)
                    {
                        // Si la respuesta no es nula, eso indica que la 
                        // insercción ha sido correcta, por tanto recargamos el 
                        // desplegable
                        cargarCombo();
                    }
                },
                // Si se produce algún error pasamos la respuesta de la petición a la 
                // función capturaErrores para que se encargue de su tratamiento                
                error: function (respuesta)
                {
                    // Añadimos a la respuesta la función donde se ha producido el error
                    respuesta['funcion'] = 'crearRSS';
                    capturaErrores(respuesta);
                },
                // Cuando la operación esté realizada completamente, desactivamos 
                // el indicador AJAX                
                complete: desactivarIndicadorAjax
            });
        }
    }
}

/**
 * Método que nos permite eliminar un feed de la base de datos
 * @returns {undefined}
 */
function borrarRSS()
{
    // Pedimos confirmación al usuario
    if (confirm("¿Desea eliminar el feed?"))
    {
        // Activamos el indicador AJAX para que el usuario sepa que se está 
        // realizando una petición        
        activarIndicadorAjax();

        // Mediante JQuery hacemos una llamada AJAX a la página rss.php, de tipo 
        // asíncrono, parado como parámetros 'accion=borrar&id=' y el id del 
        // feed a borrar
        $.ajax({
            url: 'rss.php',
            type: 'GET',
            async: true,
            data: 'accion=borrar&id=' + id,
            // Si la operación ha tenido éxito, procesamos la respuesta en la 
            // siguiente función            
            success: function (respuesta)
            {
                // Comprobamos la respuesta
                if (respuesta === "OK")
                {
                    // Si la respuesta es OK, eso indica que el borrado ha sido
                    // correcto, por tanto recargamos el desplegable
                    cargarCombo();
                }
            },
            // Si se produce algún error pasamos la respuesta de la petición a la 
            // función capturaErrores para que se encargue de su tratamiento                
            error: function (respuesta)
            {
                // Añadimos a la respuesta la función donde se ha producido el error                
                respuesta['funcion'] = 'borrarRSS';
                capturaErrores(respuesta);
            },
            // Cuando la operación esté realizada completamente, desactivamos 
            // el indicador AJAX
            complete: desactivarIndicadorAjax
        });
    }
}

/**
 * Método que nos permite cargar el anterior feed rss
 * @returns {undefined}
 */
function anterior()
{
    // Pasamos al feed anterior llamando al método cambioFeed, pasandole la id 
    // del elemento anterior a la posición a la que ocupe el feed actual 
    // en el array de feeds
    cambioFeed(feeds[(feeds.indexOf(id)) - 1]);
}

/**
 * Método que nos permite cargar el siguiente feed rss
 * @returns {undefined}
 */
function siguiente()
{
    // Pasamos al feed anterior llamando al método cambioFeed, pasandole la id 
    // del elemento posterior a la posición a la que ocupe el feed actual 
    // en el array de feeds    
    cambioFeed(feeds[(feeds.indexOf(id)) + 1]);
}

/**
 * Método que nos permite cargar la información de un feed de noticias específico 
 * y ajustar los controles de cambio de feed
 * @param {type} id_feed Id del feed a cargar
 * @returns {undefined}
 */
function cambioFeed(id_feed)
{

    // Primeramente hacemos que el contenido del objeto noticias se desvanezca 
    // poco a poco
    $("#noticias").fadeOut();

    // Comprobamos si hay un valor para id_feed. Si no lo hay la función ha 
    // sido llamada como evento al seleccionar un nuevo elemento en el 
    // desplegable, si id_feed tiene valor entonces el método ha sido llamado 
    // desde otra parte del código.
    if (isNaN(id_feed))
    {
        // id_feed si no tiene valor, asignamos el valor del objeto selecionado 
        // en el desplegable como valor del feed actual
        id = $("select option:selected").val();
    }
    else
    {
        // Si tiene valor, asignamos ese id como el id de feed actual
        id = id_feed;
    }

    // Comprobamos si el id del feed actual es igual al del último feed que tenemos
    if (id === last)
    {
        // De ser así, estamos en el último feed que tenemos y por tanto el 
        // botón de siguiente no tendrá funcionalidad. Para evitar que sea 
        // pulsado lo deshabilitamos
        $("#siguiente").attr('disabled', 'disabled').addClass("deshabilitado");

    }
    else
    {
        // Si el id no es el del último feed, el botón de siguiente deberá 
        // funcionar, por lo que quitamos el atributo de deshabilitado que 
        // pudiese tener para permitir que funciona
        $("#siguiente").removeAttr('disabled').removeClass("deshabilitado");
    }

    // Comprobamos si el id del feed actual es igual al del primer feed que tenemos
    if (id === first)
    {
        // De ser así, estamos en el primer feed que tenemos y por tanto el 
        // botón de anterior no tendrá funcionalidad. Para evitar que sea 
        // pulsado lo deshabilitamos        
        $("#anterior").attr('disabled', 'disabled').addClass("deshabilitado");
    }
    else
    {
        // Si el id no es el del primer feed, el botón de anterior deberá 
        // funcionar, por lo que quitamos el atributo de deshabilitado que 
        // pudiese tener para permitir que funciona        
        $("#anterior").removeAttr('disabled').removeClass("deshabilitado");
    }

    // Activamos el indicador AJAX para que el usuario sepa que se está 
    // realizando una petición
    activarIndicadorAjax();

    // Mediante JQuery hacemos una llamada AJAX a la página rss.php, de tipo 
    // asíncrono, parado como parámetros 'accion=cargar&id=' y el id del feed 
    // que queremos cargar
    $.ajax({
        url: 'rss.php',
        type: 'GET',
        async: true,
        data: 'accion=cargar&id=' + id,
        // Si la operación ha tenido éxito, procesamos la respuesta en la 
        // siguiente función        
        success: function (respuesta)
        {
            //Recuperamos los datos de la respuesta en formato JSON y los 
            //transformamos en un array usando eval            
            var datos = eval(respuesta);

            // Inicializamos una variable para almacenar el HTML que 
            // generaremos con la información recuperada por la respuesta para 
            // posteriormente agregarlo a la web y mostrar las noticias. 
            resultado = "";

            // Recorremos el array
            for (var clave in datos)
            {
                // Vamos concatenando a la variable la estructura HTML generada con la información recibida.
                // La primera linea corresponderá a una cabecera con el título de la noticia que contedrá un enlace a la url
                // de la misma.
                resultado += "<h3><a href='" + datos[clave].url + "' target='_blank'>" + datos[clave].titulo + "</a></h3>";

                // La segunda linea de la noticia será un parrafo que contendrá 
                // la descripción de la noticia
                resultado += "<p>" + datos[clave].descripcion + "</p>";

                // Finalmente pondremos como separador una linea horizontal
                resultado += "<hr />";
            }

            // Limpiamos el contenido del objeto HTML con id noticias
            $("#noticias").empty();

            // Quitamos el atributo de selección al feed de noticias que tengamos seleccionado en el desplegable
            $("select option:selected").removeAttr('selected');

            // Seleccionamos el nuevo feed añadiendo el atributo de selección
            $("select option[value=" + id + "]").attr('selected', 'selected');

            // Cambiamos el texto del objeto HTML con id título de la página
            $("#titulo").text("Lector de Titulares RSS con AJAX y jQuery >>> Fuente RSS: " + $("select option:selected").text());

            // Agregamos el resultado formateado al objeto HTML con id noticias
            $("#noticias").append(resultado);

            // Hacemos que el contenido del objeto HTML con id noticias aparezca gradualmente
            $("#noticias").fadeIn();

            // Finalmente movemos el scroll del lector de feeds por si estuviese en otra 
            // posición distinta al inicio
            $("#noticias").scrollTop(0);

        },
        // Si se produce algún error pasamos la respuesta de la petición a la 
        // función capturaErrores para que se encargue de su tratamiento        
        error: function (respuesta)
        {
            // Añadimos a la respuesta la función donde se ha producido el error
            respuesta['funcion'] = 'cambioFeed';
            capturaErrores(respuesta);
        },
        // Cuando la operación esté realizada completamente, desactivamos 
        // el indicador AJAX        
        complete: desactivarIndicadorAjax
    });
}

/**
 * Función para pedir y validar una url introducida por el usuario usando expresiones regulares
 * @returns {null|String} Devuelve la url o null si se ha cancelado la operación
 */
function pedirURL()
{
    // Definimos dos variables, una para almacenar los datos del 
    // usuaario y otra para controar las validaciones
    var valor;
    var salida = true;
    do
    {
        // Pedimos el nombre al usuario
        valor = window.prompt("Introduzca la url del feed");

        if (valor !== null)
        {
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
        }

        // Iteramos mientras la validación no sea correcta
    } while (!salida)

    // Devolvemos el valor al usuario
    return valor;
}

/**
 * Función que nos permite validar un nombre usando expresiones regulares
 * @returns {null|String} Devuelve el nombre o null si se ha cancelado la operación
 */
function pedirNombre()
{
    // Definimos dos variables, una para almacenar los datos del 
    // nombre y otra para controlar las validaciones
    var valor;
    var salida = true;
    do
    {
        // Pedimos el nombre al usuario
        valor = window.prompt("Introduzca un nombre para el feed");

        if (valor !== null)
        {

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
        }

        // Iteramos mientras la validación no sea correcta
    } while (!salida)

    // Devolvemos el valor al usuario
    return valor;
}

/**
 * Método que nos sirve para mostrar al usuario un mensaje de error formateado 
 * al producirse un error
 * @param {type} error Objeto que contiene la información del error
 * @returns {undefined}
 */
function capturaErrores(error)
{
    // Creamos una variable para crear la salida formateada que verá el usuario
    salida = "";

    // Dependiendo de la función donde se haya producido el error, se mostrará una cabecera distinta
    switch (error['funcion'])
    {
        case cambioFeed:
        {
            // Cabecera de error al cambiar el feed
            salida += "<h2>Se ha producido un error al cargar el feed</h2>";
            break;
        }
        case borrarRSS:
        {
            // Cabecera de error al borrar el feed
            salida += "<h2>Se ha producido un error al intentar borrar el feed</h2>";
            break;
        }
        case cargarCombo:
        {
            // Cabecera de error al cargar los feed
            salida += "<h2>Se ha producido un error al cargar los feeds disponibles</h2>";
            break;
        }
        case crearRSS:
        {
            // Cabecera de error al añadir un feed
            salida += "<h2>Se ha producido un error al intentar crear el feed</h2>";
            break;
        }
    }

    // Creamos la salida formateada incluyendo el mensaje de respusta que da el servidor
    salida += "<hr />";
    salida += "<h3>Informacíon de depuración</h3>";
    salida += "<p>" + error['responseText'] + "</p>";
    salida += "<hr />";
    salida += "<p>Pongase en contacto con el administrador</p>";
    salida += "<hr />";

    // Limpiamos el contenido del objeto HTML con id noticias
    $("#noticias").empty();

    // Agregamos el error formateado al objeto HTML con id noticias
    $("#noticias").append(salida);
}