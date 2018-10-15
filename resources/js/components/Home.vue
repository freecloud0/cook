    <template>
        <div>

            <!-- menu static -->
            <div class="view">
                <!-- <img src="img/banner-02.png" class="blink-ima" alt="smaple image"> -->
                
                <video class="video-fluid" autoplay loop muted >
                    <source src="https://mdbootstrap.com/img/video/Lines.mp4" type="video/mp4" />
                </video>

                

                <div class="visible-res">
                    <div  style="right: 10px; position: absolute; top: 10px; z-index: 200;" >
                        <img class="" style="width: 40px" src="img/logo-cook.jpeg">     
                    </div>
                    <div  style="left: 10px; width: auto; position: absolute; top: 5px; z-index: 2;" class="m-text-30" >
                        <a href="" data-toggle="modal" data-target="#ModalHome">
                            <span class="cook-text  b-01"><i class="fas fa-bars"></i></span>
                        </a>     
                    </div>
                            
                    <div class="mesg-01-res">
                        <h5 class="b-01 white-text">
                                ¡inscripciones abiertas!
                        </h5> 
                    </div>
                </div>
                
                <div class="mask visible-cop">
                    <b-navbar toggleable="md" type="dark" class="transpa">
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
                <div class=" my-5">
                    <div class="row">
                        <div class="col-md-4">
                            <figure class="snip1477">
                                <img style="background-image: url(../img/banner-02.png);" class="rows-02" />
                                <div class="title">
                                    <div class="p-2 gastro-c-02 redondea-01">
                                        <p class="text-center mt-2 b-01 m-text-20 green-text border-sh-1">
                                            Gastronomía 
                                        </p>
                                        <p class="text-center mn-t-10 border-sh">& Arte Culinario</p>

                                        <div class="linea-01 green"></div>
                                        
                                    </div>
                                </div>
                                <figcaption>
                                    <p>Which is worse, that everyone has his price.</p>
                                    <button type="button" class="btn btn-outline ">VISITAR</button>
                                </figcaption>
                                <a href="#"></a>
                            </figure>
                        </div>
                        <div class="col-md-4">
                            <figure class="snip1477">
                                <img style="background-image: url(../img/carrera/bar-01.jpg);" class="rows-02" />
                                <div class="title">
                                    <div class="p-2 bar-c redondea-01">
                                        <p class="text-center mt-2 b-01 m-text-20 blue-text border-sh-1">
                                        Bar Profesional 
                                        </p>
                                        <p class="text-center mn-t-10 border-sh">& working flair</p>
                                        <div class="linea-01 blue"></div>
                                    </div>
                                </div>
                                <figcaption>
                                    <p>Which is worse, that everyone has his price.</p>
                                    <button type="button" class="btn btn-outline ">VISITAR</button>
                                </figcaption>
                                <a href="#"></a>
                            </figure>
                        </div>
                        <div class="col-md-4">
                            <figure class="snip1477">
                                <img style="background-image: url(../img/carrera/panaderia-01.jpg);" class="rows-02" />
                                <div class="title">
                                    <div class="pl-4 pr-4 pt-2 pb-2 pana-c-02 redondea-01">
                                        
                                        <p class="text-center mt-2 b-01 m-text-20 orange-text border-sh-1">
                                        Panaderia 
                                        </p>
                                        <p class="text-center mn-t-10 border-sh">& Pasteleria</p>
                                        <div class="linea-01 orange "></div>
                                    </div>
                                </div>
                                <figcaption>
                                    <p>Which is worse, that everyone has his price.</p>
                                    <button type="button" class="btn btn-outline ">VISITAR</button>
                                </figcaption>
                                <a href="#"></a>
                            </figure>
                        </div>
                    </div>
                </div>  
            </div>
	
            <!-- <div class="container-65 ">

                    <div class=" my-5">
                        <div class="row">
                            <div class="col-md-4 mb-4">
                                    <div class="view overlay zoom">
                                        <div class="rows-02" style="background-image: url(../img/banner-02.png);" ></div>
            
                                    </div>
                                    <p class="text-center mt-2 b-01 m-text-20 orange-text">
                                        Gastronomía 
                                    </p>
                                    <p class="text-center mn-t-10">& Arte Culinario</p>

                                    <div class="linea-01 orange"></div>
                            </div>
                            <div class="col-md-4 mb-4">
                                <div class="view overlay zoom">
                                    <div class="rows-02" style="background-image: url(../img/carrera/bar-01.jpg);" ></div>
                                </div>
                                    <p class="text-center mt-2 b-01 m-text-20 green-text">
                                        Bar Profesional 
                                    </p>
                                    <p class="text-center mn-t-10">& working flair</p>
                                    <div class="linea-01 green"></div>
                            </div>
                            <div class="col-md-4 mb-4">
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
            </div> -->

            <div class="cook-bg container-10p">
                <div class="row">
                    <div class="col-md-3">
                        <div class="p-4">
                            <h2 class="b-01 white-text">Cursos Libres</h2>
                            <p class=" white-text">Somos una Institución poseedora una auténtica cultura educacional.</p>
                            <div class="text-center mt-4">
                                <br>
                                <button type="button" class="btn btn-outline">INSCRÍBETE AHORA</button>
                            </div>

                            <br>
                            
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
                            <div class="controller visible-cop">
                                <div class="d-flex justify-content-center">
                                
                                    <div class="mt-4">
                                        <a class="" href="#carouselExampleControls" role="button" data-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        </a>

                                        <a class="" href="#carouselExampleControls " role="button" data-slide="next">
                                            <span class="carousel-control-next-icon red-text" aria-hidden="true"></span>
                                            
                                        </a>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                            
                    </div>
                    <div class="col-md-9 ">
                            
                                <div   style="right: 30px; position: absolute; top: 15px; z-index: 50;" >
                                    <img class="redondea-01" style="width: 70px" src="img/logo-cook.jpeg">     
                                </div>
                            
                        <div id="carouselExampleControls" class="carousel slide " data-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div class="view">
                                        <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg" alt="First slide">
                                        <div class="mask">

                                        </div>
                                    </div>
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
            <div class=" container-10p fond-02">
                <div class="container">
                    <br>
                    <div class="my-5 ">
                        <h2 class="b-01">Noticias y eventos</h2>
                    </div>
                    <div class="row">
                        <div class="col-md-4 mb-4">
                            <div class="p-4 white redondea-01">
                                <h4 class=" mt-2 b-01  green-text border-sh-1">
                                        Conversión de medidas
                                </h4>
                                    <br>
                                <div class="view ">
                                    <div class="rows-03 redondea-01 border-black" style="background-image: url(../img/carrera/blog-01.jpg);" ></div>
                                    <div class="mask waves-effect">
                                        <div class="blog-avi p-2 black">
                                            <p class="text-blog white-text">22 JUNIO, 2018 |
                                                <span class="ml-2 cook-text">LEER MÁS</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="content mt-2">
                                    <div class="mas-t">
                                        <a href="">
                                            <div class="mas-conte"><i class="fas fa-plus"></i></div>
                                        </a>
                                    </div>
                                    <p >
                                        <span>   
			                                Como bartender, seguramente puedes crear cócteles muy 
                                            buenos, pero ¿qué sucede cuando eres responsable de tener 
                                            bien cuidada la barra en todo momento? Una de las mejores 
                                            maneras de asegurarte de(...)
                                        </span>
                                        
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-4">
                            <div class="p-4 white redondea-01">
                                <h4 class=" mt-2 b-01  green-text border-sh-1">
                                    10 deliciosas recetas de cocina tradicional
                                </h4>
                                <br>
                                <div class="view ">
                                    <div class="rows-03 redondea-01 border-black" style="background-image: url(../img/carrera/blog-02.jpg);" ></div>
                                    <div class="mask waves-effect">
                                        <div class="blog-avi p-2 black">
                                            <p class="text-blog white-text">22 JUNIO, 2018 |
                                                <span class="ml-2 cook-text">LEER MÁS</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="content mt-2">
                                    <div class="mas-t">
                                        <a href="">
                                            <div class="mas-conte"><i class="fas fa-plus"></i></div>
                                        </a>
                                    </div>
                                    <p>
                                        <span>   
			                                Como bartender, seguramente puedes crear cócteles muy 
                                            buenos, pero ¿qué sucede cuando eres responsable de tener 
                                            bien cuidada la barra en todo momento? Una de las mejores 
                                            maneras de asegurarte de(...)
                                        </span>
                                        
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-4">
                            <div class="p-4 white redondea-01">
                                <h4 class=" mt-2 b-01  green-text border-sh-1">
                                    En nuestro mes de aniversario presentamos Trucha
                                </h4>
                                <br>
                                <div class="view ">
                                    <div class="rows-03 redondea-01 border-black" style="background-image: url(../img/carrera/blog-03.jpg);" ></div>
                                    <div class="mask waves-effect">
                                        <div class="blog-avi p-2 black">
                                            <p class="text-blog white-text">22 JUNIO, 2018 |
                                                <span class="ml-2 cook-text">LEER MÁS</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="content mt-2">
                                    <div class="mas-t">
                                        <a href="">
                                            <div class="mas-conte"><i class="fas fa-plus"></i></div>
                                        </a>
                                    </div>
                                    <p >
                                        <span>   
			                                Como bartender, seguramente puedes crear cócteles muy 
                                            buenos, pero ¿qué sucede cuando eres responsable de tener 
                                            bien cuidada la barra en todo momento? Una de las mejores 
                                            maneras de asegurarte de(...)
                                        </span>
                                        
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="my-5 visible-cop container-10p">
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
            <div class="my-5 visible-res container-10p">
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

            // hover imagen
            $(".hover").mouseleave(
            function () {
                $(this).removeClass("hover");
            }
            );

            // iniciar p,0
            $(document).ready(function(){
               // efecto
                $('.rIni').click(function(){
                    $('body, html').animate({
                        scrollTop: '0px'
                    }, 3);
                });
                
            });
            // btn para ir arriba
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