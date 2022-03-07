import { createApp } from 'vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

import Loading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'

import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'
// Vee Validate－規則
import { required, email, min } from '@vee-validate/rules'
// Vee Validate－多國語系
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

import App from './App.vue'
import router from './router'

// Vee Validate－規則
defineRule('required', required)
defineRule('email', email)
defineRule('min', min)
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: false
})
setLocale('zh_TW')

createApp(App)
  .use(router)
  .use(VueAxios, axios)
  .component('Form', Form)
  .component('Field', Field)
  .component('ErrorMessage', ErrorMessage)
  .component('Loading', Loading)

  .mount('#app')
