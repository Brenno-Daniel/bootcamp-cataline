<template>
    <!-- Trabalhando com Props e estilização de componentes filhos -->
    <ButtonStyled text="Cadastro" color="primary" :user="user" />
    <ButtonStyled text="Login" color="danger" :user="user" />
    <!-- Trabalhando com Slots -->
    <ButtonStyled text="Facebook" :user="user">
        <template v-slot:before>
            <i class="fab fa-facebook-square"></i>
        </template>
        <template v-slot:after>
            <i class="fab fa-facebook"></i>
        </template>
    </ButtonStyled>
    <ButtonStyled text="Botão" @evento="action($event)" :user="user" />
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
    methods: {
        action(event: string) {
            console.log(event);
        },
    },
});
</script>

<style scoped>
.button-styled {
    position: relative;
    margin-top: 5%;
}

.fb-button-margin {
    margin-top: 10%;
}

/* v-deep adiciona uma estilização profunda para um componente */
::v-deep.button-styled span {
    color: #000;
}
</style>
