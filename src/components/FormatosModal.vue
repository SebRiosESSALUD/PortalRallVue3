<template>
    <div v-if="show" class="modal fade show d-block" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Formatos</h5>
            <button type="button" class="btn-close" @click="$emit('close')"></button>
          </div>
          <div class="modal-body">
            <!-- Contenido del modal -->
            <p>Contenido de formatos...</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    show: Boolean
  });
  </script>
  
  <style>
  .modal.show {
    background-color: rgba(0, 0, 0, 0.5);
  }
  </style>
  