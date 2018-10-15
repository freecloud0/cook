<template>
    <div>
    

        <!-- menu static -->
        <div class="view">
            <!-- <img src="img/banner-02.png" class="blink-ima" alt="smaple image"> -->
            <div class="rows-baner" style="background-image: url(../img/noticia.jpg);" ></div>
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
        <div class="">
            <div class=" row">
                <div class="col-md-3">
                    <div class="my-5"  > <!-- id="myHeader" -->
                        <div class="div p-2 cook-bg ml-2  d-flex">
                            <h4 class="b-01 white-text mr-4">
                                Seguir
                            </h4>
                            <a href="">
                                <div class="icon-redondear mr-2"><i class="fab fa-facebook-f"></i></div>
                            </a>
                            <a href="">
                                <div class="icon-redondear mr-2"><i class="fab fa-youtube"></i></div>
                            </a>
                            <a href="">
                                <div class="icon-redondear mr-2"><i class="fab fa-instagram"></i></div>
                            </a>
                        </div>
                        <div class="div p-2 border ml-2 ">
                            <h4 class="b-01 text-center">@Cooking.Gourmet</h4>
                        </div>

                        <ul class="list-group ml-2 mt-4">
                            <a href="" class="s-deco black-text">
                                <li class="list-group-item ">
                                    Inicio
                                    <i class="fab fa-youtube float-right m-text-23"></i>
                                </li>
                            </a>
                            <a href="" class="s-deco black-text">
                                <li class="list-group-item ">
                                    Fotos
                                    <i class="fab fa-youtube float-right m-text-23"></i>
                                </li>
                            </a>
                            <a href="" class="s-deco black-text">
                                <li class="list-group-item ">
                                    Eventos
                                    <i class="fab fa-youtube float-right m-text-23"></i>
                                </li>
                            </a>
                            <a href="" class="s-deco black-text">
                                <li class="list-group-item ">
                                    Youtube
                                    <i class="fab fa-youtube float-right m-text-23"></i>
                                </li>
                            </a>
                            <a href="" class="s-deco black-text">
                                <li class="list-group-item ">
                                    Publicaciones
                                    <i class="fab fa-youtube float-right m-text-23"></i>
                                </li>
                            </a>
                        </ul>
                    </div>
                </div>
                <div class="col-md-9 ">

                    <div class="my-5">
                        
                        <div class="container border p-4">
                            <div class="row">
                            

                                <div class="col-md-4 mb-4" v-for=" task in paginador(tasks) " :key="task.indice">
                                    <h4>
                                        {{task.name}}
                                    </h4>
                                    <p class="text-blog">JUNIO 1, 2018 EN	ARTICULOS |<span class="ml-2 cook-text">LEER MÁS</span></p>
                                    <!-- <div class="rows-03" style="background-image: url(../img/carrera/blog-01.jpg);" ></div> -->
                                    <img class="rows-03"  :src="task.url" />
                                             
                                                

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

                                <!-- <img v-for="image in images" :src="image.url" :alt="images.alt" /> -->

                            </div>
                            <div class="my-3">
                                <b-pagination size="md" align="right" :total-rows="this.tasks.length" v-model="currentPage" :per-page="perPage">
                                </b-pagination> 
                            </div>
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
const items = [
    
    ]
           
export default {
    data(){
        return{
            items: items, 
            pageC:1, 
            slide: 0,
            sliding: null,
            indice:1,
            tasks:[
                    {
                    id:1,
                    name: 'New sidebar design',
                    estimate: '20:00:00',
                    billed: '00:00:00',
                    url: '../img/carrera/blog-01.jpg'
                    },
                    {
                    id:2,
                    name: 'Destre',
                    estimate: '20:00:00',
                    billed: '00:00:00',
                    url: '../img/carrera/blog-02.jpg'
                    },
                    {
                    id:3,
                    name: 'Destre',
                    estimate: '20:00:00',
                    billed: '00:00:00',
                    url: '../img/carrera/blog-03.jpg'
                    },
                    {
                    id:4,
                    name: 'Destre',
                    estimate: '20:00:00',
                    billed: '00:00:00',
                    },
                    {
                    id:5,
                    name: 'Destre',
                    estimate: '20:00:00',
                    billed: '00:00:00',
                    },
                    {
                    id:6,
                    name: 'Destre',
                    estimate: '20:00:00',
                    billed: '00:00:00',
                    url: '../img/carrera/blog-03.jpg'
                    },
                ],
            

            currentPage: 1,
            perPage: 5,
            totalRows: items.length,
            pageOptions: [ 5, 10, 15 ],
            sortBy: null,
            sortDesc: false,
            sortDirection: 'asc',
            filter: null,
            modalInfo: { title: '', content: '' },


        }
    },
    methods:{
        paginador(val) {
            const indiceInicio = (this.currentPage - 1) * this.perPage;
            const indiceFinal =
                indiceInicio + this.perPage > val.length
                ? val.length
                : indiceInicio  + this.perPage;
            return val.slice(indiceInicio , indiceFinal );
        },

        onSlideStart (slide) {
            this.sliding = true
        },
        onSlideEnd (slide) {
            this.sliding = false
        }
        
    },
    mounted(){


        var header = document.getElementById("myHeader");
        var sticky = header.offsetTop;

        $(function(){
            $(window).scroll(function(){

                if($(this).scrollTop() > 350 && $(this).scrollTop() < 1100){
                    header.classList.add("sticky");
                }else if($(this).scrollTop() < 349){
                   header.classList.remove("sticky");
                }else if($(this).scrollTop() > 700){
                   header.classList.remove("sticky");
                }
               
                
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