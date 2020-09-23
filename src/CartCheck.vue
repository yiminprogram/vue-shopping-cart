<template>
  <div class="cart-check">
    <CartFood v-for="cart in carts" :key="cart.id" :cart="cart" />
  </div>
</template>

<script>
import CartFood from './components/CartFood';
import { mapState } from 'vuex';
export default {
  components: {
    CartFood,
  },
  computed: {
    ...mapState(['carts']),
  },
};
</script>

<style lang="scss" scoped>
.cart-check {
  width: 80%;
  margin: 0 auto;
  padding-top: 100px;
}
</style>