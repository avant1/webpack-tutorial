const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webPack = require('webpack');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management'
        }),
        new CleanWebpackPlugin(['./dist/']),
        new webPack.HotModuleReplacementPlugin()
    ],
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, '/dist'),
        https: true,
        port: 8085,
        open: false,
        overlay: {
            warnings: true,
            errors: true
        },
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};
