<template>
  <div class="vertical-slider-pages">
    <p v-for="page in $book.pages" :key="page.id">{{ page.id }}</p>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { books } from '@/store'

export default Vue.extend({
  computed: {
    $book() {
      return books.$single
    },
  },
})
</script>
<style scoped>
.vertical-slider-pages {
  border: 1px dotted black;
  height: 600px;
}
</style>
