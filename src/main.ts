import { createApp } from 'vue'
import App from './App.vue'

import './main.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import './bootstrap.scss'

import { createBootstrap } from 'bootstrap-vue-next'

const app = createApp(App)
app.use(createBootstrap())
app.mount('#app')
