let path = require('path');
let webpack = require('webpack');

let ExtractTextPlugin = require('extract-text-webpack-plugin');
let OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index.js',
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/',

  },
  resolve: {
    modules: ["node_modules"],
    extensions: ['*', '.js', '.jsx', '.json', '.css', 'html'],
  },
  devServer: {
    contentBase: path.resolve(__dirname, './public/'),
    inline: true,
    port: 3000,
    hot: true,
    historyApiFallback: true,
    compress: true,
    proxy: {
      '/auth/**': {
        target: 'http://localhost:8080',
        secure: false,
      },
      '/api/**': {
        target: 'http://localhost:8080',
        secure: false,
      }
    },
  },
  module:{
    rules:[   //загрузчик для jsx
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
        loader: "babel-loader",   // определяем загрузчик
        options:{
          presets: ["env", "react"],    // используемые плагины
          plugins: [
            "transform-decorators-legacy", "transform-async-to-generator", "transform-class-properties",
            ['import', { libraryName: "antd", style: true }]
          ],
        },
      },
      {
        test: /\.css$/,
        use: [
          {loader: "style-loader"},
          {loader: "css-loader"}
        ]
      },
      {
        test: /\.less$/, use: [
        {loader: "style-loader"},
        {loader: "css-loader"},
        {loader: "less-loader"}
      ]
      },
    ]
  },
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.optimize\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: {discardComments: {removeAll: true}},
      canPrint: true
    }),
    new ExtractTextPlugin({
      filename: 'bundle.css',
      allChunks: true,
    })
  ],

};