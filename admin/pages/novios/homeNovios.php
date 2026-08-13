<!-- app content start -->
<div class="app-content-wrapper pt-13">

    <div class="container">

        <div class="page-header pb-7">
            <h2 class="fw-semibold fs-7" >Usuarios del sistema</h2>
        </div> <!-- breadcrumb end -->

        <div class="page-content">

            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false" disabled>Disabled</button>
                </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                    <div class="p-3">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio quas quae numquam non quam a exercitationem officia laborum laboriosam porro voluptatum minus maiores deleniti deserunt eos iure, voluptatibus quia atque at, veniam, omnis nesciunt quos. Odio esse veritatis aliquam. Ipsum facere harum porro iure veniam impedit, voluptas, aspernatur pariatur vero corrupti libero ipsam! Veniam id ducimus, soluta ipsam facilis culpa dolorem est blanditiis unde consequuntur nesciunt pariatur ratione repellendus quos.</p>
                    </div>
                </div>
                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
                    <div class="p-3">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio quas quae numquam non quam a exercitationem officia laborum laboriosam porro voluptatum minus maiores deleniti deserunt eos iure, voluptatibus quia atque at, veniam, omnis nesciunt quos. Odio esse veritatis aliquam. Ipsum facere harum porro iure veniam impedit, voluptas, aspernatur pariatur vero corrupti libero ipsam! Veniam id ducimus, soluta ipsam facilis culpa dolorem est blanditiis unde consequuntur nesciunt pariatur ratione repellendus quos.</p>
                    </div>
                </div>
                <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
                    <div class="p-3">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio quas quae numquam non quam a exercitationem officia laborum laboriosam porro voluptatum minus maiores deleniti deserunt eos iure, voluptatibus quia atque at, veniam, omnis nesciunt quos. Odio esse veritatis aliquam. Ipsum facere harum porro iure veniam impedit, voluptas, aspernatur pariatur vero corrupti libero ipsam! Veniam id ducimus, soluta ipsam facilis culpa dolorem est blanditiis unde consequuntur nesciunt pariatur ratione repellendus quos.</p>
                    </div>
                </div>
                <div class="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab" tabindex="0">
                    <div class="p-3">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio quas quae numquam non quam a exercitationem officia laborum laboriosam porro voluptatum minus maiores deleniti deserunt eos iure, voluptatibus quia atque at, veniam, omnis nesciunt quos. Odio esse veritatis aliquam. Ipsum facere harum porro iure veniam impedit, voluptas, aspernatur pariatur vero corrupti libero ipsam! Veniam id ducimus, soluta ipsam facilis culpa dolorem est blanditiis unde consequuntur nesciunt pariatur ratione repellendus quos.</p>
                    </div>
                </div>
            </div>


            <!-- TABS -->
            <ul class="nav nav-tabs" role="tablist" id="editorTabs" >

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
            <!--<ul class=" nav nav-tabs nav-underline " id="editorTabssss" role="tablist">
                <li class="nav-item" role="presentationss">
                </li>
            </ul>-->

            <!-- CONTENIDO DE TABS -->
            <div class="tab-content" id="editorTabsContent" >
                <!-- CONTENIDO DEL TAB FIJO -->
                <div class="tab-pane fade show active" id="tab-content-listado" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                    
                    <button class="btn btn-success my-3" onclick="nuevoRegistro()">Nuevo</button>

                    <div id="tablaContainer"></div>

                </div>
            </div>


            <!--<div class="tab-content" id="editorTabsContent">

                
                <div class="tab-pane fade show active" id="tab-content-listado" role="tabpanel">

                    <button class="btn btn-success my-3" onclick="nuevoRegistro()">Nuevo</button>

                    <div id="tablaContainer"></div>

                </div>

            </div>-->
            <!-- ....................................................... -->

        </div>

    </div>