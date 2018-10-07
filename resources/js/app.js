
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

// bootstrap

import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import 'mdbvue/build/css/mdb.css';


//rutas//

import VueRouter from 'vue-router'

Vue.use(VueRouter)




/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */



// Vue.component('example-component', require('./components/ExampleComponent.vue'));

let Myheader = require('./components/Myheader.vue');
let Myfooter = require('./components/Myfooter.vue');

let Home = require('./components/Home.vue');
let Inscripcion = require('./components/Inscripcion.vue');
// let Carrera = require('./components/Carrera.vue');
let Taller = require('./components/Taller.vue');
let Noticia = require('./components/Noticia.vue');
let Gastronomia = require('./components/Gastronomia.vue');
let Panaderia = require('./components/Panaderia.vue');
let Bar = require('./components/Bar.vue');
let Nosotros = require('./components/Nosotros.vue');
let Contacto = require('./components/Contacto.vue');



const routes = [
    { path: '/', component: Home},
    { path: '/inscripcion', component: Inscripcion},
    // { path: '/carrera', component: Carrera},
    { path: '/taller', component: Taller},
    { path: '/noticia', component: Noticia},
    { path: '/gastronomia', component: Gastronomia},
    { path: '/panaderia', component: Panaderia},
    { path: '/bar', component: Bar},
    { path: '/nosotros', component: Nosotros},
    { path: '/contacto', component: Contacto},

    // { path: '/admin', component: require('./components/Administracion.vue') },
]

const router = new VueRouter({

    mode:'history',
    routes // short for `routes: routes`
  })
  

const app = new Vue({
    el: '#app',
    router,
    components:{
        Myheader,
        Myfooter,
        Home,
        Inscripcion,
        // Carrera,
        Noticia,
        Taller,
        Gastronomia,
        Panaderia,
        Bar,
        Nosotros,
        Contacto,
    }
});
