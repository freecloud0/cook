<template>
    <div>
        <!-- menu fixed -->
        <div class="ir-arriba"><i class="fa fa-angle-up"></i></div>

        <!-- Modal -->
        <div class="modal fade animated fadeInRight" id="Modal-01" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-full-height modal-right " role="document">
                <div class="modal-content cook-bg">
                <div class="modal-body">
                    <div class="row">
                        <div class="col-12">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="col-12 white-text">
                        <ul class="nav justify-content-center ">
                                <li class="nav-item white mr-2">
                                    <a class="nav-link cook-text" href="#!">Talleres</a>
                                </li>
                                <li class="nav-item white ml-2">
                                    <a class="nav-link cook-text" href="#!">Intranet</a>
                                </li>
                            </ul>
                            <div class="my-4">
                                <div class="row">
                                    <div class="col-md-6 col-xl-3 sub-menu mb-xl-0 mb-4">
                                    <h6 class="sub-title text-uppercase font-weight-bold white-text">Featured</h6>
                                        <ul class="list-unstyled">
                                            <li>
                                            <a class="menu-item pl-0 white-text" href="#!">
                                                <i class="fa fa-caret-right pl-1 pr-3"></i>Lorem ipsum dolor sit amet
                                            </a>
                                            </li>
                                            <li>
                                            <a class="menu-item pl-0 white-text" href="#!">
                                                <i class="fa fa-caret-right pl-1 pr-3"></i>Consectetur adipiscing elit
                                            </a>
                                            </li>
                                            <li>
                                            <a class="menu-item pl-0 white-text" href="#!">
                                                <i class="fa fa-caret-right pl-1 pr-3"></i>Sed do eiusmod tempor incididunt
                                            </a>
                                            </li>
                                        </ul>

                                    </div>
                                    <h6 class="sub-title text-uppercase font-weight-bold white-text">Teléfono: 715-5019 / 715-5020</h6>
                                    

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                </div>
            </div>
        </div>

        <div class="modal fade animated fadeInRight" id="ModalCarrera" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel1" aria-hidden="true">
            <div class="modal-dialog modal-full-height modal-right " role="document">
                <div class="modal-content cook-bg">
                <div class="modal-body">
                    <div class="row">
                        <div class="col-12">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="col-12 white-text">
                        <ul class="nav justify-content-center ">
                                <li class="nav-item white mr-2">
                                    <a class="nav-link cook-text" href="#!">Inicio</a>
                                </li>
                                <li class="nav-item white ml-2">
                                    <a class="nav-link cook-text" href="#!">Intranet</a>
                                </li>
                            </ul>
                            <div class="my-4">
                                <div class="row">
                                    <div class="col-md-6 col-xl-3 sub-menu mb-xl-0 mb-4">
                                    <h6 class="sub-title text-uppercase font-weight-bold white-text">Featured</h6>
                                        <ul class="list-unstyled">
                                            <li>
                                            <a class="menu-item pl-0 white-text" href="#!">
                                                <i class="fa fa-caret-right pl-1 pr-3"></i>Lorem ipsum dolor sit amet
                                            </a>
                                            </li>
                                            <li>
                                            <a class="menu-item pl-0 white-text" href="#!">
                                                <i class="fa fa-caret-right pl-1 pr-3"></i>Consectetur adipiscing elit
                                            </a>
                                            </li>
                                            <li>
                                            <a class="menu-item pl-0 white-text" href="#!">
                                                <i class="fa fa-caret-right pl-1 pr-3"></i>Sed do eiusmod tempor incididunt
                                            </a>
                                            </li>
                                        </ul>

                                    </div>
                                    <h6 class="text-center sub-title text-uppercase font-weight-bold white-text">Teléfono: 715-5019 / 715-5020</h6>
                                    

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                </div>
            </div>
        </div>

        <div class="modal fade animated fadeInRight" id="ModalHome" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel1" aria-hidden="true">
            <div class="modal-dialog modal-full-height modal-right " role="document">
                <div class="modal-content cook-bg">
                <div class="modal-body">
                    <div class="row">
                        <div class="col-12">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="col-12 white-text">
                        <ul class="nav justify-content-center ">
                                
                                <router-link to="/" class="white-text" data-dismiss="modal" aria-label="Close">
                                    <li class="nav-item white p-2">
                                        <span class="cook-text pl-2 pr-2">
                                            Inicio
                                        </span>
                                    </li> 
                                </router-link>
                                <router-link to="/" class="white-text" data-dismiss="modal" aria-label="Close">
                                    <li class="nav-item white p-2">
                                        <span class="cook-text pl-2 pr-2">
                                            Intranet
                                        </span>
                                    </li> 
                                </router-link> 
                            </ul>
                            <div class="my-4">
                                <ul>
                                    <li>
                                        <router-link to="/noticia" class="white-text" data-dismiss="modal" aria-label="Close">
                                            <span class="white-text b-01 pl-2 pr-2">
                                                NOTICIA
                                            </span> 
                                        </router-link> 
                                    </li>
                                    <li>
                                        <b-dropdown id="ddown-aria" text="Carreras" variant="primary" class="cook-bg b-01">
                                            <div role="group" aria-labelledby="header1">
                                            <b-dropdown-item-button class="btn-sm">
                                                <router-link to="/gastronomia" class="white-text sm-0 sp-0" data-dismiss="modal" aria-label="Close">
                                                    <span class="black-text b-01 ">
                                                        GASTRONOMIA
                                                    </span> 
                                                </router-link> 
                                            </b-dropdown-item-button>
                                            <b-dropdown-item-button class="btn-sm">
                                                <router-link to="/panaderia" class="white-text sm-0 sp-0" data-dismiss="modal" aria-label="Close">
                                                    <span class="black-text b-01 ">
                                                        PANADERIA
                                                    </span> 
                                                </router-link> 
                                            </b-dropdown-item-button>
                                            <b-dropdown-item-button class="btn-sm">
                                                <router-link to="/bar" class="white-text sm-0 sp-0" data-dismiss="modal" aria-label="Close">
                                                    <span class="black-text b-01 ">
                                                        BAR
                                                    </span> 
                                                </router-link> 
                                            </b-dropdown-item-button>

                                            </div>
                                        </b-dropdown>
                                    </li>

                                    <li>
                                        <router-link to="/nosotros" class="white-text" data-dismiss="modal" aria-label="Close">
                                            <span class="white-text b-01 pl-2 pr-2">
                                                NOSOTROS
                                            </span> 
                                        </router-link> 
                                    </li>  
                                    
                                    <li>
                                        <router-link to="/contacto" class="white-text" data-dismiss="modal" aria-label="Close">
                                            <span class="white-text b-01 pl-2 pr-2">
                                                CONTACTARSE
                                            </span> 
                                        </router-link> 
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                </div>
            </div>
        </div>

        <!-- menu fixed -->
        <div  id="red1">
            <b-navbar  toggleable="md" type="dark"  class="fixed-top white "  id="menuN">

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
                            <router-link to="/noticia" class="rIni white-text">
                                <span class="black-text b-01 pl-2 pr-2">
                                    NOTICIA
                                </span> 
                            </router-link> 
                        </b-nav-item>
                        
                            <b-nav-item-dropdown  text="CARRERAS" class=" redondear b-01 redondea-05">
                                <b-dropdown-item-button class="btn-sm">
                                    <router-link to="/gastronomia" class="rIni white-text sm-0 sp-0">
                                        <span class="black-text b-01 ">
                                            GASTRONOMIA
                                        </span> 
                                    </router-link> 
                                </b-dropdown-item-button>
                                <b-dropdown-item-button class="btn-sm">
                                    <router-link to="/panaderia" class="rIni white-text sm-0 sp-0">
                                        <span class="black-text b-01 ">
                                            PANADERIA
                                        </span> 
                                    </router-link> 
                                </b-dropdown-item-button>
                                <b-dropdown-item-button class="btn-sm">
                                    <router-link to="/bar" class="rIni white-text sm-0 sp-0">
                                        <span class="black-text b-01 ">
                                            BAR
                                        </span> 
                                    </router-link> 
                                </b-dropdown-item-button>
                            </b-nav-item-dropdown>
                            <b-nav-item href="#">
                            <router-link to="/taller" class="rIni white-text">
                                <span class="black-text b-01 pl-2 pr-2">
                                    TALLERES
                                </span> 
                            </router-link>     
                        </b-nav-item>

                        <b-nav-item href="#">
                            <router-link to="/contacto" class="rIni white-text">
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

    </div>
</template>
<script>
const $ = require('jquery')
window.$ = $

       
export default {
    data(){
        return{
            eqLis:1, 
        }
    },
    methods:{

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
<style>
  
</style>
