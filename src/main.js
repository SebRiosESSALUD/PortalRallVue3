import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import 'bootstrap-icons/font/bootstrap-icons.css';

// Componentes
import PacsView from './components/PacsView.vue'
import AnexosView from './components/AnexosView.vue'
import PapeletasView from './components/PapeletaRall.vue'
import TransparenciaView from './components/TransparenciaModal.vue'

//rutas
const router = createRouter({
  history: createWebHistory('/portalweb/'), // Agregado el prefijo correcto para producción
  routes: [
    { path: '/pacs', component: PacsView },
    { path: '/anexos', component: AnexosView },
    { path: '/papeletas', component: PapeletasView },
    { path: '/transparencia', component: TransparenciaView},
    { path: '/', redirect: '/pacs' }
  ]
})

// Integración global de BootstrapVueNext
import * as Bootstrap from 'bootstrap'
import * as BVnext from 'bootstrap-vue-next'

const app = createApp(App)

// Registrar BootstrapVueNext como plugin global
app.use(BVnext.default, {
  bootstrap: Bootstrap,
  // Opciones adicionales (ej. tema, idioma)
})

// Registrar router después de los plugins
app.use(router)

// Montar la app
app.mount('#app')
