const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');

module.exports = () => {
    const env = dotenv.config();

    // reduce it to a nice object, the same as before
    const envKeys = Object.keys(env).reduce((prev, next) => {
        prev[`process.env.${next}`] = JSON.stringify(env[next]);
        return prev;
    }, {});
    return {
        entry: './client/index.js',
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: "react-hot-loader/webpack"
                },
                {
                    test: /\.css$/,
                    loader: "style-loader!css-loader"
                }
            ]
        },
        resolve: {
            extensions: ['*', '.js', '.jsx']
        },
        output: {
            path: path.join(__dirname, "/client"),
            filename: "bundle.js"
        },
        plugins: [
            // new webpack.HotModuleReplacementPlugin(),
            new HtmlWebpackPlugin({
                template: path.join(__dirname, 'client/index.ejs'),
            }),
            new webpack.DefinePlugin(envKeys)
        ],
        node: { net: 'empty', fs: 'empty', tls: 'empty' }
    }
}