<template>
    <component :is="currentView">
        <div class="container">
            <div class="faq-container">
                <div class="faq-content">
                    <div class="lost-astronaut">
                        <img src="@/assets/images/astronaut.svg" alt="Astronaut" width="242" height="112" />
                    </div>
                    <div class="faq-title">
                        <p>Perguntas frequentes</p>
                        <span>Escolha a categoria desejada</span>
                    </div>

                    <ul class="navegation">
                        <li class="navegation__item" @click="currentView = 'Basecamp'">Basecamp</li>
                        <li class="navegation__item" @click="currentView = 'Bootcamp'">Bootcamp</li>
                        <li class="navegation__item" @click="currentView = 'Cataline'">Cataline</li>
                        <li class="navegation__item" @click="currentView = 'Parcerias'">Parcerias</li>
                    </ul>
                </div>
            </div>
        </div>
    </component>
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

<style scoped>
@font-face {
    font-family: 'Lato';
    src: local('Lato-Bold'), url('../assets/fonts/Lato-Bold.ttf') format('ttf');
    src: local('Lato-Regular'), url('../assets/fonts/Lato-Regular.ttf') format('ttf');
}
body {
    height: 100vh;
    margin: 0;
}

.container {
    height: 100%;
    display: grid;
    grid-template-columns: 305px;
    grid-template-rows: auto;
    justify-content: center;
    align-content: center;
    color: #f5f6f8;
}

.faq-container {
    width: 305px;
    height: 457px;
    background: #26282c;
    border-radius: 5px;
}

.lost-astronaut {
    width: 242px;
    height: 112px;
    margin: auto;
    margin-top: 10px;
}

.faq-title {
    padding: 1em 2em;
}

.faq-title > p {
    font-family: 'Lato-Bold', Arial, Helvetica, sans-serif;
    font-size: 20px;
    font-weight: bold;
    margin: 5px 0;
    text-align: left;
}

.faq-title > span {
    font-family: 'Lato-Regular', Arial, Helvetica, sans-serif;
    font-size: 13px;
    text-align: left;
}

.navegation {
    font-family: 'Lato-Regular', Arial, Helvetica, sans-serif;
    font-size: 16px;
    padding: 0 2em;
    list-style: none;
    display: grid;
}

.navegation > li {
    height: 53px;
    padding: 0 0.2em;
    line-height: 3em;
}

.navegation__item:hover {
    background: #3f4452;
    border-radius: 2px;
}
</style>
