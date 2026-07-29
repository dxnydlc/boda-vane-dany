<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Login | Boda Dny & Vane</title>

    <!-- favicon -->
    <link rel="shortcut icon" href="assets/img/logo/favicon.png" type="image/x-icon">

    <!-- global style sheet for all pages -->
    <link id="bootstrap-css" rel="stylesheet" type="text/css" href="/assets/css/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css">
    <link rel="stylesheet" type="text/css" href="/assets/css/conca.css">

    <script type="text/javascript">let URL_API = '<?php echo $API; ?>';</script>

    <!-- page level styles -->
    <link href="assets/vendor/libs/toastr/toastr.css" rel="stylesheet">

</head>

<body>

    <div class="auth-main"  >
        <div class="container-xxl">
            <div class="auth-wrapper auth-basic p-5 min-vh-100 d-flex align-items-center justify-content-center">
                <div class="auth-card py-6" id="TablaHomePs" >
                    <div class="card shadow-xl">
                        <div class="card-body py-9 px-6 px-sm-12">
                            <div class="mb-7">
                                <div class="d-flex align-items-center justify-content-center mb-5">
                                    <img class="app-main-logo logo-black" width="120" src="assets/img/logo/logo.png" alt="Conca">
                                    <img class="app-main-logo logo-white d-none" width="120" src="assets/img/logo/logo-white.png" alt="Conca">
                                </div>
                                <div class="text-center">
                                    <h4 class="mb-1 fw-semibold">Boda Vane & Dany</h4>
                                    <p>Administración de boda</p>
                                </div>
                            </div>

                            <form id="frmDocumento" autocomplete="off" >
                            
                                <div class="mb-3">
                                    <label for="Email" class="form-label">Correo</label>
                                    <input type="email" class="form-control" id="Email" id="Email" placeholder="mali@example.com">
                                </div>
                                <div class="mb-3">
                                    <label for="DNI" class="form-label">DNI</label>
                                    <input type="number" class="form-control" id="DNI" name="DNI" placeholder="12345678" >
                                </div>
                                <div class="mb-3">
                                    <label for="Password_hash" class="form-label">Password</label>
                                    <div class="input-group mb-3">
                                        <input type="password" class="form-control" placeholder="**********" id="Password_hash" name="Password_hash" >
                                        <span class="input-group-text password-toggle">
                                            <span class="close-eye password-eye">
                                                <svg width="22" height="10" viewBox="0 0 22 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M21 1C21 1 17 7 11 7C5 7 1 1 1 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                                    <path d="M14 6.5L15.5 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M19 4L21 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M1 6L3 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M8 6.5L6.5 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </span>
                                            <span class="open-eye password-eye d-none">
                                                <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M20.544 7.04498C20.848 7.4713 21 7.68447 21 8C21 8.31553 20.848 8.52869 20.544 8.95501C19.1779 10.8706 15.6892 15 11 15C6.31078 15 2.8221 10.8706 1.45604 8.95502C1.15201 8.5287 1 8.31553 1 8C1 7.68447 1.15201 7.47131 1.45604 7.04499C2.8221 5.12944 6.31078 1 11 1C15.6892 1 19.1779 5.12944 20.544 7.04498Z" stroke="currentColor" stroke-width="1.5" />
                                                    <path d="M14 8C14 6.34315 12.6569 5 11 5C9.34315 5 8 6.34315 8 8C8 9.65685 9.34315 11 11 11C12.6569 11 14 9.65685 14 8Z" stroke="currentColor" stroke-width="1.5" />
                                                </svg>
                                            </span>
                                        </span>
                                    </div>
                                </div>

                            </form>

                            
                            <div class="mb-3">
                                <div class="text-center">
                                    <button id="btnLoginSistema" type="submit" class="btn btn-primary w-100">Ingresar</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="notif-overlay" 
     style="display:none; position:fixed; top:0; left:0; width:100%; height:100%;
            background:rgba(0,0,0,0.35); z-index:9998; opacity:0; transition:opacity .3s;">
    </div>

    <div id="notif-modal-container"
        style="display:none; position:fixed; top:50%; left:50%; transform:translate(-50%, -50%);
                z-index:9999; max-width:420px; width:90%; opacity:0; transition:opacity .3s;">
    </div>

    <!-- global js scripts for all pages -->
    <script src="/assets/vendor/libs/jquery/jquery.js"></script>
    <script src="/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js"></script>
    <script src="/assets/js/bootstrap.js"></script>


    <!-- app js -->
    <script src="/assets/js/conca-sidebar.js"></script>
    <script src="/assets/js/conca.js"></script>

    <!-- page level script -->
    <script src="/assets//vendor/libs/toastr/toastr.js"></script>

    <script src="/assets/vendor/libs/block-ui/block-ui.js"></script>


    <script src="/utils/js/general.js?v=<?php echo time(); ?>"></script>
    <script src="/utils/js/login.js?v=<?php echo time(); ?>"></script>

    <!-- page specific script -->

</body>

</html>