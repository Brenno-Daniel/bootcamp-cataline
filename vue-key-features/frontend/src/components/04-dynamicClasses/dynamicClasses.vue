<template>
    <!-- Classes dinâmicas -->
    <!-- Sintaxe de Objeto -->
    <!-- quando a classe tem só uma palavra podemos deixá-la sem aspas simples, no exemplo abaixo o active: isActive ao invés de 'active': isActive -->
    <h3 class="static" :class="{ active: isActive, 'text-danger': hasError }">Sintaxe de Objeto</h3>
    <!-- Sintaxe de Array -->
    <!-- com a sintaxe de Array podemos uma lista de classes, inclusive podemos utilizar Sintaxe de Objeto -->
    <h3 :class="['static', { 'text-danger': hasError }, className]">Sintaxe de Array</h3>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            isActive: true,
            hasError: true,
            className: 'brenno-souza',
        };
    },
});
</script>
