const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
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
        })
    ],
    mode: 'development',
    node: {net: 'empty', fs: 'empty', tls: 'empty'}
}