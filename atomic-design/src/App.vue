<template>
  <div class="component">
    <Service
      :title="'Front-end'"
      :description="'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque obcaecati laboriosam ex nihil tenetur maxime! Veniam, voluptatum quos. Eius cum molestias, id tenetur hic mollitia dicta enim dignissimos tempore laudantium!'"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Service } from '@/components/molecules';

export default defineComponent({
  components: { Service },
});
</script>

<style lang="scss" scoped>
.component {
  margin: 5rem;
}
</style>
