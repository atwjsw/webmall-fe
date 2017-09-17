/*
* @Author: atwjsw
* @Date:   2017-09-16 18:49:54
* @Last Modified by:   atwjsw
* @Last Modified time: 2017-09-16 23:43:26
*/
var webpack             = require('webpack');
var ExtractTextPlugin   = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin   = require('html-webpack-plugin');

// 环境变量配置， dev / online
var WEBPACK_ENV         = process.env.WEBPACK_ENV || 'dev';
console.log(WEBPACK_ENV);

// 获取html-webpack-plugin参数的方法
var getHtmlConfig =  function(name) {
  return {
      template  : './src/view/' + name + '.html',
      filename  : 'view/' + name + '.html',
      inject    : true,
      hash      : true,
      chunks    : ['common', name]
  }
}
//webpack config
var config = {
  entry: {
    'common' : ['./src/page/common/index.js', 'webpack-dev-server/client?http://localhost:8088'],
  	'index' : ['./src/page/index/index.js'],
  	'login' : ['./src/page/login/index.js']
  },  
  output: {
    filename : 'js/[name].js',
    publicPath : '/dist',
    path : './dist'
  },
  externals: {
  	'jquery' : 'window.jQuery'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader:ExtractTextPlugin.extract("style-loader","css-loader")},
      { test: /\.(gif|png|jpg|woff|svg|eot|tff)\??.*$/, loader: 'url-loader?limit=100&name=resource/[name].[ext]' }]
  },
  plugins: [
    // 独立通用模块的js/base.js
  	new webpack.optimize.CommonsChunkPlugin({
  		name : 'common',
  		filename : 'js/base.js'
  	}),
    // 把css单独打包到文件里
    new ExtractTextPlugin("css/[name].css"),
    // html模板处理
    new HtmlWebpackPlugin(getHtmlConfig('index')),
    new HtmlWebpackPlugin(getHtmlConfig('login')),   
  ]
};

module.exports = config;