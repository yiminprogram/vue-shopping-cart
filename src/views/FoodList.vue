<template>
  <div class="food-list">
    <FoodCard v-for="food in foods" :key="food.id" :food="food" />
  </div>
</template>

<script>
import FoodCard from '../components/FoodCard';
import { mapState, mapActions } from 'vuex';
export default {
  components: {
    FoodCard,
  },
  mounted() {
    this.getFoods();
  },
  computed: {
    ...mapState(['foods']),
  },
  methods: {
    ...mapActions(['getFoods']),
  },
};
</script>

<style lang="scss" scoped>
.food-list {
  width: 80%;
  height: 100%;
  padding-top: 100px;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}
</style>