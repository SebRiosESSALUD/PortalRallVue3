<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <!-- Logo y nombre -->
        <div class="d-flex align-items-center">
          <img src="/logo-main.png" 
               class="img-fluid logo-img"
               max width="200" 
               alt="LogoEssalud">
          <h3 class="d-none d-md-block">Red Asistencial La Libertad</h3>
        </div>
  
        <!-- Botón hamburguesa -->
        <button class="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarLinks">
          <span class="navbar-toggler-icon"></span>
        </button>
  
        <!-- Enlaces -->
        <div class="collapse navbar-collapse justify-content-end" id="navbarLinks">
          <div class="navbar-nav gap-3">
            <a href="#" class="nav-link" @click.prevent="showEnlaces">ENLACES</a>
            <a href="#" class="nav-link" @click.prevent="showFormatos">FORMATOS</a>
            <a href="#" class="nav-link" @click.prevent="showTransparencia">TRANSPARENCIA</a>
            <router-link to="/pacs" class="nav-link">PACS</router-link>
            <router-link to="/anexos" class="nav-link">ANEXOS</router-link>
            <a href="http://convocatorias.essalud.gob.pe/" 
               target="_blank" 
               class="nav-link">CONVOCATORIAS</a>
          </div>
        </div>
      </div>
    </nav>
  
    <!-- Modales -->
    <EnlacesModal :show="showEnlacesModal" @close="showEnlacesModal = false"/>
    <FormatosModal :show="showFormModal" @close="showFormModal = false"/>
    <TransparenciaModal :show="showTransModal" @close="showTransModal = false"/>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import EnlacesModal from './EnlacesModal.vue';
  import FormatosModal from './FormatosModal.vue';
  import TransparenciaModal from './TransparenciaModal.vue';
  
  const showEnlacesModal = ref(false);
  const showFormModal = ref(false);
  const showTransModal = ref(false);

  const showEnlaces = () => {
    showEnlacesModal.value = true;
    closeMenu();
  };
  
  const showFormatos = () => {
    showFormModal.value = true;
    closeMenu();
  };
  
  const showTransparencia = () => {
    showTransModal.value = true;
    closeMenu();
  };
  
  const closeMenu = () => {
    const collapse = document.getElementById('navbarLinks');
    if (collapse.classList.contains('show')) {
      collapse.classList.remove('show');
    }
  };
  </script>
  
  <style>
  .logo-img {
    max-width: 250px;
    height: auto;
    margin-right: 1rem;
  }
  
  .navbar-nav {
    align-items: center;
  }
  
  @media (max-width: 1000px) {
    .logo-img {
      max-width: 180px;
    }
    
    .navbar-nav {
      padding: 1rem;
      text-align: center;
    }
  }
  </style>
  