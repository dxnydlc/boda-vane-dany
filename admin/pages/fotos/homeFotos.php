


<!-- app content start -->
<div class="app-content-wrapper pt-13">

    <div class="container">

        <div class="page-header pb-7">
            <h2 class="fw-semibold fs-7" ><?php echo $title; ?></h2>
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
                        <!-- <button class="btn btn-success mb-3" id="btnNuevo">Nuevo</button> -->

                        <button class="btn btn-success mb-3" id="btnmAbrirModal" >Cargar</button>

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
<div class="modal fade" id="mdlArchivos" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-4" id="exampleModalLabel" >Cargar fotos</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form id="frmFoto" autocomplete="off" >

                    <input type="hidden" id="id" name="id" value="" />
                    <input type="hidden" id="uu_id" name="uu_id" value="" />

                    <div class=" row " style="margin-bottom:15px;" >
                        <div class=" col-lg-6 col-md-6 " >
                            <div class=" form-group ">
                                <label for="IdBoda" >Boda</label>
                                <select name="IdBoda" id="IdBoda" class="form-control" ></select>
                            </div>
                            <!-- ./form-group -->
                        </div>
                        <!-- ./col -->
                        <div class=" col-lg-6 col-md-6 " >
                            <div class=" form-group ">
                                <label for="Tipo">Tipo foto</label>
                                <select id="Tipo" name="Tipo" class="form-control">
                                    <option value="">Seleccione</option>
                                    <option value="Principal" >Principal</option>
                                    <option value="Novio">Novio</option>
                                    <option value="Novia">Novia</option>
                                    <option value="Momentos">Momentos</option>
                                    <option value="Registro">Registro</option>
                                </select>
                            </div>
                            <!-- ./form-group -->
                        </div>
                        <!-- ./col -->
                    </div>
                    <!-- ./row -->

                    <div class=" row " style="margin-bottom:15px;" >
                        <div class=" col-lg-12 col-md-12 " >
                            <input type="file" id="archivoJML" >
                        </div>
                        <!-- ./col -->
                    </div>
                    <!-- ./row -->
                    
                </form>

            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-label-danger" data-bs-dismiss="modal">Cerrar</button>
            </div>
        </div>
    </div>
</div>


<div id="fxModal" style="
    display:none; 
    position:fixed; inset:0;
    background:rgba(0,0,0,0.85); z-index:99999;
    justify-content:center; align-items:center;
">
    <img id="fxImg" style="
        max-width:90%; max-height:90%;
        border-radius:10px; transition:0.25s ease;
        transform:scale(0.8); opacity:0;
    ">
</div>

