const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    header: './modules/header/header.js',
    body: './modules/body/body.js',
    footer: './modules/footer/footer.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  devServer: {
    port: 8564,
    open: true,
    hot: true,
  },
  devtool: 'inline-source-map',
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './assets/index.html',
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/, // Rule for JavaScript files
        exclude: /node_modules/, // Exclude node_modules
        use: {
          loader: 'babel-loader', // Use babel-loader
        },
      },
      {
        test: /\.css$/, // Rule for CSS files
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/, // Rule for image files
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets',
            },
          },
        ],
      },
    ],
  },
};