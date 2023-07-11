import { createApp } from 'vue'
import App from './App.vue'
import Router from './components/router.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
createApp(App).use(Router).mount('#app')
