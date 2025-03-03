import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


// Componentes
import PacsView from './components/PacsView.vue'
import AnexosView from './components/AnexosView.vue'
import PapeletasView from './components/PapeletaRall.vue'
import TransparenciaView from './components/TransparenciaModal.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/pacs', component: PacsView },
    { path: '/anexos', component: AnexosView },
    { path: '/papeletas', component: PapeletasView },
    { path: '/transparencia', component: TransparenciaView},
    { path: '/', redirect: '/pacs' }
  ]
})

createApp(App)
  .use(router)
  .mount('#app')
