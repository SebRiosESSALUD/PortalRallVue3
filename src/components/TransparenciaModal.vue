<template>
    <div v-if="show" class="modal fade show d-block" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Transparencia</h5>
            <button type="button" class="btn-close" @click="$emit('close')"></button>
          </div>
          <div class="modal-body">
            <!-- Contenido del modal de transparencia -->
            <p>Contenido de transparencia...</p>
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
  