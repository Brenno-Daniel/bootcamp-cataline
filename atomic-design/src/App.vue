<template>
  <div class="component">
    <HomeTamplate />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { HomeTamplate } from '@/components/templates';

export default defineComponent({
  components: { HomeTamplate },
});
</script>

<style lang="scss" scoped>
.component {
  margin: 5rem;
}
</style>
