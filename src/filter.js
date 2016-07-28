import emojione from 'emojione'

export default {
  install (Vue, options = {
    imageType: 'svg',
    sprites: true
  }) {
    Object.assign(emojione, options)

    Vue.filter('emoji', (value, method = 'toImage') => {
      return emojione[method](value)
    })
  }
}
