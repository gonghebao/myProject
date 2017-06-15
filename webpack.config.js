/**
 * Created by ww on 2016/6/27.
 */
var path = require('path');
var webpack = require('webpack');
//var HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: ["./js/angular.min.js",'./js/index.js',"./js/numberRun.js",'./js/section/qsdssrztzs/qsdssrztzs.js','./js/section/wbmlw/wbmlw.js','./js/section/tesexiaoz/tesexiaoz.js',
            './js/section/fcjyqkzs/fcjyqkzs.js','./js/section/ssgdp/ssgdp.js','./gdpInfo/index.js',"./js/section/qsnsr/qsnsr_data.js",
        "./js/section/nsrdjzcqknddb/nsrdjzcqknddb.js",'./js/registerMaps.js',
        "./js/highcharts.js","./js/highcharts-3d.js",
        "./service/index.js","./js/bootstrap.min.js"
    ],
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    //devtool: 'source-map',
    plugins: [
        //new webpack.optimize.UglifyJsPlugin({
        //    compress: true,
        //    sourceMap: true
        //}),
        //new HtmlWebpackPlugin({
        //    template: './index.html',
        //    filename: './index.htm'
        //})
    ]
};