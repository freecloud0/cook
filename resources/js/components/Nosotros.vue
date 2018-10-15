<template>
    <div>

        <!-- menu static -->
        <div class="view">
            <!-- <img src="img/banner-02.png" class="blink-ima" alt="smaple image"> -->
            <div class="rows-baner" style="background-image: url(../img/nosotros.jpg);"></div>
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
            
            <div class="mask strong-mid">
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
        
        
         <!-- contenido -->
            <div class="container">
                    
                    <div class="bg-75p">
                        <div class="cook-bg float-right conte-Nos p-4">
                                <h2 class="b-01 white-text">¿Quiénes Somos?</h2>
                        </div>
                            
                        <div class="nos-bg  p-4 white-text my-5">
                            <p>
                                ASPIC Instituto Gastronómico es una Escuela Estilo Europeo incorporada 
                                a la S.E.P que pone a su servicio un equipo de profesores y chefs 
                                profesionales mexicanos y extranjeros reconocidos a nivel internacional 
                                en las áreas generales de la industria gastronómica. Siendo el Director 
                                General Maître Cuisinier de France, y varios de ellos, miembros de L`Academie 
                                Culinaire de France. Contamos con cuatro especialidades en gastronomía 
                                disponibles en los turnos matutinos, vespertinos, nocturnos y sabatinos. 
                                Chef Universal en dos años la cual está fusionada con el programa de los 
                                idiomas francés e inglés a través de la gastronomía. Chef Internacional en 
                                dos años, Chef en un año y Chef Pâtissier & Chocolatier en un año y medio. 
                                También disponibles todo el año más de 25 cursos exprés en todas las variedades 
                                de la gastronomía.
                            </p>
                        </div>
                    </div>
                    <div class="d-flex justify-content-end">
                        <div class="bg-75p">
                            <div class="cook-bg float-left conte-vis p-4 m-2">
                                    <h2 class="b-01 white-text">Misión</h2>
                            </div>
                                
                            <div class="nos-bg  p-4 white-text my-5">
                                <p>
                                    Somos una Institución poseedora de una auténtica cultura educacional 
                                    con los valores centrados en el alumno. Tenemos la plena convicción 
                                    que nuestro alumno es el elemento más importante, es el centro de todas 
                                    nuestras decisiones, y el brindarle una educación de calidad, el objetivo
                                    primordial de nuestra organización.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="bg-75p">
                        <div class="cook-bg float-right conte-Nos p-4">
                                <h2 class="b-01 white-text">Visión</h2>
                        </div>
                            
                        <div class="nos-bg  p-4 white-text my-5">
                            <p>
                                Liderar el servicio educativo que garantice la realización de un capital 
                                humano calificado y competitivo, para cubrir exitosamente los puestos de 
                                trabajo que el Perú de hoy necesita, en el creciente y exigente sector de 
                                la Hotelería, Turismo y Gastronomía.Lo que redundará en el desarrollo 
                                económico y social de nuestro país, teniendo como principales protagonistas 
                                a nuestra emprendedora juventud peruana.
                            </p>
                        </div>
                    </div>

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