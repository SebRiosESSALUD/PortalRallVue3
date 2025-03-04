<template>

  <!--Div para contener el titulo h3 con nombre de clase 'title-PACS'
  <div class="title-PACS">
    <h3>Sistema Computarizado para el Archivado Digital de Imágenes Médicas (PACS)</h3>
  </div>-->

  <div id="map-container">
    <div class="map-wrapper">
      <svg
        id="mapa-peru"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-20 0 600 800" 
        preserveAspectRatio="xMidYMid meet"
        @mousemove="updateTooltipPosition"
        @mouseleave="hideTooltip"
      > <!-- Cambios en ViewBox: origen eje x, origen eje y, ancho, alto -->
        <!-- Dibujar las provincias desde el JSON -->
        <path
          v-for="province in provinces"
          :key="province['@id']"
          :d="province['@d']"
          :title="province['@name']"
          @mouseover="handleHover(province)"
          @mouseleave="resetHover"
          @click="handleClick(province)"  
          :style="{ fill: hoveredProvince === province['@id'] ? '#87CEEB' : '#d3d3d3', stroke: '#28586c', strokeWidth: 1 }"
        />
      </svg>

      <!-- Tooltip para mostrar información de la provincia -->
      <div
        v-if="tooltipVisible"
        :style="tooltipStyles"
        class="tooltip"
      >
        <strong>{{ tooltipData.name }}</strong><br />
        <!--ID: {{ tooltipData.id }}-->
      </div>
    </div>

    <!-- Lista de PACs dinámica -->
    <div class="pac-list">
      <h3>PACS en {{ selectedRegion ? selectedRegion : 'Perú' }}</h3>
      <ul>
        <li
          v-for="pac in pacsToShow"
          :key="pac.id"
          @click="redirectTo(pac.url)"  
          style="cursor: pointer;"
        >
          {{ pac.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

import provincesData from '../assets/peru-provinces-converted.json';

// Variables reactivas
const provinces = ref(provincesData); // Datos de las provincias
const hoveredProvince = ref(null); // Provincia sobre la que se hace hover
const tooltipVisible = ref(false); // Mostrar u ocultar el tooltip
const tooltipData = ref({ name: '', id: '' }); // Datos mostrados en el tooltip

const tooltipStyles = ref({
  position: 'absolute',
  top: '0px',
  left: '0px',
  backgroundColor: '#fff',
  border: '1px solid #ccc',
  padding: '5px',
  borderRadius: '5px',
  pointerEvents: 'none',
  zIndex: 10,
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Funciones para interactuar con el json de PACs

// Variables reactivas
const selectedRegion = ref("La Libertad"); // Se inicia en "La Libertad"
const pacsData = ref([]); // Datos de las regiones desde el JSON

// Cargar datos desde JSON cuando el componente se monte
onMounted(async () => {
  try {
    const response = await fetch('/src/assets/pacs.json'); // Ruta del JSON
    const data = await response.json();
    pacsData.value = data.regiones; // Guardamos el array de regiones

    // Verificar si "La Libertad" existe y establecerla como la región por defecto
    const region = pacsData.value.find(region => region.nombre === "La Libertad");
    if (region) {
      selectedRegion.value = region.nombre; // Asignar "La Libertad" como región inicial
    }
  } catch (error) {
    console.error('Error cargando los datos de PACs:', error);
  }
});

// Computed property para obtener la lista de hospitales de la región seleccionada
const pacsToShow = computed(() => {
  const region = pacsData.value.find(region => region.nombre === selectedRegion.value);
  return region ? region.hospitals : [];
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Métodos
const handleHover = (province) => {
  hoveredProvince.value = province['@id']; // Cambiar color al hacer hover
  tooltipData.value = { name: province['@name'], id: province['@id'] }; // Mostrar tooltip
  tooltipVisible.value = true;
};

const resetHover = () => {
  hoveredProvince.value = null; // Resetear color al salir del hover
  tooltipVisible.value = false; // Ocultar tooltip
};

const handleClick = (province) => {
  selectedRegion.value = province['@name']; // Cambiar la región seleccionada
};

const updateTooltipPosition = (event) => {
  // Actualizar posición del tooltip
  tooltipStyles.value.top = `${event.pageY + 10}px`;
  tooltipStyles.value.left = `${event.pageX + 10}px`;
};

const hideTooltip = () => {
  tooltipVisible.value = false; // Ocultar el tooltip si el mouse sale del SVG
};

const redirectTo = (url) => {
  window.open(url, '_blank'); // Abrir el enlace en una nueva pestaña
};
</script>


<style scoped>

.title-PACS {
  width: 50%;  /* Tamaño del mapa */
  padding: 20px;
  border: 1px solid #ccc;
  box-shadow: 0 4px 8px rgba(23, 238, 4, 0.1);
  background-color: rgb(255, 255, 255);

  border-radius: 5px;
  font-family: Arial;
}

/*abarca al mapa y al contenedor de lista de PACS*/
#map-container {
  display: flex;
  justify-content: center;
  gap: 50px; /* Espacio entre el mapa y la lista */
  align-items: flex-start;
  height: 75vh;

  overflow: visible; /* Asegura que el tooltip sea visible */
  position: relative; /* Necesario para posicionar correctamente elementos hijos absolutos */
  
}

.map-wrapper {
  width: calc(30% - 45px);  /* Ajusta espacio extra estaba en 70 o 60*/
  padding: 5px;
  border: 1px solid #ccc;
  box-shadow: 0 4px 8px rgba(23, 238, 4, 0.1);
  border-radius: 10px; /* bordes */
  background-color: rgb(255, 255, 255); /* color de fondo */
  position: flex;/* posicion de las letras */ 
  /*display: flex;*/
  font-family: Arial;

}

.pac-list {
  width: 30%;  /* Tamaño de la lista de PACs */
  padding: 20px;
  background-color: white;
  border: 1px solid #ccc;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  font-family: Arial;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 10px;
  margin: 5px 0;
  background-color: #f9f9f9;
  cursor: pointer;
}

/*Fondo de sombreado de listado de PACS*/ 
li:hover {
  background-color: #87CEEB;
}

svg {
  width: 100%;  /* Escalar el SVG */
  height: auto;
}

path:hover {
  cursor: pointer;
}

.tooltip {
  background-color: white;
  border: 1px solid gray;
  padding: 5px;
  position: absolute; /* Para permitir posicionamiento dinámico */
  pointer-events: none; /* Evita interferencias en eventos */
  z-index: 9999; /* Asegura que esté encima de todo */
  border-radius: 4px; /* Bordes redondeados */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Agrega un efecto de sombra */
}

</style>
