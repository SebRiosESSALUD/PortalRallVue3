<script setup>
import HeaderRall from './components/HeaderRall.vue';
import FooterRall from './components/FooterRall.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
</script>

<template>

<header>
  <HeaderRall/>
</header>

<body class="cuerpoPrincipal">
  <router-view></router-view>
</body>

<footer>
  <FooterRall/>
</footer>
</template>

<style lang="scss">
@import './assets/css/app.css';
</style>
