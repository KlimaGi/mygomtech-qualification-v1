const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: "./src/index.ts",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpg)$/i,
        use: ["file-loader"],
      },
    ],
  },
  resolve: {
    alias: {
      "~": path.resolve("./src"),
    },
    extensions: [".js", ".ts", ".tsx"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  plugins: [
    new Dotenv({}),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve("./public/index.html"),
    }),
  ],
  devServer: {
    historyApiFallback: true,
    static: "dist",
    hot: true,
  },
};
