<template>
  <div class="page-slider">
    <p v-for="page in $book.pages" :key="page.id">Book pages</p>
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
.page-slider {
  border: 1px dotted black;
  height: 600px;
}
</style>
