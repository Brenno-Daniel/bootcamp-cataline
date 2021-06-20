<template>
    <div class="container">
        <div class="header">
            <div class="header-title">
                <div class="arrow-back">
                    <a href="http://localhost:8080/">
                        <img src="@/assets/images/arrow-left.svg" alt="Arrow left" />
                    </a>
                </div>
                <div class="cataline-title">
                    <div class="title">
                        <p>Cataline</p>
                    </div>
                    <div class="sub-title">
                        <span>Selecione uma pergunta</span>
                    </div>
                </div>
            </div>
            <div class="icon">
                <img src="@/assets/images/rocket.svg" width="20" height="20" alt="Rocket" />
            </div>
        </div>
        <div class="body-faq">
            <ul>
                <li class="faq-question-item"></li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.cataline-title {
    width: 70%;
    float: right;
    line-height: 0.5em;
    padding: 10px 0px;
}

.cataline-title > .title {
    font-family: 'Lato-Bold', Arial, Helvetica, sans-serif;
    font-size: 20px;
    font-weight: bold;
}

.cataline-title > .sub-title {
    font-family: 'Lato-Regular', Arial, Helvetica, sans-serif;
    font-size: 13px;
}
</style>
