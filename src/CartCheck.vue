<template>
  <div class="cart-check">
    <CartFood />
    <CartFood />
    <CartFood />
    <CartFood />
    <CartFood />
    <CartFood />
  </div>
</template>

<script>
import CartFood from './components/CartFood';
export default {
  components: {
    CartFood,
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