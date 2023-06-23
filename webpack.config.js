const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// console.log(__dirname);
// console.log(__filename);
// console.log( path.resolve(__dirname, 'dist'));
// console.log( path.resolve('/','test', 'string', 'webpack'));

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[contenthash].js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: './index.html'
    }),
  ],
  devServer: {
    static: './build',
  },
  optimization: {
    runtimeChunk: 'single',
  },
  mode: 'development',
};