<template>
    <ButtonStyled />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ButtonStyled from '@/components/05-componentization/ButtonStyled.vue';

export default defineComponent({
    components: { ButtonStyled },
});
</script>

<style scoped></style>
