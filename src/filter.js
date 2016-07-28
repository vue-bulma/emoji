import emojione from 'emojione'

export default {
  install (Vue) {
    Vue.filter('emoji', (value, method = 'toImage') => {
      return emojione[method](value)
    })
  }
}
