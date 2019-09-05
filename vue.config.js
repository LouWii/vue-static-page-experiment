module.exports = {
  pages: {
    'index': {
      entry: './src/pages/Home/main.js',
      template: 'public/index.html',
      title: 'Home',
      chunks: [ 'chunk-vendors', 'chunk-common', 'index' ]
    },
    'async': {
      entry: './src/pages/Async/main.js',
      template: 'public/async.html',
      title: 'Async',
      chunks: [ 'chunk-vendors', 'chunk-common', 'async' ]
    }
  },
  runtimeCompiler: true
}