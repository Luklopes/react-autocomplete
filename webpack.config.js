const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

require('dotenv').config()

const extensions = [".ts", ".tsx", ".js", ".jsx"];

const ORG_NAME = "omni";
const APP_NAME = "boilerplate";

const ENVS = {
  ...process.env,
  ORG_NAME,
  APP_NAME,
  APP_ENV: process.env.APP_ENV || "dev",
};

module.exports = {
  entry: ["./src/index.tsx"],
  devtool: "source-map",
  mode: "development",

  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', "css-loader", "sass-loader"],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              prettier: false,
              svgo: false,
              svgoConfig: {
                plugins: [{ removeViewBox: false }],
              },
              titleProp: true,
              ref: true,
            },
          },
          {
            loader: 'file-loader',
            options: {
              name: 'static/media/[name].[hash].[ext]',
            },
          },
        ],
      },
    ],
  },

  resolve: {
    extensions,
    plugins: [new TsconfigPathsPlugin({
      configFile: path.resolve(__dirname, "tsconfig.json"),
    })],
  },

  output: {
    filename: `${APP_NAME}.js`,
    path: path.resolve(__dirname, "dist"),
    clean: true,
    library: {
      type: "system",
    },
    publicPath: "",
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.ejs",
      inject: false,
      templateParameters: ENVS,
    }),
    new ESLintPlugin({
      extensions,
    }),
    
    new webpack.EnvironmentPlugin(ENVS),
  ],

  externals: ["single-spa", new RegExp(`^@${ORG_NAME}/`), "react", "react-dom"],
};