<template>
    <button @click="show = !show">Toggle</button>

    <h3>Transition Mode (out-in)</h3>
    <transition enter-active-class="animate__animated animate__bounceIn" leave-active-class="animate__animated animate__bounceOut" :appear="true" mode="out-in">
        <h1 v-if="show">Front-end</h1>
        <h1 v-else>Back-end</h1>
    </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import 'animate.css';

export default defineComponent({
    data() {
        return {
            show: true,
        };
    },
});
</script>
