/*
* @Author: atwjsw
* @Date:   2017-09-17 17:10:03
* @Last Modified by:   atwjsw
* @Last Modified time: 2017-09-17 17:44:31
*/

'use strict';

var _mm = require('util/mm.js');

var _user = {
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