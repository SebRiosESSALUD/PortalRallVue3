<template>
  <nav class="navbar bg-light shadow-sm">
    <div class="container-fluid">
      <div class="d-flex w-100 align-items-center">
        <!-- Logo a la izquierda -->
        <div class="d-flex align-items-center">
          <img src="/logo-main.png" alt="Logo" class="logo-image me-2">
        </div>

        <!-- Título centrado -->
        <div class="flex-grow-1 text-center">
          <p class="titulo m-0">Red Asistencial La Libertad</p>
        </div>

        <!-- Opciones a la derecha -->
        <div class="ms-auto d-flex">
          <ul class="nav">
            <li v-for="dropdown in dropdowns" :key="dropdown.label" class="nav-item dropdown">
              <a 
                class="nav-link dropdown-toggle" 
                href="#"
                @mouseover="showDropdown($event)"
                @mouseout="hideDropdown($event)"
              >
                {{ dropdown.label }}
              </a>
              <ul class="dropdown-menu">
                <li 
                  v-for="item in dropdown.items" :key="item.href">
                  <a v-if="item.label != 'PACS' & item.label != 'ANEXOS'" 
                    class="dropdown-item" 
                    target="_blank" 
                    :href="item.href"
                  >
                    {{ item.label }}
                  </a>
                  <router-link v-else-if="item.label == 'Anexos'"
                    to="/anexos"
                    class="dropdown-item"
                  >
                  ANEXOS
                  </router-link>
                  <router-link v-else
                    to="/pacs"
                    class="dropdown-item"
                  >
                  PACS
                  </router-link>
                </li>
              </ul>
            </li>

            <!-- Dropdown de correos -->
            <li class="nav-item dropdown">
              <a 
                class="nav-link dropdown-toggle" 
                href="#"
                @mouseover="showDropdown($event)"
                @mouseout="hideDropdown($event)"
              >
                <i class="bi bi-envelope-at-fill"></i>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a 
                    class="dropdown-item" 
                    target="_blank" 
                    href="https://correo.essalud.gob.pe/"
                  >
                    Zymbra
                  </a>
                </li>
                <li>
                  <a 
                    class="dropdown-item" 
                    target="_blank" 
                    href="https://go.microsoft.com/fwlink/p/?linkid=2125442"
                  >
                    Outlook
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { onMounted } from 'vue';

const vNewTab = {
  mounted(el) {
    el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'noopener noreferrer');
  }
};

export default {
  name: "NavBar",
  data() {
    return {
      dropdowns: [],
    };
  },
  async created() {
    try {
      const response = await fetch('/portalweb/header.json');
      if (!response.ok) throw new Error("No se pudo cargar header.json");
      
      const data = await response.json();
      console.log("✅ header.json cargado:", data);

      this.dropdowns = data;
    } catch (error) {
      console.error("❌ Error al cargar header.json:", error);
    }
  },
  
};
</script>

<style>
/* Estilos generales */
.logo-image {
  margin: 10px;
  height: 70px;
  object-fit: contain;
}

/* Título centrado */
.titulo {
  color: #004fb7;
  font-weight: 700;
  font-size: 20pt;
  text-transform: uppercase;
}

/* Estilos para enlaces */
.nav-link {
  color: #0197fc;
  padding: 1rem 2rem;
  position: relative;
  transition: all 0.3s ease;
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

.nav-link:hover::after {
  transform: scaleX(1);
}

/* Dropdowns */
.dropdown-menu {
  margin-top: 0;
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
  display: none;
}

.dropdown:hover .dropdown-menu {
  display: block;
}

/* Ícono de correo */
.dropdown-toggle > i {
  color: #0197fc;
  margin-left: 10px;
  margin-right: 30px;
}

.dropdown-toggle:hover > i {
  color: #003366;
}
</style>
