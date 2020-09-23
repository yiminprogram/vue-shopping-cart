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
      if (cart.condition === 'plus') {
        state.carts.find(elem => elem.id === cart.id).quantity++;
      } else if (cart.condition === 'minus') {
        state.carts.find(elem => elem.id === cart.id).quantity--;
      }
    },
  },
  actions: {
    getFoods({ commit }) {
      commit('setFoods', data);
    },
  },
});
