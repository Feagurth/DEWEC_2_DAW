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

// Variable global para llevar el conteo de los intentos
var intentos;

// <editor-fold defaultstate="collapsed" desc=" Inicialización ">

/**
 * Función para inicializar los valores y eventos de la página web
 * @returns {undefined}
 */
function inicializar()
{

    // Inicializamos la variable intentos con el valor almacenado en la cookie, 
    // si no hay valor, la inicializamos a 0
    intentos = (getCookie("intentos") === "" ? 0 : getCookie("intentos"));

    // Establecemos el texto del contenedor con id intentos
    document.getElementById('intentos').innerHTML = "Intento de Envíos del formulario: " + intentos;

    // Asignamos los eventos a los controles
    document.getElementById('nombre').addEventListener('focusout', aMayusculas, false);
    document.getElementById('apellidos').addEventListener('focusout', aMayusculas, false);
    document.getElementById('nif').addEventListener('focusout', aMayusculas, false);

    document.getElementById('formulario').addEventListener('submit', validarDatos, false);

    document.getElementById('button').addEventListener('click', limpiarFormulario, false);
}

// </editor-fold>

// <editor-fold defaultstate="collapsed" desc=" Validación de formulario ">

/**
 * Función que nos permite validar los datos de un formulario antes de enviarlo.
 * @param {type} evt Evento sobre el que se lanza la función
 * @returns {Boolean|salida} True si la validación es correcta, False si no lo es
 */
function validarDatos(evt)
{
    // Inicializamos una variable para controlar el resultado de la validación
    salida = true;

    // Inicializamos una variable para almacenar el mensaje del usuario
    mensaje = "";

    // Validamos la hora introducida por el usuario
    if (!validarHora(document.getElementById('hora').value))
    {
        // Si la hora no es válida, cambiamos el valor de la variable de control, 
        // cambiamos la clase del control y le pasamos el foco. Para finalizar 
        // concatenamos un mensaje de eror a la cadena de mensaje
        salida = false;
        document.getElementById('hora').className = 'error';
        document.getElementById('hora').focus();
        mensaje = "Hora: Debe introducir una hora válida" + "<br />" + mensaje;
    }
    else
    {
        // Si la validación es correcta, quitamos la clase error que hubiese anteriormente
        document.getElementById('hora').className = '';
    }

    // Validamos el telefono introducido por el usuario
    if (!validarTelefono(document.getElementById('telefono').value))
    {
        // Si el telefono no es válido, cambiamos el valor de la variable de control, 
        // cambiamos la clase del control y le pasamos el foco. Para finalizar 
        // concatenamos un mensaje de eror a la cadena de mensaje
        salida = false;
        document.getElementById('telefono').className = 'error';
        document.getElementById('telefono').focus();
        mensaje = "Telefono: Debe introducir un teléfono válido" + "<br />" + mensaje;
    }
    else
    {
        // Si la validación es correcta, quitamos la clase error que hubiese anteriormente
        document.getElementById('telefono').className = '';
    }

    // Validamos la fecha introducida por el usuario
    if (!validarFecha(document.getElementById('fecha').value))
    {
        // Si la fecha no es válida, cambiamos el valor de la variable de control, 
        // cambiamos la clase del control y le pasamos el foco. Para finalizar 
        // concatenamos un mensaje de eror a la cadena de mensaje
        salida = false;
        document.getElementById('fecha').className = 'error';
        document.getElementById('fecha').focus();
        mensaje = "Fecha: Debe introducir una fecha válida" + "<br />" + mensaje;
    }
    else
    {
        // Si la validación es correcta, quitamos la clase error que hubiese anteriormente
        document.getElementById('fecha').className = '';
    }

    // Validamos la provincia introducida por el usuario
    if (!validarProvincia())
    {
        // Si a provincia no es válida, cambiamos el valor de la variable de control, 
        // cambiamos la clase del control y le pasamos el foco. Para finalizar 
        // concatenamos un mensaje de eror a la cadena de mensaje
        salida = false;
        document.getElementById('provincia').className = 'error';
        document.getElementById('provincia').focus();
        mensaje = "Provincia: Debe seleccionar una provincia" + "<br />" + mensaje;
    }
    else
    {
        // Si la validación es correcta, quitamos la clase error que hubiese anteriormente
        document.getElementById('provincia').className = '';
    }

    // Validamos el email introducido por el usuario
    if (!validarEmail(document.getElementById('email').value))
    {
        // Si el email no es válido, cambiamos el valor de la variable de control, 
        // cambiamos la clase del control y le pasamos el foco. 
        // Para finalizar concatenamos un mensaje de eror a la cadena de mensaje
        salida = false;
        document.getElementById('email').className = 'error';
        document.getElementById('email').focus();
        mensaje = "Email: Debe introducir un email válido" + "<br />" + mensaje;
    }
    else
    {
        // Si la validación es correcta, quitamos la clase error que hubiese anteriormente
        document.getElementById('email').className = '';
    }

    // Validamos el NIF introducida por el usuario
    if (!validarNIF(document.getElementById('nif').value))
    {
        // Si el NIF no es válido, cambiamos el valor de la variable de control, 
        // cambiamos la clase del control y le pasamos el foco. Para finalizar 
        // concatenamos un mensaje de eror a la cadena de mensaje
        salida = false;
        document.getElementById('nif').className = 'error';
        document.getElementById('nif').focus();
        mensaje = "NIF: Debe introducir un nif válido" + "<br />" + mensaje;
    }
    else
    {
        // Si la validación es correcta, quitamos la clase error que hubiese anteriormente
        document.getElementById('nif').className = '';
    }

    // Validamos la edad introducida por el usuario
    if (!validarEdad(document.getElementById('edad').value))
    {
        // Si la edad no es válida, cambiamos el valor de la variable de control, 
        // cambiamos la clase del control y le pasamos el foco. 
        // Para finalizar concatenamos un mensaje de eror a la cadena de mensaje
        salida = false;
        document.getElementById('edad').className = 'error';
        document.getElementById('edad').focus();
        mensaje = "Edad: Debe introducir un número entre 0 y 105" + "<br />" + mensaje;
    }
    else
    {
        // Si la validación es correcta, quitamos la clase error que hubiese anteriormente
        document.getElementById('edad').className = '';
    }

    // Validamos el apellido introducida por el usuario
    if (!validarCadena(document.getElementById('apellidos').value))
    {
        // Si el apellido no es válida, cambiamos el valor de la variable de control, 
        // cambiamos la clase del control y le pasamos el foco. Para finalizar 
        // concatenamos un mensaje de eror a la cadena de mensaje
        salida = false;
        document.getElementById('apellidos').className = 'error';
        document.getElementById('apellidos').focus();
        mensaje = "Apellidos: Debe introducir solamente letras, letras acentuadas y espacios en blanco" + "<br />" + mensaje;
    }
    else
    {
        // Si la validación es correcta, quitamos la clase error que hubiese anteriormente
        document.getElementById('apellidos').className = '';
    }

    // Validamos el nombre introducida por el usuario
    if (!validarCadena(document.getElementById('nombre').value))
    {
        // Si la cadena no es válida, cambiamos el valor de la variable de control, 
        // cambiamos la clase del control y le pasamos el foco. Para finalizar 
        // concatenamos un mensaje de eror a la cadena de mensaje
        salida = false;
        document.getElementById('nombre').className = 'error';
        document.getElementById('nombre').focus();
        mensaje = "Nombre: Debe introducir solamente letras, letras acentuadas y espacios en blanco" + "<br />" + mensaje;
    }
    else
    {
        // Si la validación es correcta, quitamos la clase error que hubiese 
        // anteriormente
        document.getElementById('nombre').className = '';
    }

    // Incrementeamos el valor de la variable intento, al contabilizar una 
    // pulsación del botón enviar
    intentos++;

    // Modificamos el valor del texto que muestra los intentos
    document.getElementById('intentos').innerHTML = "Intento de Envíos del formulario: " + intentos;

    // Si la validación es correcta y el usuario confirma el envío del formulario
    if (salida && confirm("Los datos son correctos\n¿Desea enviar el formulario?"))
    {
        // Almacenamos en la cookie el valor de los intentos antes de enviar el formulario
        setCookie("intentos", intentos, 1);

        // Limpiamos los errores del contenedor con Id errores
        document.getElementById('errores').innerHTML = "";

        // Devolvemos true puesto que la validación ha sido exitosa
        return true;
    }
    else
    {
        // Mostramos el mensaje generado en el contenedor con Id errores
        document.getElementById('errores').innerHTML = mensaje;

        // Usamos el método preventDefault para cancelar el evento que ha 
        // disparado la función, en nuestro caso el evento onsubmit
        evt.preventDefault();

        // Devolvemos false puesto que la validación ha fallado
        return false;
    }
}

// <editor-fold defaultstate="collapsed" desc=" Validación de datos ">

/**
 * Función que nos permite validar una edad entre 0 y 105 años
 * @param {type} valor Cadena a validar
 * @returns {Array} True si la validación es correcta, False en caso contrario
 */
function validarEdad(valor)
{
    // Creamos la expresión regular basándonos en 3 premisas básicas:
    // 1.- Que el usuario puede meter un número de 0 a 9. 
    //     Se define la expresión regular como [0-9]
    // 2.- Que el usuario puede meter un número de dos cifras que no empiece por cero. 
    //     Se define la expresión regular como [1-9][0-9]
    // 3.- Que el usuario puede meter un número de tres cifras, donde la primera 
    //     tiene que ser obligatoriamente un 1, la segunda un 0 y la tercera 
    //     puede variar entre 0 y 5 cubriendose así todas las posibilidades 
    //     entre 100 y 105. Se define la expresión regular como  [1][0][0-5]
    // Finalmente para fusionar todas las premisas se usa el elemento | y se 
    // encapsulan entre paréntesis para que confirmen un todo a la hora de 
    // establecer los anclajes que serán al principio y al final de la candena a 
    // validar    
    expresion = /^([0-9]|[1-9][0-9]|[1][0][0-5])$/;

    return expresion.exec(valor);
}

/**
 * Función que nos permite validar una cadena de texto para que solo contenga carácteres válidos
 * @param {type} valor Cadena a validar
 * @returns {Array} True si la validación es correcta, False en caso contrario
 */
function validarCadena(valor)
{
    // Validamos que solo puedan introducirse letras, en mayuscula o minúscula, 
    // con y sin acentos y espacios en blanco
    expresion = /^[a-zA-ZñÑáÁéÉíÍóÓúÚ ]+$/;

    return expresion.exec(valor);
}

/**
 * Función que nos permite validar una fecha desde 1900 en adelante
 * @param {type} valor Fecha a validar
 * @returns {Array} True si la validación es correcta, False en caso contrario
 */
function validarFecha(valor)
{
    valor = valor.replace(/-/g, '/');

    // Expresión regular para validar fechas dd/mm/aaaa con años bisiestos. 
    // La primera parte de la cadena valida las fechas de los meses de 31 dias desde 1900 en adelante: ^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|
    // La segunda parte de la cadena valida las fechas de los meses de 30 dias desde 1900 en adelante: ((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|
    // La tercera parte de la cadena valida las fechas del mes de febrero validando un máximo de 28 dias: ((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|
    // La cuarta parte de la cadena valida las fechas de febrero de 29 dias para los años bisiestos que se detallan en las siguientes lineas: (29\/02\/
    // La quinta parte de la cadena especifica años bisiestos: ((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$
    // Finalmente todo se ancla para que las fechas formen parte del comienzo y final de la clase    
    expresion = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/;

    // Devolvemos el resultado de la validación de la fecha
    return expresion.exec(valor);
}

/**
 * Función que nos permite validar un DNI/NIE
 * @param {type} valor Cadena a validar
 * @returns {Array} True si la validación es correcta, False en caso contrario
 */
function validarNIF(valor)
{
    // Expresión regular para validar DNI y NIE
    // La primera parte permite validar NIE con el formato X1234567A con guiones opcionales: /^(([X-Z]{1})([-]?)(\d{7})([-]?)([A-Z]{1}))|
    // La segunda parte permite validar NIE especiales con el formato K1234567A con guiones opcionales: (([K-M]{1})([-]?)(\d{7})([-]?)([A-Z]{1}))|
    // La tercera parte permite validar DNI con el formato 12345678A con guiones opcionales: ((\d{8})([-]?)([A-Z]{1}))$/
    // Finalmente se anclan la expresion regular al principio y al final de la candena
    expresion = /^(([X-Z]{1})([-]?)(\d{7})([-]?)([A-Z]{1}))|(([K-M]{1})([-]?)(\d{7})([-]?)([A-Z]{1}))|((\d{8})([-]?)([A-Z]{1}))$/;

    // Devolvemos el resultado de la validación del nif
    return expresion.exec(valor);
}

/**
 * Función que nos permite validar un email
 * @param {type} valor Cadena a validar
 * @returns {Array} True si la validación es correcta, False en caso contrario
 */
function validarEmail(valor)
{
    // Expresión para validar el email
    // La primera parte permite introducir letras y números así como _, - y .: ^([a-zA-Z0-9_\-\.]+)
    // La segunda parte incluye la arroba: @
    // La tercera parte permite especificar la inclusión de abertura de corchetes para englobar el dominio: ((\[
    // La cuarta parte permite especificar direcciones IP como dominio: [0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|
    // La quinta parte permite especificar un nombre de dominio seguido de un punto: (([a-zA-Z0-9\-]+\.)+))
    // La sexta parte permite especificar un nombre de subdominio de un entre 3 y 7 caracteres: ([a-zA-Z]{2,4}|[0-9]{1,3})
    // La septima parte permite especificar la inclusion de cierre de corchetes para englobar el dominio: (\]?)$
    // Finalmente se anclan la expresion regular al principio y al final de la candena
    expresion = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    // Devolvemos el resultado de la validación del email
    return expresion.exec(valor);
}

/**
 * Función que nos permite validar si se ha seleccionado una provincia
 * @returns {Boolean} True si la validación es correcta, False en caso contrario
 */
function validarProvincia()
{
    // Comprobamos si el valor de la provincia vale 0, si es así no se ha 
    // seleccionado provincia alguna y devolvemos false, en caso contrario 
    // devolvemos true
    return (document.getElementById('provincia').value === "0" ? false : true);
}


/**
 * Función que nos permite validar un número de teléfono fijo o movil en España
 * @param {type} valor Cadena a validar
 * @returns {undefined} True si la validación es correcta, False en caso contrario
 */
function validarTelefono(valor)
{
    // Expresión que nos permite validar números de telefono fijos y móviles en España
    // La primera parte nos permite definir el primer dígito del número especificando que debe empezar por 9 o por 6: ^[9|6]{1}
    // La segunda parte nos permite especificar los siguientes seis dígitos del número de telfono agrupados de dos en dos, pudiendo estos grupos estar seguidos de un guión: ([\d]{2}[-]?){3}
    // La tercera parte nos permite especificar los últimos dos números del teléfono: [\d]{2}$
    // Finalmente se anclan la expresion regular al principio y al final de la candena
    expresion = /^[9|6]{1}([\d]{2}[-]?){3}[\d]{2}$/;

    // Devolvemos el resultado de la validación del telefono
    return expresion.exec(valor);
}

/**
 * Función que nos permite validar una hora en formato 12 y 24 horas
 * @param {type} valor Cadena a validar
 * @returns {Array} True si la validación es correcta, False en caso contrario
 */
function validarHora(valor)
{
    // Expresión que nos permite validar horas
    // La primera parte nos permite validar horas que vayan de 00 a 19: ^([0-1][0-9]
    // La segunda parte nos permite validar horas que vayan de 20 a 23: |2[0-3])
    // La tercera parte añade como separador de horas y minutos los dos puntos: :
    // La cuarta parte nos permite especificar los minutos de 00 a 59: [0-5][0-9]$
    // Finalmente se anclan la expresion regular al principio y al final de la candena
    expresion = /^([0-1][0-9]|2[0-3]):[0-5][0-9]$/;

    // Devolvemos el resultado de la validación de la jpra
    return expresion.exec(valor);
}

// </editor-fold>

// </editor-fold>

// <editor-fold defaultstate="collapsed" desc=" Gestión de Cookies ">

/**
 * Función que nos permite crear una cookie con los valores especificados
 * @param {type} nombre Nombre de la propiedad
 * @param {type} valor Valor de la propiedad
 * @param {type} expira Numero de dias de vida de la cookie
 * @returns {undefined}
 */
function setCookie(nombre, valor, expira) {

    // Creamos un objeto fecha
    var fecha = new Date();

    // Le asignamoe la fecha actual y le sumamos el número especificado el número 
    // de dias (expira por 1000 milisegundos * 60 segundos * 60 minutos * 24 horas)
    fecha.setTime(fecha.getTime() + (expira * 24 * 60 * 60 * 1000));

    // Verificamos si se ha introducido una valor de expiración
    if (expira !== "")
    {
        // Asignamos los valores al objeto cookie y le asignamos la fecha de expiración 
        // pasada a una cadena en formato UTC
        document.cookie = nombre + "=" + valor + ";expires=" + fecha.toUTCString();
    }
    else
    {
        // Almacenamos la cookie sin fecha de expiración
        document.cookie = nombre + "=" + valor;
    }
}

/**
 * Función que nos permite recuperar el valor de una propiedad de una cookie
 * @param {type} nombre Nombre de la propiedad a leer
 * @returns {String} Valor de la propiedad si todo es correcto, una cadena vacia si no lo es
 */
function getCookie(nombre) {

    // Creamos una cadena con el nombre y el simbolo = para poder buscar más 
    // facilmente los valores indicados por el nombre
    var cadena = nombre + "=";

    // Recuperamos los valores de la cookie y hacemos un split por el punto y coma 
    // para empezar a tratar los datos
    var datos = document.cookie.split(';');

    // Iteramos por todos los valores del array
    for (var i = 0; i < datos.length; i++)
    {
        // Pasamos el contenido de la posición del array a una variable
        var c = datos[i];

        // Iteramos por el contenido hasta encontrar un caracter
        while (c.charAt(0) === ' ')
        {
            // Quitamos a la cadena la posición actual
            c = c.substring(1);
        }

        // Si el comienzo de la cadena corresponde con el nombre de la propiedad
        if (c.indexOf(cadena) === 0)
        {
            // Devolvemos el valor contenido entre el final del nombre con el 
            // simbolo = concatenado y el final del contenido de la misma
            return c.substring(cadena.length, c.length);
        }
    }

    // Devolvemos una cadena vacia si no hemos encontrado datos que correspondan 
    // con el nombre de la propiedad especificado
    return "";
}

// </editor-fold>

// <editor-fold defaultstate="collapsed" desc=" Funciones de apoyo ">

/**
 * Función para psar a mayúsculas en contenido de campos de texto
 * @returns {aMayusculas}
 */
function aMayusculas()
{
    
    // Usamos el método toUpperCase para pasar el valor del objeto a mayúscula
    this.value = this.value.toUpperCase();
}

/**
 * Función que nos permite limpiar los datos del formulario
 * @returns {undefined}
 */
function limpiarFormulario()
{
    // Esamos el método clear del formulario para borrar los datos
    this.form.clear();

}

// </editor-fold>