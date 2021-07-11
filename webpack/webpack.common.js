const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.tsx",
  },
  //   output: {
  //     filename: "[name].bundle.js",
  //     path: path.resolve(__dirname, "dist"),
  //     clean: true,
  //   },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development",
      template: "./src/template.html",
    }),
  ],
};
