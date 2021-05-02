<template>
    <!-- Construindo diretiva personalizada -->
    <!-- Arquivos de diretiva personalizada: src/directives/ -->
    <h1 v-highlight:background.shadow="'blue'">Diretiva Personalizada</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style scoped>
h1 {
    color: white;
}
</style>
