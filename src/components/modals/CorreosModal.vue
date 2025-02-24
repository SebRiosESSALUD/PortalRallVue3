<template>
    <div v-if="show" class="modal fade show d-block" tabindex="-1">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-body" id="modalesPrincipales">
            <!-- Contenido del modal de transparencia -->
            <!-- Fila superior recursos humanos -->
            <div class="row" id="filaFormatos">

            <h5>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
</svg>
                Correos
            </h5>
            <hr>

            <div class="col">
                <a id="enlaceModalFormatos"  target="_blank" href="https://go.microsoft.com/fwlink/p/?linkid=2125442&clcid=0x40A&culture=es-es&country=es">
                Outlook
                </a>
            </div>

            <div class="col">
                <a id="enlaceModalFormatos" target="_blank" href="https://correo.essalud.gob.pe/">Correo Essalud</a>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted, onUnmounted } from 'vue';
  
  defineProps({
    show: Boolean
  });
  
  const emit = defineEmits(['close']);
  
  // Función para cerrar el modal al hacer clic fuera
  const handleOutsideClick = (event) => {
    if (event.target.classList.contains('modal')) {
      emit('close');
    }
  };
  
  // Función para cerrar el modal al presionar la tecla Escape
  const handleEscapeKey = (event) => {
    if (event.key === 'Escape') {
      emit('close');
    }
  };
  
  onMounted(() => {
    document.addEventListener('click', handleOutsideClick);
    document.addEventListener('keydown', handleEscapeKey);
  });
  
  onUnmounted(() => {
    document.removeEventListener('click', handleOutsideClick);
    document.removeEventListener('keydown', handleEscapeKey);
  });
  </script>
  
  <style>
  .modal.show {
    background-color: rgba(0, 0, 0, 0.5);
  }
  
  .list-group {
    max-height: 400px;
    overflow-y: auto;
  }
  
  #filaFormatos {
    margin: 20px;
  }
  
  #enlaceModalFormatos {
    color: black;
    text-decoration: none;
    transition: color 0.3s ease,  0.3s ease;
  }
  
  #enlaceModalFormatos:hover {
    color: blue;
    font-size: 110%;
  }
  
  </style>