const path = require('path');

module.exports = {
  entry: './js/dashboard_main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/, // Apply this rule to .js files
        exclude: /node_modules/, // Don't apply to files in node_modules
        use: {
          loader: 'babel-loader', // Use babel-loader to transpile
        }
      }
    ]
  }
};