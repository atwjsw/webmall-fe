/*
* @Author: atwjsw
* @Date:   2017-09-17 17:30:03
* @Last Modified by:   atwjsw
* @Last Modified time: 2017-09-17 17:44:56
*/
'use strict';

var _mm = require('util/mm.js');

var _cart = {
	//获取购物车数量
	getCartCount : function (resolve, reject) {
		_mm.request({
			url : _mm.getServerUrl('/cart/get_cart_product_count.do'),
			success : resolve,
			error : reject
		})
	}
}

module.exports = _cart;