/*
* @Author: atwjsw
* @Date:   2017-09-17 18:03:38
* @Last Modified by:   atwjsw
* @Last Modified time: 2017-09-17 19:04:16
*/

'use strict'
require('./index.css');

var _mm = require('util/mm.js');
// 通用页面头部业务逻辑
var header = {
	init : function () {
		this.bindEvent();
	},
	onLoad : function () {
		var keyword = _mm.getUrlParam('keyword');
		// keyword存在，则回填输入框
		if(keyword) {
			$('#search-input').val(keyword);
		};
	},
	bindEvent : function () {
		var _this = this;
		// 点击搜索按钮后，做搜索提交
		$('#search-btn').click(function () {
			_this.searchSubmit();
		})
		//输入回车后，做搜索提交
		$('#search-input').keyup(function (e) {
			//13是回车键的KeyCode
			if (e.keyCode === 13) {
				_this.searchSubmit();
			}
		})
		
	},
	// 搜索的提交
	searchSubmit : function() {
		var keyword = $.trim($('#search-input').val());
		//如果提交的时候有keyword正常跳转到list页
		if(keyword) {
			window.location.href = './list.html?keyword=' + keyword;
		// 如果keyword为空，直接返回首页
		} else {
			_mm.goHome();
		}		
	}	
}

header.init();