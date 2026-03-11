<script setup>
import Navbar from "./components/Navbar.vue"
</script>

<template>

<Navbar/>

<div class="page">
  <router-view/>
</div>

</template>

<style>

.page{
  margin-top:80px;
  padding:40px;
}

</style>