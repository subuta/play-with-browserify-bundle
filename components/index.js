export const HelloWorld = require('./HelloWorld')

export default {
  HelloWorld
}

// make browserify-hmr work.
if (module.hot) {
  module.hot.accept()
}
