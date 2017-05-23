/**
 * Created by DELL Inspiron 15 on 4/26/2017.
 */
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

let query = {
    bypassOnDebug: true,
    optipng: {

    },
    gifsicle: {
        interlaced: true
    }
};

module.exports = {
    entry: {
        main: './src/main.tsx',
        vendor: './src/vendor.tsx'
    },
    devtool: "source-map",
    output: {
        publicPath: '',
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(tsx?)$/,
                use: 'awesome-typescript-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader!resolve-url-loader"
            },
            {   enforce: "pre", test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: true
                    },
                }]
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({

                    use: [
                        {
                            loader: "css-loader"
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: function () {
                                    return [autoprefixer('last 2 versions', 'ie 10', 'Firefox > 20', 'Firefox < 20','>= 5%')]
                                }
                            }
                        },
                        {
                            loader: "less-loader"
                        }
                    ],
                    // use style-loader in development
                    fallback: "style-loader"

                })
            },
            {
                test: /\.(jpeg|png|gif|jpg)$/i,
                use: [
                    'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
                    `image-webpack-loader?${JSON.stringify(query)}`
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader?name=public/fonts/[name].[ext]'
            },
            {
                test: /\.json$/,
                use: 'json-loader'
            }
        ]
    },
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // },
    resolveLoader: {
        moduleExtensions: ['-loader']
    },


    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    plugins: [
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery',

        }),
        new webpack.ProvidePlugin({
            "React": "react",
        }),
        new webpack.ProvidePlugin({
            "ReactDOM": "react-dom",
        }),
        new ExtractTextPlugin('[name].css'),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['main', 'vendor'],
            filename: '[name].js',
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })

    ]
};