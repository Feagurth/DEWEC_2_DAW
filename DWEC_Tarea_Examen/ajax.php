<?php

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


// Recuperamos el modo de la petición y lo almacenamos en una variable
$modo = $_POST['modo'];

// Recuperamos el formato de respuesta y lo almacenamos en una variable
$formato = isset($_POST['format']) ? $_POST['format'] : "";

xdebug_break();

// Comprobamos el tipo de petición
switch ($modo) {
    // Si es una petición de tipo A
    case "A": {
            // Comprobamos el formato de la respuesta
            switch ($formato) {
                case "html": {
                        // Devolvemos una respuesta específica para la petición A en formato html
                        echo '<p id="feedback"><h1>¡Petición 1 realizada correctamente!</h1></p>';
                        break;
                    }
                case "json": {
                        // Devolvemos una respuesta específica para la petición A
                        echo json_encode('{"resultado":"¡Petición 1 realizada correctamente!"}');
                        break;
                    }

                default: {
                        // Devolvemos una respuesta específica para la petición A
                        echo " Pollas ¡Petición 1 realizada correctamente!";
                        break;
                    }
            }
            break;
        }

    // Si es una petición de tipo B
    case "B": {
            // Comprobamos el formato de la respuesta
            switch ($formato) {
                case "html": {
                        // Devolvemos una respuesta específica para la petición B en formato html
                        echo '<p id="feedback"><h1>¡Petición 2 ejecutada fabulosamente bien!</h1></p>';
                        break;
                    }
                case "json": {
                        // Devolvemos una respuesta específica para la petición B
                        echo json_encode('{"resultado":"¡Petición 2 ejecutada fabulosamente bien!"}');
                        break;
                    }

                default: {
                        // Devolvemos una respuesta específica para la petición B
                        echo "¡Petición 2 ejecutada fabulosamente bien!";
                        break;
                    }
            }
            break;
        }

    // Si es una petición de tipo C
    case "C": {
            // Comprobamos el formato de la respuesta
            switch ($formato) {
                case "html": {
                        // Devolvemos una respuesta específica para la petición C en formato html
                        echo '<p id="feedback"><h1>¡Petición 3 ha funcionado sin mácula!</h1></p>';
                        break;
                    }
                case "json": {
                        // Devolvemos una respuesta específica para la petición C
                        echo json_encode('{"resultado":"¡Petición 3 ha funcionado sin mácula!"}');
                        break;
                    }

                default: {
                        // Devolvemos una respuesta específica para la petición C
                        echo "¡Petición 3 ha funcionado sin mácula!";
                        break;
                    }
            }
            break;
        }
}    