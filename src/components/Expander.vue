<template>
  <div class="expander">
    <p class="toggler-wrapper"><a href="#" @click.prevent="toggle">Click me to expand</a></p>
    <div class="content" v-if="expanded">
      <p>This is the content of the expander</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'expander',
  data: function() {
    return {
      expanded: false
    }
  },
  methods: {
    toggle() {
      this.expanded = !this.expanded;
    }
  }
}
</script>