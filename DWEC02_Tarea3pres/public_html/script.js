/* 
 * Copyright (C) 2014 Luis Cabrerizo Gómez
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

function ejercicio1()
{
    // Creamos el array con los nombres de los meses del año
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
        "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    return meses;
}

function ejercicio2()
{
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    var numero = prompt("Introduce tu número de DNI (sin la letra)");
    var letra = prompt("Introduce la letra de tu DNI (en mayúsculas)");
    letra = letra.toUpperCase();

    if (numero < 0 || numero > 99999999) {
        alert("El número proporcionado no es válido");
    }
    else {
        var letraCalculada = letras[numero % 23];
        if (letraCalculada !== letra) {
            alert("La letra o el número proporcionados no son correctos");
        }
        else {
            alert("El número de DNI y su letra son correctos");
        }
    }

}

alert(ejercicio1());