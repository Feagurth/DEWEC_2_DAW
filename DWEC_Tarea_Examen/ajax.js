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
}


/**
 * Función cuya finalidad es mostrar el funcionamiento del uso de peticiones 
 * AJAX en MooTools
 * 
 * En este ejemplo podemos ver como se realiza una petición AJAX con parámetros 
 * usando post y como se trata la información que devuelve la petición
 * 
 * @returns {undefined}
 */
function ejemplo1()
{

    // Recuperamos el valor de selección del desplegable para saber que 
    // parámetro pasar a la petición
    modo = $("modo").getElement("option:selected").value;

    // Creamos una peticio´n
    var peticion = new Request({        
        url: 'ajax.php', // Especificamos la url de la petición                
        method: 'post', // Especificamos el método de la petición
        data: 'modo=' + modo, // Especificamos la información que se va a enviar con la petición
        // Definimos la funcion que se van a ejecutar en el evento onRequest
        onRequest: function () {
            elemento = new Element("p", {"html": "Cargando...", "id": "feedback"});
            elemento.replaces($('feedback'));
        },
        // Definimos la funcion que se van a ejecutar en el evento onSuccess
        onSuccess: function (responseText) {
            elemento = new Element("p", {"html": responseText, "id": "feedback"});
            elemento.replaces($('feedback'));
        },
        // Definimos la funcion que se van a ejecutar en el evento onFailure
        onFailure: function () {
            elemento = new Element("p", {"html": "Su petición ha fallado", "class": "error", "id": "feedback"});
            elemento.replaces($('feedback'));

        }
    }).send(); // Una vez creada la petición, la enviamos
}


/**
 * Función cuya finalidad es mostrar el funcionamiento del uso de peticiones 
 * AJAX en MooTools
 * 
 * En este ejemplo podemos ver como se realiza una petición AJAX HTML con parámetros 
 * usando post y como se trata la información que devuelve la petición
 * 
 * @returns {undefined}
 */
function ejemplo2()
{

    // Recuperamos el valor de selección del desplegable para saber que 
    // parámetro pasar a la petición
    modo = $("modo").getElement("option:selected").value;

    // Creamos una petición HTML
    var peticion = new Request.HTML({        
        url: 'ajax.php', // Especificamos la url de la petición                
        method: 'post', // Especificamos el método de la petición
        data: 'modo=' + modo, // Especificamos la información que se va a enviar con la petición
        format: 'html', // Especificamos el formato de respuesta
        update: 'feedback', // Definimos el id del control en el que se va a incluir la informacion devuelta por la petición
        // Definimos la funcion que se van a ejecutar en el evento onSuccess
        onSuccess: function(responseTree, responseElements, responseHTML, responseJavaScript)
        {
            // Mostramos los distintos parámetros de respuesta con un mensaje emergente
            alert(responseTree);
            alert(responseElements);
            alert(responseHTML);
            alert(responseJavaScript);
            
        },
        // Definimos la funcion que se van a ejecutar en el evento onFailure
        onFailure: function()
        {
            elemento = new Element("p", {"html": "Su petición ha fallado", "class": "error", "id": "feedback"});
            elemento.replaces($('feedback'));
        }
        
    }).send(); // Una vez creada la petición, la enviamos
}


/**
 * Función cuya finalidad es mostrar el funcionamiento del uso de peticiones 
 * AJAX en MooTools
 * 
 * En este ejemplo podemos ver como se realiza una petición AJAX JSON con parámetros 
 * usando post y como se trata la información que devuelve la petición
 * 
 * @returns {undefined}
 */
function ejemplo3()
{

    // Recuperamos el valor de selección del desplegable para saber que 
    // parámetro pasar a la petición
    modo = $("modo").getElement("option:selected").value;

    // Creamos una petición HTML
    var peticion = new Request.JSON({        
        url: 'ajax.php', // Especificamos la url de la petición                
        method: 'post', // Especificamos el método de la petición
        data: 'modo=' + modo, // Especificamos la información que se va a enviar con la petición
        format: 'json',
        // Definimos la funcion que se van a ejecutar en el evento onSuccess
        onSuccess: function(responseJSON, responseText)
        {
            // Transformamos la respuesta en un objeto
            respuesta = JSON.decode(responseJSON);
            
            // Mostramos el resultado
            elemento = new Element("p", {"html": respuesta.resultado , "id": "feedback"});
            elemento.replaces($('feedback'));
            
        },
        // Definimos la funcion que se van a ejecutar en el evento onFailure
        onError: function(text, error)
        {
            elemento = new Element("p", {"html": text + " - " + error, "class": "error", "id": "feedback"});
            elemento.replaces($('feedback'));
        }
        
    }).send(); // Una vez creada la petición, la enviamos
}