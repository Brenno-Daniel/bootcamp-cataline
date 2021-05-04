<template>
    <!-- <button class="button-styled">
        botão estilizado
        <span>do BRENNO</span>
    </button> -->
    <button :class="['button-styled', color]">
        <!-- conceito de slots nomeados -->
        <slot name="before" />
        {{ text }}
        {{ user.name }}
        <slot name="after" />
    </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

type color = 'success' | 'danger' | 'primary';

interface User {
    id: number;
    name: string;
}

export default defineComponent({
    props: {
        text: {
            type: [String, Number], // Definir que a Prop receba mais de um tipo
            // default: 'Valor Padrão',
            required: true, // valor obrigatório
        },
        color: {
            type: String,
            default: 'primary',
            validator: (value: color) => {
                return ['success', 'danger', 'primary'].includes(value);
            },
        },
        user: {
            // é preciso tipar as propriedades desse user mesmo estando declaradas no data do App.vue
            type: Object as PropType<User>,
            default: '',
        },
    },
});
</script>
<style scoped>
.button-styled {
    color: #fff;
    border-radius: 0.3rem;
    padding: 0.5rem 1rem;
    outline: none;
    border: none;
    cursor: pointer;
    display: block;
    margin-bottom: 1rem;
    background-color: #2d6cea;
}

.primary {
    background-color: blue;
}

.success {
    background-color: green;
}

.danger {
    background-color: red;
}
</style>
