<!-- ModalBase.vue -->
<template>
  <div v-if="show" class="modal fade show d-block" tabindex="-1">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-body">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';

defineProps({
  show: Boolean,
  title: String
});

const emit = defineEmits(['close']);

const handleOutsideClick = (event) => {
  if (event.target.classList.contains('modal')) {
    emit('close');
  }
};

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
</style>