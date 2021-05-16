<template>
    <h3>Selecione a aula:</h3>
    <ul>
        <li @click="currentViewPage = 'Home'">Home</li>
        <li @click="currentViewPage = 'About'">About</li>
        <li @click="currentViewPage = 'Contact'">Contact</li>
        <li @click="currentView = 'Componentization'">Aula 5</li>
        <li @click="currentView = 'Transition'">Aula 6</li>
        <li @click="currentView = 'TransitionMode'">Aula 6 - Transition Mode</li>
    </ul>

    <transition enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut" mode="out-in">
        <component :is="currentViewPage" />
    </transition>
    <transition enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut">
        <component :is="currentView" />
    </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import 'animate.css';

import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import Contact from '@/pages/Contact.vue';
import Componentization from '@/components/05-componentization/Componentization.vue';
import Transition from '@/components/06-Transitions/Transition.vue';
import TransitionMode from '@/components/06-Transitions/TransitionMode.vue';

export default defineComponent({
    components: { Home, About, Contact, Componentization, Transition, TransitionMode },
    data() {
        return {
            currentViewPage: 'Home',
            currentView: '',
        };
    },
});
</script>

<style scoped></style>
