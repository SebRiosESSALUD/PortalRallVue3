<template>
  <div class="container-fluid anexos-container mt-4 full-height">
    <div class="row">
      <!-- Lista de hospitales con acordeón de anexos -->
      <div class="col-md-12 hospital-list">
        <h3>Hospitales en La Libertad</h3>
        <ul class="list-group">
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

            <!-- Acordeón de anexos -->
            <transition name="fade">
              <ul v-if="hospital.expanded" class="list-group mt-2">
                <li v-for="anexo in hospital.anexos" :key="anexo.numero" class="list-group-item">
                  {{ anexo.numero }} - {{ anexo.descripcion }}
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

        hospitales.value = data.hospitales; // Asignamos los hospitales correctamente
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


.list-group-item {
  cursor: pointer; /* Hace que el cursor cambie al hacer hover */
  font-weight: bold;
}

.list-group-item.active {
  background-color: #e9ecef !important; /* Color de fondo más claro */
  font-weight: bold; /* Resalta el texto */
  color: #333 !important; /* Mantiene el color original del texto */

  border-color: #007bff; /* Color diferente cuando está expandido */
  background-color: #f8f9fa; /* Color de fondo si deseas resaltarlo */
}


</style>
  