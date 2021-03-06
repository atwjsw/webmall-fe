/*
* @Author: atwjsw
* @Date:   2017-09-16 18:49:54
* @Last Modified by:   atwjsw
* @Last Modified time: 2017-09-18 17:12:36
*/
var webpack             = require('webpack');
var ExtractTextPlugin   = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin   = require('html-webpack-plugin');

// 环境变量配置， dev / online
var WEBPACK_ENV         = process.env.WEBPACK_ENV || 'dev';
console.log(WEBPACK_ENV);

// 获取html-webpack-plugin参数的方法
var getHtmlConfig =  function(name, title) {
  return {
      template  : './src/view/' + name + '.html',
      filename  : 'view/' + name + '.html',
      title     : title,
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
  	'user-login' : ['./src/page/user-login/index.js'],
    'result' : ['./src/page/result/index.js']
  },  
  output: {
    filename : 'js/[name].js',
    publicPath : WEBPACK_ENV === 'online' ? '//s.happymmall.com/webmall-fe/dist/' : '/dist/',
    path : './dist'
  },
  externals: {
  	'jquery' : 'window.jQuery'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader:ExtractTextPlugin.extract("style-loader","css-loader")},
      { test: /\.(gif|png|jpg|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=100&name=/resource/[name].[ext]' },
      { test: /\.string$/, loader: 'html-loader'}]
  },  
  resolve : {
    alias : {
      node_modules  : __dirname + '/node_modules',
      util    : __dirname + '/src/util',
      page    : __dirname + '/src/page',
      service : __dirname + '/src/service',
      image   : __dirname + '/src/image',
    }
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
    new HtmlWebpackPlugin(getHtmlConfig('index', '首页')),
    new HtmlWebpackPlugin(getHtmlConfig('user-login', '用户登录')), 
    new HtmlWebpackPlugin(getHtmlConfig('result', '操作结果')),   
  ]
};

module.exports = config;