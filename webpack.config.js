const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        "bsms-country-picker": './src/bsms-country-picker.js', 
    },
    output: {
        filename: '[name].min.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: './src/bsms-country-picker.css', to: 'bsms-country-picker.css' },
            ],
        }),
    ],
};