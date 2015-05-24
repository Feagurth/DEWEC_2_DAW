/* 
 * Copyright (C) 2015 Luis Caberizo Gómez
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
    $('objetos').addEvent('click', objetos);
    $('selectores').addEvent('click', selectores);
    $('usoDOM').addEvent('click', usoDOM);
    $('eventos').addEvent('click', eventos);
    $('ajax').addEvent('click', ajax);
}


function objetos()
{
     window.location.href = "./objetos.html";
}

function selectores()
{
    window.location.href = "./selectores.html";
}

function usoDOM()
{
    window.location.href = "./usoDOM.html";
}

function eventos()
{
    window.location.href = "./eventos.html";
}

function ajax()
{
    window.location.href = "./ajax.html";
}