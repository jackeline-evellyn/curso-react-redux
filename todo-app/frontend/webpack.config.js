const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    //ponto de entrada
    entry: './src/index.jsx',
    //saída
    output: {
        path: __dirname + '/public',
        filename: './app.js'
    },
    //configuração do devServer
    devServer: {
        port: 8080,
        contentBase: './public',
    },
    //resolva alguns tipos de extensão
    resolve: {
        extensions: ['','.js','.jsx'],
        alias: {
            module: __dirname + '/node_modules'
        }
    },
    //configuração do Css
    plugin: [
        new ExtractTextPlugin('app.css')
    ],
    module: {
        loaders: [{
            //fará parser em js e jsx
            test: /.js[x]?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
               }
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },{
                test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
                loader: 'file'  
        }]
    }
}