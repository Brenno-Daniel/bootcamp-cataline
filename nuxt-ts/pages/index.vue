<template>
  <ul>
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/sobre">Sobre</NuxtLink>
    <NuxtLink to="/cataline">cataline</NuxtLink>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style>
a.nuxt-link-exact-active {
  font-weight: bold;
}
</style>
