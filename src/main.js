import Vue from 'vue';
import store from './store/store';
import router from './router/router';
import ShoppingCart from './ShoppingCart.vue';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(ShoppingCart),
}).$mount('#app');
