/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _libraryPretty = __webpack_require__(1);

	/**
	 *
	 * Registration of polymer iso-date-formatter custom element.
	 * ECMAScript 6 - using BabelJS traspiler.
	 */
	Polymer("iso-date-formatter", {
	    isoChanged: function isoChanged() {
	        if (!this.iso || new Date(this.iso) == "Invalid Date") {
	            return this.date = "Invalid Date";
	        }
	        if (this.simple == undefined) {
	            this.date = (0, _libraryPretty.prettyDate)(this.iso);
	        } else {
	            this.date = (0, _libraryPretty.simpleDateFormatter)(this.iso);
	        }
	    }
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	/*
	 * JavaScript Pretty Date
	 * Copyright (c) 2011 John Resig (ejohn.org)
	 * Licensed under the MIT and GPL licenses.
	 */

	// Takes an ISO time and returns a string representing how
	// long ago the date represents.
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	var monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	function prettyDate(time) {
	    var date = new Date(time),
	        diff = (new Date().getTime() - date.getTime()) / 1000,
	        day_diff = Math.floor(diff / 86400);

	    if (isNaN(day_diff) || day_diff < 0) return;

	    if (day_diff < 7) {
	        return day_diff == 0 && (diff < 60 && 'just now' || diff < 120 && '1 minute ago' || diff < 3600 && Math.floor(diff / 60) + ' minutes ago' || diff < 7200 && '1 hour ago' || diff < 86400 && Math.floor(diff / 3600) + ' hours ago') || day_diff == 1 && 'Yesterday' || day_diff < 7 && day_diff + ' days ago';
	    } else {
	        return simpleDateFormatter(time);
	    }
	}
	function simpleDateFormatter(time) {
	    var date = new Date(time);
	    return monthArray[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
	}
	exports.prettyDate = prettyDate;
	exports.simpleDateFormatter = simpleDateFormatter;

/***/ }
/******/ ]);