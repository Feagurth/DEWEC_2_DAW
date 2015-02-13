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


window.onload = asignarEventos;



function asignarEventos()
{
    document.getElementById("envio1").addEventListener('click',enviar, false);
    document.getElementById("envio2").addEventListener('click',enviar, false);
    document.getElementById("comida").addEventListener('submit',mostrarValores, true);
    document.getElementById("caballos").addEventListener('submit',mostrarValores, true);
}


function enviar()
{
    this.disabled = true;
    this.value = "Enviando...";
    this.form.submit();
}



/**
 * Función que sirve para recorrer los elementos de un array y 
 * mostrar información sobre ellos
 * @returns {undefined}
 */
function mostrarValores()
{
    // Recuperamos y almacenamos el array que contiene los 
    // formularios del documento
    var formularios = document.forms;

    // Iteramos por los formularios
    for (var i = 0; i < formularios.length; i++)
    {
        // Definimos varias variables para almacenar la información 
        // de los diversos controles y los inicalizamos adecuadamente
        var seleccion = "En el formulario " + i + " el usuario seleccionó: ";
        var checkboxes = "Los valores de las casillas en el formulario " + i + " son: ";
        var radiobuttons = "Los valores de los botones de radio en el formulario " + i + " son: ";
        var comboboxes = "Las opciones de los desplegables en el formulario " + i + " son: ";
        var texto = "Los valores de los campos de texto en el formulario " + i + " son: ";

        // Recuperamos todos loe elementos que contiene el formulario 
        // de esta iteración
        var elementos = formularios[i].elements;

        // Iteramos por los elementos
        for (var j = 0; j < elementos.length; j++) {

            // Verificamos el tipo de los elementos
            switch (elementos[j].type)
            {
                // En en caso de que el control sea de tipo radio
                case "radio":
                {
                    // Concatenamos su valor a la cadena destinada para su almacenaje
                    radiobuttons += elementos[j].value + ", ";

                    // Verificamos tambien si el elemento ha sido marcado por el usuario
                    if (elementos[j].checked)
                    {
                        // Si es asi, concatenamos su valor a la cadena destinada para su almacenaje
                        seleccion += elementos[j].value + ", ";
                    }
                    break;
                }
                // En en caso de que sea una casilla de verificación
                case "checkbox":
                {
                    // Concatenamos su valor a la cadena destinada para su almacenaje
                    checkboxes += elementos[j].value + ", ";

                    // Verificamos tambien si el elemento ha sido marcado por el usuario
                    if (elementos[j].checked)
                    {
                        // Si es asi, concatenamos su valor a la cadena destinada para su almacenaje
                        seleccion += elementos[j].value + ", ";
                    }
                    break;
                }

                // En en caso de que el control sea de tipo radio
                case "text":
                {
                    // Concatenamos su valor a la cadena destinada 
                    // para su almacenaje, así como en la variable 
                    // destinada para almacenar las selecciones del 
                    // usuario
                    texto += elementos[j].value;
                    seleccion += elementos[j].value + ", ";
                    break;
                }
                // En en caso de que el control sea de tipo select
                case "select-one":
                {
                    // Iteramos por las opciones que contiene el select
                    for (var k = 0; k < elementos[j].options.length; k++)
                    {
                        // Concatenamos su valor a la cadena destinada para su almacenaje
                        comboboxes += elementos[j].options[k].value + ", ";
                    }

                    // Concatenamos el valor de la selección del usaurio 
                    // a la cadena destinada para su almacenaje
                    seleccion += elementos[j].value + ", ";
                    break;
                }
            }
        }

        // Eliminamos los dos últimos caracteres de las cadenas que 
        // vamos a mostrar al usuario
        radiobuttons = radiobuttons.substring(0, (radiobuttons.length - 2));
        comboboxes = comboboxes.substring(0, (comboboxes.length - 2));
        checkboxes = checkboxes.substring(0, (checkboxes.length - 2));
        seleccion = seleccion.substring(0, (seleccion.length - 2));

        // Usamos un mensaje emergente para mostrar la información al usuario
        alert(texto + "\n" + radiobuttons + "\n" + checkboxes + "\n" + comboboxes + "\n" + seleccion);
    }
    
    // Devolvemos false para evitar el envío de la página
    return false;
}