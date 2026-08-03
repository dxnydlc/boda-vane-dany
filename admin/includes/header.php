<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title><?php echo $title; ?> | Conca</title>

    <!-- favicon -->
    <link rel="shortcut icon" href="/assets/img/logo/favicon.png" type="image/x-icon">

    <!-- global style sheet for all pages -->
    <link id="bootstrap-css" rel="stylesheet" type="text/css" href="/assets/css/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css">
    <link rel="stylesheet" type="text/css" href="/assets/css/conca.css">


    
    <!-- page level styles -->
    <link href="assets/vendor/libs/toastr/toastr.css" rel="stylesheet">

    <!-- select2 -->
    <link href="/assets/vendor/libs/select2/select2.css" rel="stylesheet">
    <link href="/assets/css/elegant-icon.css" rel="stylesheet">

    <link rel="stylesheet" href="https://cdn.datatables.net/3.0.0/css/dataTables.dataTables.min.css" />
    
    <script type="text/javascript">
    let URL_API         = '<?php echo $API; ?>';
    // Leer el token guardado
    const tokenBackend  = localStorage.getItem('auth_token');
    </script>

    <?php echo $archivoCSS ?>

</head>

<body>

    <div class="app-main">

        <!-- app wrapper start -->
        <div id="app-wrapper" class="app-wrapper d-flex flex-column align-items-stretch min-vh-100">

        <?php include 'sidebar.php'; ?>

        <!-- app header start -->
        <div class="app-dir-wrapper">
            <button type="button" class="app-dir-btn app-set-ltr">LTR</button>
            <button type="button" class="app-dir-btn app-set-rtl">RTL</button>
        </div>

        <div class="app-header bg-card py-2 px-4 px-md-6 d-flex align-items-center">
            <div class="row align-items-center w-100 gx-0">
                <div class="col-xl-4 col-lg-5 col-md-6 col-sm-4 col-3">
                    <div class="app-header-left d-flex align-items-center">
                        <button type="button" class="app-header-bar-btn app-sidebar-open-btn me-4 d-none d-xl-inline-block">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <button type="button" class="app-header-bar-btn app-sidebar-mobile-open d-xl-none me-4">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>

                        
                    </div>
                </div>
                <div class="col-xl-8 col-lg-7 col-md-6 col-sm-8 col-9">
                    <ul class="navbar-nav flex-row align-items-center justify-content-end">

                        <!-- search button -->
                        
                        <!-- search button -->

                        <!-- Language -->
                        
                        <!-- Language -->

                        <!-- Style switcher -->
                        <li class="header-nav-item header-style-switcher me-2">
                            <a class="header-nav-link" href="javascript:void(0);" data-bs-toggle="dropdown">
                                <span class="d-flex align-items-center justify-content-center theme-icon light-icon">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.75 0.75V1.98077M8.75 15.5192V16.75M16.75 8.75H15.5192M1.98077 8.75H0.75M14.4115 3.08846L13.5377 3.96231M3.96231 13.5377L3.08846 14.4115M14.4115 14.4115L13.5377 13.5377M3.96231 3.96231L3.08846 3.08846M12.75 8.75C12.75 10.9591 10.9591 12.75 8.75 12.75C6.54086 12.75 4.75 10.9591 4.75 8.75C4.75 6.54086 6.54086 4.75 8.75 4.75C10.9591 4.75 12.75 6.54086 12.75 8.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                                <span class="d-flex align-items-center justify-content-center theme-icon dark-icon">
                                    <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.7075 10.73C10.5458 10.7229 9.40692 10.407 8.4076 9.81463C7.40829 9.22228 6.58449 8.37482 6.02067 7.35913C5.45685 6.34345 5.17331 5.19609 5.1991 4.03469C5.22489 2.8733 5.5591 1.73965 6.16745 0.75C4.56463 1.03138 3.12395 1.89934 2.12605 3.1848C1.12815 4.47026 0.644493 6.08116 0.769304 7.7037C0.894115 9.32624 1.61845 10.8442 2.80121 11.9619C3.98397 13.0797 5.54045 13.7171 7.16745 13.75C8.28058 13.7528 9.37555 13.468 10.3462 12.9231C11.3168 12.3782 12.1302 11.5918 12.7075 10.64C12.3768 10.6946 12.0425 10.7247 11.7075 10.73V10.73Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                                <span class="d-flex align-items-center justify-content-center theme-icon auto-icon">
                                    <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.25 9.75L5.25 12.25M8.25 9.75L9.25 12.25M4.25 12.25H10.25M1.25 0.75H13.25C13.5261 0.75 13.75 0.973858 13.75 1.25V9.25C13.75 9.52614 13.5261 9.75 13.25 9.75H1.25C0.973858 9.75 0.75 9.52614 0.75 9.25V1.25C0.75 0.973858 0.973858 0.75 1.25 0.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end">
                                <li>
                                    <a class="dropdown-item d-flex align-items-center gap-2" href="javascript:void(0);" data-bs-theme-value="light">
                                        <span>
                                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.25 0.75V1.75M7.25 12.75V13.75M13.75 7.25H12.75M1.75 7.25H0.75M11.85 2.65L11.14 3.36M3.36 11.14L2.65 11.85M11.85 11.85L11.14 11.14M3.36 3.36L2.65 2.65M10.5 7.25C10.5 9.04493 9.04493 10.5 7.25 10.5C5.45507 10.5 4 9.04493 4 7.25C4 5.45507 5.45507 4 7.25 4C9.04493 4 10.5 5.45507 10.5 7.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </span>
                                        Light
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item d-flex align-items-center gap-2" href="javascript:void(0);" data-bs-theme-value="dark">
                                        <span>
                                            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.7075 10.73C10.5458 10.7229 9.40692 10.407 8.4076 9.81463C7.40829 9.22228 6.58449 8.37482 6.02067 7.35913C5.45685 6.34345 5.17331 5.19609 5.1991 4.03469C5.22489 2.8733 5.5591 1.73965 6.16745 0.75C4.56463 1.03138 3.12395 1.89934 2.12605 3.1848C1.12815 4.47026 0.644493 6.08116 0.769304 7.7037C0.894115 9.32624 1.61845 10.8442 2.80121 11.9619C3.98397 13.0797 5.54045 13.7171 7.16745 13.75C8.28058 13.7528 9.37555 13.468 10.3462 12.9231C11.3168 12.3782 12.1302 11.5918 12.7075 10.64C12.3768 10.6946 12.0425 10.7247 11.7075 10.73V10.73Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </span>
                                        Dark
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item d-flex align-items-center gap-2" href="javascript:void(0);" data-bs-theme-value="auto">
                                        <span>
                                            <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.25 9.75L5.25 12.25M8.25 9.75L9.25 12.25M4.25 12.25H10.25M1.25 0.75H13.25C13.5261 0.75 13.75 0.973858 13.75 1.25V9.25C13.75 9.52614 13.5261 9.75 13.25 9.75H1.25C0.973858 9.75 0.75 9.52614 0.75 9.25V1.25C0.75 0.973858 0.973858 0.75 1.25 0.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </span>
                                        System
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <!-- Style switcher -->

                        <!-- User Options -->
                        <li class="header-nav-item header-user me-2">
                            <a class="header-nav-link" href="javascript:void(0);" data-bs-toggle="dropdown">
                                <img src="assets/img/avatar/10.jpg" alt="" width="34" height="34" class="rounded-circle">
                            </a>
                            <div class="dropdown-menu dropdown-menu-end dropdown-menu-lg py-0">
                                <div class="dropdown-header d-flex align-items-center border-bottom py-4">
                                    <div class="me-3 flex-shrink-0">
                                        <div class="avatar avatar-md">
                                            <img src="assets/img/avatar/10.jpg" alt="" class="rounded-circle">
                                        </div>
                                    </div>
                                    <div class="flex-grow-1 text-start">
                                        <h6 class="mb-0" >Joel Becker</h6>
                                        <span class="text-muted">Admin</span>
                                    </div>
                                </div>
                                <div class="dropdown-body py-1">
                                    <ul class="list-unstyled dropdown-list">
                                        <li>
                                            <a id="btnGeneral-Sali01" class="dropdown-item fz-14px d-flex align-items-center gap-2 px-5" href="auth-login-basic.html">
                                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.75 12.9375C10.6887 14.4808 9.40258 15.7912 7.6797 15.749C7.27887 15.7392 6.78344 15.5995 5.7926 15.32C3.40801 14.6474 1.33796 13.517 0.841296 10.9846C0.75 10.5191 0.75 9.99532 0.75 8.94771L0.75 7.55229C0.75 6.50468 0.75 5.98087 0.841296 5.51538C1.33796 2.98304 3.40801 1.85263 5.7926 1.18002C6.78345 0.900537 7.27887 0.760795 7.6797 0.750989C9.40257 0.708841 10.6887 2.01923 10.75 3.56251" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                                    <path d="M15.7499 8.25008H6.58325M15.7499 8.25008C15.7499 7.66656 14.088 6.57636 13.6666 6.16675M15.7499 8.25008C15.7499 8.8336 14.088 9.92381 13.6666 10.3334" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                                Salir
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <!-- User Options -->

                    </ul>
                </div>
            </div>
        </div>
        <!-- app header end -->
        

