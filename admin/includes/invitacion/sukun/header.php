<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="author" content="wpOceans">
    <link rel="shortcut icon" type="image/png" href="<?php echo $URL_ASSETS ?>assets/images/favicon.png">
    <title>Sukun - Wedding & Wedding Planner HTML5 Template</title>
    <link href="<?php echo $URL_ASSETS ?>assets/css/themify-icons.css" rel="stylesheet">
    <link href="<?php echo $URL_ASSETS ?>assets/css/font-awesome.min.css" rel="stylesheet">
    <link href="<?php echo $URL_ASSETS ?>assets/css/flaticon.css" rel="stylesheet">
    <link href="<?php echo $URL_ASSETS ?>assets/css/bootstrap.min.css" rel="stylesheet">
    <link href="<?php echo $URL_ASSETS ?>assets/css/animate.css" rel="stylesheet">
    <link href="<?php echo $URL_ASSETS ?>assets/css/owl.carousel.css" rel="stylesheet">
    <link href="<?php echo $URL_ASSETS ?>assets/css/owl.theme.css" rel="stylesheet">
    <link href="<?php echo $URL_ASSETS ?>assets/css/slick.css" rel="stylesheet">
    <link href="<?php echo $URL_ASSETS ?>assets/css/slick-theme.css" rel="stylesheet">
    <link href="<?php echo $URL_ASSETS ?>assets/css/swiper.min.css" rel="stylesheet">
    <link href="<?php echo $URL_ASSETS ?>assets/css/nice-select.css" rel="stylesheet">
    <link href="<?php echo $URL_ASSETS ?>assets/css/owl.transitions.css" rel="stylesheet">
    <link href="<?php echo $URL_ASSETS ?>assets/css/magnific-popup.css" rel="stylesheet">
    <link href="<?php echo $URL_ASSETS ?>assets/css/jquery.fancybox.css" rel="stylesheet">
    <link href="<?php echo $URL_ASSETS ?>assets/css/odometer-theme-default.css" rel="stylesheet">
    <link href="<?php echo $URL_ASSETS ?>assets/css/jquery-ui.css" rel="stylesheet">
    <link href="<?php echo $URL_ASSETS ?>assets/sass/style.css" rel="stylesheet">



    <!-- Etiquetas Open Graph Básicas (Para WhatsApp, Facebook, LinkedIn) -->
    <meta property="og:type" content="website" />
    <meta property="og:title" content="<?php echo htmlspecialchars($titulo) ?>" />
    <meta property="og:description" content="<?php echo htmlspecialchars($descripcion) ?>" />
    <meta property="og:url" content="<?php echo $imagenUrl ?>" />

    <!-- La imagen es crucial: debe ser una URL absoluta -->
    <meta property="og:image" content="<?php echo $imagenUrl ?>" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />

    <!-- Opcional: Etiquetas para Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="<?php echo htmlspecialchars($titulo) ?>">
    <meta name="twitter:description" content="<?php echo htmlspecialchars($descripcion) ?>">
    <meta name="twitter:image" content="<?php echo $imagenUrl ?>">


    <!-- page level styles -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.css" integrity="sha512-3pIirOrwegjM6erE5gPSwkUzO+3cTjpnV9lexlNZqvupR64iZBnOOTiiLPb9M36zpMScbmUNIcHUqKD47M719g==" crossorigin="anonymous" referrerpolicy="no-referrer">

    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.30.1/moment.js" integrity="sha512-3CuraBvy05nIgcoXjVN33mACRyI89ydVHg7y/HMN9wcTVbHeur0SeBzweSd/rxySapO7Tmfu68+JlKkLTnDFNg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>


    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet">
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet">

    <!-- Swiper CSS & JS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet">
    
    
    <!-- <?php echo $URL_ASSETS ?>assets/images/person/fondo-bonito.jpeg -->
    <style>


        .source-code-pro {
            font-family         : "Source Code Pro", monospace;
            font-optical-sizing : auto;
            font-weight         : <weight>;
            font-style          : normal;
        }

        
        .fira-code {
            font-family         : "Fira Code", monospace;
            font-optical-sizing : auto;
            font-weight         : normal    ;
            font-style          : normal;
            font-size           : 12px;
            color : 666;
        }

        /* Código base (Escritorio / Pantallas grandes) */
        body {
        position: relative;
        /* El body debe ser transparente */
        margin: 0;
        padding: 0;
        }

        body::before {
        content: "";
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        /* Imagen original para escritorio (image_42.png) */
        background-image: url('<?php echo $URL_ASSETS ?>assets/images/person/fondo-bonito.jpeg');
        background-size: cover;
        background-position: center;
        z-index: -1;
        /* Mantiene el fondo estático, pero usando el pseudo-elemento */
        }

        /* --- Código Responsivo (Móviles / Pantallas pequeñas) --- */
        @media (max-width: 768px) {
        body::before {
            /* Nueva imagen con márgenes estrechos, adaptada para móvil (image_44.png) */
            background-image: url('<?php echo $URL_ASSETS ?>assets/images/person/fondo-bonito-2.jpeg');
            /* Mantenemos cover porque la imagen ya está adaptada a la verticalidad, no se recortará */
            background-size: cover;
            background-position: center top; /* Centrado arriba para que el inicio de la invitación se vea perfecto */
        }
        }

        /* Y para el scroll suave, aplicarlo al html */
        html {
        scroll-behavior: smooth;
        }



        .mi-div {
            background-color: #ffffff; /* Fondo blanco sólido */
            opacity: 0.9; /* 10% de transparencia a todo el elemento */
        }
        
        
        
        
        .mi-imagen {
            border-radius: 15px; /* Ajusta la cantidad de píxeles según lo que necesites */
        }
        .btn-flotante {
            position: fixed;
            top: 30px; /* Separación desde abajo */
            right: 30px;  /* Separación desde la derecha */
            width: 60px;
            height: 60px;
            background-color: #4682B4; /* Tono azul acero */
            color: white;
            border: none;
            border-radius: 50%; /* Bordes completamente redondeados */
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); /* Sombra para dar profundidad */
            font-size: 24px;
            cursor: pointer;
            z-index: 1000; /* Asegura que siempre esté por encima de otros elementos */
            
            /* Centrar el ícono dentro del botón */
            display: flex;
            justify-content: center;
            align-items: center;
            transition: transform 0.2s ease-in-out;
        }

        /* Pequeño efecto al pasar el mouse por encima */
        .btn-flotante:hover {
            transform: scale(1.1); 
        }
        .transparente {
        /* 255, 255, 255 es el color blanco. El 0.9 es la opacidad */
        background-color: rgba(255, 255, 255, 0.6); 
        }

        .fuente-normal{
            font-family: "Mulish", sans-serif;
            font-size: revert;
        }



        :root {
            --navy-blue: #0b1a30;
            --card-bg: #fdfcf8;
        }
        /* =========================================
        1. BLOQUEO DE SCROLL
        ========================================= */
        body.bloquear-scroll {
        overflow: hidden;
        }

        /* =========================================
        2. CAPA SUPERPUESTA (Tu ID: intro-overlay)
        ========================================= */
        #intro-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 9999;
        display: flex;
        justify-content: center;
        align-items: center;
        /* Fondo floral aplicado solo aquí */
        background-image: url('<?php echo $API ?>img/fondo-bonito.jpeg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        }

        /* =========================================
        3. ESTILOS DE TU TARJETA (Efecto Cristal)
        ========================================= */
        #invitation-card {
        background-color: rgba(255, 255, 255, 0.85); /* Blanco al 85% */
        backdrop-filter: blur(8px); /* Desenfoque del fondo trasero */
        -webkit-backdrop-filter: blur(8px); /* Para compatibilidad con Safari */
        }

        /* =========================================
        4. ANIMACIÓN DE EXPLOSIÓN
        ========================================= */
        .explode {
        animation: explosion 0.8s forwards ease-in-out;
        }

        @keyframes explosion {
        0% { transform: scale(1); opacity: 1; filter: blur(0px); }
        100% { transform: scale(1.3); opacity: 0; filter: blur(15px); pointer-events: none; }
        }

        /* =========================================
        5. PARTÍCULAS (Nieve/Estrellas)
        ========================================= */
        .particle {
        position: absolute;
        top: -10px;
        background-color: rgba(100, 150, 200, 0.6); /* Azul suave */
        border-radius: 50%;
        animation: fall linear infinite;
        /* El z-index 0 asegura que caigan detrás del texto/botones (z-10) pero visibles en el div */
        z-index: 0; 
        }

        @keyframes fall {
        to {
            transform: translateY(100vh);
        }
        }






        .btn-agendar {
            display: inline-block;
            background-color: #0b1a30; /* El azul marino de tu diseño */
            color: #ffffff;
            padding: 12px 24px;
            border-radius: 30px;
            text-decoration: none;
            font-family: 'Georgia', serif;
            font-size: 16px;
            transition: background-color 0.3s ease;
        }

        .btn-agendar:hover {
            background-color: #1a355b;
        }




        /* Animación de vibración (shake) para la caja de regalo */
        @keyframes shake {
            0% { transform: translate(1px, 1px) rotate(0deg); }
            10% { transform: translate(-1px, -2px) rotate(-1deg); }
            20% { transform: translate(-3px, 0px) rotate(1deg); }
            30% { transform: translate(3px, 2px) rotate(0deg); }
            40% { transform: translate(1px, -1px) rotate(1deg); }
            50% { transform: translate(-1px, 2px) rotate(-1deg); }
            60% { transform: translate(-3px, 1px) rotate(0deg); }
            70% { transform: translate(3px, 1px) rotate(-1deg); }
            80% { transform: translate(-1px, -1px) rotate(1deg); }
            90% { transform: translate(1px, 2px) rotate(0deg); }
            100% { transform: translate(1px, -2px) rotate(-1deg); }
        }

        /* Estilos de la imagen base */
        .gift-box {
            cursor: pointer;
            transition: transform 0.3s ease;
            width: 180px; 
        }

        /* Pequeño zoom al pasar el mouse por encima */
        .gift-box:hover {
            transform: scale(1.1);
        }

        /* Clase que se agrega con JS para ejecutar la animación */
        .animating {
            animation: shake 0.4s;
            animation-iteration-count: 2; /* Vibra 2 veces antes de abrir */
        }

        #circulo_fecha #dia1{
            position : absolute;
            top: 13px;
            left: 101px;
        }
        #circulo_fecha #dia1 p{
            font-size: 28px !important;
        }
        #circulo_fecha #dia2{
            position : absolute;
            top: 17px;
            left: 103px;
        }
        #circulo_fecha #dia2 p {
            font-size: 88px !important;
        }
        #circulo_fecha #mes1{
            position : absolute;
            top: 131px;
            left: 93px;
        }
        #circulo_fecha #mes1 p {
            font-size: 32px !important;
        }
        #circulo_fecha #anio1{
            position : absolute;
            bottom: 45px;
            left: 132px;
        }
        #circulo_fecha #anio1 p {
            font-size: 24px !important;
        }

        
    </style>

    <!-- <?php echo $rutaArchivo; ?> -->
    <script type="text/javascript">
    let URL_API         = '<?php echo $API; ?>';
    let URL_WEB         = '<?php echo $URL; ?>';
    const mapKey        = '<?php echo $MAPS_KEY ?>';
    // Leer el token guardado
    const tokenBackend  = localStorage.getItem('auth_token');
    </script>

    <?php echo $archivoCSS ?>

    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

    
</head>

<body>

    <!-- start page-wrapper -->
    <div class="page-wrap">
        <!-- start preloader -->
        <div class="preloader">
            <div class="vertical-centered-box">
                <div class="content">
                    <div class="loader-circle"></div>
                    <div class="loader-line-mask">
                        <div class="loader-line"></div>
                    </div>
                    <img src="<?php echo $URL_ASSETS ?>assets/images/preloader.png" alt="">
                </div>
            </div>
        </div>
        <!-- end preloader -->
        <!-- Start header -->
        <header id="header">
            
        </header>
        <!-- end of header -->