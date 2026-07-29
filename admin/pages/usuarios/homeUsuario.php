<!-- app content start -->
<div class="app-content-wrapper pt-13">

    <div class="container">

        <div class="page-header pb-7">
            <h2 class="fw-semibold fs-7" >Usuarios del sistema</h2>
        </div> <!-- breadcrumb end -->

        <div class="page-content">

            <h4>Servicios</h4>

            <!-- TABS -->
            <ul class=" nav nav-tabs nav-underline " id="editorTabs" role="tablist">

                <!-- TAB FIJO (NO TIENE BOTÓN CERRAR) -->
                <li class="nav-item" role="presentation">
                <button class="nav-link active"
                        id="tab-listado"
                        data-bs-toggle="tab"
                        data-bs-target="#tab-content-listado"
                        type="button">
                    Listado
                </button>
                </li>

            </ul>

            <!-- CONTENIDO DE TABS -->
            <div class="tab-content" id="editorTabsContent">

                <!-- CONTENIDO DEL TAB FIJO -->
                <div class="tab-pane fade show active" id="tab-content-listado" role="tabpanel">

                <button class="btn btn-success my-3" onclick="nuevoRegistro()">Nuevo</button>

                <div id="tablaContainer"></div>

                </div>

            </div>
            <!-- ....................................................... -->

        </div>

    </div>