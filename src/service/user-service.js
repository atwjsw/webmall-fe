/*
* @Author: atwjsw
* @Date:   2017-09-17 17:10:03
* @Last Modified by:   atwjsw
* @Last Modified time: 2017-09-18 00:02:28
*/

'use strict';

var _mm = require('util/mm.js');

var _user = {
	//用户登录
	login : function (userInfo, resolve, reject) {
		_mm.request({
			url 	: _mm.getServerUrl('/user/login.do'),
			data	: userInfo,
			method 	: 'POST',
			success : resolve,
			error 	: reject
		})
	},
	// 检查登录状态
	checkLogin : function (resolve, reject) {
		_mm.request({
			url : _mm.getServerUrl('/user/get_user_info.do'),
			method : 'POST',
			success : resolve,
			error : reject
		})
	},
	//登出
	logout : function (resolve, reject) {
		_mm.request({
			url : _mm.getServerUrl('/user/logout.do'),
			method : 'POST',
			success : resolve,
			error : reject
		})
	}
}

module.exports = _user;