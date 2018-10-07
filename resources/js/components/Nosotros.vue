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
                                NOSOTROS
                            </h2> 
                        </div>
                        <br>
                         

                    </div>
                </div>
        </div>
        
         <!-- contenido -->
            <div class="my-5 container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="my-2">
                            <h2>¿Quiénes Somos?</h2>
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
                        <div class="my-2">
                            <h2>Misión</h2>
                            <p>
                                Somos una Institución poseedora de una auténtica cultura educacional 
                                con los valores centrados en el alumno. Tenemos la plena convicción 
                                que nuestro alumno es el elemento más importante, es el centro de todas 
                                nuestras decisiones, y el brindarle una educación de calidad, el objetivo
                                primordial de nuestra organización.
                            </p>
                        </div>
                        <div class="my-2">
                            <h2>Visión</h2>
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
            </div>

        <!-- menu fixed -->
        <div class="diov" id="menuNo"> 
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
                $("#menuNo").hide();
                $(function(){
                    $(window).scroll(function(){

                        if($(this).scrollTop() > 100){
                            $('#menuNo').fadeIn();
                        }else{
                            $('#menuNo').fadeOut();
                        }
                    });
                });

            });
        }
        
}
</script>