const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src', 'index.tsx'),
  // watch: true,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].bundle.js',
    chunkFilename: '[chunkhash].js',
    sourceMapFilename: 'js/[file].map',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)?$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },

      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },

      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          // disable type checker - we will use it in fork plugin
          transpileOnly: true,
        },
      },
      {
        // this should be /\.handlebars$/
        test: /\.hbs$/,
        exclude: /(node_modules)/,
        loader: 'handlebars-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '~': path.resolve(__dirname, 'src/'),
    },
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new CleanWebpackPlugin({
      verbose: true,
    }),
    // new BundleAnalyzerPlugin({
    //     "openAnalyzer": false,analyzerMode: 'static'
    // }),
    new HtmlWebpackPlugin({
      test: /\.(html|png)$/,
      template: path.resolve(__dirname, 'src', 'public', 'index.html'),
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css',
    }),
  ],
  devtool: 'source-map',

  devServer: {
    hot: true,
    historyApiFallback: true,
    static: path.join(__dirname, 'dist'),
    open: true,
    port: 8080,
    compress: true,

  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 5000,
      // minRemainingSize: 0, (Webpack 5 才有此選項)
      maxSize: 25000,
      minChunks: 1,
      maxAsyncRequests: 6,
      maxInitialRequests: 4,
      automaticNameDelimiter: '~',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          chunks: 'initial',
          name: 'vendors',
          priority: 20,
          enforce: true,
        },
        // 抽離公用模組
        common: {
          chunks: 'initial',
          minSize: 0,
          name: 'common',
          minChunks: 2,
          priority: 10,
        },
      },
    },
  },
};
