const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: ["./src/index.js"],
  output: {
    path: path.join(__dirname, "build/"),
    filename: "bundle.js"
  },
  module: {
    strictExportPresence: true,
    rules: [
      // Load raw HTML files for templates
      { test: /\.(html)$/, loader: "raw-loader" },
      // Load js files through Babel
      { test: /\.(js|jsx)$/,   loader: "babel-loader" }
    ]
  },
  plugins: [
    // Generates an `index.html` file with the <script> injected.
    new HtmlWebpackPlugin({
      inject: true,
      template: "src/index.html",
      filename: "index.html"
    }),
  ]
}