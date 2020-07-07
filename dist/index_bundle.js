/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ColOption.js":
/*!**************************!*\
  !*** ./src/ColOption.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({wid1: \"#win21\", wid2: \"#win22\", barSize: 16, barColor: \"purple\" });\r\n\n\n//# sourceURL=webpack:///./src/ColOption.js?");

/***/ }),

/***/ "./src/RowOption.js":
/*!**************************!*\
  !*** ./src/RowOption.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({ firstSize: 100, minSize: 100, barSize: 16, direction: \"horizental\" });\n\n//# sourceURL=webpack:///./src/RowOption.js?");

/***/ }),

/***/ "./src/SplitWin.js":
/*!*************************!*\
  !*** ./src/SplitWin.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SplitWin; });\nfunction SplitWin(opt) {\r\n    this.option = Object.assign({}, {\r\n        wid1: \"#win1\",\r\n        wid2: \"#win2\",\r\n        barSize: 10,\r\n        barColor: \"green\",\r\n        direction: \"vertical\",\r\n        minSize: 50,\r\n        firstSize: \"auto\",\r\n        secondSize: \"auto\"\r\n    }, opt);\r\n    this.pos = 0;\r\n    this.isMoving = false;\r\n\r\n}\r\nSplitWin.prototype.makeGrid = function () {\r\n    var o = this.option;\r\n    var _grid = makeForm(\"div\"),\r\n        _w1 = makeForm(\"div\"),\r\n        _w2 = makeForm(\"div\"),\r\n        _bar = makeForm(\"div\");\r\n\r\n    _grid.appendChild(_w1);\r\n    _grid.appendChild(_w2);\r\n    _w1.appendChild(_bar);\r\n\r\n    fullSize(_grid);\r\n    fullSize(_w1);\r\n    fullSize(_w2);\r\n\r\n    _w1.style.position = \"relative\";\r\n    _w1.style.whiteSpace = \"nowrap\";\r\n    _w1.style.overflow = \"hidden\";\r\n\r\n    _bar.style.position = \"absolute\";\r\n    _bar.style.backgroundColor = o.barColor;\r\n    _bar.style.opacity = \"0.2\";\r\n\r\n    if (o.direction === \"vertical\") {\r\n        _bar.style.width = isNaN(o.barSize) ? o.barSize : o.barSize + \"px\";\r\n        _bar.style.height = \"100%\";\r\n        _bar.style.top = 0;\r\n        _bar.style.right = 0;\r\n        _bar.addEventListener('mouseenter', function (e) {\r\n            this.style.opacity = 0.8;\r\n            this.style.cursor = \"ew-resize\";\r\n\r\n        });\r\n    } else {\r\n        _bar.style.height = isNaN(o.barSize) ? o.barSize : o.barSize + \"px\";\r\n        _bar.style.width = \"100%\";\r\n        _bar.style.bottom = 0;\r\n        _bar.style.left = 0;\r\n        _bar.addEventListener('mouseenter', function (e) {\r\n            this.style.opacity = 0.8;\r\n            this.style.cursor = \"ns-resize\";\r\n\r\n        });\r\n    }\r\n    _bar.addEventListener('mouseout', function (e) {\r\n        this.style.opacity = 0.2;\r\n        this.style.cursor = \"\";\r\n    });\r\n    _bar.addEventListener('mousedown', e => {\r\n        this.pos = Direction(e.pageX, e.pageY);\r\n        this.isMoving = true;\r\n\r\n    });\r\n\r\n    window.addEventListener('mousemove', e => {\r\n        if (this.isMoving) {\r\n            var epos = Direction(e.pageX, e.pageY);\r\n            this.movingBar(_grid, epos);\r\n            this.pos = Direction(e.pageX, e.pageY);\r\n            _grid.style.cursor = Direction(\"ew-resize\", \"ns-resize\");\r\n            _bar.style.opacity = 0.8;\r\n            _w1.style.userSelect = \"none\";\r\n        }\r\n    });\r\n    window.addEventListener('mouseup', e => {\r\n        if (this.isMoving) {\r\n            var epos = Direction(e.pageX, e.pageY);\r\n            this.movingBar(_grid, epos)\r\n            this.pos = 0;\r\n            this.isMoving = false;\r\n        }\r\n        _grid.style.cursor = \"\";\r\n        _bar.style.opacity = 0.2;\r\n        _w1.style.userSelect = \"\";\r\n\r\n    });\r\n\r\n\r\n    function fullSize(obj) {\r\n        obj.style.width = \"100%\";\r\n        obj.style.height = \"100%\";\r\n        return obj;\r\n    }\r\n    function makeForm(form) {\r\n        return document.createElement(form);\r\n    }\r\n    function Direction(verticalVal, horizentalVal) {\r\n        return (o.direction === \"vertical\") ? verticalVal : horizentalVal;\r\n    }\r\n    var w1 = document.querySelector(o.wid1),\r\n        w2 = document.querySelector(o.wid2);\r\n\r\n    //  화면분할\r\n    var fsize = isNaN(o.firstSize) ? o.firstSize : Number(o.firstSize) + \"px\";\r\n    var ssize = isNaN(o.secondSize) ? o.secondSize : Number(o.secondSize) + \"px\";\r\n\r\n    _grid.style.display = \"grid\";\r\n\r\n    if (o.direction === \"vertical\") {\r\n        _grid.style.gridTemplateColumns = fsize + \" \" + ssize;\r\n        _w1.style.borderRight = \"1px solid #777\";\r\n    } else {\r\n        _grid.style.gridTemplateRows = fsize + \" \" + ssize;\r\n        _w1.style.borderBottom = \"1px solid #777\";\r\n    }\r\n\r\n\r\n    //DOM 등록\r\n\r\n    w1.before(_grid);\r\n    _w1.appendChild(w1);\r\n    _w2.appendChild(w2);\r\n\r\n    _grid.parentElement.style.width = \"100%\";\r\n    _grid.parentElement.style.height = \"100%\";\r\n\r\n}\r\nSplitWin.prototype.movingBar = function (obj, epos) {\r\n    var o = this.option;\r\n    var gpos, dpos, rpos;\r\n    gpos = (o.direction === \"vertical\") ?\r\n        window.getComputedStyle(obj).gridTemplateColumns.split(\" \")[0].replace(/[^0-9.]/g, \"\") :\r\n        window.getComputedStyle(obj).gridTemplateRows.split(\" \")[0].replace(/[^0-9.]/g, \"\");\r\n\r\n    dpos = epos - this.pos;\r\n    rpos = parseInt(gpos, 10) + dpos;\r\n\r\n    var minSize = isNaN(o.minSize) ? o.minSize.replace(/[^0-9.]/g, \"\") : Number(o.minSize);\r\n    rpos = (rpos < minSize) ? rpos = minSize : rpos;\r\n\r\n    if (o.direction === \"vertical\") {\r\n        obj.style.gridTemplateColumns = rpos + \"px auto\"\r\n\r\n    } else {\r\n        obj.style.gridTemplateRows = rpos + \"px auto\"\r\n\r\n    }\r\n\r\n\r\n}\n\n//# sourceURL=webpack:///./src/SplitWin.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _SplitWin_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SplitWin.js */ \"./src/SplitWin.js\");\n/* harmony import */ var _RowOption_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RowOption.js */ \"./src/RowOption.js\");\n/* harmony import */ var _ColOption_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ColOption.js */ \"./src/ColOption.js\");\n\r\n\r\n\r\nvar rowOption = Object.assign({},_RowOption_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],{wid1:\"#header\",wid2:\"#container\"});\r\nvar colOption = Object.assign({},_ColOption_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"],{wid1:\"#nav\",wid2:\"#section\"});\r\n\r\nnew _SplitWin_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](rowOption).makeGrid();\r\nnew _SplitWin_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](colOption).makeGrid();\r\n\r\nconsole.log(colOption,rowOption);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });