import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import properties from './plugins/properties'
import { Icon } from '@iconify/vue'
import { createPinia } from 'pinia'
import Popup from '@/components/AppPopup'
import '@/assets/app.css'

const pinia = createPinia();

loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .use(properties)
  .use(pinia)

  .component('icon', Icon)
  .component('popup', Popup)
  .mount('#app')
