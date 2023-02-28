const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const deps = require('./package.json').dependencies;
module.exports = {
  output: {
    publicPath: 'http://localhost:3030/',
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
  },

  devServer: {
    port: 3030,
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
      name: 'main_app',
      filename: 'remoteEntry.js',
      remotes: {
        main_app: 'main_app@http://localhost:3030/remoteEntry.js',
        product_app: 'product_app@http://localhost:3031/remoteEntry.js',
        cart_app: 'cart_app@http://localhost:3032/remoteEntry.js',
        blogs: 'blogs@http://localhost:3034/remoteEntry.js',
        cra_app: 'cra_app@http://localhost:3035/remoteEntry.js',
      },
      exposes: {
        './Header': './src/Components/Header.jsx',
        './Footer': './src/Components/Footer.jsx',
        './HomeContent': './src/Components/HomeContent.jsx',
        './productsApi': './src/Api/index.js',
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom'],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
  ],
};
