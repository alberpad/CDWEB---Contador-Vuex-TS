import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import vuexLocal from '@/plugins/vuex-persist';
import { RootState } from '@/store/types';
import { counterModule } from '@/store/modules/counter';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    appName: 'Contador con Vuejs Vuex y TS',
    appVersion: 'Versión 0.0.1',
  },
  modules: {
    counterModule,
  },
  plugins: [vuexLocal.plugin],
};

export default new Vuex.Store<RootState>(store);
