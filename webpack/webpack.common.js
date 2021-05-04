const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, '..', './src/index.tsx'), // our entry point, as mentioned earlier
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/, // matches .js, .ts, and .tsx files
                use: ['babel-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/, // matches .css files only (i.e. not .scss, etc)
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
    },
    output: {
        path: path.resolve(__dirname, '..', './build'),
        filename: 'bundle.js', // our output bundle
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '..', './src/index.html'),
        }),
    ],
};
