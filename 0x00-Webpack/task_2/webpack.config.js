const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  mode: 'production', // Set mode to production
  entry: './js/dashboard_main.js', // Update entry point
  output: {
    filename: 'bundle.js', // Output file name
    path: path.resolve(__dirname, 'public'), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Rule for JavaScript files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-modules-commonjs'],
          },
        },
      },
      {
        test: /\.css$/, // Rule for CSS files
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/, // Rule for image files
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets', // Output images to the assets folder
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css', // Output CSS file name
    }),
  ],
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(), // Optimize and minimize CSS
    ],
  },
};