(function (factory) {
	typeof define === 'function' && define.amd ? define(factory) :
	factory();
})((function () { 'use strict';

	const {add}  = require('@myutils/shared'); 

	add(1,2);

}));
