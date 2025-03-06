<template>
  <nav class="navbar bg-light shadow-sm">
    <div class="container-fluid d-flex justify-content-between align-items-center">
      <!-- Logo y nombre -->
      <div class="d-flex align-items-center">
        <img src="/logo-main.png" alt="Logo" class="logo-image me-2">
      </div>

      <div class="titulo">
        <p>Red Asistencial La Libertad</p>
      </div>

      <!-- Opciones derecha -->
      <div class="ms-auto d-flex">
        <ul class="nav">
          <!-- Dropdowns dinámicos desde JSON -->
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
                  target="blank" 
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

          <!-- Enlaces fijos 
          <li class="nav-item">
            <router-link 
              to="/pacs" 
              class="nav-link fixed-link"
            >
              PACS
            </router-link>
          </li>
          <li class="nav-item">
            <router-link 
              to="/anexos" 
              class="nav-link fixed-link"
            >
              ANEXOS
            </router-link>
          </li>-->

          <!-- Dropdown de correos (fijo) -->
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
                  target="blank" 
                  href="https://correo.essalid.gob.pe/"
                >
                  Zymbra
                </a>
              </li>
              <li>
                <a 
                  class="dropdown-item" 
                  target="blank" 
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
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      dropdowns: [],
    };
  },
  async created() {
    try {
      const response = await fetch('/portalweb/header.json'); // ✅ Carga desde `public/`
      if (!response.ok) throw new Error("No se pudo cargar header.json");
      
      const data = await response.json();
      console.log("✅ header.json cargado:", data); // 🛠️ Debug en consola

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

.titulo {
  color: #004fb7;
  margin-left: 27%;
  font-weight: 700;
  font-size: 20pt;
  text-transform:uppercase;
}

/* Estilos para enlaces */
.nav-link {
  color: #0197fc;
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

/* Efecto hover para todos los enlaces (incluyendo fijos y dropdowns) */
.nav-link:hover,
.nav-link:focus,
.nav-link.dropdown-toggle:hover,
.nav-link.dropdown-toggle:focus {
  color: #003366 !important;
  font-size: 1.05em;
}

.nav-link:hover::after,
.nav-link:focus::after,
.dropdown-toggle:hover::after,
.dropdown-toggle:focus::after {
  transform: scaleX(1);
}

/* Estilos específicos para enlaces fijos (PACS, ANEXOS) */
.nav-link.fixed-link {
  color: #0197fc;
}

.nav-link.fixed-link:hover::after {
  background-color: #003366;
}

/* Estilos para ícono de correo */
.dropdown-toggle > i {
  color: #0197fc;
  margin-left: 10px;
  margin-right: 30px;
}

.dropdown-toggle:hover > i,
.dropdown-toggle:focus > i {
  color: #003366;
}

/* Estilos para dropdowns */
.dropdown-item {
  color: #000;
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
  color: #003366;
  font-size: 1.03em;
}

.dropdown-menu {
  margin-top: 0;
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
  display: none;
}

.dropdown:hover .dropdown-menu {
  display: block;
}
</style>