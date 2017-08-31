const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management'
        }),
        new CleanWebpackPlugin(['./dist/'])
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
        }
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};
