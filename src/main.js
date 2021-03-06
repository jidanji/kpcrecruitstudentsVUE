import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

import Kpc from 'kpc-vue';
Vue.use(Kpc);

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery'
import 'bootstrap/dist/js/bootstrap.min.js'
//bootstrap

import animated from 'animate.css' // npm install animate.css --save安装，再引入

Vue.use(animated)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')