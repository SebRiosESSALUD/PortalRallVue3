<template>
    <footer class="footer">
      <div class="container text-center">
        <p>
          Consultas al <strong>949 437 541</strong>. Provincias a EsSalud en Línea de la Red de su región
          <a href="#" class="text-link" @click.prevent="openModal">CLICK AQUÍ</a>
        </p>
      </div>
  
      <!-- Modal de Centrales Telefónicas -->
      <div v-if="showModal" class="modal-overlay" @click="closeModal">
        <div class="modal-content" @click.stop>
          <h3>CENTRALES TELEFÓNICAS</h3>
          <table class="table table-striped">
            <thead class="table-primary">
              <tr>
                <th>Red Asistencial</th>
                <th>Central Telefónica</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(central, index) in centralesTelefonicas" :key="index">
                <td>{{ central.region }}</td>
                <td>
                  <i class="bi bi-telephone-fill text-primary"></i> {{ central.numero }}
                </td>
              </tr>
            </tbody>
          </table>
          <button @click="closeModal" class="btn btn-primary">Cerrar</button>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  import { ref, onMounted } from "vue";
  
  export default {
    setup() {
      const centralesTelefonicas = ref([]);
      const showModal = ref(false);
  
      // Función para obtener el JSON desde public/
      const fetchData = async () => {
        try {
          const response = await fetch('/portalweb/centrales.json');
  
          if (!response.ok) {
            throw new Error(`Error HTTP! Status: ${response.status}`);
          }
  
          const data = await response.json();
  
          if (!data.centrales || !Array.isArray(data.centrales)) {
            throw new Error("El JSON no contiene un array de 'centrales'.");
          }
  
          // Se asignan los datos directamente sin modificaciones
          centralesTelefonicas.value = data.centrales;
  
          console.log("✅ centrales.json cargado correctamente:", centralesTelefonicas.value);
        } catch (error) {
          console.error("❌ Error al cargar centrales.json:", error);
        }
      };
  
      // Método para abrir el modal
      const openModal = () => {
        showModal.value = true;
      };
  
      // Método para cerrar el modal
      const closeModal = () => {
        showModal.value = false;
      };
  
      onMounted(fetchData);
  
      return {
        centralesTelefonicas,
        showModal,
        openModal,
        closeModal,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Estilos del Footer */
  .footer {
    background-color: #007bff;
    color: white;
    text-align: center;
    padding: 15px;
    font-size: 14px;
    position: fixed;
    bottom: 0;
    width: 100%;
    box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.2);
  }
  
  .text-link {
    color: yellow;
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }
  
  /* Modal */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 10px;
    width: 90%;
    max-width: 500px;
    text-align: center;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  }
  
  .modal-content h3 {
    color: #007bff;
    margin-bottom: 15px;
  }
  
  /* Botón Cerrar */
  .btn-primary {
    margin-top: 10px;
  }
  
  /* Responsividad */
  @media (max-width: 600px) {
    .modal-content {
      width: 95%;
    }
  
    th, td {
      font-size: 12px;
    }
  }
  </style>
  