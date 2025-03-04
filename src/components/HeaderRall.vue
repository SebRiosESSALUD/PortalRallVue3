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
          <!-- Dropdowns dinámicos desde JSON -->
          <li v-for="dropdown in dropdowns" :key="dropdown.label" class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#">
              {{ dropdown.label }}
            </a>
            <ul class="dropdown-menu">
              <li 
                v-for="item in dropdown.items" :key="item.href">
                <a class="dropdown-item" target="blank" :href="item.href">
                  {{ item.label }}
                </a>
              </li>
            </ul>
          </li>

          <!-- Enlaces fijos -->
          <li class="nav-item">
            <router-link to="/pacs" class="nav-link active">PACS</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/anexos" class="nav-link active">ANEXOS</router-link>
          </li>

          <!-- Dropdown de correos (fijo) -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#">
              <i class="bi bi-envelope-at-fill"></i>
            </a>
            <ul class="dropdown-menu">
              <li>
                <a 
                  class="dropdown-item" target="blank" href="https://correo.essalud.gob.pe/">Zymbra</a>
              </li>
              <li>
                <a class="dropdown-item" target="blank" href="https://go.microsoft.com/fwlink/p/?linkid=2125442">Outlook</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import dropdownData from '../assets/header.json';

export default {
  name: 'NavBar',
  data() {
    return {
      dropdowns: dropdownData // Asigna los datos del JSON
    };
  },
  async mounted() {
    await nextTick();
    // No es necesario inicializar los dropdowns con JavaScript si usamos solo CSS para el hover
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
  display: none;
}

.dropdown:hover .dropdown-menu {
  display: block;
}

i {
  margin-left: 10px;
  margin-right: 30px;
  color: rgb(0, 38, 252);
}
</style>