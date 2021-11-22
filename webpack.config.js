const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // ... Configuración de empaquetado
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  mode: "development",
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@icons": path.resolve(__dirname, "src/assets/icons/"),
      "@logos": path.resolve(__dirname, "src/assets/logos/"),
      "@components": path.resolve(__dirname, "src/components/"),
      "@containers": path.resolve(__dirname, "src/containers/"),
      "@context": path.resolve(__dirname, "src/context/"),
      "@hooks": path.resolve(__dirname, "src/hooks/"),
      "@pages": path.resolve(__dirname, "src/pages/"),
      "@styles": path.resolve(__dirname, "src/styles/"),
    },
  },
  module: {
    // ... Lista de reglas respecto a los loaders
    rules: [
      // Reglas para babel
      {
        test: /\.(js|jsx)$/,
        use: { loader: "babel-loader" },
        exclude: /node_modules/,
      },
      // Reglas para HTML loader
      {
        test: /\.html$/,
        use: [{ loader: "html-loader" }],
      },
      //reglas para css loader
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      //reglas para file loader
      /* {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[hash]-[name].[ext]",
            },
          },
        ],
      }, */
      {
        test: /\.(png|svg|jpg|gif)$/,
        type: "asset",
      },
    ],
  },
  plugins: [
    //... Configuración de plugins
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  devServer: {
    historyApiFallback: true,
    /* contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 3000, */
  },
};
