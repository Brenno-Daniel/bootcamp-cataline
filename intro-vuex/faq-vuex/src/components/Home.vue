<template>
    <h1>Perguntas frequentes</h1>
    <p>Escolha a categoria desejada</p>

    <ul>
        <li @click="currentView = 'Basecamp'">Basecamp</li>
        <li @click="currentView = 'Bootcamp'">Bootcamp</li>
        <li @click="currentView = 'Cataline'">Cataline</li>
        <li @click="currentView = 'Parcerias'">Parcerias</li>
    </ul>

    <component :is="currentView" />
</template>

<script>
import Basecamp from '@/pages/Basecamp.vue';
import Bootcamp from '@/pages/Bootcamp.vue';
import Cataline from '@/pages/Cataline.vue';
import Parcerias from '@/pages/Parcerias.vue';

export default {
    components: { Basecamp, Bootcamp, Cataline, Parcerias },
    data() {
        return { currentView: 'Home' };
    },
};
</script>

<style></style>
