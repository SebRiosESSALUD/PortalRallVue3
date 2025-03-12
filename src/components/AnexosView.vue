<template>
  <div class="container-fluid anexos-container mt-4">
    <div class="row justify-content-center">
      <div class="col-lg-10 col-md-12 hospital-list">
        <h3 class="text-center">Red Asistencial La Libertad</h3>
        <ul class="list-group custom-list">
          <li
            v-for="hospital in hospitales"
            :key="hospital.id"
            class="list-group-item list-group-item-action"
            :class="{ active: hospital.expanded }"
            @click="selectHospital(hospital)"
          >
            <div class="d-flex justify-content-between align-items-center">
              <span class="hospital-name">
                {{ hospital.nombre }}
              </span>
              <span>
                {{ hospital.expanded ? "▲" : "▼" }}
              </span>
            </div>

            <!-- Contenido desplegable -->
            <transition name="fade">
              <ul v-if="hospital.expanded" class="list-group mt-2 hospital-content">
                <!-- Coordinadores -->
                <li v-for="(coordinador, index) in hospital.coordinadores" :key="index" class="list-group-item">
                  <strong>{{ coordinador.cargo }}</strong> - Celular: {{ coordinador.celular }}
                </li>
                <li v-for="(coordinador, index) in hospital.coordinadores" :key="'anexo-' + index" class="list-group-item">
                  <strong>{{ coordinador.cargo }}</strong> - Anexo: {{ coordinador.numero }}
                </li>

                <!-- Anexos -->
                <li v-for="anexo in hospital.anexos" :key="anexo.numero" class="list-group-item">
                  <strong>{{ anexo.descripcion }}</strong> - Anexo: {{ anexo.numero }}
                </li>
              </ul>
            </transition>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    const hospitales = ref([]);

    // Función para obtener el JSON desde public/
    const fetchData = async () => {
      try {
        const response = await fetch('/portalweb/anexos.json');

        if (!response.ok) {
          throw new Error(`Error HTTP! Status: ${response.status}`);
        }

        const data = await response.json();

        if (!data.hospitales || !Array.isArray(data.hospitales)) {
          throw new Error("El JSON no contiene un array de 'hospitales'.");
        }

        // Se asignan los datos directamente sin modificaciones
        hospitales.value = data.hospitales;

        console.log("✅ anexos.json cargado correctamente:", hospitales.value);

      } catch (error) {
        console.error("❌ Error al cargar anexos.json:", error);
      }
    };

    // Método para manejar la apertura del acordeón
    const selectHospital = (hospital) => {
      hospital.expanded = !hospital.expanded;
    };

    onMounted(fetchData);

    return {
      hospitales,
      selectHospital,
    };
  },
};
</script>


  
<style scoped>
/* Estilos generales */
.anexos-container {
  background-color: #e3f2fd;
  padding: 20px;
  border-radius: 10px;
}

/* Estilos de la lista de hospitales */
.custom-list {
  max-height: 80vh; /* Limita la altura sin forzar scroll innecesario */
  overflow-y: auto; /* Agrega barra de desplazamiento solo cuando es necesario */
  border-radius: 10px;
  background: white;
  padding: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

/* Hospital expandido */
.list-group-item.active {
  background-color: #007bff !important;
  color: white !important;
  border-left: 5px solid #0056b3;
}

/* Estilos de los elementos dentro de cada hospital */
.hospital-content {
  background: #f8f9fa;
  border-radius: 5px;
  padding: 5px;
}

/* Mejora la visibilidad del nombre del hospital */
.hospital-name {
  font-weight: bold;
  font-size: 1.1rem;
}

/* Mejoras para dispositivos móviles */
@media (max-width: 768px) {
  .custom-list {
    max-height: 70vh;
  }
  .hospital-name {
    font-size: 1rem;
  }
}
</style>