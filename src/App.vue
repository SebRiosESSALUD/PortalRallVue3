<script setup>
import HeaderRall from './components/HeaderRall.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
</script>

<template>
  <HeaderRall />
  <div class="container mt-4">
    <router-view> </router-view>
  </div>
</template>
