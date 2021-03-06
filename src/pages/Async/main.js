import Vue from 'vue'

Vue.component(
  'counter',
  // The `import` function returns a Promise.
  () => import('../../components/Counter')
)

Vue.component(
  'expander',
  () => import('../../components/Expander')
)

Vue.component(
  'modal',
  () => import('../../components/Modal')
)

Vue.config.productionTip = false

new Vue({
  el: '#app',
})
