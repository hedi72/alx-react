const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        header: './modules/header/header.js',
        body: './modules/body/body.js',
        footer: './modules/footer/footer.js',
    }, 
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].bundle.js'
    },
    performance: {
        hints: false,
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            filename: './index.html',
        }),
        new CleanWebpackPlugin()
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    devServer: {
        static: path.join(__dirname, './public'),
        compress: true,
        port: 8564,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                            disable: true,
                        },
                    },
                ],
            },
        ],
    },
};