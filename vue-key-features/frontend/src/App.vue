<template>
    <h3>Selecione a aula:</h3>
    <ul>
        <li @click="currentView = 'Home'">Home</li>
        <li @click="currentView = 'Componentization'">Aula 5</li>
        <li @click="currentView = 'Transition'">Aula 6</li>
    </ul>

    <transition enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut">
        <component :is="currentView" />
    </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import 'animate.css';

import Home from '@/pages/Home.vue';
import Componentization from '@/components/05-componentization/Componentization.vue';
import Transition from '@/components/06-Transitions/Transition.vue';

export default defineComponent({
    components: { Home, Componentization, Transition },
    data() {
        return {
            currentView: 'Home',
        };
    },
});
</script>

<style scoped></style>
