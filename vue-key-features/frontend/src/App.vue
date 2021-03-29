<template>
  <div>
    <!-- diretiva v-bind (mais usada somente com o :) -->
    <a :href="product.url" :class="productClass">
      {{ product.name }}
    </a>

    <!-- v-text -->
    <!-- com interpolação conseguimos misturar o que vem la do Javascript com o HTML -->
    <p>{{ company }} é uma empresa legal</p>
    <!-- com o v-text o dado que escolhemos fazer a interpolação sobrescreve o conteúdo da tag -->
    <p v-text="company"></p>
    <!-- <p v-text="company"> é uma empresa legal</p> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      product: {
        name: 'Camisa',
        url: 'http://loja.com/product/123456',
        stock: false
      },
      company: 'Cataline'
    }
  },
  computed: {
    productClass(): string {
      return this.product.stock ? 'sucess' : 'danger'
    }
  }
})
</script>

<style scoped>
.sucess {
  background-color: green;
  color: white;
}

.danger {
  background-color: red;
  color: white;
}
</style>