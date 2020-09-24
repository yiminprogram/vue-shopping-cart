<template>
  <div class="food">
    <button class="btn-remove" @click="removeFood(cart.id)">X</button>
    <h1 class="food-name">{{cart.name}}</h1>
    <div class="food-image">
      <img :src="cart.image" alt="error" />
    </div>
    <div class="food-quantity">
      <button class="btn-number" @click="changeQuantity({...cart,condition:'minus'})">-</button>
      <span>{{cart.quantity}}</span>
      <button class="btn-number" @click="changeQuantity({...cart,condition:'plus'})">+</button>
    </div>
    <div class="food-price">
      <font-awesome-icon :icon="['fas', 'dollar-sign']" />
      <span>{{cart.price}}</span>
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
    ...mapMutations(['removeFood']),
  },
};
</script>

<style lang="scss" scoped>
.food {
  box-shadow: 0 0 10px 1px #ddd;
  border-radius: 10px;
  padding: 1rem;
  margin: 2rem 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}
.btn-remove {
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  color: #fff;
  background-color: #ff5252;
  margin-right: 1rem;
}
.food-name {
  flex: 1;
  font-size: 1.5rem;
  text-align: center;
}
.food-image {
  flex: 1;

  > img {
    width: 100%;
    height: 100%;
  }
}
.food-quantity {
  flex: 2;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  > button {
    border: none;
    border-radius: 50%;
    margin: 0 1rem;
    color: #fff;
    background-color: #41b883;
    width: 30px;
    height: 30px;
  }
}
.food-price {
  flex: 1;
  text-align: right;
  color: #ffa33b;
  > span {
    margin-left: 1rem;
  }
}
</style>