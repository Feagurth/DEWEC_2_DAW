<?php

/*
  Esta página realiza las siguientes acciones según los parámetros recibidos:

  Parámetros: accion=nueva&titulo=xxx&url=xxxxx
  Acción: Insertará la url xxxxx en la tabla MySQL de RSS.
  Salida: Imprimirá el ID del último recurso añadido.
  Formato: Texto

  Parámetros: accion=borrar&id=x
  Acción: Borrará la url con id x de la tabla de RSS.
  Salida: Imprimirá mensaje de OK.
  Formato: Texto

  Parámetros: accion=leer&url=id
  Acción: Se conecta a la URL indicada por el ID y descarga el RSS de Internet.
  Salida: El fichero XML del RSS en formato JSON.
  Formato: JSON

  Parámetros: accion=recursosRSS
  Acción: Devuelve todos los datos de la tabla rss.
  Salida: Un array con los campos id, titulo, url en formato JSON.
  Formato: JSON

  Parámetros: accion=numRSS
  Acción: Devuelve el número total de RSS que tenemos en la tabla.
  Salida: Un número indicando los RSS que hay en la tabla.
  Formato: texto
 */

// Cabecera para indicar que vamos a enviar datos JSON y que no haga caché de los datos.
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');

/* Utilizar el fichero dbcreacion.sql incluído en la carpeta para crear la base de datos, usuario y tabla en tu servidor MySQL.
  Si fuera necesario modifica los datos de la configuración y adáptalos a tu entorno de trabajo. */

// Configuración BASE DE DATOS MYSQL
$servidor = "localhost";
$basedatos = "ajax";
$usuario = "ajax";
$password = "dwec";

// Creamos la conexión al servidor.
$conexion = @mysql_connect($servidor, $usuario, $password) or die(mysql_error());
mysql_query("SET NAMES 'utf8'", $conexion);

// Seleccionar la base de datos en esa conexion.
mysql_select_db($basedatos, $conexion) or die(mysql_error());


switch ($_GET['accion']) {
    case 'nueva':
        $sql = sprintf("insert into rss(titulo,url) values('%s','%s')", mysql_real_escape_string($_GET['titulo']), mysql_real_escape_string($_GET['url']));
        mysql_query($sql, $conexion) or die(mysql_error());
        echo mysql_insert_id();
        break;

    case 'borrar':
        $sql = sprintf("delete from rss where id=%s", mysql_real_escape_string($_GET['id']));
        mysql_query($sql, $conexion) or die(mysql_error());
        echo "OK";
        break;


    case 'cargar':
        // Consulta SQL para obtener los datos de los centros.
        $sql = sprintf("select * from rss where id=%s", mysql_real_escape_string($_GET['id']));
        $resultados = mysql_query($sql, $conexion) or die(mysql_error());
        $registros = mysql_fetch_assoc($resultados);


        $doc = new DOMDocument();
        $doc->load($registros['url']);
        $arrFeeds = array();
        foreach ($doc->getElementsByTagName('item') as $node) {
            $itemRSS = array(
                'titulo' => $node->getElementsByTagName('title')->item(0)->nodeValue,
                'descripcion' => $node->getElementsByTagName('description')->item(0)->nodeValue,
                'url' => $node->getElementsByTagName('link')->item(0)->nodeValue,
                'fecha' => $node->getElementsByTagName('pubDate')->item(0)->nodeValue
            );

            array_push($arrFeeds, $itemRSS);
        }

        header('Content-Type: application/json');
        echo json_encode($arrFeeds);
        break;

    case 'recursosRSS':
        
        $datos = NULL;
        
        $sql = sprintf("select * from rss order by id");
        $resultados = mysql_query($sql, $conexion) or die(mysql_error());
        while ($fila = mysql_fetch_array($resultados, MYSQL_ASSOC)) {
            // Almacenamos en un array cada una de las filas que vamos leyendo del recordset.
            // Cada fila del array coincidirá con el id del RSS.
            $datos[$fila['id']] = $fila;
        }
        
        if ($datos != NULL) {
            header('Content-Type: application/json');
            echo json_encode($datos);
        } else {
            echo "";
        }

        break;

    case 'numRSS': // Devuelve el número total de RSS que tenemos en la base de datos.
        $sql = sprintf("select * from rss order by id");
        $resultados = mysql_query($sql, $conexion) or die(mysql_error());
        echo mysql_num_rows($resultados);
        break;
}

mysql_close($conexion);
