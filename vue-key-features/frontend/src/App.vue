<template>
    <!-- Trabalhando com Props e estilização de componentes filhos -->
    <h3>Trabalhando com Props e estilização de componentes filhos:</h3>
    <ButtonStyled text="Cadastro" color="primary" :user="user" />
    <ButtonStyled text="Login" color="danger" :user="user" />
    <!-- Trabalhando com Props e estilização de componentes filhos -->
    <hr />
    <!-- Trabalhando com Slots -->
    <h3>Trabalhando com Slots:</h3>
    <ButtonStyled text="Facebook" :user="user">
        <template v-slot:before>
            <i class="fab fa-facebook-square"></i>
        </template>
        <template v-slot:after>
            <i class="fab fa-facebook"></i>
        </template>
    </ButtonStyled>
    <!-- Trabalhando com Slots -->
    <hr />
    <!-- Trabalhando com Events -->
    <h3>Trabalhando com Events:</h3>
    <ButtonStyled text="Botão" @evento="action($event)" :user="user" />
    <!-- Trabalhando com Events -->
    <hr />
    <!-- Trabalhando com Dynamic Componentes [Componentes Dinâmicos] -->
    <h3>Componentes dinamicos:</h3>
    <ul>
        <li @click="currentView = 'Home'">Home</li>
        <li @click="currentView = 'About'">Sobre</li>
        <li @click="currentView = 'Contact'">Contato</li>
    </ul>
    <component :is="currentView" />
    <!-- Trabalhando com Dynamic Componentes [Componentes Dinâmicos] -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import ButtonStyled from '@/components/05-componentization/ButtonStyled.vue';
import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import Contact from '@/pages/Contact.vue';

export default defineComponent({
    components: { ButtonStyled, Home, About, Contact },
    data() {
        return {
            user: {
                id: 1,
                name: 'Brenno',
            },
            currentView: 'Home',
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

/* v-deep adiciona uma estilização profunda para um componente */
::v-deep.button-styled span {
    color: #000;
}
</style>
