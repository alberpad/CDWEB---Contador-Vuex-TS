import { Module } from 'vuex';
import { state } from './state';
import { mutations } from './mutations';
import { CounterState } from './types';
import { RootState } from '../../types';

const namespaced: boolean = true;

type CounterModule = Module<CounterState, RootState>;

export const counterModule: CounterModule = {
  namespaced,
  state,
  mutations,
};
