<template>
    <div class="faq-categories">
        <div class="heading">
            <div class="image-heading">
                <img src="@/assets/images/astronaut.svg" alt="" />
            </div>
            <div class="heading-text">
                <h2>Perguntas frequentes</h2>
                <p>Escolha a categoria desejada</p>
            </div>
        </div>
        <ul class="categories">
            <li v-for="category in $allCategories" :key="category.id" @click="goToQuestions(category)" class="category-item">
                <img :src="getImage(category)" :alt="`Ícone do ${category.title}`" />
                <p>{{ category.title }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'FaqCategories',
    created() {
        this.$store.dispatch('fetchFaqCategories');
    },
    computed: {
        $allCategories() {
            return this.$store.getters.$allCategories;
        },
    },
    methods: {
        goToQuestions(category) {
            this.$store.dispatch('increaseTransitionDepth');
            this.$store.dispatch('changeCurrentComponent', 'Questions');
            this.$store.dispatch('getSingleCategory', category);
        },
        getImage(item) {
            return require(`@/assets/images/${item.icon}`);
        },
    },
};
</script>

<style scoped>
.heading .image-heading img {
    width: 242px;
}
.heading .image-heading {
    display: grid;
    justify-content: center;
}
.heading .heading-text h2,
p {
    color: #f5f6f8;
}
.heading .heading-text h2 {
    font-size: 1.25rem;
}
.heading .heading-text p {
    font-size: 0.813rem;
    padding-top: 0.288rem;
}
.heading .heading-text {
    padding: 1.1rem 1.875rem 2.125rem;
}
.categories {
    list-style: none;
}
.categories .category-item {
    color: #f5f6f8;
    padding: 1rem 1.875rem;
    font-size: 1rem;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 2.125rem;
    background-color: transparent;
    transition: background-color 200ms ease-in-out;
}
.categories .category-item img {
    width: 1.5rem;
}
.categories .category-item:hover {
    background-color: #3f4452;
    cursor: pointer;
}
</style>
