<template>
  <header>
    <router-link v-if="isBuy" class="link" to="/">⇠ 繼續選購</router-link>
    <div>
      🛒 購物車
      <span class="number">{{foods}}</span>
    </div>
    <div>
      總金額 💲
      <span class="number">{{price}}</span>
      <span>{{link}}</span>
    </div>
    <router-link v-if="isChecked" class="link" to="/cartcheck">前往結帳 ⇢</router-link>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters({
      foods: 'foodsInCart',
      price: 'priceInCart',
    }),
    isChecked() {
      return this.$route.path === '/' ? true : false;
    },
    isBuy() {
      return this.$route.path !== '/' ? true : false;
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  width: 100%;
  height: 40px;
  background-color: #41b883;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1rem;
}
.number {
  color: #fffb7a;
}
.link {
  color: #fff;
  text-decoration: none;
}
</style>