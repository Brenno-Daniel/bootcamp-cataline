<template>
    <component :is="currentView">
        <div class="container">
            <div class="faq-container">
                <div class="lost-astronaut">
                    <img src="@/assets/images/astronaut.svg" alt="Astronaut" width="242" height="112" />
                </div>
                <div class="faq-title">
                    <p>Perguntas frequentes</p>
                    <span>Escolha a categoria desejada</span>
                </div>

                <ul class="navegation">
                    <li class="navegation__item" @click="currentView = 'Basecamp'">
                        <div class="div-img">
                            <img src="@/assets/images/rocket.svg" width="20" height="20" alt="Rocket" />
                        </div>
                        <div class="span">
                            <span>Basecamp</span>
                        </div>
                    </li>
                    <li class="navegation__item" @click="currentView = 'Bootcamp'">
                        <div class="div-img">
                            <img src="@/assets/images/astronaut-helmet.svg" width="20" height="20" alt="Astronaut Helmet" />
                        </div>
                        <div class="span">
                            <span>Bootcamp</span>
                        </div>
                    </li>
                    <li class="navegation__item" @click="currentView = 'Cataline'">
                        <div class="div-img">
                            <img src="@/assets/images/student-hat.svg" width="20" height="20" alt="Student hat" />
                        </div>
                        <div class="span">
                            <span>Cataline</span>
                        </div>
                    </li>
                    <li class="navegation__item" @click="currentView = 'Parcerias'">
                        <div class="div-img">
                            <img src="@/assets/images/partnership.svg" width="20" height="20" alt="Partnership" />
                        </div>
                        <div class="span">
                            <span>Parcerias</span>
                        </div>
                    </li>
                </ul>
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
    width: 305px;
    height: 100%;
    margin: auto;
    margin-top: 20px;
    display: grid;
    grid-template-columns: 305px;
    grid-template-rows: auto;
    justify-content: center;
    align-content: center;
    color: #f5f6f8;
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

.navegation__item {
    line-height: 3em;
}

.navegation__item:hover {
    background: #3f4452;
    border-radius: 2px;
    cursor: default;
}

.navegation > li {
    height: 53px;
    padding: 0 0.2em;
}

.div-img {
    width: 20%;
    float: left;
    line-height: 3.5em;
}

.span {
    width: 80%;
    float: right;
}
</style>
