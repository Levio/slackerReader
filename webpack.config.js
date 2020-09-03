const path = require("path");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
// 将提取出css并单独打包出对应css文件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  //   mode: "development",
  entry: {
    main: "./src/js/index.js",
  },
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "./dist"),
    chunkFilename: "[name].js",
  },
  devServer: {
    hot: true,
  },
  optimization: {
    splitChunks: {
      //
    },
    minimize: true,
    minimizer: [new OptimizeCSSAssetsPlugin({})],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            // options: {
            //   modules: {
            //     localIdentName: "[name]_[local]_[hash:base64:5]",
            //   },
            // },
          },
        ],
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            // options: {
            //   modules: {
            //     localIdentName: "[name]_[local]_[hash:base64:5]",
            //   },
            // },
          },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: (loader) => [
                require("postcss-import")({ root: loader.resourcePath }),
                require("postcss-cssnext")(),
                // require("autoprefixer")(), // postcss-cssnext 已经包含了autoprefixer
                require("cssnano")(),
              ],
            },
          },
          {
            loader: "less-loader",
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              // cacheDirectory: true,
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
      {
        test: /\.(jpg|gif|png)$/,
        use: [
          // {
          //   loader: "file-loader",
          // },
          {
            loader: "url-loader",
            options: {
              limit: 1024000,
              name: "[name].[ext]",
              publicPath: "./assets/",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/index.html",
      filename: "index.html",
      chunks: ["main"],
    }),
  ],
};
