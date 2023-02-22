const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const deps = require('./package.json').dependencies;
module.exports = {
  output: {
    publicPath: 'http://localhost:3033/',
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
  },

  devServer: {
    port: 3033,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'addtocart',
      filename: 'remoteEntry.js',
      remotes: {
        main_app: 'main_app@http://localhost:3030/remoteEntry.js',
        product_app: 'product_app@http://localhost:3031/remoteEntry.js',
        cart_app: 'cart_app@http://localhost:3032/remoteEntry.js',
        addtocart: 'addtocart@http://localhost:3033/remoteEntry.js',
      },
      exposes: {
        './AddToCart': './src/Components/AddToCart.jsx',
        './placeAddToCart': './src/Components/placeAddToCart.js',
      },
      shared: {
        ...deps,
        'solid-js': {
          singleton: true,
          requiredVersion: deps['solid-js'],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
  ],
};
