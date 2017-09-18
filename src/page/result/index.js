/*
* @Author: atwjsw
* @Date:   2017-09-17 20:03:10
* @Last Modified by:   atwjsw
* @Last Modified time: 2017-09-17 20:43:14
*/

'use strict';
require('./index.css');
require('page/common/nav-simple/index.js');
var _mm = require('util/mm.js');

$(function() {
	var type = _mm.getUrlParam('type') || 'default',	
		$element = $('.' + type + '-success');
	//显示对应的提示元素
	$element.show();
})