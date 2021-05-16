<template>
    <button @click="filterAZ">Filtro A-Z</button>
    <button @click="filterZA">Filtro Z-A</button>

    <transition-group enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut" :appear="true" mode="out-in">
        <li v-for="user in users" :key="user">
            {{ user }}
        </li>
    </transition-group>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import 'animate.css';

export default defineComponent({
    data() {
        return {
            users: ['Daniel', 'Alex', 'Brenno', 'Tales', 'Souza'],
        };
    },
    methods: {
        filterAZ() {
            this.users.sort();
        },
        filterZA() {
            this.users.sort().reverse();
        },
    },
});
</script>

<style>
.v-move {
    transition: all 0.5s;
}
</style>
