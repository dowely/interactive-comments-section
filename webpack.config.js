const path = require("path");

const common = {
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: { appendTsSuffixTo: [/\.vue$/] },
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
    alias: { "@": path.resolve(__dirname, "src") },
  },
};

const backend = {
  mode: "production",
  entry: {
    server: "./src/server.ts",
  },
  output: {
    filename: "[name].bundled.js",
    path: path.resolve(__dirname, "src/build"),
    clean: true,
  },
  target: "node",
  externals: {
    express: "commonjs express",
  },
};

module.exports = [Object.assign({}, common, backend)];
