<template>
<div class="counter">
  <p>Count: {{ count }}</p>
  <div class="btn-group">
    <button class="btn btn-primary" @click.prevent="increment">+</button>
    <button class="btn btn-primary" @click.prevent="decrement">-</button>
  </div>
</div>
</template>

<script>
  export default {
    name: 'Counter',
    data: function() {
      return {
        count: 0
      }
    },
    methods: {
      increment: function() {
        this.count++
      },
      decrement: function() {
        this.count--
      }
    }
  }
</script>

<style scoped lang="scss">
  .counter {
    margin-bottom: 1rem;
  }
</style>