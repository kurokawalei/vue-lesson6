import { createApp } from 'vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

import Loading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'

import App from './App.vue'
import router from './router'

createApp(App)
  .use(router)
  .use(VueAxios, axios)
  .component('Loading', Loading)

  .mount('#app')
