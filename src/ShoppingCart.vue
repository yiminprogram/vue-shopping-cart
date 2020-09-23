<template>
  <div class="shopping-cart">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from './views/Header';

export default {
  components: {
    Header,
  },
};
</script>

<style>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body,
html {
  width: 100%;
  height: 100%;
  font-size: calc(0.75em + 1vmin);
}
</style>
<style lang="scss" scoped>
</style>