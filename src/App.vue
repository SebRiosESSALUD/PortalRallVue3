<script setup>
import HeaderRall from './components/HeaderRall.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
</script>

<template>
  <HeaderRall />
  <div class="container-fluid" style="margin-top: 50px;">
    <router-view></router-view>
  </div>
</template>
