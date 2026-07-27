<?php
// Si es el servidor interno de PHP y el archivo (CSS/JS/IMG) existe, lo sirve directamente
if (php_sapi_name() === 'cli-server' && is_file(__DIR__ . parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH))) {
    return false;
}

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
elseif (preg_match('#^/usuario/([a-zA-Z0-9_-]+)$#', $request, $matches)) {
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
