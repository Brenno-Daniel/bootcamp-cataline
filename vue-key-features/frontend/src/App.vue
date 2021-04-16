<template>
    <ButtonStyled text="Cadastro" color="primary" :user="user" />
    <ButtonStyled text="Login" color="danger" :user="user" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ButtonStyled from '@/components/05-componentization/ButtonStyled.vue';

export default defineComponent({
    components: { ButtonStyled },
    data() {
        return {
            user: {
                id: 1,
                name: 'Brenno',
            },
        };
    },
});
</script>

<style scoped>
.button-styled {
    position: relative;
    margin-top: 5%;
}
/* v-deep adiciona uma estilização profunda para um componente */
::v-deep.button-styled span {
    color: #000;
}
</style>
