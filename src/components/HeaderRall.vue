<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary" style="justify-content: center;">
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
            <a href="#" class="nav-link" @click.prevent="showMenu">MENU</a>
            <a href="#" class="nav-link" @click.prevent="showEnlaces">ENLACES</a>
            <a href="#" class="nav-link" @click.prevent="showFormatos">FORMATOS</a>
            <a href="#" class="nav-link" @click.prevent="showTransparencia">TRANSPARENCIA</a>
            <router-link to="/pacs" class="nav-link">PACS</router-link>
            <router-link to="/anexos" class="nav-link">ANEXOS</router-link>
            <a href="http://convocatorias.essalud.gob.pe/" 
               target="_blank" 
               class="nav-link">CONVOCATORIAS
            </a>
            <a href="#" class="nav-link" @click.prevent="showCorreo">CORREO</a>
          </div>
        </div>
      </div>
    </nav>
  
    <!-- Modales -->
    <EnlacesModal :show="showEnlacesModal" @close="showEnlacesModal = false"/>
    <FormatosModal :show="showFormModal" @close="showFormModal = false"/>
    <TransparenciaModal :show="showTransModal" @close="showTransModal = false"/>
    <MenuPrincipalModal :show="showMenuModal" @close="showMenuModal = false"/>
    <CorreoModal :show="showCorreoModal" @close="showCorreoModal = false"/>

  </template>
  
  <script setup>
  import { ref } from 'vue';
  import EnlacesModal from './EnlacesModal.vue';
  import FormatosModal from './FormatosModal.vue';
  import TransparenciaModal from './TransparenciaModal.vue';
  import MenuPrincipalModal from './MenuPrincipalModal.vue';
  import CorreoModal from './modals/CorreosModal.vue';
  
  const showMenuModal = ref(false);
  const showEnlacesModal = ref(false);
  const showFormModal = ref(false);
  const showTransModal = ref(false);
  const showCorreoModal = ref(false);

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

  const showMenu = () => {
    showMenuModal.value = true;
    closeMenu();
  };

  const showCorreo = () => {
    showCorreoModal.value = true;
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

  .navbar {
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    box-shadow: 10px 10px 31px -15px rgba(0,0,0,0.75);
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
  