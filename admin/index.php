<?php
// Si es el servidor interno de PHP y el archivo (CSS/JS/IMG) existe, lo sirve directamente
if (php_sapi_name() === 'cli-server' && is_file(__DIR__ . parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH))) {
    return false;
}

$semilla                = time();

// <script src="/utils/js/general.js?v=$semilla"></script>
$archivoJS              = "<script src='/utils/js/u.js?v=$semilla'></script>";
$archivoJS2             = "<script src='/utils/js/helpers.js?v=$semilla'></script>";
$archivoCSS             = '<link rel="stylesheet" href="/utils/css/u.css" >';
$uuID                   = '';

$incHeader              = 'includes/header.php';
$incFooter              = 'includes/footer.php';

// 1. Función para cargar el archivo .env
function cargarEnv($rutaArchivo) {
    if (!file_exists($rutaArchivo)) {
        return false;
    }

    // Leer el archivo línea por línea, ignorando líneas vacías
    $lineas = file($rutaArchivo, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    
    foreach ($lineas as $linea) {
        // Ignorar las líneas que son comentarios (empiezan con #)
        if (strpos(trim($linea), '#') === 0) continue;

        // Separar el nombre de la variable y su valor
        list($nombre, $valor) = explode('=', $linea, 2);
        
        $nombre = trim($nombre);
        $valor = trim($valor);

        // Quitar comillas si el valor las tiene (ej: DB_PASS="1234")
        $valor = trim($valor, "\"'");

        // Guardar la variable en los arreglos globales de PHP
        putenv(sprintf('%s=%s', $nombre, $valor));
        $_ENV[$nombre] = $valor;
        $_SERVER[$nombre] = $valor;
    }
}

// 2. Ejecutar la función apuntando a tu archivo .env
cargarEnv(__DIR__ . '/.env');

$API = $_ENV['API'];
$URL = $_ENV['URL'];
$URL_ASSETS = $URL;

$request            = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$request            = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$partes             = explode('/', trim($request, '/'));

//var_dump( $partes[0] );

$ruta_base          = $partes[0] ?? '';

// 1. Rutas estáticas simples

switch ( $ruta_base ) {
    case '':
    case '/':
        $title                  = 'Inicio';
        $content                = 'pages/home.php';
    break;
    case 'login':
        $title                  = 'Login';
        include 'pages/login.php';
        return true;
    break;
    case '/datos':
        $title                  = 'Datos';
        $content                = 'pages/datos.php';
    break;
    case 'usuario':
        $title                  = 'Usuarios';
        $content                = 'pages/usuarios/homeUsuario.php';
        $archivoJS              = "<script src='/utils/js/usuarios/homeUsuarios.js?v=$semilla'></script>";
    break;
    case 'novios':
        $title                  = 'Novios';
        $content                = 'pages/novios/homeNovios.php';
        $archivoJS              = "<script src='/utils/js/novios/homeNovios.js?v=$semilla'></script>";
    break;
    case 'boda':
        $title                  = 'Boda';
        $content                = 'pages/boda/homeBoda.php';
        $archivoJS              = "<script src='/utils/js/boda/homeBoda.js?v=$semilla'></script>";
    break;
    case 'invitados':
        $title                  = 'Invitados';
        $content                = 'pages/invitados/homeInvitados.php';
        $archivoJS              = "<script src='/utils/js/invitados/homeInvitados.js?v=$semilla'></script>";
    break;
    case 'asignar-mesas':
        $title                  = 'Asignar mesas';
        $content                = 'pages/asignar_mesas/homeAsignarMesas.php';
        $archivoJS              = "<script src='/utils/js/asignar_mesas/homeAsignarMesas.js?v=$semilla'></script>";
        $archivoCSS             = '<link rel="stylesheet" href="/utils/css/mesas.css" >';
    break;
    case 'mesas':
        $title                  = 'Mesas';
        $content                = 'pages/mesas/homeMesas.php';
        $archivoJS              = "<script src='/utils/js/mesas/homeMesas.js?v=$semilla'></script>";
    break;
    case 'invitacion':
        // Obtenemos la segunda y tercera parte de la URL
        $sub_ruta               = $partes[1] ?? '';
        $parametro              = $partes[2] ?? '';
        $regex_uuid             = '#^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$#';

        $URL_ASSETS             = $URL."public/sukun/";

        // Verificamos que la sub-ruta sea "sukun" y que el parámetro sea un UUID válido
        if ($sub_ruta           === 'sukun' && preg_match($regex_uuid, $parametro)) {
            $uuID               = $parametro;
            $title              = 'Invitación Especial';
            $content            = 'pages/invitacion/sukun/homeInvitacionSukun.php';
            $archivoJS          = "<script src='/utils/js/invitacion/sukun/homeInvitacion.js?v=$semilla'></script>";

            $incHeader          = 'includes/invitacion/sukun/header.php';
            $incFooter          = 'includes/invitacion/sukun/footer.php';
        } else {
            // Si dice algo distinto a "sukun" o el UUID está mal escrito
            http_response_code(404);
            $title              = 'Invitación no válida';
            $content            = 'pages/404.php';
        }
    break;
    case 'documento':
        // Verificamos si existe la parte 1 (el parámetro) y si tiene el formato UUID correcto
        $parametro              = $partes[1] ?? '';
        $regex_uuid             = '#^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$#';

        var_dump( $parametro );

        if (preg_match($regex_uuid, $parametro)) {
            $uuid_documento = $parametro;
            $content            = 'pages/mesas/homeMesas.php';
            $archivoJS          = "<script src='/utils/js/mesas/homeMesas.js?v=$semilla'></script>";
        } else {
            // Si no hay UUID o el formato es incorrecto
            http_response_code(404);
            $title              = 'Documento no válido';
            $content            = 'pages/404.php';
        }
    break;
    case 'historia':
        $title                  = 'Historia';
        $content                = 'pages/historia/homeHistoria.php';
        $archivoJS              = "<script src='/utils/js/historia/homeHistoria.js?v=$semilla'></script>";
    break;
    case 'programa':
        $title                  = 'Programa';
        $content                = 'pages/programa/homePrograma.php';
        $archivoJS              = "<script src='/utils/js/programa/homePrograma.js?v=$semilla'></script>";
    break;
    case 'fotos':
        $title                  = 'Fotos';
        $content                = 'pages/fotos/homeFotos.php';
        $archivoJS              = "<script src='/utils/js/fotos/homeFotos.js?v=$semilla'></script>";
    break;
    default:
        http_response_code( 404 );
        $title                  = 'Página No Encontrada';
        $content                = 'pages/404.php';
    break;
}


// Cargar la plantilla y la vista
include $incHeader;
include $content;
include $incFooter;
