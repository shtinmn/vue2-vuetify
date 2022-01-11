import Vue from 'vue'
import Vuex from 'vuex'
import { Actions, createStore, Getters, Module, Mutations } from 'vuex-smart-module'

Vue.use(Vuex)

class RootState {
  name = 123
}

class RootGetters extends Getters<RootState> {}

class RootMutations extends Mutations<RootState> {}

class RootActions extends Actions<RootState, RootGetters, RootMutations, RootActions> {}

export const root = new Module({
  state: RootState,
  getters: RootGetters,
  mutations: RootMutations,
  actions: RootActions,
})

export default createStore(root)
