<template>
  <div class="container">
    <h1>{{ $store.state.counter }}</h1>
    <h3>{{ $store.getters.getCounter }}</h3>
    <button @click="$store.commit('increment')">Increment w/mutation</button>
    <button @click="$store.dispatch('increment')">Increment w/action</button>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.container {
  text-align: center;

  button {
    outline: 0;
  }
}
</style>
