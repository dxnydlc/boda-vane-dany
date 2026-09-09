<!-- app content start -->
<div class="app-content-wrapper pt-13">

    <div class="container">

        <div class="page-header pb-7">
            <h2 class="fw-semibold fs-7" >Invitados</h2>
        </div> <!-- breadcrumb end -->

        <div class="page-content">

            <div class="container mt-4">

                <ul class="nav nav-pills mb-3" id="dynamicTabs">
                    <li class="nav-item">
                        <button class="nav-link active" id="tab-lista" data-bs-toggle="pill" data-bs-target="#content-lista">
                            Lista
                        </button>
                    </li>
                </ul>
                <!-- =================================================================================================== -->
                <div class="tab-content" id="dynamicTabContent">
                    <div class="tab-pane fade show active" id="content-lista">
                        <button class="btn btn-success mb-3" id="btnNuevo">Nuevo</button>

                        <table id="tblUsuarios" class="table table-striped table-bordered"></table>
                    </div>
                </div>
                <!-- =================================================================================================== -->
            </div>



            <!-- ....................................................... -->

        </div>

    </div>

</div>


<!-- Modal -->
<div class="modal fade" id="mdlArchivos" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel" >Cargar foto</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">

                <input type="file" id="archivo" name="archivo" />

            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" >Cerrar</button>
            </div>
        </div>
    </div>
</div>