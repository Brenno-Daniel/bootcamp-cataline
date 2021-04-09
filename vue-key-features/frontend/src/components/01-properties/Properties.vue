<template>
  <h1>Helloooo {{ fullName }}</h1>
  <h2>{{ count }}</h2>
  <button @click="increment">Incrementar</button>
  <button @click="decrement">Diminuir</button>
  <button @click="reset">Resetar</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// Data | Computed | Methods | Watch

// interface Person {
//   name: string
//   age: number
// }

export default defineComponent({
  data() {
    return {
      name: 'Brenno',
      lastname: 'Souza',
      count: 0
    }
  },
  // computed properties retorna um dado com algum tipo de alteração
  computed: {
    fullName(): string {
      return `${this.name} ${this.lastname}`
    }
  },
  methods: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
    reset() {
      this.count = 0
    }
  },
  // Watch/ Observador: é um objeto pois podemos observar vários dados
  watch: {
    count(newValue, oldValue) {
      console.log(`Valor antigo: ${oldValue}`)
      console.log(`Novo valor: ${newValue}`)
    }
  }
})
</script>
