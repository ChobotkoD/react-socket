module.exports = {
  mode: "production",
  devtool: "source-map",
  output: {
    filename: "[name].bundle.js",
    path: require("path").resolve("./dist"),
    clean: true,
  },
};
