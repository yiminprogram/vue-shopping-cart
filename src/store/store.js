import Vue from 'vue';
import Vuex from 'vuex';
import data from '../assets/data/food.json';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    foods: [],
    carts: [],
  },
  getters: {
    foodsInCart(state) {
      return state.carts.reduce((acc, cur) => {
        return acc + cur.quantity;
      }, 0);
    },
    priceInCart(state) {
      return state.carts.reduce((acc, cur) => {
        return acc + cur.price * cur.quantity;
      }, 0);
    },
    isFoodInCart(state) {
      return food => {
        return (
          state.carts.findIndex(({ id }) => {
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
      state.carts.push({ ...food, quantity: 1 });
    },
    changeQuantity(state, cart) {
      const food = state.carts.find(elem => elem.id === cart.id);
      if (food.quantity < 0) return;
      if (cart.condition === 'plus') {
        food.quantity++;
      } else if (cart.condition === 'minus') {
        if (food.quantity === 0) return;
        food.quantity--;
      }
    },
    removeFood(state, id) {
      const index = state.carts.findIndex(elem => elem.id === id);
      state.carts.splice(index, 1);
    },
  },
  actions: {
    getFoods({ commit }) {
      commit('setFoods', data);
    },
  },
});
