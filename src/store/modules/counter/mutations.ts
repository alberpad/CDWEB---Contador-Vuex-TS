import { MutationTree } from 'vuex';
import { CounterState } from './types';

type CounterMutationTree = MutationTree<CounterState>;

export const mutations: CounterMutationTree = {
  increment(state: CounterState, val: number) {
    state.counter += val;
  },
  decrement(state: CounterState, val: number) {
    state.counter -= val;
  },
  reset(state: CounterState, val: number) {
    state.counter = val;
  },
};
