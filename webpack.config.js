const  webpack = require('webpack');
const { resolve } = require("path");

module.exports = {
  name: "client",
  target: "web",
  mode: "development",
  entry: [
    resolve("src/index.jsx")
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    path:   resolve("dist"),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: resolve("dist"),
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
