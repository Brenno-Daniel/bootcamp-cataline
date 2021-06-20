<template>
    <div class="container">
        <div class="header">
            <div class="header-title">
                <div class="arrow-back">
                    <a href="http://localhost:8080/">
                        <img src="@/assets/images/arrow-left.svg" alt="Arrow left" />
                    </a>
                </div>
                <div class="basecamp-title">
                    <div class="title">
                        <p>Basecamp</p>
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

<style>
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
    display: grid;
    grid-template-columns: 305px;
    grid-template-rows: auto;
    justify-content: center;
    align-content: center;
    color: #f5f6f8;
    background: #26282c;
    border-radius: 5px;
}

.header-title {
    width: 70%;
    height: 104px;
    float: left;
}

.arrow-back {
    width: 20%;
    float: left;
    margin-top: 25px;
    padding-left: 15px;
}

.arrow-back:hover {
    background: #26282c;
}

.basecamp-title {
    width: 70%;
    float: right;
    line-height: 0.5em;
    padding: 10px 0px;
}

.basecamp-title > .title {
    font-family: 'Lato-Bold', Arial, Helvetica, sans-serif;
    font-size: 20px;
    font-weight: bold;
}

.basecamp-title > .sub-title {
    font-family: 'Lato-Regular', Arial, Helvetica, sans-serif;
    font-size: 13px;
}

.icon {
    width: 30%;
    float: right;
}

.icon > img {
    margin-top: 35px;
    margin-left: 25px;
}

.body-faq {
    height: 352px;
    border-top: 1px solid #535762;
    opacity: 1;
}
</style>
