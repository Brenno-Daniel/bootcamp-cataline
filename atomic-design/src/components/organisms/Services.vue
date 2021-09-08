<template>
  <div class="services">
    <Service
      :title="'Front End'"
      :description="'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere rerum placeat id libero, expedita quibusdam qui nihil. Voluptates esse deleniti numquam. Praesentium repellat aliquam minima earum quam cupiditate corrupti natus.'"
    />

    <Service
      :title="'Back End'"
      :description="'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere rerum placeat id libero, expedita quibusdam qui nihil. Voluptates esse deleniti numquam. Praesentium repellat aliquam minima earum quam cupiditate corrupti natus.'"
    />

    <Service
      :title="'Manutenção'"
      :description="'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere rerum placeat id libero, expedita quibusdam qui nihil. Voluptates esse deleniti numquam. Praesentium repellat aliquam minima earum quam cupiditate corrupti natus.'"
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
.services {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5rem;
}
</style>
