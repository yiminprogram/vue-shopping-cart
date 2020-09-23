import Vue from 'vue';
import store from './store/store';
import router from './router/router';
import ShoppingCart from './ShoppingCart.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart, faArrowCircleRight, faArrowCircleLeft, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faShoppingCart, faArrowCircleRight, faArrowCircleLeft, faDollarSign);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(ShoppingCart),
}).$mount('#app');
