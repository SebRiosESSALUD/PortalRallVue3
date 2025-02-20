import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

// Componentes
import PacsView from './components/PacsView.vue'
import AnexosView from './components/AnexosView.vue'
import PapeletasView from './components/PapeletaRall.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/pacs', component: PacsView },
    { path: '/anexos', component: AnexosView },
    { path: '/papeletas', component: PapeletasView },
    { path: '/', redirect: '/pacs' }
  ]
})

createApp(App)
  .use(router)
  .mount('#app')
