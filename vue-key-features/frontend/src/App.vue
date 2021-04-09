<template>
  <div>
    <!-- diretiva v-bind (mais usada somente com o :) -->
    <div>
      <h3>Diretiva v-bind</h3>
      <a :href="product.url" :class="productClass">
        {{ product.name }}
      </a>
    </div>
    <!-- v-bind -->

    <!-- v-text -->
    <!-- com interpolação conseguimos misturar o que vem la do Javascript com o HTML -->
    <div>
      <h3>Diretiva v-text</h3>
      <p>{{ company }} é uma empresa legal</p>
      <!-- com o v-text o dado que escolhemos fazer a interpolação sobrescreve o conteúdo da tag -->
      <p v-text="company"></p>
      <!-- <p v-text="company"> é uma empresa legal</p> -->
    </div>
    <!-- v-text -->

    <!-- v-html -->
    <div>
      <h3>Diretiva v-html</h3>
      <p>Acesse: <span v-html="link" /></p>
    </div>
    <!-- v-html -->

    <!-- v-on -->
    <div>
      <h3>Diretiva v-on</h3>
      <a href="#interno" @click.once.prevent="something">Link interno</a>
      <br>
      <input type="text" @keyup.once="pressedAnyKey"/>
      <br>
      <input type="text" @keyup.enter="pressedEnterKey"/>
      <br>
      <input type="text" @keyup.k="pressedKKey"/>
    </div>
    <!-- v-on -->

    <!-- v-once -->
    <div>
      <h3>Diretiva v-once</h3>
      <p v-once>Estoque inicial: {{ stock }}</p>
      <p>Estoque atualizado: {{ stock }}</p>

      <button @click="stock++">Aumentar estoque</button>
    </div>
    <!-- v-once -->

    <!-- v-if -->
    <div>
      <h3>Diretiva v-if</h3>
      <p v-if="sex === 'Masculino'">Masculino</p>
      <p v-else-if="sex === 'Feminino'">Feminino</p>
      <p v-else>Outro</p>
    </div>
    <!-- v-if -->

    <!-- v-show -->
    <h3>Diretiva v-show</h3>
    <p v-show="visible === true">Agora você vÊ</p>
    <p v-show="visible === false">Agora não vÊ</p>
    <!-- v-show -->

    <!-- v-for -->
    <div>
      <h3>Diretiva v-for</h3>
      <ul>
        <li v-for="product in products" :key="product.id">
          {{ product.name }}
        </li>
      </ul>
    </div>
    <!-- v-for -->

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      product: {
        name: 'Camisa',
        url: 'http://loja.com/product/123456',
        stock: false
      },
      company: 'Cataline',
      link: '<a href="https://cataline.io" target="_blank">Cataline</a>',
      stock: 1,
      sex: 'Femininoo',
      visible: true,
      products: [
        { id: 1, name: 'Camisa', stock: true },
        { id: 2, name: 'Bota', stock: false },
        { id: 3, name: 'Chapéu', stock: false },
        { id: 4, name: 'Cinto', stock: true }
      ]
    }
  },
  computed: {
    productClass(): string {
      return this.product.stock ? 'sucess' : 'danger'
    }
  },
  methods: {
    something() {
      console.log('Something is happen!!')
    },
    pressedAnyKey() {
      console.log('Pressed any key')
    },
    pressedEnterKey() {
      console.log('Pressed Enter key')
    },
    pressedKKey() {
      console.log('Pressed K Key')
    }
  }
})
</script>

<style scoped>
.sucess {
  background-color: green;
  color: white;
}

.danger {
  background-color: red;
  color: white;
}
</style>
