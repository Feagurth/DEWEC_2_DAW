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

}

/**
 * Función cuya finalidad es mostrar como funciona la creación de clases y 
 * objetos en MooTools.
 * 
 * En este ejemplo creamos una clase propia definida por 4 propiedades con 
 * distintos valores y un método que muestra un mensaje de alerta con el 
 * parámetro que le pasemos.
 * 
 * Se puede comprobar como funciona la creación de objetos y como usar sus 
 * métodos o sus propiedades
 * @returns {undefined}
 */
function ejemplo1()
{
    // Definimos manualmente una clase
    var miClase = new Class({
        propiedad1: 232, // Definimos la primera propiedad
        propiedad2: "texto", // Definimos la segunda propiedad
        propiedad3: true, // Definimos la tercera propiedad
        propiedad4: null, // Definimos la cuarta propiedad
        metodo1: function (param) { // Definimos el primer método
            // Mostrará un mensaje de alerta con la cadena que pasemos como parámetro
            alert(param);
        }
    });

    // Creamos un objeto a partir de la clase que acabamos de definir
    miObjeto = new miClase();

    // Finalmente visualizamos todos los valores de las propiedades del objeto 
    // haciendo uso del método del mismo, todos ellos definidos en la clase 
    // que creamos inicialmente
    miObjeto.metodo1(miObjeto.propiedad1);
    miObjeto.metodo1(miObjeto.propiedad2);
    miObjeto.metodo1(miObjeto.propiedad3);
    miObjeto.metodo1(miObjeto.propiedad4);

}

/**
 * Función cuya finalidad es mostrar como funciona la creación de clases y 
 * objetos en MooTools.
 * 
 * En este ejemplo añadimos a la clase del ejemplo anterior una función que 
 * actua de constructor de la clase y que en este caso nos permite modificar el 
 * valor de las propiedades de la clase.
 * 
 * En el ejemplo se puede ver como los valores predefinidos de las propiedades 
 * de la clase son sobreescritos por los introducidos en la creación del objeto
 * @returns {undefined}
 */
function ejemplo2()
{

    // Definimos manualmente una clase
    var miClase = new Class({
        propiedad1: 232, // Definimos la primera propiedad
        propiedad2: "texto", // Definimos la segunda propiedad
        propiedad3: true, // Definimos la tercera propiedad
        propiedad4: null, // Definimos la cuarta propiedad
        metodo1: function (param) { // Definimos el primer método
            // Mostrará un mensaje de alerta con la cadena que pasemos como parámetro
            alert(param);
        },
        // Definimos el constructor de la clase
        initialize: function (param1, param2, param3, param4)
        {
            // Asignamos cada uno de los parámetros a una propiedad
            this.propiedad1 = param1;
            this.propiedad2 = param2;
            this.propiedad3 = param3;
            this.propiedad4 = param4;
        }
    });

    // Creamos un objeto a partir de la clase que acabamos de definir pasándole 
    // los parámetros necesarios para inicializar el objeto
    miObjeto = new miClase("Goku", "Vegeta", "Krilin", "Piccolo");

    // Finalmente visualizamos todos los valores de las propiedades del objeto 
    // haciendo uso del método del mismo, todos ellos definidos en la clase 
    // que creamos inicialmente
    miObjeto.metodo1(miObjeto.propiedad1);
    miObjeto.metodo1(miObjeto.propiedad2);
    miObjeto.metodo1(miObjeto.propiedad3);
    miObjeto.metodo1(miObjeto.propiedad4);
}

/**
 * Función cuya finalidad es mostrar como funciona la herencia de clases en 
 * MooTools
 * 
 * En este ejemplo creamos una clase inicial y despues una segunda que hereda 
 * de la primera.
 * 
 * @returns {undefined}
 */
function ejemplo3()
{
    // Definimos una clase Animal que tendrá un constructor donde pasamos 
    // la edad del animal
    var Animal = new Class({
        initialize: function (edad) {
            this.edad = edad;
        }
    });

    // Creamos una clase Gato
    var Gato = new Class({
        Extends: Animal, // Esta clase hereda de la clase Animal definida anteriormente
        initialize: function (nombre, edad) {
            this.parent(edad); // Llama el método initialize de la clase Animal
            this.nombre = nombre; // Sobreescribe el valor del parametro nombre
        }
    });

    // Creamos un nuevo objeto miGato a partir de la clase Gato, pasándole el 
    // nombre y la edad como parámetros
    var miGato = new Gato('Micho', 20);

    // Comprobamos los valores del objeto
    // Muestra dos ventanas emergentes con el nombre y edad del gato
    alert("Nombre: " + miGato.nombre);
    alert("Edad: " + miGato.edad);

}


/**
 * Función cuya finalidad es mostrar la implementacion de funciones sobre 
 * clases creadas previametne haciendo uso del método de clase implement
 * 
 * En el ejemplo podemos ver como se añade a la clase Gato la función asignarRaza, 
 * así como la propiedad raza, a la que se le asigna valor y más tarde se 
 * muestra al usuario
 * 
 * @returns {undefined}
 */
function ejemplo4()
{

    // Definimos una clase Animal que tendrá un constructor donde pasamos 
    // la edad del animal
    var Animal = new Class({
        initialize: function (edad) {
            this.edad = edad;
        }
    });

    // Creamos una clase Gato
    var Gato = new Class({
        Extends: Animal, // Esta clase hereda de la clase Animal definida anteriormente
        initialize: function (nombre, edad) {
            this.parent(edad); // Llama el método initialize de la clase Animal
            this.nombre = nombre; // Sobreescribe el valor del parametro nombre
        }
    });

    // Creamos un nuevo objeto miGato a partir de la clase Gato, pasándole el 
    // nombre y la edad como parámetros
    var miGato = new Gato('Micho', 20);

    // Comprobamos los valores del objeto
    // Muestra dos ventanas emergentes con el nombre y edad del gato
    alert("Nombre: " + miGato.nombre);
    alert("Edad: " + miGato.edad);    
    
    
    // Asignamos a la clase Gato la implementación de la función asignarRaza
    Gato.implement({
        asignarRaza: function (raza) {
            this.raza = raza;
        }
    });

    // Volvemos a crear el objeto miGato con los mismos parámetros
    var miGato = new Gato('Micho', 20);
    
    // Le asginamos una raza
    miGato.asignarRaza('Persa');
    
    // Mostramos la raza del gato
    // Muestra una ventana emergente con el texto 'Persa'    
    alert("Raza: " + miGato.raza); 

}
