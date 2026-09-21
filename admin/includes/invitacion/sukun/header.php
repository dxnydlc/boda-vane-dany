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

    <!-- <?php echo $URL_ASSETS ?>assets/images/person/fondo-bonito.jpeg -->
    <style>
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



        
    </style>

    <!-- <?php echo $rutaArchivo; ?> -->
    <script type="text/javascript">
    let URL_API         = '<?php echo $API; ?>';
    let URL_WEB         = '<?php echo $URL; ?>';
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