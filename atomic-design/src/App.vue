<template>
  <div class="component">
    <Container>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, ipsam
        quaerat illum aspernatur sit quas distinctio iste enim, et vel amet modi
        delectus in error, tenetur cum ut veritatis deserunt.
      </p>
    </Container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Container } from '@/components/bosons';

export default defineComponent({
  components: { Container },
});
</script>

<style lang="scss" scoped>
.component {
  margin: 5rem;
}
</style>
