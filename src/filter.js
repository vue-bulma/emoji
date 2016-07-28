import emojione from 'emojione'

export default {
  install (Vue, options = {
    imageType: 'svg',
    sprites: true
  }) {
    Object.assign(emojione, options)

    // For Webpack
    if (emojione.sprites && emojione.imageType === 'svg') {
      emojione.imagePathSVGSprites = require('emojione/assets/sprites/emojione.sprites.svg')
    }

    Vue.filter('emoji', (value, method = 'toImage') => {
      return emojione[method](value)
    })
  }
}
