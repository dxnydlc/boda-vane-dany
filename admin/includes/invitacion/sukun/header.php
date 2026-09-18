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



    <meta property="og:title" content="Título de tu página" />
    <meta property="og:description" content="Breve descripción de qué trata tu sitio (máx. 200 caracteres)." />
    <meta property="og:image" content="https://tudominio.com" />
    <meta property="og:url" content="https://tudominio.com" />
    <meta property="og:type" content="website" />

    <!-- page level styles -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.css" integrity="sha512-3pIirOrwegjM6erE5gPSwkUzO+3cTjpnV9lexlNZqvupR64iZBnOOTiiLPb9M36zpMScbmUNIcHUqKD47M719g==" crossorigin="anonymous" referrerpolicy="no-referrer">

    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.30.1/moment.js" integrity="sha512-3CuraBvy05nIgcoXjVN33mACRyI89ydVHg7y/HMN9wcTVbHeur0SeBzweSd/rxySapO7Tmfu68+JlKkLTnDFNg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>


    <script type="text/javascript">
    let URL_API         = '<?php echo $API; ?>';
    // Leer el token guardado
    const tokenBackend  = localStorage.getItem('auth_token');
    </script>

    <?php echo $archivoCSS ?>

    
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
            <div class="wpo-site-header wpo-header-style-1">
                <nav class="navigation navbar navbar-expand-lg navbar-light">
                    <div class="container-fluid">
                        <div class="row align-items-center">
                            <div class="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                <div class="mobail-menu">
                                    <button type="button" class="navbar-toggler open-btn">
                                        <span class="sr-only">Toggle navigation</span>
                                        <span class="icon-bar first-angle"></span>
                                        <span class="icon-bar middle-angle"></span>
                                        <span class="icon-bar last-angle"></span>
                                    </button>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-6 col-6">
                                <div class="navbar-header">
                                    <a class="navbar-brand" href="index.html"><img src="<?php echo $URL_ASSETS ?>assets/images/logo.svg"
                                            alt=""></a>
                                </div>
                            </div>
                            <div class="col-lg-8 col-md-1 col-1">
                                <div id="navbar" class="collapse navbar-collapse navigation-holder">
                                    <button class="menu-close"><i class="ti-close"></i></button>
                                    <ul class="nav navbar-nav mb-2 mb-lg-0">
                                        <li class="menu-item-has-children">
                                            <a class="active" href="#">Home</a>
                                            <ul class="sub-menu">
                                                <li><a class="active" href="index.html">Wedding Home Style 1</a></li>
                                                <li><a href="index-2.html">Wedding Home Style 2</a></li>
                                                <li><a href="index-3.html">Announcement Home 1</a></li>
                                                <li><a href="index-4.html">Announcement Home 2</a></li>
                                                <li><a href="index-5.html">Announcement Home 3</a></li>
                                                <li><a href="index-6.html">Asian Wedding Home</a></li>
                                                <li><a href="index-7.html">Muslim Wedding Home</a></li>
                                                <li><a href="index-rtl.html">Muslim Wedding (RTL)</a></li>
                                                <li><a href="invitation-1.html">Wedding Invitation 1</a></li>
                                                <li><a href="invitation-2.html">Wedding Invitation 2</a></li>
                                                <li class="menu-item-has-children">
                                                    <a href="#">Event Planner Homes</a>
                                                    <ul class="sub-menu">
                                                        <li><a href="index-8.html">Wedding Planner 1</a></li>
                                                        <li><a href="index-9.html">Wedding Planner 2</a></li>
                                                    </ul>
                                                </li>
                                                <li class="menu-item-has-children">
                                                    <a href="#">Wedding Shop Homes</a>
                                                    <ul class="sub-menu">
                                                        <li><a href="shop-home.html">Bridal Shop</a></li>
                                                        <li><a href="shop-home-2.html">Wedding Cake Shop</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="menu-item-has-children">
                                            <a href="#">Pages</a>
                                            <ul class="sub-menu">
                                                <li><a href="about.html">About</a></li>
                                                <li class="menu-item-has-children">
                                                    <a href="story.html">Our Story</a>
                                                    <ul class="sub-menu">
                                                        <li><a href="story.html">Our Story Style 1</a></li>
                                                        <li><a href="story-2.html">Our Story Style 2</a></li>
                                                        <li><a href="story-3.html">Our Story Style 3</a></li>
                                                        <li><a href="story-4.html">Our Story Style 4</a></li>
                                                        <li><a href="story-5.html">Our Story Style 5</a></li>
                                                        <li><a href="story-6.html">Our Story Style 6</a></li>
                                                        <li><a href="story-7.html">Our Story Style 7</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="accomodation.html">Accomodation</a></li>
                                                <li class="menu-item-has-children">
                                                    <a href="rsvp.html">RSVP</a>
                                                    <ul class="sub-menu">
                                                        <li><a href="rsvp.html">RSVP Style 1</a></li>
                                                        <li><a href="rsvp-2.html">RSVP Style 2</a></li>
                                                        <li><a href="rsvp-3.html">RSVP Style 3</a></li>
                                                        <li><a href="rsvp-4.html">RSVP Style 4</a></li>
                                                        <li><a href="rsvp-5.html">RSVP Style 5</a></li>
                                                        <li><a href="rsvp-6.html">RSVP Style 6</a></li>
                                                        <li><a href="rsvp-7.html">RSVP Style 7</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="gallery.html">Gallery</a></li>
                                                <li><a href="planner.html">Planners</a></li>
                                                <li><a href="team-single.html">Planner Single</a></li>
                                                <li><a href="groom-bride.html">Brides & Grooms</a></li>
                                                <li class="menu-item-has-children">
                                                    <a href="service.html">Serevice</a>
                                                    <ul class="sub-menu">
                                                        <li><a href="service.html">Serevice</a></li>
                                                        <li><a href="service-s2.html">Serevice S2</a></li>
                                                        <li><a href="service-s3.html">Serevice S3</a></li>
                                                        <li><a href="service-single.html">Serevice Single</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="pricing.html">Pricing</a></li>
                                                <li class="menu-item-has-children">
                                                    <a href="#">Auth Pages</a>
                                                    <ul class="sub-menu">
                                                        <li><a href="login.html">Login</a>
                                                        </li>
                                                        <li><a href="register.html">Register</a></li>
                                                        <li><a href="forgot.html">Forgot Password</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="coming.html">Coming Soon</a></li>
                                                <li><a href="404.html">404 Error</a></li>
                                            </ul>
                                        </li>
                                        <li class="menu-item-has-children">
                                            <a href="portfolio-grid.html">Portfolio</a>
                                            <ul class="sub-menu">
                                                <li><a href="portfolio-grid.html">Portfolio Grid</a></li>
                                                <li><a href="portfolio-grid-s2.html">Portfolio Grid S2</a></li>
                                                <li><a href="portfolio-grid-s3.html">Portfolio Grid S3</a></li>
                                                <li><a href="portfolio-masonary.html">Portfolio Masonary</a></li>
                                                <li><a href="portfolio-masonary-s2.html">Portfolio Masonary S2</a></li>
                                                <li><a href="portfolio-masonary-s3.html">Portfolio Masonary S3</a></li>
                                                <li><a href="portfolio-slide.html">Portfolio Slide</a></li>
                                                <li><a href="portfolio-single.html">Portfolio Single</a></li>
                                            </ul>
                                        </li>
                                        <li class="menu-item-has-children">
                                            <a href="shop.html">Shop</a>
                                            <ul class="sub-menu">
                                                <li><a href="shop.html">Shop</a></li>
                                                <li><a href="shop-single.html">Shop Single</a></li>
                                                <li><a href="cart.html">Cart</a></li>
                                                <li><a href="wishlist.html">Wishlist</a></li>
                                                <li><a href="checkout.html">Checkout</a></li>
                                            </ul>
                                        </li>
                                        <li class="menu-item-has-children">
                                            <a href="blog.html">Blog</a>
                                            <ul class="sub-menu">
                                                <li><a href="blog.html">Blog right sidebar</a></li>
                                                <li><a href="blog-left-sidebar.html">Blog left sidebar</a></li>
                                                <li><a href="blog-fullwidth.html">Blog fullwidth</a></li>
                                                <li class="menu-item-has-children">
                                                    <a href="#">Blog details</a>
                                                    <ul class="sub-menu">
                                                        <li><a href="blog-single.html">Blog details right sidebar</a>
                                                        </li>
                                                        <li><a href="blog-single-left-sidebar.html">Blog details left
                                                                sidebar</a></li>
                                                        <li><a href="blog-single-fullwidth.html">Blog details
                                                                fullwidth</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a href="contact.html">Contact</a></li>
                                    </ul>

                                </div><!-- end of nav-collapse -->
                            </div>
                            <div class="col-lg-2 col-md-2 col-2">
                                <div class="header-right">
                                    <div class="header-search-form-wrapper">
                                        <div class="cart-search-contact">
                                            <button class="search-toggle-btn"><i
                                                    class="fi flaticon-search"></i></button>
                                            <div class="header-search-form">
                                                <form>
                                                    <div>
                                                        <input type="text" class="form-control"
                                                            placeholder="Search here...">
                                                        <button type="submit"><i
                                                                class="fi flaticon-search"></i></button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mini-cart">
                                        <button class="cart-toggle-btn"> <i class="fi flaticon-shopping-cart"></i>
                                            <span class="cart-count">2</span></button>
                                        <div class="mini-cart-content">
                                            <button class="mini-cart-close"><i class="ti-close"></i></button>
                                            <div class="mini-cart-items">
                                                <div class="mini-cart-item clearfix">
                                                    <div class="mini-cart-item-image">
                                                        <a href="shop.html"><img
                                                                src="<?php echo $URL_ASSETS ?>assets/images/shop/mini-cart/img-1.jpg" alt></a>
                                                    </div>
                                                    <div class="mini-cart-item-des">
                                                        <a href="shop.html">Wedding Gown</a>
                                                        <span class="mini-cart-item-price">$20.15 x 1</span>
                                                        <span class="mini-cart-item-quantity"><a href="#"><i
                                                                    class="ti-close"></i></a></span>
                                                    </div>
                                                </div>
                                                <div class="mini-cart-item clearfix">
                                                    <div class="mini-cart-item-image">
                                                        <a href="shop.html"><img
                                                                src="<?php echo $URL_ASSETS ?>assets/images/shop/mini-cart/img-2.jpg" alt></a>
                                                    </div>
                                                    <div class="mini-cart-item-des">
                                                        <a href="shop.html">Bridal Flower</a>
                                                        <span class="mini-cart-item-price">$13.25 x 2</span>
                                                        <span class="mini-cart-item-quantity"><a href="#"><i
                                                                    class="ti-close"></i></a></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mini-cart-action clearfix">
                                                <span class="mini-checkout-price">Subtotal:
                                                    <span>$215.14</span></span>
                                                <div class="mini-btn">
                                                    <a href="checkout.html" class="view-cart-btn s1">Checkout</a>
                                                    <a href="cart.html" class="view-cart-btn">View Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><!-- end of container -->
                </nav>
            </div>
        </header>
        <!-- end of header -->