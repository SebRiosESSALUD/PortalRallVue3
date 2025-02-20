<script setup>
import HeaderRall from './components/HeaderRall.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
</script>

<template>
  <HeaderRall />
  <div class="container-fluid bg-primary p-2 text-dark bg-opacity-10" style="margin-top: 50px;">
    <router-view></router-view>
  </div>
</template>
