<template>
  <div class="food-card">
    <img class="food-image" :src="food.image" alt="error" />
    <h2>{{food.name}}</h2>
    <h3>${{food.price}}</h3>
    <button :class="btnClass" @click="addToCart(food)" :disabled="inCart">{{btnLabel}}</button>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
export default {
  props: ['food'],
  computed: {
    ...mapGetters(['isFoodInCart']),
    inCart() {
      return this.isFoodInCart(this.food);
    },
    btnClass() {
      return {
        'btn-add': true,
        buy: this.inCart,
      };
    },
    btnLabel() {
      return this.inCart ? '已加入購物車' : '加入購物車';
    },
  },
  methods: {
    ...mapMutations(['addToCart']),
  },
};
</script>

<style lang="scss" scoped>
.food-card {
  width: 300px;
  min-height: 350px;
  margin: 1.5rem 1rem;
  box-shadow: 0 0 10px 1px #c1c1c1;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-flow: column nowrap;
  > h2 {
    text-align: center;
    margin: 0.3rem 1rem;
    font-size: 1.3rem;
  }
  > h3 {
    text-align: center;
    margin: 0.3rem 1rem;
    font-size: 1rem;
    color: #ff5656;
  }
}
.food-image {
  width: 100%;
  height: 60%;
  object-fit: cover;
}

.btn-add {
  cursor: pointer;
  color: #fff;
  width: 100%;
  background-color: #41b883;
  border: none;
  font-size: 1rem;
  padding: 0.5rem;
  margin-top: auto;
  &:hover {
    background-color: #68ca9e;
  }
  &.buy {
    cursor: not-allowed;
    background-color: #ccc;
  }
}
</style>