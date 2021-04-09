<template>
  <div>
    <h1>Hellooooo</h1>
    <h3>{{ count }}</h3>
    <button @click="count++">Incrementar</button>
    <button @click="destroyComponent">Desmontar</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      message: 'Hello Cataline',
      count: 0
    }
  },
  // utilizamos o beforeCreated quando precisamos fazer alguma coisa o mais cedo possível, mas que não tenha contato com o seu próprio componente (em relação aos dados e a própria DOM).
  beforeCreate() {
    console.log('Antes da criação!')
    console.log(this.message)
  },
  created() {
    console.log('Depois da criação!')
    console.log(this.message)
  },
  // Um gancho sempre tem acesso a tudo que o gancho anterior tinha.
  // Antes da montagem ele não tem acesso à DOM, ou seja, o gancho beforeMounted não tem acesso à DOM.
  beforeMount() {
    console.log('Antes da montagem')
    console.log(this.message)
    console.log(this.$el) // beforeMounted não tem acesso ao elemento na DOM
  },
  // Depois da montagem do componente ele tem acesso à DOM, mounted tem acesso à DOM.
  mounted() {
    console.log('Depois da montagem')
    console.log(this.message)
    console.log(this.$el) // mounted tem acesso ao elemento na DOM
    this.$el.style.background = 'lightblue' // qualquer alteração na DOM deve ser realizado após o gancho mounted
  },
  // Antes e depois da atualização
  // Atualização nesse caso se refere à mudanças de dados em nosso componente
  beforeUpdate() {
    console.log('Antes da atualização')
  },
  updated() {
    console.log('Depois da atualização')
    // fazer o contador pular do 5 para o 6
    if (this.count === 5) this.count = 6
  },
  beforeUnmount() {
    console.log('Antes de desmontar')
    console.log('Salvar a contagem no DB!')
  },
  unmounted() {
    // console.log('Depois de desmontar')
    alert('Obrigado por utilizar o contador!')
  },
  methods: {
    destroyComponent() {
      console.log('Destruir componente')
      // this.$.appContext.app.unmount(this.$el)
    }
  }
})
</script>
