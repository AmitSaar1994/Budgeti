const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); //installed via npm
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    popup: `./src/popup.jsx`,
  },
  output: {
    path: path.resolve(__dirname, `dist`),
    filename: `bundle.js`,
  },
  resolve: {
    extensions: [".js", ".jsx"],
    modules: ["src", "node_modules"], // Assuming that your files are inside the src dir
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
          options: {
            presets: [["@babel/preset-env"], "@babel/preset-react"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/popup.html",
      filename: "popup.html",
    }),
    new CopyPlugin({
      patterns: [{ from: "public" }],
    }),
  ],
};
