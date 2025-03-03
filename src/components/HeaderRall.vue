<template>
  <nav class="navbar bg-light shadow-sm">
    <div class="container-fluid">
      <!-- Logo y nombre -->
      <router-link to="/" class="navbar-brand d-flex align-items-center">
        <img src="/logo-main.png" alt="Logo" class="logo-image me-2">
        <h2 class="mb-0">Red Asistencial La Libertad</h2>
      </router-link>

      <!-- Opciones derecha -->
      <div class="ms-auto d-flex">
        <ul class="nav">
          <!-- Dropdown Asistenciales -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" 
               role="button" data-bs-toggle="dropdown"
               aria-expanded="false">
              Asistenciales
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Atención Primaria</a></li>
              <li><a class="dropdown-item" href="#">Infocal</a></li>
              <li><a class="dropdown-item" href="#">Directiva CITT</a></li>
              <li><a class="dropdown-item" href="#">Acredita</a></li>
              <li><a class="dropdown-item" href="#">SIGI</a></li>
              <li><a class="dropdown-item" href="#">Glosario Estadístico 2022</a></li>
              <li><a class="dropdown-item" href="#">Firma Digital</a></li>
              <li><a class="dropdown-item" href="#">Anapat</a></li>
              <li><a class="dropdown-item" href="#">Referencias</a></li>
              <li><a class="dropdown-item" href="#">SGSS - ESSI</a></li>
              <li><a class="dropdown-item" href="#">Violencia Familiar</a></li>
              <li><a class="dropdown-item" href="#">Estándares CIE 10</a></li>
            </ul>
          </li>

          <!-- Dropdown Administrativos -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" 
               role="button" data-bs-toggle="dropdown"
               aria-expanded="false">
              Administrativos
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">SIAD</a></li>
              <li><a class="dropdown-item" href="#">SCAI</a></li>
              <li><a class="dropdown-item" href="#">Nube/Cloud</a></li>
              <li><a class="dropdown-item" href="#">Soporte Informático</a></li>
              <li><a class="dropdown-item" href="#">Intranet</a></li>
              <li><a class="dropdown-item" href="#">Sistema Rendiciones</a></li>
              <li><a class="dropdown-item" href="#">Mesa de Partes Digital</a></li>
              <li><a class="dropdown-item" href="#">Exploata</a></li>
            </ul>
          </li>

          <!-- Dropdown Recursos Humanos -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" 
               role="button" data-bs-toggle="dropdown"
               aria-expanded="false">
              Recursos Humanos
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Boletas de Pago</a></li>
              <li><a class="dropdown-item" href="#">Ficha Única de Personal</a></li>
              <li><a class="dropdown-item" href="#">Documentos de Gestión</a></li>
            </ul>
          </li>

          <!-- Otras opciones del navbar -->
          <li class="nav-item">
            <router-link to="/pacs" class="nav-link active">PACS</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/anexos" class="nav-link active">ANEXOS</router-link>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Opción 3</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { nextTick } from 'vue';
import * as bootstrap from 'bootstrap';

export default {
  name: 'NavBar',
  async mounted() {
    await nextTick();
    document.querySelectorAll('.dropdown-toggle').forEach(element => {
      new bootstrap.Dropdown(element);
    });
  }
}
</script>

<style>
/* Estilos generales */
.logo-image {
  width: 70px;
  height: 70px;
  object-fit: contain;
}

.nav-link {
  color: #000 !important;
  padding: 1rem 2rem;
  position: relative;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 100%;
  height: 2px;
  background-color: #003366;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.nav-link:hover,
.nav-link:focus {
  color: #003366 !important;
  font-size: 1.05em;
}

.nav-link:hover::after,
.nav-link:focus::after {
  transform: scaleX(1);
}

.nav-link.active {
  color: #000 !important;
  font-weight: 600;
  transform: scale(1.02);
}

/* Estilos para dropdowns */
.dropdown-item {
  color: #000 !important;
  padding: 0.5rem 1.5rem;
  position: relative;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
}

.dropdown-item::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 100%;
  height: 2px;
  background-color: #003366;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.dropdown-item:hover,
.dropdown-item:focus {
  color: #003366 !important;
  font-size: 1.03em;
}

.dropdown-menu {
  margin-top: 0 !important;
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
}
</style>