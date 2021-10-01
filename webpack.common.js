const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const jsSourcePath = path.resolve(__dirname, "src/js");
const generalStylePath = path.resolve(__dirname, "src/scss");

const getStyleLoaders = (shouldUseCSSModules) => {
    return [
        MiniCssExtractPlugin.loader,
        !shouldUseCSSModules ? "css-loader" : "css-loader?module&importLoaders=1&localIdentName=[name]_[local]",
        "sass-loader",
    ];
};

const config = {
    entry: jsSourcePath + "/index.js",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: ["/node_modules/"],
                use: "babel-loader",
            },
            {
                test: /\.scss$/,
                include: [generalStylePath],
                exclude: ["/node_modules/"],
                use: getStyleLoaders(false),
            },
            {
                test: /\.scss$/,
                include: [jsSourcePath],
                exclude: ["/node_modules/"],
                use: getStyleLoaders(true),
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "cactus-gaming.fragment-[hash].js",
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    filename: "cactus-gaming.vendors-[hash].js",
                    chunks: "all",
                },
            },
            name: false,
        },
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "cactus-gaming.style-[hash].css",
        }),
    ],
    resolve: {
        extensions: [".js", ".jsx"],
        modules: ["node_modules", jsSourcePath],
    },
};

module.exports = config;
