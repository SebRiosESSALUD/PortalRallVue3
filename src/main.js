import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import 'bootstrap-icons/font/bootstrap-icons.css';

// Componentes
import PacsView from './components/PacsView.vue'
import AnexosView from './components/AnexosView.vue'
import PapeletasView from './components/PapeletaRall.vue'
import TransparenciaView from './components/TransparenciaModal.vue'

// Configuración del router
const router = createRouter({
  history: createWebHistory('/portalweb/'), // Base correcta
  routes: [
    { path: '/pacs', component: PacsView }, // Ruta relativa a /portalweb/
    { path: '/anexos', component: AnexosView },
    { path: '/papeletas', component: PapeletasView },
    { path: '/transparencia', component: TransparenciaView },
    { path: '/', redirect: '/pacs' }
  ]
})

// Integración de BootstrapVueNext
import * as Bootstrap from 'bootstrap'
import * as BVnext from 'bootstrap-vue-next'

const app = createApp(App)

app.use(BVnext.default, {
  bootstrap: Bootstrap
})

app.use(router)
app.mount('#app')