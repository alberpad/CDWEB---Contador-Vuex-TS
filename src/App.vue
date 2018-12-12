<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <p>{{message}}</p>
    <counter></counter>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Counter from '@/components/Counter.vue';

@Component({
  name: 'App',
  components: {
    Counter,
  },
})
export default class App extends Vue {
  private message: string = 'Hola!';
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
