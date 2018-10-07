<template>
    <div>

    <div class="diov" id="menu"> 
        <b-navbar  toggleable="md" type="dark"  class="fixed-top white " >

            <b-navbar-toggle class="cook-bg"  target="nav_collapse" ></b-navbar-toggle>

            <!-- <b-navbar-brand class="black-text" href="#">NavBar</b-navbar-brand> -->
                    <div  class="logo-fixed visiblew  txtNew " >
                        <img class="m-4 logo-flui" src="img/logo-cook.jpeg">     
                    </div> 

            <b-collapse is-nav id="nav_collapse" >

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">

                <b-navbar-nav text="Lang" right class="p-2" >
                    <b-nav-item href="#">
                        <router-link to="/" class="white-text">
                            <span class="black-text b-01 pl-2 pr-2">
                                INICIO
                            </span> 
                        </router-link>
                    </b-nav-item>
                    <b-nav-item href="#">
                        <router-link to="/noticia" class="white-text">
                            <span class="black-text b-01 pl-2 pr-2">
                                NOTICIA
                            </span> 
                        </router-link> 
                    </b-nav-item>
                    
                        <b-nav-item-dropdown  text="CARRERAS" class="cook-bg redondear b-01 redondea-05">
                            <b-dropdown-item-button class="btn-sm">
                                <router-link to="/gastronomia" class="white-text sm-0 sp-0">
                                    <span class="black-text b-01 ">
                                        GASTRONOMIA
                                    </span> 
                                </router-link> 
                            </b-dropdown-item-button>
                            <b-dropdown-item-button class="btn-sm">
                                <router-link to="/panaderia" class="white-text sm-0 sp-0">
                                    <span class="black-text b-01 ">
                                        PANADERIA
                                    </span> 
                                </router-link> 
                            </b-dropdown-item-button>
                            <b-dropdown-item-button class="btn-sm">
                                <router-link to="/bar" class="white-text sm-0 sp-0">
                                    <span class="black-text b-01 ">
                                        BAR
                                    </span> 
                                </router-link> 
                            </b-dropdown-item-button>
                        </b-nav-item-dropdown>
                        <b-nav-item href="#">
                        <router-link to="/" class="white-text">
                            <span class="black-text b-01 pl-2 pr-2">
                                NOSOTROS
                            </span> 
                        </router-link>     
                    </b-nav-item>

                    <b-nav-item href="#">
                        <router-link to="/" class="white-text">
                            <span class="black-text b-01 pl-2 pr-2">
                                CONTACTARSE
                            </span> 
                        </router-link>     
                    </b-nav-item>
                    <b-nav-item href="#" data-toggle="modal" data-target="#Modal-01" class="visible-cop">
                        <span class="cook-text pl-2 pr-2 b-01"><i class="fas fa-bars"></i></span>
                    </b-nav-item>
                </b-navbar-nav>
            
                </b-navbar-nav>

            </b-collapse>
        </b-navbar>
    </div>  

    <!-- menu static -->
    <div class="view">
        <!-- <img src="img/banner-02.png" class="blink-ima" alt="smaple image"> -->
        <video class="video-fluid" autoplay loop muted>
          <source src="https://mdbootstrap.com/img/video/Lines.mp4" type="video/mp4" />
        </video>
        

        <div class="mask visible-cop">
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

                                <b-nav-item-dropdown  text="CARRERAS" class="cook-bg  b-01 pt-2">
                                        <b-dropdown-item-button class="btn-sm">
                                            <router-link to="/gastronomia" class="white-text sm-0 sp-0">
                                                <span class="black-text b-01 ">
                                                    GASTRONOMIA
                                                </span> 
                                            </router-link> 
                                        </b-dropdown-item-button>
                                        <b-dropdown-item-button class="btn-sm">
                                            <router-link to="/panaderia" class="white-text sm-0 sp-0">
                                                <span class="black-text b-01 ">
                                                    PANADERIA
                                                </span> 
                                            </router-link> 
                                        </b-dropdown-item-button>
                                        <b-dropdown-item-button class="btn-sm">
                                            <router-link to="/bar" class="white-text sm-0 sp-0">
                                                <span class="black-text b-01 ">
                                                    BAR
                                                </span> 
                                            </router-link> 
                                        </b-dropdown-item-button>
                                </b-nav-item-dropdown>
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
            <div class="mesg-01">
                <div class="div pl-2 white-text text-left">
                    <h1 class="b-01">
                        ¡inscripciones abiertas!
                    </h1> 
                    <h6>
                        CONTAMOS CON 4 ESPECIALIDADES DISPONIBLES EN TURNO MATUTINO, VESPERTINO, NOCTURNO Y SABATINO
                    </h6>
                    
                </div>
                <br>
            </div>

        </div>
    </div>


        <div class="container-65">
                <div class="  my-5">
                    <div class="row">
                        <div class="col-md-4">
                                <div class="view overlay zoom">
                                    <div class="rows-02" style="background-image: url(../img/banner-02.png);" ></div>
                                    <!-- <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" class="imagesco " alt="Sample avatar"> -->
                                </div>
                                <p class="text-center mt-2 b-01 m-text-20 orange-text">
                                    Gastronomía 
                                </p>
                                <p class="text-center mn-t-10">& Arte Culinario</p>

                                <div class="linea-01 orange"></div>
                        </div>
                        <div class="col-md-4">
                            <div class="view overlay zoom">
                                <div class="rows-02" style="background-image: url(../img/carrera/bar-01.jpg);" ></div>
                            </div>
                                <p class="text-center mt-2 b-01 m-text-20 green-text">
                                    Bar Profesional 
                                </p>
                                <p class="text-center mn-t-10">& working flair</p>
                                <div class="linea-01 green"></div>
                        </div>
                        <div class="col-md-4">
                            <div class="view overlay zoom">
                                <div class="rows-02" style="background-image: url(../img/carrera/panaderia-01.jpg);" ></div>
                            </div> 
                                <p class="text-center mt-2 b-01 m-text-20 blue-text">
                                    Panaderia 
                                </p>
                                <p class="text-center mn-t-10">& Pasteleria</p>
                                <div class="linea-01 blue "></div>
                        </div>
                        
                    </div>
                </div>
        </div>

        <div class="my-5 cook-bg">
            <div class="row">
                <div class="col-md-3">
                    <div class="p-4">
                        <h2 class="b-01 white-text">Cursos Libres</h2>
                        <p class=" white-text">Somos una Institución poseedora una auténtica cultura educacional.</p>
                        <div class="text-center">
                            <button type="button" class="btn btn-outline">INSCRÍBETE AHORA</button>
                        </div>
                        
                        <br>
                        <div class="ultimo-01 visible-cop">
                                <a class="" href="#carouselExampleControls" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="" href="#carouselExampleControls" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                        </div>
                        <div class=" visible-res">
                                <a class="" href="#carouselExampleControls" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="" href="#carouselExampleControls" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                        </div>
                        
                    </div>
                        
                </div>
                <div class="col-md-9 ">
                        <div id="carouselExampleControls" class="carousel slide " data-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg" alt="First slide">
                                </div>
                                <div class="carousel-item">
                                <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(46).jpg" alt="Second slide">
                                </div>
                                <div class="carousel-item">
                                <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(47).jpg" alt="Third slide">
                                </div>
                            </div>
                            
                        </div> 
                </div>
            </div>
                    
        </div>
        <div class="my-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <h4>
                            Conversión de medidas
                        </h4>
                        <p class="text-blog">JUNIO 1, 2018 EN	ARTICULOS |<span class="ml-2 cook-text">LEER MÁS</span></p>
                        <div class="rows-03" style="background-image: url(../img/carrera/blog-01.jpg);" ></div>

                        <div class="content mt-2">
                            <p >
                                <span>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta 
                                    nobis excepturi sapiente dolores dolorem cupiditate sint, perferendis 
                                    enim! Vero accusantium perspiciatis cumque reiciendis veritatis deserunt 
                                    soluta, expedita a aliquam mollitia?
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <h4>
                            10 deliciosas recetas de cocina tradicional
                        </h4>
                        <p class="text-blog">JUNIO 1, 2018 EN	ARTICULOS |<span class="ml-2 cook-text">LEER MÁS</span></p>
                        <div class="rows-03" style="background-image: url(../img/carrera/blog-02.jpg);" ></div>

                        <div class="content mt-2">
                            <p >
                                <span>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta 
                                    nobis excepturi sapiente dolores dolorem cupiditate sint, perferendis 
                                    enim! Vero accusantium perspiciatis cumque reiciendis veritatis deserunt 
                                    soluta, expedita a aliquam mollitia?
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <h4>
                            120 Tips de cocina
                        </h4>
                        <p class="text-blog">JUNIO 1, 2018 EN	ARTICULOS |<span class="ml-2 cook-text">LEER MÁS</span></p>
                        <div class="rows-03" style="background-image: url(../img/carrera/blog-03.jpg);" ></div>

                        <div class="content mt-2">
                            <p >
                                <span>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta 
                                    nobis excepturi sapiente dolores dolorem cupiditate sint, perferendis 
                                    enim! Vero accusantium perspiciatis cumque reiciendis veritatis deserunt 
                                    soluta, expedita a aliquam mollitia?
                                </span>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="my-5 visible-cop">
            <div class="view ">
                <img src="img/carrera/fond-re-01.png" class="img-fluid" alt="smaple image">
                    
                    <div class="mask  rgba-black-strong flex-center">
                        <div class="row white-text text-center">
                            <div class="col-md-12 mb-4 mt-4">
                                <h2 class="b-01">Nuestros Beneficios</h2>
                                <p >Somos una Institución poseedora una auténtica cultura educacional.</p>
                            </div>
                            <div class="col-6">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="p-4">
                                            <i class="fas fa-chalkboard-teacher m-text-30 mb-4"></i>
                                            <p class="b-01">Convenios con las mejores empresas</p>
                                            <div class="d-flex justify-content-center my-4">
                                                <div class="linea-t-25"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="p-4">
                                            <i class="fas fa-sitemap m-text-30  mb-4"></i>
                                            <p class="b-01">Nuestra sede esta ubicada en zona céntrica</p>
                                            <div class="d-flex justify-content-center my-4">
                                                <div class="linea-t-25"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="p-4">
                                            <i class="fas fa-chalkboard-teacher m-text-30  mb-4"></i>
                                            <p class="b-01">Nuestras carreras son 100% prácticas</p>
                                            <div class="d-flex justify-content-center my-4">
                                                <div class="linea-t-25"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="p-4">
                                            <i class="fas fa-graduation-cap m-text-30  mb-4"></i>
                                            <p class="b-01">Mejor enseñanza con profesores capacitados</p>
                                            <div class="d-flex justify-content-center my-4">
                                                <div class="linea-t-25"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                                <div class="col-12 mt-4">
                                    <br>
                                    <button type="button" class="btn btn-outline redondea-05">CONOCE MÁS AQUÍ</button>
                                </div>
                            
                        </div>
                    </div>
                </div>

        </div>
        <!-- responsivo -->
        <div class="my-5 visible-res">
            <div class="row  text-center">
                <div class="col-md-12 mb-4 mt-4">
                    <h2 class="b-01">Nuestros Beneficios</h2>
                    <p >Somos una Institución poseedora una auténtica cultura educacional.</p>
                </div>
                <div class="col-6">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="p-4">
                                <i class="fas fa-chalkboard-teacher m-text-30 mb-4"></i>
                                <p class="b-01">Convenios con las mejores empresas</p>
                                <div class="d-flex justify-content-center my-4">
                                    <div class="linea-t-25"></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="p-4">
                                <i class="fas fa-sitemap m-text-30  mb-4"></i>
                                <p class="b-01">Nuestra sede esta ubicada en zona céntrica</p>
                                <div class="d-flex justify-content-center my-4">
                                    <div class="linea-t-25"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="p-4">
                                <i class="fas fa-chalkboard-teacher m-text-30  mb-4"></i>
                                <p class="b-01">Nuestras carreras son 100% prácticas</p>
                                <div class="d-flex justify-content-center my-4">
                                    <div class="linea-t-25"></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="p-4">
                                <i class="fas fa-graduation-cap m-text-30  mb-4"></i>
                                <p class="b-01">Mejor enseñanza con profesores capacitados</p>
                                <div class="d-flex justify-content-center my-4">
                                    <div class="linea-t-25"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                    <div class="col-12 mt-4">
                        <br>
                        <button type="button" class="btn btn-outline-b redondea-05">CONOCE MÁS AQUÍ</button>
                    </div>
                
            </div>
        </div>

    </div>
</template>
<script>

    const $ = require('jquery')
    window.$ = $


   
    export default {
         data(){
             return{
                 
             }
         },
         methods:{

         },
          mounted(){
            $(document).ready(function(){  
                $("#menu").hide();
                $(function(){
                    $(window).scroll(function(){

                        if($(this).scrollTop() > 100){
                            $('#menu').fadeIn();
                        }else{
                            $('#menu').fadeOut();
                        }
                    });
                });

            });
        }
        


    }

        
</script>