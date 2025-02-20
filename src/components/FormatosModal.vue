<template>
  <div v-if="show" class="modal fade show d-block" tabindex="-1">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-body" id="modalesPrincipales">
          <!-- Contenido del modal de transparencia -->
          <!-- Fila superior recursos humanos -->
          <div class="row" id="filaFormatos">
            <h5 style="color: #454545;"> 
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
              </svg> Recursos Humanos
            </h5>
            <hr>
            <div class="col">
              <a id="enlaceModalFormatos" href="">Formato convenios y vacaciones</a>
            </div>
            <div class="col">
                <router-link id="enlaceModalFormatos" to="/papeletas">Formato Papeletas</router-link> 
            </div>
          </div>

          <!-- Fila ingerior soporte informatico -->
          <div class="row" id="filaFormatos">
            <h5 style="color: #454545;">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16">
                <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5"/>
              </svg>
              Soporte Informático - Formatos
            </h5>
            <hr>
            <div class="col">
              <a id="enlaceModalFormatos" href="">Formato VPN</a>
            </div>
            <div class="col">
              <a id="enlaceModalFormatos" href="">Formatos SIAD</a>
            </div>
            <div class="col">
              <a id="enlaceModalFormatos" href="">Formato para acceso a internet</a>
            </div>
            <div class="col">
              <a id="enlaceModalFormatos" href="">Capacitación</a>
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