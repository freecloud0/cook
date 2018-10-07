<template>
    <div>
        
        <!-- menu normal -->
        <div class="view visible-cop" >
            <img src="img/banner-02.png" class="blink-ima" alt="smaple image">
                <div class="mask rgba-black-strong">
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
                                        <router-link to="/" class="white-text" >
                                            NOSOTROS
                                        </router-link>
                                </b-nav-item>
                                <b-nav-item href="#" class="cook-bg p-2 b-01" >
                                        <router-link to="/" class="white-text" >
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
                                Noticias

                            </h2> 
                            <h2>
                               Y ARTÍCULOS
                            </h2>
                        </div>
                        <br>
                         

                    </div>
                </div>
        </div>
        
         

         <div class="my-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 mb-4">
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
                    <div class="col-md-4 mb-4">
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
                    <div class="col-md-4 mb-4">
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
                    <div class="col-md-4 mb-4">
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
                    <div class="col-md-4 mb-4">
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
                    <div class="col-md-4 mb-4">
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
                <div class="my-5">
                    <!--Pagination-->
                        <nav aria-label="pagination example">
                            <ul class="pagination pg-blue">

                                <!--Arrow left-->
                                <li class="page-item disabled">
                                    <a class="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                </li>

                                <li class="page-item active">
                                    <a class="page-link" href="#">1 <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item"><a class="page-link" href="#">4</a></li>
                                <li class="page-item"><a class="page-link" href="#">5</a></li>

                                <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                </div>
            </div>
        </div>

        <!-- menu fixed -->
        <div class="diov" id="menuN"> 
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

        <!-- <div v-if="pageC==1" class="animated fadeInRight "></div> -->
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
                $("#menuN").hide();
                $(function(){
                    $(window).scroll(function(){

                        if($(this).scrollTop() > 100){
                            $('#menuN').fadeIn();
                        }else{
                            $('#menuN').fadeOut();
                        }
                    });
                });

            });
        }
        
}
</script>