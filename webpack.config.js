const path = require('path')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './game.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'dist/bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      include: [
        path.resolve(__dirname, "src")
      ],
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            ['es2015', { modules: false }]
          ]
        }
      }]
    }]
  }
}