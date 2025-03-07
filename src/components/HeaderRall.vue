<template>
  <nav class="navbar bg-light shadow-sm">
    <div class="container-fluid d-flex justify-content-between align-items-center">
      <!-- Logo y nombre -->
      <div class="d-flex align-items-center logo-container">
        <img 
          src="/logo-main.png" 
          alt="Logo" 
          class="logo-image me-2"
        >
      </div>

      <div class="titulo">
        <p>Red Asistencial La Libertad</p>
      </div>

      <!-- Opciones derecha -->
      <div class="ms-auto d-flex">
        <ul class="nav">
          <!-- Dropdowns dinámicos desde JSON -->
          <li 
            v-for="dropdown in dropdowns" 
            :key="dropdown.label" 
            class="nav-item dropdown"
            @mouseenter="toggleDropdown(dropdown, true)"
            @mouseleave="toggleDropdown(dropdown, false)"
          >
            <a 
              class="nav-link dropdown-toggle" 
              href="#" 
              role="button"
            >
              {{ dropdown.label }}
            </a>
            <ul 
              class="dropdown-menu" 
              :class="{ 'show': dropdown.active }"
            >
              <li 
                v-for="item in dropdown.items" 
                :key="item.href"
              >
                <!-- Renderiza items con href válidos -->
                <a 
            
                  class="dropdown-item" 
                  :href="item.href" 
                  target="_blank"
                >
                  {{ item.label }}
                </a>

          
                
                <!-- Renderiza items sin href como texto estático -->
                <span 
                  class="dropdown-item disabled"
                  style="cursor: default; color: #6c757d;"
                >
                  {{ item.label }}
                </span>
              </li>
            </ul>
          </li>

          <!-- Dropdown de correos (fijo) -->
          <li class="nav-item dropdown">
            <a 
              class="nav-link dropdown-toggle" 
              href="#" 
              role="button" 
              @mouseenter="correoActive = true"
              @mouseleave="correoActive = false"
            >
              <i class="bi bi-envelope-at-fill"></i>
            </a>
            <ul 
              class="dropdown-menu" 
              :class="{ 'show': correoActive }"
            >
              <!-- Items de correo -->
              <li>
                <a 
                  class="dropdown-item" 
                  href="https://correo.essalud.gob.pe/" 
                  target="_blank"
                >
                  Zymbra
                </a>
              </li>
              <li>
                <a 
                  class="dropdown-item" 
                  href="https://go.microsoft.com/fwlink/p/?linkid=2125442" 
                  target="_blank"
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
  name: "HeaderRall",
  data() {
    return {
      dropdowns: [],
      correoActive: false
    };
  },
  async created() {
    try {
      const response = await fetch("/header.json");
      if (!response.ok) throw new Error("No se pudo cargar header.json");
      
      const data = await response.json();
      this.dropdowns = data.map(d => ({ ...d, active: false }));
      console.log("Datos cargados:", this.dropdowns);
    } catch (error) {
      console.error("Error al cargar header.json:", error);
    }
  },
  methods: {
    toggleDropdown(dropdown, show) {
      dropdown.active = show;
    }
  }
};
</script>

<style scoped>
/* Corrección del CSS para dropdowns */
.dropdown-menu {
  margin-top: 0;
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
  display: none;
  min-width: 160px;
}

.dropdown-menu.show {
  display: block;
}

/* Estilos del logo */
.logo-container {
  padding: 0.5rem;
}

.logo-image {
  height: 40px;
  max-width: 100%;
  object-fit: contain;
  margin-right: 1rem;
}

/* Estilos del título */
.titulo {
  color: #004fb7;
  margin-left: auto;
  font-weight: 700;
  font-size: 18pt;
  text-transform: uppercase;
  white-space: nowrap;
  padding: 0 1rem;
}

/* Estilos de navegación */
.navbar {
  min-height: 65px;
}

.nav-link {
  color: #0197fc;
  padding: 1rem 1.5rem;
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

/* Efecto hover */
.nav-link:hover,
.nav-link:focus,
.nav-link.dropdown-toggle:hover,
.nav-link.dropdown-toggle:focus {
  color: #003366;
  font-size: 1.05em;
}

.nav-link:hover::after,
.nav-link:focus::after,
.dropdown-toggle:hover::after,
.dropdown-toggle:focus::after {
  transform: scaleX(1);
}

/* Estilos dropdown */
.dropdown-item {
  color: #000;
  padding: 0.5rem 1.5rem;
}

.dropdown-item:hover {
  color: #003366;
  font-size: 1.03em;
}

/* Ícono de correo */
.dropdown-toggle > i {
  color: #0197fc;
  font-size: 1.2em;
  transition: color 0.3s ease;
}

.dropdown:hover > .dropdown-toggle > i {
  color: #003366;
}
</style>