<template>
  <div class="food">
    <h1 class="food-name">{{cart.name}}</h1>
    <div class="food-image">
      <img :src="cart.image" alt="error" />
    </div>
    <div class="food-info">
      <button class="btn-number" @click="changeQuantity({...cart,condition:'minus'})">-</button>
      <span>{{cart.quantity}}</span>
      <button class="btn-number" @click="changeQuantity({...cart,condition:'plus'})">+</button>
      <font-awesome-icon :icon="['fas', 'dollar-sign']" />
      {{cart.price}}
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  props: ['cart'],
  methods: {
    ...mapMutations(['addToCart']),
    ...mapMutations(['changeQuantity']),
  },
};
</script>

<style lang="scss" scoped>
.food {
  flex: 1;
  box-shadow: 0 0 10px 1px #ddd;
  border-radius: 10px;
  padding: 1rem;
  margin: 2rem 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}
.food-name {
  flex: 1;
  font-size: 1.5rem;
}
.food-image {
  flex: 1;

  > img {
    width: 100%;
    height: 100%;
  }
}
.food-info {
  flex: 2;
  display: flex;
  justify-content: space-around;
  align-items: center;
  > button {
    border: none;
    border-radius: 50%;
    margin: 0 1rem;
    background-color: #41b883;
    width: 30px;
    height: 30px;
  }
}
</style>