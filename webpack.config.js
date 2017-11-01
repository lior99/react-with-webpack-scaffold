const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry : [
        'babel-polyfill',
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://0.0.0.0:5000',
        'webpack/hot/only-dev-server',
        path.resolve(__dirname + '/src/index.js')
    ],
    output : {
        path : path.resolve(__dirname + '/build'),
        filename : 'bundle.js',
        publicPath : '/'
    },
    devServer: {
        contentBase: './build',
        hot: true
    },
    module : {
        loaders : [
            { 
                test:  /\.(js|jsx)$/,
                exclude: /node_modules/, 
                loader: 'babel-loader',
                query : {
                    presets : [ 'react', 'es2015' ]
                }
            },
            {
                test : /\.scss$/,
                loader : [ 'style-loader', 'css-loader', 'sass-loader']
            },
            // {
            //     test : /\.css$/,
            //     loader : [ 'style-loader', 'css-loader']
            // }
        ]
    },
    plugins : [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]

}