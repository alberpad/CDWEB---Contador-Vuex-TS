<template>
  <div class="container">
    <h5 class="text-center text-muted">{{appName}}</h5>
    <h6 class="test-center text-muted">{{appVersion}}</h6>
    <button class="btn btn-success btn-block" @click="increment(1)">
      Incrementar
    </button>
    <div class="alert alert-secondary text-center mt-3"> 
      {{counter}}
    </div>
    <button class="btn btn-danger btn-block" @click="decrement(1)">
      Decrementar
    </button>
    <button class="btn btn-danger btn-block" @click="reset(0)">
      Reset
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {State, Mutation} from 'vuex-class';

const namespace: string = 'counterModule';

@Component
export default class Counter extends Vue {
  
  @State('appName')
  private appName !: string;

  @State('appVersion')
  private appVersion !: string;

  @State('counter', {namespace}) 
  private counter !: number;

  @Mutation('increment', {namespace})
  increment!: Function;

  @Mutation('decrement', {namespace})
  decrement!: Function;

  @Mutation('reset', {namespace})
  reset!: Function;
}
</script>
