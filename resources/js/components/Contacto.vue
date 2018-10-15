<template>
    <div>
        
        <!-- menu static -->
        <div class="view">
            <!-- <img src="img/banner-02.png" class="blink-ima" alt="smaple image"> -->
            <div class="rows-baner" style="background-image: url(../img/contactto.jpg);"></div>
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
        
        <!-- contenido  -->
        <div class="my-5 container">
            <div class="row ">
                <div class="col-md-8">
                    <h2>Forma de contacto</h2>
                    <p>
                        Por favor llena el siguiente formulario y un asesor de Aspic se 
                        pondrá en contacto contigo los más pronto posible.
                    </p>

                    <div class=" mt-4 my-5">
                        <div class="md-form amber-textarea active-amber-textarea-2 col-6">
                            <input type="text" id="form1" class="form-control">
                            <label for="form1" >Nombres</label>
                        </div>
                        <div class="md-form amber-textarea active-amber-textarea-2 col-6">
                            <input type="text" id="form1" class="form-control">
                            <label for="form1" >E-mail</label>
                        </div>
                        <div class="md-form amber-textarea active-amber-textarea-2 col-6">
                            <input type="text" id="form1" class="form-control">
                            <label for="form1" >Teléfono</label>
                        </div>
                        <div class="md-form amber-textarea active-amber-textarea-2 col-10">
                            <textarea type="text" id="form10" class="md-textarea form-control" rows="3"></textarea>
                            <label for="form10">Mensaje</label>
                        </div>
                        <div class="text-center">
                            <button type="button" class="btn  btn-outline-cook ">ENVIAR</button>
                        </div>
  
                    </div>
                    
                </div>
                <div class="col-md-4">
                    <div id="container" class=" " style="height: auto">
                        <iframe class="mt-2" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15607.21699285121!2d-75.2156672!3d-12.056985599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2spe!4v1524698596607" width="100%" height="300px" frameborder="0" style="border:0" allowfullscreen></iframe>
                    </div>
                    <div class="my-2">
                        <img class="m-4 logo-flui" src="img/logo-cook.jpeg"> 
                    </div>
                    <div class="my-2">
                        <p>
                            <i class="fa fa-home mr-3"></i> Calzada de Tlalpan 4983, Tlalpan, La Joya,
                                14090, Ciudad de México, CDMX</p>
                        <p>
                            <i class="fa fa-envelope mr-3"></i> info@example.com</p>
                        <p>
                            <i class="fa fa-phone mr-3"></i> + 01 234 567 88</p>
                        <p>
                            <i class="fa fa-print mr-3"></i> + 01 234 567 89</p>

                    </div>
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