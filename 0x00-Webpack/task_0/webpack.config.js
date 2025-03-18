const path = require('path');

module.exports = {
  mode: 'development', // Set this to 'production' for production builds
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            // Add this option to transform ES6 modules to CommonJS
            
            "presets": ["@babel/preset-env"],
            "plugins": ["@babel/plugin-transform-modules-commonjs"],
            plugins: ['@babel/plugin-transform-modules-commonjs']
          }
        }
      }
    ]
  }
};
