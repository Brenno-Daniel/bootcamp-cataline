<template>
  <div>
    <h1>{{ $route.params.id }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'website',
})
</script>

<style scoped></style>
