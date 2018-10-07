<template>
    <div>
        <div class="view" v-if="pageC==1">
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
                                    <router-link to="/inscripcion" class="white-text" >
                                        <i class="fas fa-desktop"></i>
                                        INSCRÍBETE
                                    </router-link>
                            </b-nav-item>
                            
                            <b-nav-item href="#" class="white  border-cook p-2">
                                <span class="cook-text b-01">
                                    TRASLADOS
                                </span> 
                            </b-nav-item>
                            <b-nav-item href="#" class="cook-bg p-2 b-01">CARRERAS</b-nav-item>
                            <b-nav-item href="#" class="cook-bg p-2 b-01">CURSOS LIBRES</b-nav-item>
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
                                <div class="col-md-6 orange white-text ">
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

        <div>
            <div class="row">
                <div class="col-12">
                    <b-navbar type="dark" class="white border-cook" toggleable>
                        <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
                            <b-collapse is-nav id="nav_dropdown_collapse">
                            <b-navbar-nav>
                                <b-nav-item href="#" @click.prevent="pageC=1">
                                    <span class="black-text b-01 " :class="{ selecMe:this.pageC==1}">
                                        Gastronomia
                                    </span> 
                                </b-nav-item>
                                <b-nav-item href="#" @click.prevent="pageC=2">
                                    <span class="black-text b-01" :class="{ selecMe:this.pageC==2}">
                                        Panaderia
                                    </span>
                                </b-nav-item>
                                <b-nav-item href="#" @click.prevent="pageC=3">
                                    <span class="black-text b-01" :class="{ selecMe:this.pageC==3}">
                                        Bar
                                    </span>
                                </b-nav-item>
                                <!-- Navbar dropdowns -->
                            </b-navbar-nav>
                            
                            </b-collapse>
                            <a href="" class="s-deco black-text">
                                inscripcion
                            </a>
                            
                    </b-navbar>
                </div>
            
            </div>
            
        </div>
        <div class="my-5 container">
            <div v-if="pageC==1" class="animated fadeInRight ">
                <div class="row">
                    <div class="col-md-6">
                        <div class="rows-01">
                        </div>
                    </div>
                    <div class="col-md-6">
                        
                        <div class="conte-flot">
                            asdas
                        </div>
                    </div>
                </div>
                
            </div>
            <div v-if="pageC==2" class="animated fadeInRight ">
                    asd 2
                      
                      
            </div>
            <div v-if="pageC==3" class="animated fadeInRight ">
                        asd 3
            </div>
        </div>
    </div>
</template>


<script>
           
export default {
    data(){
        return{
            pageC:1, 
        }
    },
    methods:{

    },
}
</script>