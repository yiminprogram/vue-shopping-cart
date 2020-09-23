import Vue from 'vue';
import Vuex from 'vuex';
import data from '../assets/data/food.json';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    foods: [],
    cart: [],
  },
  getters: {
    foodsInCart(state) {
      return state.cart.length;
    },
    priceInCart(state) {
      return state.cart.reduce((accumulator, food) => {
        return accumulator + food.price;
      }, 0);
    },
    isFoodInCart(state) {
      return food => {
        return (
          state.cart.findIndex(({ id }) => {
            return id === food.id;
          }) !== -1
        );
      };
    },
  },
  mutations: {
    setFoods(state, foods) {
      state.foods = foods;
    },
    addToCart(state, food) {
      state.cart.push(food);
    },
  },
  actions: {
    getFoods({ commit }) {
      commit('setFoods', data);
    },
  },
});
