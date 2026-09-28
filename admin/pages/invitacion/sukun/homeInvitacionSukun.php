


<!-- CAPA SUPERPUESTA DE LA INVITACIÓN -->
<div id="intro-overlay">
    <!-- Contenedor para las partículas de nieve/estrellas -->
    <div id="particles-container" class="absolute inset-0 w-full h-full pointer-events-none overflow-hidden"></div>

    <!-- Tarjeta de Invitación Central -->
    <div id="invitation-card" class="card-container relative w-[90%] max-w-lg rounded-xl flex flex-col items-center p-10 md:p-14 text-center z-10 border border-gray-100">
        
        <!-- Flor Izquierda -->
        <svg class="floral-corner absolute -left-12 top-1/2 -translate-y-1/2 w-32 md:w-40 h-auto text-blue-400 drop-shadow-md" viewBox="0 0 100 200" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 100 Q10 50 30 10 Q60 40 50 100 Z" fill="#60a5fa" opacity="0.8"/>
            <path d="M50 100 Q0 120 10 170 Q40 140 50 100 Z" fill="#3b82f6" opacity="0.7"/>
            <path d="M50 100 Q10 90 5 130 Q30 120 50 100 Z" fill="#2563eb" opacity="0.6"/>
            <circle cx="25" cy="80" r="4" fill="#93c5fd" />
            <circle cx="35" cy="130" r="3" fill="#93c5fd" />
            <circle cx="15" cy="110" r="2.5" fill="#bfdbfe" />
            <!-- Tallo -->
            <path d="M50 100 Q40 150 45 200" stroke="#1e3a8a" stroke-width="2" fill="none" opacity="0.5"/>
        </svg>
        
        <!-- Flor Derecha (espejada) -->
        <svg class="floral-corner absolute -right-12 top-1/2 -translate-y-1/2 w-32 md:w-40 h-auto text-blue-400 drop-shadow-md transform scale-x-[-1]" viewBox="0 0 100 200" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 100 Q10 50 30 10 Q60 40 50 100 Z" fill="#60a5fa" opacity="0.8"/>
            <path d="M50 100 Q0 120 10 170 Q40 140 50 100 Z" fill="#3b82f6" opacity="0.7"/>
            <path d="M50 100 Q10 90 5 130 Q30 120 50 100 Z" fill="#2563eb" opacity="0.6"/>
            <circle cx="25" cy="80" r="4" fill="#93c5fd" />
            <circle cx="35" cy="130" r="3" fill="#93c5fd" />
            <circle cx="15" cy="110" r="2.5" fill="#bfdbfe" />
            <path d="M50 100 Q40 150 45 200" stroke="#1e3a8a" stroke-width="2" fill="none" opacity="0.5"/>
        </svg>

        <!-- Círculo Azul Superior -->
        <div class="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-[#0b1a30] rounded-full flex items-center justify-center shadow-lg border-4 border-[#fdfcf8] z-20">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
            </svg>
        </div>

        <!-- Nombres -->
        <h1 class="font-serif text-4xl md:text-5xl text-[#0b1a30] mt-4 mb-2 relative z-10">
            <span id="txtNovio2" >-</span><br>
            <span class="text-2xl italic font-normal text-gray-500">&</span><br>
            <span id="txtNovia2" >-</span>
        </h1>
        
        <!-- Separador Decorativo -->
        <div class="flex items-center justify-center w-full my-4 z-10 opacity-70">
            <div class="h-[1px] bg-gray-400 w-12"></div>
            <div class="mx-3 text-[#0b1a30]">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <div class="h-[1px] bg-gray-400 w-12"></div>
        </div>

        <!-- Detalles -->
        <p id="txtFecha2" class="text-gray-600 font-serif text-lg md:text-xl mb-4 z-10">19 de noviembre de 2027</p>
        
        <p class="text-[#0b1a30] text-xs md:text-sm tracking-[0.2em] uppercase mb-10 z-10 font-semibold">
            Queremos compartir contigo.
        </p>
        
        <!-- Botón Abrir -->
        <button id="btn-abrir" class="bg-[#0b1a30] hover:bg-[#1a355b] text-white py-3 px-12 rounded-full font-serif text-lg md:text-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 z-10 focus:outline-none focus:ring-4 focus:ring-blue-200">
            Abrir
        </button>
    </div>
</div>
<!-- AQUÍ EMPIEZA EL CONTENIDO NORMAL DE TU PÁGINA -->


<!-- start of hero -->
<section class="static-hero" >
    <div class="static-main-box">
        <div class="static-inner-box">
            <div class="container">
                <div class="row">
                    <div class="col col-xl-6 col-lg-6 col-12">
                        <div class="static-hero-img">
                            <img id="imgPrincipal" class="wow fadeInLeftSlow" data-wow-duration="1500ms"
                                src="<?php echo $URL_ASSETS ?>assets/images/slider/hero-img-1.png" alt="">
                            <div class="hero-img-inner-shape">
                                <svg viewBox="0 0 550 814" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M520 0.804281C529.932 0.270383 539.935 0 550 0V30V784V814H520H30.0002H0.000244141V784V550C0.000244141 256.309 230.195 16.3825 520 0.804281ZM95 298.06C85.7573 314.717 77.4026 331.934 70 349.649V784H95V298.06ZM119 258.979V784H144V225.064C135.224 236.015 126.882 247.329 119 258.979ZM192 784H168V197.185C175.733 188.816 183.738 180.702 192 172.857V784ZM215 784H241V131.725C232.112 138.302 223.441 145.156 215 152.273V784ZM290 784H264V115.645C272.496 110.04 281.166 104.677 290 99.5667V784ZM314 784H338.25V74.9247C330.053 78.5841 321.967 82.4494 314 86.5141V784ZM386.834 784H362.084V64.992C370.236 61.8311 378.488 58.8699 386.834 56.1142V784ZM410.667 784H434.5V42.8728C426.484 44.6909 418.538 46.6941 410.667 48.8779V784ZM481.25 784H458.334V38.0538C465.917 36.7051 473.557 35.5207 481.25 34.5046V784ZM505.084 784H520V30.8509C515.009 31.1348 510.036 31.4892 505.084 31.9129V784ZM30.0002 550C30.0002 504.255 35.9072 459.889 47 417.624V784H30.0002V550Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="col col-xl-6 col-lg-6 col-12 mi-div " >
                        <div class="wpo-static-hero-text-box">
                            <div class="slide-title">
                                <h2 id="lblNovios01" class="poort-text poort-in-up" >- & -</h2>
                            </div>
                            <div class="slide-text wow fadeInUp" data-wow-duration="1600ms">
                                <p id="infoPadres" >¡Nuestra historia continua!</p>
                            </div>
                            <div class="slide-date wow fadeInUp" data-wow-duration="1700ms">
                                <p id="lblFecha1" >12 . 12 . 2024</p>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom-shape wow fadeInUp" data-wow-duration="1400ms">
            <img src="<?php echo $URL_ASSETS ?>assets/images/slider/bottom-image.png" alt="">
        </div>
    </div>
</section>
<!-- end of hero slider -->


<section>
    <div class="container">
        <div class="card transparente " >
            <div class="card-body">
                <h2 class="card-title text-center fuente-normal ">Información de la ceremonia</h2>

                <div class=" row " style="margin-bottom:15px;" >
                    <div id="wrapper_papa_novio" class=" col-lg-6 col-md-6 " ></div>
                    <!-- ./col -->
                    <div id="wrapper_papa_novia" class=" col-lg-6 col-md-6 " style="border-left: 1px silver solid" ></div>
                    <!-- ./col -->
                </div>
                <!-- ./row -->

                <div class=" row " style="margin-bottom:15px;" >
                    <div class=" col-lg-4 col-md-4 " ></div>
                    <!-- ./col -->
                    <div class=" col-lg-4 col-md-4 " >
                        <p class=" text-center " >
                            Con inmensa alegría anunciamos<br/>
                            la boda de <span id="lblNovios76" >Maximiliano y Isabella</span>
                        </p>
                    </div>
                    <!-- ./col -->
                    <div class=" col-lg-4 col-md-4 " ></div>
                    <!-- ./col -->
                </div>
                <!-- ./row -->



                <div class=" row " style="margin-bottom:15px;" >
                    <div class=" col-lg-4 col-md-4 " ></div>
                    <!-- ./col -->
                    <div class=" col-lg-4 col-md-4 " >
                        <p class=" text-center " id="lblRegilioso1" >CEREMONIA RELIGIOSA</p>
                    </div>
                    <!-- ./col -->
                    <div class=" col-lg-4 col-md-4 " ></div>
                    <!-- ./col -->
                </div>
                <!-- ./row -->


                <div class="carrusel-contenedor">
                    <!-- Contenedor principal de Swiper -->
                    <div class="swiper mi-carrusel">
                        <div class="swiper-wrapper" id="galeria-wrapper">
                        <!-- Los slides se generarán aquí con JavaScript -->
                        </div>
                        
                        <!-- Botones de navegación (opcionales) -->
                        <div class="swiper-button-next"></div>
                        <div class="swiper-button-prev"></div>
                        
                        <!-- Paginación (puntos debajo del carrusel) -->
                        <div class="swiper-pagination"></div>
                    </div>
                </div>

                
                <p class="card-text" >Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
</section>


<!-- start wpo-wedding-date -->
<section class="wpo-wedding-date section-padding">
    <h2 class="d-none">hidden</h2>
    <div class="container">
        <div class="wedding-date-wrap">
            <div class="clock-grids">
                <div id="clock"></div>
            </div>
        </div>
    </div> <!-- end container -->
</section>
<!-- end wpo-wedding-date-s3-->




<!-- NOvios -->
<section class="wpo-couple-section section-padding pt-2" id="couple">
    <div class="container">
        <div class="couple-area clearfix">
            <div class="couple-wrap">
                <div class="row align-items-center gx-5">
                    <div class="col col-md-6 col-12">
                        <div class="couple-item">
                            <div class="couple-img">
                                <img src="<?php echo $URL_ASSETS ?>assets/images/couple/couple-img-1.jpg" alt="">
                            </div>
                            <div class="couple-text">
                                <i><img id="imgNovia1" src="<?php echo $URL_ASSETS ?>assets/images/couple/bride.svg" alt=""></i>
                                <h3 id="lblNovia1"  >Esabella Bell</h3>
                                <p id="txtNovia1" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna orci auctor
                                    vitae nisl. fringilla pellesque amet tempus.</p>
                                <div class="social">
                                    <ul>
                                        <li><a href="#"><i class="ti-facebook"></i></a></li>
                                        <li><a href="#"><i class="ti-twitter-alt"></i></a></li>
                                        <li><a href="#"><i class="ti-instagram"></i></a></li>
                                    </ul>
                                </div>
                                <div class="couple-bg">
                                    <svg viewBox="0 0 500 433" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M0 28.0003C0 28.0003 40 -20.2942 78 11.0001C90.075 20.9443 94.3766 37.833 95.1425 54.6979C95.9162 71.7365 117.555 85.4249 131.164 75.1428C133.036 73.7282 135.17 72.6975 137.441 72.11L142.442 70.8167C168.453 64.0898 194.316 82.2112 196.874 108.956L197.393 114.379C200.295 144.721 230.211 164.837 259.405 156.079L263 155C290.305 139.265 324.668 157.485 326.966 188.914L328.735 213.107C329.843 228.267 342.466 240 357.667 240C359.882 240 362.089 239.747 364.246 239.244L376.055 236.494C404.616 229.843 431.332 253.052 428.738 282.263L427.564 295.484C425.743 315.988 443.286 332.954 463.719 330.449C482.999 328.085 500 343.128 500 362.553V433H0V28.0003Z"
                                            fill="white" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col col-md-6 col-12">
                        <div class="couple-item">
                            <div class="couple-img">
                                <img src="<?php echo $URL_ASSETS ?>assets/images/couple/couple-img-2.jpg" alt="">
                            </div>
                            <div class="couple-text">
                                <i><img id="imgNovio1" src="<?php echo $URL_ASSETS ?>assets/images/couple/groom.svg" alt=""></i>
                                <h3 id="lblNovio1" >William Max</h3>
                                <p id="txtNovio1" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna orci auctor
                                    vitae nisl. fringilla pellesque amet tempus.</p>
                                <div class="social">
                                    <ul>
                                        <li><a href="#"><i class="ti-facebook"></i></a></li>
                                        <li><a href="#"><i class="ti-twitter-alt"></i></a></li>
                                        <li><a href="#"><i class="ti-instagram"></i></a></li>
                                    </ul>
                                </div>
                                <div class="couple-bg">
                                    <svg viewBox="0 0 500 433" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M500 28.0003C500 28.0003 460 -20.2942 422 11.0001C409.925 20.9443 405.623 37.833 404.858 54.6979C404.084 71.7365 382.445 85.4249 368.836 75.1428C366.964 73.7282 364.83 72.6975 362.559 72.11L357.558 70.8167C331.547 64.0898 305.684 82.2112 303.126 108.956L302.607 114.379C299.705 144.721 269.789 164.837 240.595 156.079L237 155C209.695 139.265 175.332 157.485 173.034 188.914L171.265 213.107C170.157 228.267 157.534 240 142.333 240C140.118 240 137.911 239.747 135.754 239.244L123.945 236.494C95.3837 229.843 68.6684 253.052 71.2621 282.263L72.436 295.484C74.2567 315.988 56.7136 332.954 36.2814 330.449C17.0009 328.085 0 343.128 0 362.553V433H500V28.0003Z"
                                            fill="white" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="shape-1"><img src="<?php echo $URL_ASSETS ?>assets/images/couple/flower1.png" alt=""></div>
                <div class="shape-2"><img src="<?php echo $URL_ASSETS ?>assets/images/couple/flower2.png" alt=""></div>
            </div>
        </div>
    </div> <!-- end container -->
</section>
<!-- end couple-section -->



<!-- NUESTRA HISTORIA -->
<section class="wpo-story-section section-padding pb-0" id="story">
    <div class="container">
        <div class="wpo-section-title">
            <h4 class="poort-text poort-in-right" >Nuestra historia</h4>
            <h2 class="poort-text poort-in-right" >Los momentos exactos que nos trajeron hasta aquí.</h2>
        </div>
        <div class="wpo-story-wrap" id="contenedorHistoria" >
        </div>
    </div> <!-- end container -->
    <div class="flower-shape-1">
        <div class="flower-sticky">
            <img src="<?php echo $URL_ASSETS ?>assets/images/story/shape1.png" alt="">
        </div>
    </div>
    <div class="flower-shape-2">
        <div class="flower-sticky">
            <img src="<?php echo $URL_ASSETS ?>assets/images/story/shape2.png" alt="">
        </div>
    </div>
</section>
<!-- end story-section -->



<!-- start wpo-portfolio-section -->
<section class="wpo-portfolio-section section-padding pt-0" id="gallery">
    <div class="container-fluid">
        <div class="wpo-section-title">
            <h4 class="poort-text poort-in-right">Nosotros (sin filtros)</h4>
            <h2 class="poort-text poort-in-right">Las aventuras, las locuras y todo lo que nos hace ser Vane y Dany.</h2>
        </div>
        <div class="gallery-main-wrap">
            <div class="row align-items-center" id="wrapperMomentos" >
            </div>
        </div>

    </div> <!-- end container -->
</section>
<!-- end wpo-portfolio-section -->



<!-- Invitado -->

<section class="wpo-contact-section section-padding pt-0" id="rsvp" style="display:none;" >
    <div class="container-fluid">
        <div class="contact-wrap">
            <div class="row">
                <div class="col col-xl-8 col-lg-7 col-md-12 col-12">
                    <div class="contact-img-wrap">
                        <div class="contact-img wow fadeInLeftSlow" data-wow-duration="1700ms">
                            <img id="imgRegistro" src="<?php echo $URL_ASSETS ?>assets/images/rsvp/img-1.png" alt="" style="wdith:901px;" />
                        </div>
                        <div class="back-shape">
                            <svg viewBox="0 0 693 954" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15 346.5C15 163.418 163.418 15 346.5 15C529.582 15 678 163.418 678 346.5V939H15V346.5Z"
                                    stroke="#9F7B59" stroke-width="30" />
                                <rect x="50" y="168" width="30" height="765" fill="#9F7B59" />
                                <rect x="100" y="106" width="30" height="827" fill="#9F7B59" />
                                <rect x="150" y="67" width="30" height="866" fill="#9F7B59" />
                                <rect x="200" y="45" width="30" height="879" fill="#9F7B59" />
                                <rect x="250" y="23" width="30" height="910" fill="#9F7B59" />
                                <rect x="300" y="14" width="30" height="919" fill="#9F7B59" />
                                <rect x="350" y="14" width="30" height="919" fill="#9F7B59" />
                                <rect x="400" y="14" width="30" height="919" fill="#9F7B59" />
                                <rect x="450" y="34" width="30" height="899" fill="#9F7B59" />
                                <rect x="500" y="67" width="30" height="866" fill="#9F7B59" />
                                <rect x="550" y="100" width="30" height="833" fill="#9F7B59" />
                                <rect x="600" y="148" width="30" height="785" fill="#9F7B59" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="col col-xl-4 col-lg-5 col-md-12 col-12">
                    <div class="wpo-contact-section-wrapper wow fadeInRightSlow" data-wow-duration="1700ms">
                        <div class="wpo-contact-form-area">
                            <div class="wpo-section-title">
                                <h2>¿Tienes un invitado?</h2>
                            </div>
                            <form method="post" class="contact-validation-active" id="contact-form-main" autocomplete="off" >

                                <input type="hidden" id="id" name="id" value="0" />
	                            <input type="hidden" id="uu_id" name="uu_id" value="" />
                                <input type="hidden" id="Foto" name="Foto" value="img/512x512.png" />

                                <div>
                                    <input type="text" class="form-control" name="Nombre" id="Nombre" placeholder="Nombre" />
                                </div>
                                <div>
                                    <input type="text" class="form-control" name="phone" id="phone" placeholder="Celular">
                                </div>
                                <div class="radio-buttons">
                                    <p>
                                        <input type="radio" id="attend" name="Estado" value="confirmado" >
                                        <label for="attend">Si asistirá</label>
                                    </p>
                                    <p>
                                        <input type="radio" id="not" name="Estado" value="activo" >
                                        <label for="not">Aún va a confirmar</label>
                                    </p>
                                </div>

                                <div class="submit-area">
                                    <button id="btnConfirmaInvitado" type="button" class="theme-btn" >Confirmar</button>
                                    <div id="c-loader">
                                        <i class="ti-reload"></i>
                                    </div>
                                </div>
                                <div class="clearfix error-handling-messages">
                                    <div id="success">Gracias</div>
                                    <div id="error"> Error occurred while sending email. Please try again later.
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="shape-1 wow fadeInLeftSlow" data-wow-duration="2000ms"><img
                    src="<?php echo $URL_ASSETS ?>assets/images/rsvp/left-shape.png" alt=""></div>
            <div class="shape-2 wow fadeInRightSlow" data-wow-duration="2000ms"><img
                    src="<?php echo $URL_ASSETS ?>assets/images/rsvp/right-shape.png" alt=""></div>
        </div>
    </div>
    <div class="bottom-text marquee">
        <h2>Te esperamos para celebrar nuestro día.</h2>
    </div>
</section>
<!-- end of wpo-contact-section -->





<!-- Cronograma -->
<section class="wpo-event-section section-padding pt-0" id="event">
    <div class="container">
        <div class="wpo-section-title">
            <h4 class="poort-text poort-in-right" >Cuando y donde</h4>
            <h2 class="poort-text poort-in-right">Nuestro programa de boda</h2>
        </div>
        <div class="wpo-event-main">
            <div class="event-description">
                <p id="lblFechaP1" >Monday, 12 Apr. 2024, 2.00 PM – 11.00 PM</p>
                <p id="lblDireP1" >4517 Washington Ave. Manchester, Kentucky 39495</p>
            </div>
            <div class="wpo-event-wrap">
                <div id="wrapperPrograma" class="wpo-event-inner" >
                    <div class="wpo-event-item">
                        <div class="wpo-event-text">
                            <i><img src="<?php echo $URL_ASSETS ?>assets/images/icon/1.svg" alt=""></i>
                            <span>Welcome Drinks</span>
                        </div>
                        <div class="wpo-event-time">
                            <h4>2.00 PM</h4>
                            <i class="fa fa-heart"></i>
                        </div>
                    </div>

                    <div class="line"></div>
                </div>

                <div class="shape-1"><img src="<?php echo $URL_ASSETS ?>assets/images/event/shape-1.png" alt=""></div>
                <div class="shape-2"><img src="<?php echo $URL_ASSETS ?>assets/images/event/shape-1.png" alt=""></div>
                <div class="shape-3"><img src="<?php echo $URL_ASSETS ?>assets/images/event/shape-2.png" alt=""></div>

            </div>
        </div>

        <div class="line"></div>

        

        

    </div> <!-- end container -->
</section>
<!-- end wpo-event-section -->




<!-- Codigo de vestimenta -->
<section class="wpo-couple-section section-padding pt-2" id="couple">
    <div class="container">
        <div class="wpo-section-title">
            <h4 class="poort-text poort-in-right" >Código de vestimenta</h4>
        </div>
        <div class="wpo-event-main">
            <div class="event-description">
                <p id="lblFechaP1" >Por favor considera esto:</p>
            </div>
            <div class="wpo-event-wrap">
                <img src="<?php echo $URL_ASSETS ?>assets/images/person/codigo-vestimenta-2.jpeg" class="mi-imagen" alt="">
            </div>
        </div>
    </div> <!-- end container -->
</section>

<!-- Confirmar asistencia -->

<section class="wpo-couple-section section-padding pt-2" id="wrapperConfirmar">
    <div class="container">
        <div class="wpo-section-title">
            <h4 class="poort-text poort-in-right" >Gracias =)</h4>
        </div>
        <div class="wpo-event-main">
            <div class=" row " style="margin-bottom:15px;" >
                <div class=" col-lg-4 col-md-4 " ></div>
                <!-- ./col -->
                <div class=" col-lg-4 col-md-4 " >
                    <a id="btnConfirmarAsistencia" href="#" class="view-cart-btn" >¡Confirmo mi asistencia!</a>
                    <a id="btnCancelarAsistencia" href="#" class="view-cart-btn s1">Gracias,no podré asistir.</a>
                </div>
                <!-- ./col -->
                <div class=" col-lg-4 col-md-4 " ></div>
                <!-- ./col -->
            </div>
            <!-- ./row -->
        </div>
    </div> <!-- end container -->
</section>





<!-- start wpo-blog-section -->
<!-- end wpo-blog-section -->



<!-- start wpo-partners-section -->

<!-- end wpo-partners-section-->








<script type="text/javascript" >
    let uuID = '<?php echo $uuID; ?>';
</script>





<!-- La etiqueta de audio está oculta por defecto -->
<audio id="musica-fondo" loop></audio>

<!-- Botón flotante -->
<button id="btn-play" class="btn-flotante">
  ▶️
</button>




<!-- Estructura del Modal de Bootstrap 5 -->
<div class="modal fade" id="mapaModal" tabindex="-1" aria-labelledby="mapaModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="mapaModalLabel">Ubicación del Evento</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
      </div>
      <div class="modal-body p-0">
        <!-- Contenedor del mapa. Es crucial definir una altura fija -->
        <div id="contenedor-mapa" style="width: 100%; height: 450px;"></div>
      </div>
    </div>
  </div>
</div>