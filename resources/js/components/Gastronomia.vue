<template>
    <div>
        

        <div class="view " >
            <div class="rows-baner" style="background-image: url(../img/banner-02.png"></div>
            <!-- cop -->
            <div class="mask strong-mid visible-res">

                <div class="precio">
                    <div class="gastro-c white-text redondea-01">
                        <div class="text-center">
                            <div class="">
                                <span class="b-01 m-text-20 signs">S/</span>
                                <span class="m-text-40 b-01">.450</span>
                                <span class="mens">/m</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div  style="right: 10px; width: auto; position: absolute; top: 10px; z-index: 2;" class="white-tras m-text-30 redondea-01" >
                    <a href="" data-toggle="modal" data-target="#ModalHome">
                        <span class="cook-text pl-2 pr-2 b-01"><i class="fas fa-bars"></i></span>
                    </a>     
                </div>

                <div class="mesg-01-carrera">
                    <h5 class="b-01 white-text">
                            <div class="white-text">
                            <h5 class="b-01">
                                Gastronomía 
                            </h5> 
                            <h5>
                               & Alta Cocina Peruana
                            </h5>
                        </div>
                    </h5> 
                </div>

            </div>
            <!-- respon -->
            <div class="mask strong-mid visible-cop">
                <b-navbar toggleable="md" type="dark" class="transpa ">
                    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
                    <!-- <b-navbar-brand href="#">NavBar</b-navbar-brand> -->
                        <div  style="left: 20px; width: 139px; position: absolute; top: 0px; z-index: 1200;" class=" visiblew animated fadeInDown txtNew " >
                            <img class="m-4 " style="width: 70px" src="img/logo-cook.jpeg">     
                        </div>  
                    <b-collapse is-nav id="nav_collapse">
                        <!-- Right aligned nav items -->
                        <b-navbar-nav class="ml-auto animated fadeInRight">
                                    <b-navbar-nav text="Lang" right class="p-4 ">
                                    
                                    <b-nav-item href="#" class="cook-bg p-2 b-01" >
                                            <router-link to="/" class="white-text" >
                                                INICIO
                                            </router-link>
                                    </b-nav-item>
                                    
                                    <b-nav-item href="#" class="white  border-cook p-2">
                                        <router-link to="/noticia" class="cook-text b-01" >
                                            NOTICIA
                                        </router-link>
                                    </b-nav-item>
                                    <div class="cook-bg" id="rest" >
                                        <b-nav-item-dropdown  text="CARRERAS" class=" white-text  b-01 pt-2">
                                                <b-dropdown-item-button class="btn-sm">
                                                    <router-link to="/gastronomia" class="white-text sm-0 sp-0">
                                                        <p class="b-text b-01 sm-0 sp-0">
                                                            GASTRONOMIA
                                                        </p> 
                                                    </router-link> 
                                                </b-dropdown-item-button>
                                                <b-dropdown-item-button class="btn-sm">
                                                    <router-link to="/panaderia" class="white-text sm-0 sp-0">
                                                        <p class="b-text b-01 sm-0 sp-0">
                                                            PANADERIA
                                                        </p> 
                                                    </router-link> 
                                                </b-dropdown-item-button>
                                                <b-dropdown-item-button class="btn-sm">
                                                    <router-link to="/bar" class="white-text sm-0 sp-0">
                                                        <p class="b-text b-01 sm-0 sp-0">
                                                            BAR
                                                        </p> 
                                                    </router-link> 
                                                </b-dropdown-item-button>
                                        </b-nav-item-dropdown>
                                    </div>
                                    <b-nav-item href="#" class="cook-bg p-2 b-01" >
                                            <router-link to="/nosotros" class="white-text" >
                                                NOSOTROS
                                            </router-link>
                                    </b-nav-item>
                                    <b-nav-item href="#" class="cook-bg p-2 b-01" >
                                            <router-link to="/contacto" class="white-text" >
                                                CONTACTARSE
                                            </router-link>
                                    </b-nav-item>

                                    <b-nav-item href="#" class=" p-2" data-toggle="modal" data-target="#Modal-01" ><i class="fas fa-bars cook-text"></i></b-nav-item>
                                    </b-navbar-nav>
                                </b-navbar-nav>
                    </b-collapse>
                </b-navbar>
                <div class="mesg-02">
                    <div class=" pr-4 white-text">
                        <h2 class="b-01">
                            Gastronomía 
                        </h2> 
                        <h2>
                            y Alta Cocina Peruana
                        </h2>
                    </div>
                    <br>
                    <div class="row">
                            <div class="col-md-6 gastro-c white-text ">
                                <div class="text-center">
                                    <h1 class="b-01 mt-2"><span class="m-text-25">S/</span> .450</h1> 
                                    <p>en mensualidad</p>
                                </div>
                            </div>
                            <div class="col-md-6  border-mesg">
                                <div class="p-2 white-text">
                                    PROMOCIÓN: 50% de descuento en Matrícula Anual y Uniforme Gratis
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="my-3 container">
  
            <div class="my-3 ">
                <div class="visible-cop">
                    <ul class="nav justify-content-end grey-t py-4 ">
                        <li class="nav-item" >
                            <a class="nav-link "  @click.prevent="pageC=1" href="#!">
                                <span class="black-text b-01" :class="{ selecMe:this.pageC==1}">Perfil de la carrera</span>
                            </a> 
                        </li>
                        <li class="nav-item"  >
                            <a class="nav-link"   @click.prevent="pageC=2" href="#!">
                            <span class="black-text b-01" :class="{ selecMe:this.pageC==2}">Malla curricular</span> 
                            </a>
                        </li>
                        <li class="nav-item" >
                            <a class="nav-link"   @click.prevent="pageC=3" href="#!">
                            <span class="black-text b-01" :class="{ selecMe:this.pageC==3}">Requisitos</span>  
                            </a>
                        </li>
                    
                    </ul>
                </div>
                 <ul class="visible-res list-unstyled grey-t">
                     <li>
                         <a class="nav-link "  @click.prevent="pageC=1" href="#!">
                            <span class="black-text b-01" :class="{ selecMe:this.pageC==1}">Perfil de la carrera</span>
                        </a> 
                     </li>
                     <li>
                        <a class="nav-link"   @click.prevent="pageC=2" href="#!">
                           <span class="black-text b-01" :class="{ selecMe:this.pageC==2}">Malla curricular</span> 
                        </a>
                    </li>
                    <li>
                        <a class="nav-link"   @click.prevent="pageC=3" href="#!">
                           <span class="black-text b-01" :class="{ selecMe:this.pageC==3}">Requisitos</span>  
                        </a>
                    </li>
                 </ul>
            </div>

                <div class="row" v-if="pageC==1">
                    <div class="col-md-4">
                        <div class="conte-01 p-4">
                            <h2>GASTRONOMIA</h2>
                            <p>Objetivo de la Especialidad. </p>
                            <p>La Especialidad de Chef Internacional está diseñada para aquellas personas 
                                interesadas en aprender y estudiar gastronomía en un corto tiempo e 
                                interesadas en incursionar en el amplio mundo culinario. Desarrollará sus habilidades 
                                con ayuda de excelentes chefs instructores y profesores obteniendo los conocimientos 
                                necesarios para poder ponerlos en práctica en su vida profesional.</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="rows-02" style="background-image: url(../img/gastronomia-01.jpg);"></div>
                    </div>
                    <div class="col-md-4">
                        <!-- <img src="img/banner-02.png" class="rows-02" alt="smaple image"> -->
                        <div class="rows-02" style="background-image: url(../img/banner-02.png);" ></div>
                    </div>

                    
                    
                    <div class="col-md-12 my-4">
                        <div class="my-3">
                            <h2>VENTAJAS e INFRAESTRUCTURA</h2>
                        </div>
                        <div class="row">
                            <div class="col-md-8">
                                 <div id="carouselExampleControls" class="carousel " data-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active animated  flipInX">
                                            <div class="row">
                                                <div class="col-6">
                                                    <div class="rows-02" style="background-image: url(../img/gastro-02.jpg);"></div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="rows-02" style="background-image: url(../img/gastr-03.jpg);" ></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="carousel-item animated flipInX">
                                            <div class="row">
                                                <div class="col-6">
                                                    <div class="rows-02" style="background-image: url(../img/gastronomia-01.jpg);"></div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="rows-02" style="background-image: url(../img/banner-02.png);" ></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="carousel-item animated flipInX">
                                            <div class="row">
                                                <div class="col-6">
                                                    <div class="rows-02" style="background-image: url(../img/gastro-04.png);"></div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="rows-02" style="background-image: url(../img/gastro-05.png);" ></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                       
                                </div>
                            </div>
                            <div class="col-md-4 ">
                                <div class="cook-bg p-4">
                                     <a class=" " href="#carouselExampleControls" role="button" data-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Previous</span>
                                        </a>
                                        <a class="" href="#carouselExampleControls" role="button" data-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Next</span>
                                        </a>
                                </div>
                                    
                                <div class="orange conte-02  p-4 white-text">
                                    <h2>Ventajas</h2>
                                    <ul >
                                        <li>
                                            Moderno edificio  especialmente diseñado y 
                                            construido para la capacitación de Técnicos Profesionales en Gastronomía.
                                        </li>
                                        <li>
                                            Talleres amplios y modernos con equipos industriales.
                                        </li>
                                        <li>
                                            La mejor Malla Curricular diseñada y estructurada conforme a estándares 
                                            internacionales.
                                        </li>
                                        <li>
                                            Prácticas Pre-Profesionales para nuestros alumnos y plazas laborales 
                                            para nuestros egresados a tráves de Discovery Jobs.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                       
                        
                    </div>
                </div>
                <div class="row" v-if="pageC==2">
                    <!-- <h2>Malla Curricular</h2> -->
              
                    <br>
                    <!--Table-->
                        <table class="table table-bordered mt-4">

                            <!--Table head-->
                            <thead>
                                <tr class="cook-bg">
                                    <th class="text-center m-textplus-nav-0 white-text">CICLO I</th>
                                    <th class="text-center m-textplus-nav-0 white-text">HORAS-TEORÍA</th>
                                    <th class="text-center m-textplus-nav-0 white-text">HORAS-PRÁCTICA</th>
                                    <th class="text-center m-textplus-nav-0 white-text">HORA SEMANAL</th>
                                </tr>
                            </thead>
                            <!--Table head-->
                        
                            <!--Table body-->
                            <tbody>
                                <tr>
                                    <th scope="row">Técnologia gastronómica I</th>
                                    <td class="text-center">2</td>
                                    <td class="text-center">2</td>
                                    <td class="text-center">4</td>
                                </tr>
                                <tr>
                                    <th scope="row">Cocina peruana I</th>
                                    <td class="text-center">1</td>
                                    <td class="text-center">2</td>
                                    <td class="text-center">3</td>
                                </tr>
                                <tr>
                                    <th scope="row">Pasteleria gastronómica I</th>
                                    <td class="text-center">2</td>
                                    <td class="text-center">3</td>
                                    <td class="text-center">5</td>
                                </tr>
                                <tr>
                                    <th scope="row">Mromatologia, Higene y manipulación de alimentos (BPM)</th>
                                    <td class="text-center">2</td>
                                    <td class="text-center">0</td>
                                    <td class="text-center">2</td>
                                </tr>
                            </tbody>
                            <!--Table body-->
                        
                        </table>
                    <!--Table-->
                    <!--Table-->
                        <table class="table table-bordered mt-4">

                            <!--Table head-->
                            <thead>
                                <tr class="cook-bg">
                                    <th class="text-center m-textplus-nav-0 white-text">CICLO II</th>
                                    <th class="text-center m-textplus-nav-0 white-text">HORAS-TEORÍA</th>
                                    <th class="text-center m-textplus-nav-0 white-text">HORAS-PRÁCTICA</th>
                                    <th class="text-center m-textplus-nav-0 white-text">HORA SEMANAL</th>
                                </tr>
                            </thead>
                            <!--Table head-->
                        
                            <!--Table body-->
                            <tbody>
                                <tr>
                                    <th scope="row">Técnologia gastronómica I</th>
                                    <td class="text-center">2</td>
                                    <td class="text-center">2</td>
                                    <td class="text-center">4</td>
                                </tr>
                                <tr>
                                    <th scope="row">Cocina peruana I</th>
                                    <td class="text-center">1</td>
                                    <td class="text-center">2</td>
                                    <td class="text-center">3</td>
                                </tr>
                                <tr>
                                    <th scope="row">Pasteleria gastronómica I</th>
                                    <td class="text-center">2</td>
                                    <td class="text-center">3</td>
                                    <td class="text-center">5</td>
                                </tr>
                                <tr>
                                    <th scope="row">Mromatologia, Higene y manipulación de alimentos (BPM)</th>
                                    <td class="text-center">2</td>
                                    <td class="text-center">0</td>
                                    <td class="text-center">2</td>
                                </tr>
                            </tbody>
                            <!--Table body-->
                        
                        </table>
                    <!--Table-->
                    <!--Table-->
                        <table class="table table-bordered  mt-4">

                            <!--Table head-->
                            <thead>
                                <tr class="cook-bg">
                                    <th class="text-center m-textplus-nav-0 white-text">CICLO III</th>
                                    <th class="text-center m-textplus-nav-0 white-text">HORAS-TEORÍA</th>
                                    <th class="text-center m-textplus-nav-0 white-text">HORAS-PRÁCTICA</th>
                                    <th class="text-center m-textplus-nav-0 white-text">HORA SEMANAL</th>
                                </tr>
                            </thead>
                            <!--Table head-->
                        
                            <!--Table body-->
                            <tbody>
                                <tr>
                                    <th scope="row">Técnologia gastronómica I</th>
                                    <td class="text-center">2</td>
                                    <td class="text-center">2</td>
                                    <td class="text-center">4</td>
                                </tr>
                                <tr>
                                    <th scope="row">Cocina peruana I</th>
                                    <td class="text-center">1</td>
                                    <td class="text-center">2</td>
                                    <td class="text-center">3</td>
                                </tr>
                                <tr>
                                    <th scope="row">Pasteleria gastronómica I</th>
                                    <td class="text-center">2</td>
                                    <td class="text-center">3</td>
                                    <td class="text-center">5</td>
                                </tr>
                                <tr>
                                    <th scope="row">Mromatologia, Higene y manipulación de alimentos (BPM)</th>
                                    <td class="text-center">2</td>
                                    <td class="text-center">0</td>
                                    <td class="text-center">2</td>
                                </tr>
                            </tbody>
                            <!--Table body-->
                        
                        </table>
                    <!--Table-->
                        <!--Table-->
                        <table class="table table-bordered  mt-4">

                            <!--Table head-->
                            <thead>
                                <tr class="cook-bg">
                                    <th class="text-center m-textplus-nav-0 white-text">CICLO IV</th>
                                    <th class="text-center m-textplus-nav-0 white-text">HORAS-TEORÍA</th>
                                    <th class="text-center m-textplus-nav-0 white-text">HORAS-PRÁCTICA</th>
                                    <th class="text-center m-textplus-nav-0 white-text">HORA SEMANAL</th>
                                </tr>
                            </thead>
                            <!--Table head-->
                        
                            <!--Table body-->
                            <tbody>
                                <tr>
                                    <th scope="row">Técnologia gastronómica I</th>
                                    <td class="text-center">2</td>
                                    <td class="text-center">2</td>
                                    <td class="text-center">4</td>
                                </tr>
                                <tr>
                                    <th scope="row">Cocina peruana I</th>
                                    <td class="text-center">1</td>
                                    <td class="text-center">2</td>
                                    <td class="text-center">3</td>
                                </tr>
                                <tr>
                                    <th scope="row">Pasteleria gastronómica I</th>
                                    <td class="text-center">2</td>
                                    <td class="text-center">3</td>
                                    <td class="text-center">5</td>
                                </tr>
                                <tr>
                                    <th scope="row">Mromatologia, Higene y manipulación de alimentos (BPM)</th>
                                    <td class="text-center">2</td>
                                    <td class="text-center">0</td>
                                    <td class="text-center">2</td>
                                </tr>
                            </tbody>
                            <!--Table body-->
                            
                        </table>
                    <!--Table-->
                        <!--Table-->
                        <table class="table table-bordered  mt-4">

                                <!--Table head-->
                                <thead>
                                    <tr class="cook-bg">
                                        <th class="text-center m-textplus-nav-0 white-text">CICLO V</th>
                                        <th class="text-center m-textplus-nav-0 white-text">HORAS-TEORÍA</th>
                                        <th class="text-center m-textplus-nav-0 white-text">HORAS-PRÁCTICA</th>
                                        <th class="text-center m-textplus-nav-0 white-text">HORA SEMANAL</th>
                                    </tr>
                                </thead>
                                <!--Table head-->
                            
                                <!--Table body-->
                                <tbody>
                                    <tr>
                                        <th scope="row">Técnologia gastronómica I</th>
                                        <td class="text-center">2</td>
                                        <td class="text-center">2</td>
                                        <td class="text-center">4</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Cocina peruana I</th>
                                        <td class="text-center">1</td>
                                        <td class="text-center">2</td>
                                        <td class="text-center">3</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Pasteleria gastronómica I</th>
                                        <td class="text-center">2</td>
                                        <td class="text-center">3</td>
                                        <td class="text-center">5</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Mromatologia, Higene y manipulación de alimentos (BPM)</th>
                                        <td class="text-center">2</td>
                                        <td class="text-center">0</td>
                                        <td class="text-center">2</td>
                                    </tr>
                            </tbody>
                            <!--Table body-->
                                
                        </table>
                    <!--Table-->
                        <!--Table-->
                        <table class="table table-bordered  mt-4">

                                <!--Table head-->
                                <thead>
                                    <tr class="cook-bg">
                                        <th class="text-center m-textplus-nav-0 white-text">CICLO VI</th>
                                        <th class="text-center m-textplus-nav-0 white-text">HORAS-TEORÍA</th>
                                        <th class="text-center m-textplus-nav-0 white-text">HORAS-PRÁCTICA</th>
                                        <th class="text-center m-textplus-nav-0 white-text">HORA SEMANAL</th>
                                    </tr>
                                </thead>
                                <!--Table head-->
                            
                                <!--Table body-->
                                <tbody>
                                    <tr>
                                        <th scope="row">Técnologia gastronómica I</th>
                                        <td class="text-center">2</td>
                                        <td class="text-center">2</td>
                                        <td class="text-center">4</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Cocina peruana I</th>
                                        <td class="text-center">1</td>
                                        <td class="text-center">2</td>
                                        <td class="text-center">3</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Pasteleria gastronómica I</th>
                                        <td class="text-center">2</td>
                                        <td class="text-center">3</td>
                                        <td class="text-center">5</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Mromatologia, Higene y manipulación de alimentos (BPM)</th>
                                        <td class="text-center">2</td>
                                        <td class="text-center">0</td>
                                        <td class="text-center">2</td>
                                    </tr>
                                </tbody>
                                <!--Table body-->
                                
                        </table>
                    <!--Table-->
                 
                </div>
                <div class="row" v-if="pageC==3">
                        <!-- <h2>Requisitos</h2> -->
                    <div class="row container">
                        
                        <div class="col-md-5">
                            <div class="row">
                                <div class="col-md-12">
                                    <p class="b-01">Requisitos de Admisión</p>
                                    <ul>
                                        <li>Certificado del 1ro al 5to de Secundaria.</li>
                                        <li>Fotografias de tamaño pasaporte</li>
                                        <li> Fotocopia de Documento de Identidad</li>
                                        <li>Recibo de Agua o Luz</li>
                                        <li>Carnet de sanidad</li>
                                    </ul>

                                </div>
                                <div class="col-md-12">
                                    <p class="b-01">Uniforme: S/130.00 Nuevos soles</p>
                                    <ul>
                                        <li>1 Chaqueta</li>
                                        <li>1 pantalón</li>
                                        <li>1 mandión</li>
                                        <li>1 gorro de chef</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-7">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="border-noti ">
                                        <div class="card-body m-1 white">
                                            <!-- Header -->
                                            
                                            <p class="m-textplus-nav-0">Para contactarse con nosotros, favor complete el formulario y nos comunicaremos dentro de las próximas 24 hs.</p>
                                            <!-- Body -->
                                            <div class="md-form">
                                            <i class="fa fa-user prefix grey-text"></i>
                                            <input type="text" id="form-name" class="form-control">
                                            <label for="form-name">Nombres y Apellidos</label>
                                            </div>
                                            <div class="md-form">
                                            <i class="fa fa-envelope prefix grey-text"></i>
                                            <input type="text" id="form-email" class="form-control">
                                            <label for="form-email">Correo Electrónico</label>
                                            </div>
                                            <div class="md-form">			            
                                            <i class="fa fa-phone prefix grey-text" aria-hidden="true"></i>
                                            <input type="text" id="form-Subject" class="form-control">
                                            <label for="form-Subject">Teléfono</label>
                                            </div>
                                            <div class="md-form">
                                            <i class="fa fa-tag prefix grey-text"></i>
                                            <input type="text" id="form-Subject" class="form-control">
                                            <label for="form-Subject">Dirección</label>
                                            </div>
                                            <div class="md-form">
                                            <i class="far fa-list-alt prefix grey-text"></i>
                                            <textarea type="text" id="form-text" class="form-control md-textarea" rows="3"></textarea>
                                            <label for="form-text">Consulta o Solicitud de Presupuesto</label>
                                            </div>
                                            <div class="text-center">
                                            <button class="btn cook-bg"><i class="fas fa-location-arrow mr-2"></i>Enviar</button>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                        
                    </div>
                </div>
 
        </div>
        <div class="my-5">
             <div class="col-md-12">
                <div id="container" class=" " style="height: auto">
                    <iframe class="mt-2" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15607.21699285121!2d-75.2156672!3d-12.056985599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2spe!4v1524698596607" width="100%" height="500px" frameborder="0" style="border:0" allowfullscreen></iframe>
                </div>
            </div>
        </div>

    </div>
</template>


<script>
           
export default {
    data(){
        return{
            pageC:1, 
            slide: 0,
            sliding: null
        }
    },
    methods:{
        onSlideStart (slide) {
            this.sliding = true
        },
        onSlideEnd (slide) {
            this.sliding = false
        }
    },
    mounted(){
        $(document).ready(function(){
               // efecto
                $('.rIni').click(function(){
                    $('body, html').animate({
                        scrollTop: '0px'
                    }, 3);
                });
                
            });

            $(document).ready(function(){
 
                $('.ir-arriba').click(function(){
                    $('body, html').animate({
                        scrollTop: '0px'
                    }, 300);
                });

                $(window).scroll(function(){
                    if( $(this).scrollTop() > 0 ){
                        $('.ir-arriba').slideDown(300);
                    } else {
                        $('.ir-arriba').slideUp(300);
                    }
                });

            });
              
              
    }
}
</script>