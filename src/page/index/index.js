/*
* @Author: atwjsw
* @Date:   2017-09-16 17:00:26
* @Last Modified by:   atwjsw
* @Last Modified time: 2017-09-17 19:59:22
*/

'use strict';
require('page/common/nav-simple/index.js');
require('page/common/nav/index.js');
require('page/common/header/index.js');
var navSide = require('page/common/nav-side/index.js');
var _mm = require('util/mm.js');

navSide.init({
	name:'order-list'
});

// _mm.request({
// 	url: '/product/list.do?keyword=1',
// 	success: function (data, msg) {		
// 		console.log(data);		
// 	},
// 	error: function (errorMsg) {
// 		console.log(errorMsg);		
// 	}
// })


console.log(_mm.getUrlParam('test'));

var html = '<div>{{data}}</div>'
var data = {
	data : 'abc'
}

console.log(_mm.renderHtml(html, data));
