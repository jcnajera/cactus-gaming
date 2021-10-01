const path = require("path");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const common = require("./webpack.common.js");

const LOCAL_FOLDER_URL = "http://localhost:9000";
const sourcePath = path.resolve(__dirname, "src");
const buildPath = path.resolve(__dirname, "./dist");

const config = {
    devtool: "eval-source-map",
    mode: "development",
};

const plugins = [
    new HtmlWebpackPlugin({
        inject: false,
        template: path.join(sourcePath, "index-dev.ejs"),
        templateParameters: {
            chunksFolderUrl: LOCAL_FOLDER_URL,
        },
        path: buildPath,
        filename: "index.html",
    }),
    new CopyWebpackPlugin([
        {
            from: path.resolve(__dirname, "env-config.js"),
            to: buildPath,
        },
    ]),
];
config.plugins = plugins;

const devServer = {
    compress: false,
    contentBase: buildPath,
    disableHostCheck: true,
    historyApiFallback: true,
    host: "127.0.0.1",
    hot: true,
    inline: true,
    port: 9000,
    stats: {
        assets: true,
        children: false,
        chunks: false,
        hash: false,
        modules: false,
        publicPath: false,
        timings: true,
        version: false,
        warnings: true,
        colors: {
            green: "\u001b[32m",
        },
    },
};

config.devServer = devServer;

module.exports = merge(common, config);
