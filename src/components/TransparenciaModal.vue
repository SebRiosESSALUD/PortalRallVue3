<template>
  <div v-if="show" class="modal fade show d-block" tabindex="-1">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-body" id="modalesPrincipales">
          <!-- Contenido del modal de transparencia -->

            <!-- Fila superior soporte informatico -->
          <div class="row" id="filaFormatos">
            <div class="col">
              <a id="enlaceModalFormatos" href="">Consulta de Correos Essalud</a>
            </div>
            <div class="col">
              <a id="enlaceModalFormatos" href="">Directorio RPM</a>
            </div>
            <div class="col">
              <a id="enlaceModalFormatos" href="">Directorio - Sede Central</a>
            </div>
            <div class="col">
              <a id="enlaceModalFormatos" href="">Comprendio de Directivas</a>
            </div>
          </div>

          <!-- Fila ingerior soporte informatico -->
          <div class="row" id="filaFormatos">
            <hr>
            <div class="col">
              <a id="enlaceModalFormatos" href="">Busque sus equipos asignados</a>
            </div>
            <div class="col">
              <a id="enlaceModalFormatos" href="">Directorio de anexos institucionales</a>
            </div>
            <div class="col">
              <a id="enlaceModalFormatos" href="">Directorio - Redes Asistenciales</a>
            </div>
            <div class="col">
              <a id="enlaceModalFormatos" href="">Resoluciones</a>
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