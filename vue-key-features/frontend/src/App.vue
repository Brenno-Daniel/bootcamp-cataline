<template>
  <h1>Hellooooo</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      message: 'Hello Cataline'
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
    this.$el.style.background = 'red' // qualquer alteração na DOM deve ser realizado após o gancho mounted
  }
})
</script>
