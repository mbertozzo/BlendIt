const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let pathsToClean = [
  'bundle.*'
];

let cleanOptions = {
  root: `${__dirname}/www`,
  verbose: true,
  dry: false
}

module.exports = {
  entry: './www/js/index.js',
  output: {
    path: `${__dirname}/www`,
    filename: 'bundle.[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.svg$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(pathsToClean,cleanOptions),
    new HtmlWebpackPlugin({template: './www/index.html', filename: 'index.bundle.html'})
  ],
  resolve: {
    extensions: ['.vue','.js'],
    alias: {
      vue: 'vue/dist/vue.js'
    }
  }
}