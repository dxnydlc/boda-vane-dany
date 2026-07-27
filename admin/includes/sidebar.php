<!-- app sidebar start -->
            <div id="app-sidebar" class="app-sidebar overflow-hidden">

                <div class="app-sidebar-wrapper">
                    <!-- app sidebar header -->
                    <div class="app-sidebar-header d-flex align-items-center justify-content-between">
                        <a href="/" class="app-sidebar-logo">
                            Admin
                        </a>

                        <button type="button" class="app-sidebar-close-btn app-sidebar-mobile-close d-xl-none">
                            <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.6923 10.2857L6.53846 6M6.53846 6L10.6923 1.71429M6.53846 6L19 6M1 11L1 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>

                    <!-- app sidebar menu -->
                    <div id="app-sidebar-menu" class="app-sidebar-menu">
                        <ul>
                            <li class="app-sidebar-menu-item">
                                <a href="/" class="menu-link d-flex align-items-center">
                                    <span class="menu-title flex-grow-1" >Inicio</span>
                                </a>
                            </li>
                            <li class="app-sidebar-menu-heading">
                                <span>
                                    <span class="app-sidebar-menu-heading-line"></span>
                                    Invitados
                                </span>
                            </li>
                            <li class="app-sidebar-menu-item">
                                <a href="./app-chat.html" class="menu-link d-flex align-items-center">
                                    <span class="menu-title flex-grow-1" >Lista</span>
                                </a>
                            </li>
                            <li class="app-sidebar-menu-item">
                                <a href="./app-pos.html" class="menu-link d-flex align-items-center">
                                    <span class="menu-title flex-grow-1">Resumen</span>
                                </a>
                            </li>

                            <li class="app-sidebar-menu-heading">
                                <span>
                                    <span class="app-sidebar-menu-heading-line"></span>
                                    Proveedores
                                </span>
                            </li>

                            <li class="app-sidebar-menu-item has-dropdown">
                                <a href="javascript:void(0);" class="menu-link d-flex align-items-center">
                                    <span class="menu-icon flex-shrink-0">
                                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.24985 9.40384C9.84298 9.40384 11.1345 8.11236 11.1345 6.51923C11.1345 4.9261 9.84298 3.63461 8.24985 3.63461C6.65672 3.63461 5.36523 4.9261 5.36523 6.51923C5.36523 8.11236 6.65672 9.40384 8.24985 9.40384Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M3.32324 13.9038C3.83814 13.0587 4.56179 12.3602 5.42464 11.8755C6.28748 11.3908 7.2605 11.1362 8.25017 11.1362C9.23983 11.1362 10.2129 11.3908 11.0757 11.8755C11.9385 12.3602 12.6622 13.0587 13.1771 13.9038" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M8.25 15.75C12.3921 15.75 15.75 12.3921 15.75 8.25C15.75 4.10786 12.3921 0.75 8.25 0.75C4.10786 0.75 0.75 4.10786 0.75 8.25C0.75 12.3921 4.10786 15.75 8.25 15.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                    <span class="menu-title flex-grow-1">Proveedores</span>
                                    <span class="menu-arrow flex-shrink-0 d-flex align-items-center justify-content-center">
                                        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 9L5 5L1 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                </a>

                                <ul class="app-sidebar-submenu">
                                    <li class="app-sidebar-menu-item">
                                        <a href="/usuario" class="menu-link d-flex align-items-center">
                                            <span class="menu-title flex-grow-1" >Usuario</span>
                                        </a>
                                    </li>
                                    <li class="app-sidebar-menu-item">
                                        <a href="./user-profile.html" class="menu-link d-flex align-items-center">
                                            <span class="menu-title flex-grow-1" >Local</span>
                                        </a>
                                    </li>
                                    <li class="app-sidebar-menu-item">
                                        <a href="./user-profile-projects.html" class="menu-link d-flex align-items-center">
                                            <span class="menu-title flex-grow-1" >Musica</span>
                                        </a>
                                    </li>
                                    <li class="app-sidebar-menu-item">
                                        <a href="./user-profile-team.html" class="menu-link d-flex align-items-center">
                                            <span class="menu-title flex-grow-1" >Barman</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <!-- app sidebar menu end -->

                    <!-- app sidebar footer start -->
                    <div class="app-sidebar-footer">
                        <div class="d-flex align-items-center gap-3">
                            <div class="avatar rounded-pill">
                                <img src="assets/img/avatar/10.jpg" alt="conca">
                            </div>
                            <div class="">
                                <h6 class="mb-0">Joel Becker</h6>
                                <span class="text-muted">Admin</span>
                            </div>
                        </div>
                        <div class="">
                            <button class="dropdown-toggle hide-arrow" data-bs-toggle="dropdown" aria-expanded="false">
                                <svg width="11" height="15" viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.75 5.351L5.24 0.861002C5.2736 0.825912 5.31396 0.797988 5.35865 0.778911C5.40333 0.759835 5.45141 0.75 5.5 0.75C5.54859 0.75 5.59667 0.759835 5.64135 0.778911C5.68604 0.797988 5.7264 0.825912 5.76 0.861002L10.25 5.351" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M0.75 9.151L5.24 13.641C5.2736 13.6761 5.31396 13.704 5.35865 13.7231C5.40333 13.7422 5.45141 13.752 5.5 13.752C5.54859 13.752 5.59667 13.7422 5.64135 13.7231C5.68604 13.704 5.7264 13.6761 5.76 13.641L10.25 9.151" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="user-profile.html">Profile</a></li>
                                <li><a class="dropdown-item" href="user-settings-notification.html">Notifications</a></li>
                                <li><a class="dropdown-item" href="user-settings.html">Settings</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="auth-login-basic.html">Logout</a></li>
                            </ul>
                        </div>
                    </div>
                    <!-- app sidebar footer end -->
                </div>

            </div>
            <!-- app sidebar end -->