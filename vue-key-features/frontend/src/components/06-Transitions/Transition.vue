<template>
    <!-- Aula 6 - Transições -->
    <!-- Trabalhando com Transition -->
    <h3>Trabalhando com Transition:</h3>
    <button @click="show = !show">Toggle</button>

    <transition name="fade-slow">
        <h1 v-if="show">Cataline</h1>
    </transition>

    <transition name="fade-fast">
        <h1 v-show="show">Cataline</h1>
    </transition>
    <!-- Trabalhando com Transition -->
    <!-- Trabalhando com Custom -->
    <!-- Como adicionar nome de classes personalizadas -->
    <transition enter-active-class="entrada" leave-active-class="saida">
        <h1 v-show="show">Cataline</h1>
    </transition>
    <!-- Utilizando biblioteca css Animate.css -->
    <transition enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut">
        <h1 v-show="show">Cataline</h1>
    </transition>
    <!-- Trabalhando com Custom -->
    <!-- Trabalhando com Hooks -->
    <!-- <transition ...
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @enter-cancelled="enterCancelled"
        @before-leave="beforeLeave"
        @leave="leave"
        @after-leave="afterLeave"
        @leave-cancelled="leaveCancelled"
        :css="false"
    > -->
    <transition enter-active-class="animate__animated animate__slideInLeft" leave-active-class="animate__animated animate__slideOutLeft" @after-enter="afterEnter">
        <h1 v-show="show">Cataline</h1>
    </transition>
    <!-- Trabalhando com Hooks -->
    <!-- Trabalhando com Appear -->
    <!-- Ao adicionar o appear ao carregar a página o conteúdo é renderizado com a animação -->
    <transition enter-active-class="animate__animated animate__slideInLeft" leave-active-class="animate__animated animate__slideOutLeft" appear>
        <h1 v-if="!show">Cataline</h1>
    </transition>
    <!-- Trabalhando com Appear -->
    <!-- Aula 6 - Transições -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import 'animate.css';

export default defineComponent({
    data() {
        return {
            show: false,
        };
    },
    methods: {
        afterEnter(element: HTMLElement) {
            element.classList.add('test');
        },
    },
});
</script>

<style scoped>
/* 
Aula 6 - Transições - Trabalhando com Transition:

v-enter-from (de onde estar vindo)
v-enter-active (como vai acontecer)
v-enter-to (para onde está indo)

v-leave-from (de onde estar vindo)
v-leave-active (como vai acontecer)
v-leave-to (para onde está indo)

O nome inicial `v` depende do atributo `name`
*/
.fade-fast-enter-from,
.fade-fast-leave-to {
    opacity: 0;
}

.fade-fast-enter-active,
.fade-fast-leave-active {
    transition: opacity 0.5s;
}

.fade-slow-enter-from,
.fade-slow-leave-to {
    opacity: 0;
}

.fade-slow-enter-active,
.fade-slow-leave-active {
    transition: opacity 1s;
}

.entrada { 
    background-color: green;
    transition: opacity 0.4s;
}

.saida {
    background-color: red;
    transition: opacity 0.4s;
}

.test {
    background: green;
}
</style>
