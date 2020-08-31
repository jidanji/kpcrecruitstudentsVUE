import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

import Kpc from 'kpc-vue';
Vue.use(Kpc);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')