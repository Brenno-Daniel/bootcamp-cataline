<template>
    <div class="answer">
        <div class="heading">
            <div @click="goToQuestions()" class="btn-arrow">
                <div class="arrow"></div>
            </div>
            <div class="heading-text">
                <p>{{ $singleQuestion.title }}</p>
            </div>
        </div>
        <p v-html="$singleQuestion.content" class="content"></p>
    </div>
</template>

<script>
export default {
    name: 'Answer',
    computed: {
        $singleQuestion() {
            return this.$store.getters.$singleQuestion;
        },
    },
    methods: {
        goToQuestions() {
            this.$store.dispatch('decreaseTransitionDepth');
            this.$store.dispatch('changeCurrentComponent', 'Questions');
        },
    },
};
</script>

<style scoped>
.heading {
    padding: 0 1.25rem 1.875rem 1.25rem;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 1rem;
    align-items: center;
}
.heading .heading-text p {
    color: #f5f6f8;
    font-size: 1rem;
}
.heading .btn-arrow {
    padding: 0.875rem 0.75rem;
    cursor: pointer;
    background-color: transparent;
    border-radius: 8px;
    transition: background-color 200ms ease-in-out;
}
.heading .btn-arrow:hover {
    background: #26282c;
    border-radius: 8px;
}
.heading .arrow {
    width: 22px;
    height: 3px;
    background: #f5f6f8;
    border-radius: 1.25rem;
    position: relative;
}
.heading .arrow::before,
.heading .arrow::after {
    content: '';
    content: '';
    background: #f5f6f8;
    position: absolute;
    width: 13px;
    height: 3px;
}
.heading .arrow::before {
    top: -4px;
    left: -3px;
    border-radius: 20px;
    transform: rotate(-51deg);
}
.heading .arrow::after {
    transform: rotate(51deg);
    top: -4px;
    left: -3px;
    border-radius: 20px;
}
.content {
    font-size: 0.813rem;
    color: #f5f6f8;
    padding: 0 1.25rem 1.875rem 1.25rem;
    line-height: 1.25rem;
}
</style>
