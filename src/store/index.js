import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    recipes: []
  },
  getters: {
    getRecipes: (state) => {
      return state.recipes;
    },
    getRecipeById: (state) => (id) => {
      return state.recipes.find(rec => rec.id == id);
    },

    getRecipesByName: (state) => (name) => {
      return state.recipes.filter(rec => rec.name === name);
    }
  },

  mutations: {
    setRecipe(state, payload) {
      state.recipes = payload
    }
  },
  actions: {
    setRecipe({commit}, payload) {
      commit('setRecipe', payload)
    }
  },
  modules: {
  }
})
