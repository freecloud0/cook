<template>
    <div>
         <div class="view">
            <img src="img/banner-02.png" class="blink-ima" alt="smaple image">
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
                                    <router-link to="/inscripcion" class="white-text">
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
                <div class="mesg-01 ">
                    <div class="div pl-2 black-text">
                        <h1 class="b-01">
                            Inscríbete Ahora
                        </h1> 
                        
                    </div>
                    <br>


                </div>
            </div>
        </div>
           
           <div class="container-70 my-5">
               <div class="row">
                   <div class="col-md-12">
                       <template>
                        <div>
                            <b-form-select v-model="selected" :options="options" class="mb-3" />
                            
                            <!-- <div>Selected: <strong>{{ selected }}</strong></div> -->
                        </div>
                        </template>
                   </div>
                   <div class="col-md-6">
                        <!-- Material input -->
                        <div class="md-form pb-4">
                            <input type="text" id="form1" class="form-control">
                            <label for="form1" >Nombres</label>
                        </div>
                        <div class="md-form mb-4">
                            <input type="text" id="form1" class="form-control">
                            <label for="form1" >Apellidos</label>
                        </div>
                   </div>
                   <div class="col-md-6">
                        <!-- Material input -->
                        <div class="md-form pb-4">
                            <input type="text" id="form1" class="form-control">
                            <label for="form1" >E-mail</label>
                        </div>
                        <div class="md-form mb-4">
                            <input type="text" id="form1" class="form-control">
                            <label for="form1" >Télefono o celular</label>
                        </div>
                   </div>
                   <div class="col-md-12">
                       <br>
                        <b-form-group label="">
                            <b-form-checkbox-group v-model="selectedRa" name="flavour1" :options="optionsRa">
                            </b-form-checkbox-group>
                        </b-form-group>

                   </div>
                   <div class="col-md-12">
                       <div class="d-flex justify-content-center"> 
                            <div class="my-5">
                                <button type="button" class="btn btn-outline-b redondea-05">ENVIAR SOLICITUD</button>
                            </div>
                       </div>
                      
                   </div>
               </div>
           </div>
           <br>

            


    </div>
    
</template>
<script>
export default {
  data () {
    return {
      selected: null,
      selectedRa:null,
      optionsRa:[
          {value:'a',text:'Acepto los Términos y Condiciones y Política de Privacidad'}
      ],
      options: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' },
        { value: {'C': '3PO'}, text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled', disabled: true }
      ],
      options01: [
        { value: null, text: 'Acepto los Términos y Condiciones y Política de Privacidad' },

      ]
    }
  }
}
</script>