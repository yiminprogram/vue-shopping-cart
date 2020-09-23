import Vue from 'vue';
import VueRouter from 'vue-router';
import CartCheck from '../CartCheck.vue';
import FoodList from '../views/FoodList.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: FoodList,
    },
    {
      path: '/cartcheck',
      component: CartCheck,
    },
  ],
});
