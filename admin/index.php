<?php
// Si es el servidor interno de PHP y el archivo (CSS/JS/IMG) existe, lo sirve directamente
if (php_sapi_name() === 'cli-server' && is_file(__DIR__ . parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH))) {
    return false;
}

$semilla                = time();

// <script src="/utils/js/general.js?v=$semilla"></script>
$archivoJS              = "<script src='/utils/js/u.js?v=$semilla'></script>";
$archivoCSS             = '<link rel="stylesheet" href="/utils/css/u.css" >';

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

$request = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

// 1. Rutas estáticas simples
if ($request === '/' || $request === '') {
    $title = 'Inicio';
    $content = 'pages/home.php';
} 
elseif ($request === '/datos') {
    $title = 'Datos';
    $content = 'pages/datos.php';
}
elseif ($request === '/usuario') {
    $title                  = 'Datos';
    $content                = 'pages/usuarios/homeUsuario.php';
    $archivoJS              = "<script src='/utils/js/usuarios/homeUsuarios.js?v=$semilla'></script>";
}

elseif ($request === '/login') {
    $title = 'Datos';
    include 'pages/login.php';
    return true;
}

// 2. Ruta dinámica para ID numérico (ej. /producto/45)
// El patrón ([0-9]+) captura uno o más números
elseif (preg_match('#^/producto/([0-9]+)$#', $request, $matches)) {
    // $matches[1] contendrá el número capturado en la URL
    $id_producto = $matches[1]; 
    
    $title = 'Viendo producto ' . $id_producto;
    $content = 'pages/producto.php';
}

// 3. Ruta dinámica para texto (ej. /usuario/juan)
// El patrón ([a-zA-Z0-9_-]+) captura letras, números, guiones bajos o medios
elseif (preg_match('#^/usuariXXo/([a-zA-Z0-9_-]+)$#', $request, $matches)) {
    // $matches[1] contendrá el nombre capturado
    $nombre_usuario = $matches[1]; 
    
    $title = 'Perfil de ' . $nombre_usuario;
    $content = 'pages/usuario.php';
}

// 4. Página no encontrada (404)
else {
    http_response_code(404);
    $title = 'Página No Encontrada';
    $content = 'pages/404.php';
}

// Cargar la plantilla y la vista
include 'includes/header.php';
include $content;
include 'includes/footer.php';
