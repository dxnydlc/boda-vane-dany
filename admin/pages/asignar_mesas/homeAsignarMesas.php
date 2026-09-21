<!-- app content start -->
<div class="app-content-wrapper pt-13">

    <div class=" container-fluid " >

        <div class="page-header pb-7">
            <h2 class="fw-semibold fs-7" >Asignar Mesas</h2>
        </div> <!-- breadcrumb end -->

        <div class="page-content">

            <div class="row">

                <div class="col-12 col-md-4 mb-3" id="wrapperInvitados" >
                    <div class="demo-card  rounded-xl mb-5">
                        <div class="demo-card-header d-flex align-items-center justify-content-between px-6 py-5 ">
                            <h3 class="demo-card-title m-0">Invitados</h3>
                        </div>
                        <div class="demo-card-body">

                            <!-- Combo de boda a seleccionar -->
                            <div class=" form-group ">
                                <label for="Cliente" >Boda</label>
                                <select class="form-select" id="cboBoda" aria-label="Floating label select example" ></select>
                            </div>
                            <!-- ./form-group -->

                            <hr>
                            
                            <div id="lista-invitados"></div>

                        </div>
                    </div>

                    <div class="demo-card  rounded-xl mb-5">
                        <div class="demo-card-header d-flex align-items-center justify-content-between px-6 py-5 ">
                            <h3 class="demo-card-title m-0">Colores de mesa</h3>
                        </div>
                        <div class="demo-card-body">
                            
                            <div id="panelColores" class="mt-2"></div>

                        </div>
                    </div>

                    <div class="demo-card  rounded-xl mb-5">
                        <div class="demo-card-header d-flex align-items-center justify-content-between px-6 py-5 ">
                            <h3 class="demo-card-title m-0">Resumen</h3>
                        </div>
                        <div class="demo-card-body">
                            
                            <div class="resumen-box" id="resumen-general"></div>

                        </div>
                    </div>

                </div>

                <div class="col-12 col-md-8">

                    <div id="wrapperMesas" class="demo-card  rounded-xl mb-5">
                        <div class="demo-card-header d-flex align-items-center justify-content-between px-6 py-5 ">
                            <h3 class="demo-card-title m-0">Mesas</h3>
                        </div>
                        <div class="demo-card-body">

                            <button class="btn-add" id="btn-agregar-mesa">+ Agregar Nueva Mesa</button>

                            <div class="tables-container" id="contenedor-mesas"></div>

                        </div>
                    </div>
                </div>

            </div>



            <!-- ....................................................... -->

        </div>

    </div>

</div>