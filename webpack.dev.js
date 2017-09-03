const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webPack = require('webpack');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    plugins: [
        //todo was not added in tutorial
        new webPack.HotModuleReplacementPlugin(),
    ],
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
    }
});
