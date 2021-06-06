<template>
    <component :is="currentView">
        <p @click="currentView = 'Home'">arrow-back</p>
        <h1>Bootcamp</h1>
    </component>
</template>

<script>
import Home from '@/components/Home.vue';

export default {
    components: { Home },
    data() {
        return { currentView: 'Bootcamp' };
    },
};
</script>
