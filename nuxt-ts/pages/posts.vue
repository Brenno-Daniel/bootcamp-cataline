<template>
  <div>
    <h1>Postagem</h1>

    <h2>{{ title }}</h2>
    <p>{{ content }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

const sleep = () => {
  return new Promise((resolve) => setTimeout(resolve, 1500))
}

export default Vue.extend({
  layout: 'website',
  async asyncData() {
    // Página só vai carregar quando os conteudos forem retornados**
    // Para não deixar a aplicação travada deve-se usar o created ou outro gancho (life cycle hook),
    // para assim a pagina ser carregada independente dos dados que ela precisa carregar.
    await sleep()

    const title = 'My Post Title'
    const content = 'Lorem ipsum dolor sit...'

    return { title, content }
  },
  data() {
    return {
      title: '',
      content: '',
    }
  },
  // async created() {
  //   await sleep()

  //   this.title = 'My Post Title'
  //   this.content = 'Lorem ipsum dolor sit...'
  // },
})
</script>

<style scoped></style>
