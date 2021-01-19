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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/index.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/index.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_chris_lawton_KpBXAOs80YI_unsplash_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/chris-lawton-KpBXAOs80YI-unsplash.jpg */ "./src/images/chris-lawton-KpBXAOs80YI-unsplash.jpg");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_chris_lawton_KpBXAOs80YI_unsplash_jpg__WEBPACK_IMPORTED_MODULE_3__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center fixed;\n  background-size: cover;\n  margin: 0%;\n  font-family: 'Open Sans', sans-serif;\n  height: 100vh; }\n\nimg {\n  height: 25vh;\n  width: 38vh; }\n\nh1 {\n  font-size: 2em;\n  color: white;\n  background-color: #7E8671ff;\n  padding: 0.5%;\n  margin: 0%; }\n\nh2 {\n  display: flex;\n  justify-content: center; }\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  background-color: #7E8671ff; }\n\n.hidden {\n  display: none !important; }\n\n.login-form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 8%;\n  margin: 6.5%;\n  border: 0.1em solid #000000;\n  border-radius: 0.4em;\n  background-color: #A1ABACff;\n  opacity: 0.8;\n  font-size: 1.3em; }\n\n.sub-header {\n  display: flex;\n  flex-direction: row;\n  margin-top: 2%;\n  justify-content: center; }\n\n.users-trips-section {\n  display: flex;\n  flex-direction: row;\n  margin-top: 2%;\n  justify-content: space-around;\n  height: 70vh; }\n\n.total-cost {\n  font-size: 1.5em;\n  border: 0.1em solid #000000;\n  border-radius: 0.4em;\n  background-color: #A1ABACff;\n  opacity: 0.8; }\n\n.widgets {\n  font-size: 1.1em;\n  border: 0.1em solid #000000;\n  border-radius: 0.4em;\n  background-color: #A1ABACff;\n  opacity: 0.8;\n  overflow: scroll; }\n\n.add-trip-btn,\n.year-drop-down {\n  background-color: #CCCCD8ff;\n  margin: 1.5% 1% 1% 5%;\n  padding: 0 2%;\n  font-size: 1.2em; }\n\nbutton {\n  border-radius: 0.4em;\n  border: none; }\n\n.logout-btn {\n  background-color: #CCCCD8ff;\n  font-size: 1.2em;\n  margin: 0.6%;\n  padding: 0 2%; }\n\n.exit-btn {\n  background-color: #CCCCD8ff;\n  margin-left: 75%;\n  font-size: 0.8em;\n  padding: 0.5%; }\n\n.form-btn-styling {\n  font-size: 1em; }\n\n.submit-btn {\n  background-color: #7E8671ff;\n  margin: 0 0 0 49%;\n  font-size: 1.5em;\n  padding: 0.5%; }\n\n.login-btn {\n  font-size: 1em;\n  padding: 0.5% 6%; }\n\n.login-credentials {\n  padding: 1%;\n  margin: 0; }\n\n.login-input {\n  padding: 1%;\n  font-size: 0.9em; }\n\n.add-new-trip-modal {\n  display: none;\n  position: fixed;\n  left: 11%;\n  top: 12%;\n  width: 80%;\n  height: 80%;\n  background-color: lightgray; }\n\n.modal-styling {\n  display: flex;\n  justify-content: center;\n  margin-top: 5%;\n  font-size: 1.3em; }\n\n@media only screen and (max-width: 375px) {\n  .main {\n    display: block;\n    height: 100%; } }\n", "",{"version":3,"sources":["webpack://./src/css/base.scss","webpack://./src/css/_variables.scss","webpack://./src/css/_buttons.scss","webpack://./src/css/_modal.scss","webpack://./src/css/_responsiveness.scss"],"names":[],"mappings":"AAAA;EACE,0EAAsD;EACtD,sBAAsB;EACtB,UAAU;EACV,oCAAoC;EACpC,aAAa,EAAA;;AAGf;EACE,YAAY;EACZ,WAAW,EAAA;;AAGb;EACE,cAAc;EACd,YAAY;EACZ,2BCf2B;EDgB3B,aAAa;EACb,UAAU,EAAA;;AAGZ;EACE,aAAa;EACb,uBAAuB,EAAA;;AAGzB;EACE,aAAa;EACb,8BAA8B;EAC9B,2BC5B2B,EAAA;;AD+B7B;EACE,wBAAsB,EAAA;;AAGxB;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,WAAW;EACX,YAAY;ECpCZ,2BAA2B;EAC3B,oBAAoB;EACpB,2BAA2B;EAC3B,YAAY;EDmCZ,gBAAgB,EAAA;;AAGlB;EClCE,aAAa;EACb,mBAAmB;EACnB,cAAc;EDkCd,uBAAuB,EAAA;;AAGzB;ECvCE,aAAa;EACb,mBAAmB;EACnB,cAAc;EDuCd,6BAA6B;EAC7B,YAAY,EAAA;;AAGd;EACE,gBAAgB;ECrDhB,2BAA2B;EAC3B,oBAAoB;EACpB,2BAA2B;EAC3B,YAAY,EAAA;;ADsDd;EACE,gBAAgB;EC1DhB,2BAA2B;EAC3B,oBAAoB;EACpB,2BAA2B;EAC3B,YAAY;EDyDZ,gBAAgB,EAAA;;AEhElB;;EAEE,2BDD2B;ECE3B,qBAAqB;EACrB,aAAa;EACb,gBAAgB,EAAA;;AAGlB;EACE,oBAAoB;EACpB,YAAY,EAAA;;AAGd;EACE,2BDb2B;ECc3B,gBAAgB;EAChB,YAAY;EACZ,aAAa,EAAA;;AAIf;EACE,2BDrB2B;ECsB3B,gBAAgB;EAChB,gBAAgB;EAChB,aAAa,EAAA;;AAGf;EACE,cAAc,EAAA;;AAGhB;EACE,2BAA2B;EAC3B,iBAAiB;EACjB,gBAAgB;EAChB,aAAa,EAAA;;AAIf;EACE,cAAc;EACd,gBAAgB,EAAA;;AAGlB;EACE,WAAW;EACX,SAAS,EAAA;;AAGX;EACE,WAAW;EACX,gBAAgB,EAAA;;ACrDlB;EACE,aAAa;EACb,eAAe;EACf,SAAS;EACT,QAAQ;EACR,UAAU;EACV,WAAW;EACX,2BAA4B,EAAA;;AAG9B;EACE,aAAa;EACb,uBAAuB;EACvB,cAAc;EACd,gBAAgB,EAAA;;ACdlB;EACE;IACE,cAAc;IACd,YAAY,EAAA,EACb","sourcesContent":["body {\n  background: $primary-background no-repeat center fixed;\n  background-size: cover;\n  margin: 0%;\n  font-family: 'Open Sans', sans-serif;\n  height: 100vh;\n}\n\nimg {\n  height: 25vh;\n  width: 38vh;\n}\n\nh1 {\n  font-size: 2em;\n  color: white;\n  background-color: $header-background;\n  padding: 0.5%; \n  margin: 0%;\n}\n\nh2 {\n  display: flex;\n  justify-content: center;\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  background-color: $header-background;\n}\n\n.hidden {\n  display:none!important;\n}\n\n.login-form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 8%;\n  margin: 6.5%;\n  @include widgetStyles();\n  font-size: 1.3em;\n}\n\n.sub-header {\n  @include mainBodyStyle();\n  justify-content: center;\n}\n\n.users-trips-section {\n  @include mainBodyStyle();\n  justify-content: space-around;\n  height: 70vh;\n}\n\n.total-cost {\n  font-size: 1.5em;\n  @include widgetStyles();\n}\n\n.widgets {\n  font-size: 1.1em;\n  @include widgetStyles();\n  overflow: scroll;\n}\n\n","$primary-background: url(../images/chris-lawton-KpBXAOs80YI-unsplash.jpg);\n$header-background: #7E8671ff;\n$button-background: #CCCCD8ff;\n\n@mixin widgetStyles() {\n  border: 0.1em solid #000000;\n  border-radius: 0.4em;\n  background-color: #A1ABACff;\n  opacity: 0.8;\n}\n\n@mixin mainBodyStyle() {\n  display: flex;\n  flex-direction: row;\n  margin-top: 2%;\n}","// Main Page Buttons\n.add-trip-btn,\n.year-drop-down {\n  background-color: $button-background;\n  margin: 1.5% 1% 1% 5%;\n  padding: 0 2%;\n  font-size: 1.2em;\n}\n\nbutton {\n  border-radius: 0.4em;\n  border: none;\n}\n\n.logout-btn {\n  background-color: $button-background;\n  font-size: 1.2em;\n  margin: 0.6%;\n  padding: 0 2%;\n}\n\n// Modal Buttons\n.exit-btn {\n  background-color: $button-background;\n  margin-left: 75%;\n  font-size: 0.8em;\n  padding: 0.5%;\n}\n\n.form-btn-styling {\n  font-size: 1em;\n}\n\n.submit-btn {\n  background-color: #7E8671ff;\n  margin: 0 0 0 49%;\n  font-size: 1.5em;\n  padding: 0.5%;\n}\n\n// Login Page Buttons\n.login-btn {\n  font-size: 1em;\n  padding: 0.5% 6%;\n}\n\n.login-credentials {\n  padding: 1%;\n  margin: 0;\n}\n\n.login-input {\n  padding: 1%;\n  font-size: 0.9em;\n}\n\n\n\n\n\n\n",".add-new-trip-modal {\n  display: none; \n  position: fixed; \n  left: 11%;\n  top: 12%;\n  width: 80%;\n  height: 80%;\n  background-color:  lightgray;\n}\n\n.modal-styling {\n  display: flex;\n  justify-content: center;\n  margin-top: 5%;\n  font-size: 1.3em;\n}\n","@media only screen and (max-width: 375px) {\n  .main {\n    display: block;\n    height: 100%;\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/Destination.js":
/*!****************************!*\
  !*** ./src/Destination.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Destination {
  constructor(destination) {
    this.id = destination.id;
    this.destination = destination.destination;
    this.estimatedLodgingCostPerDay = destination.estimatedLodgingCostPerDay;
    this.estimatedFlightCostPerPerson = destination.estimatedFlightCostPerPerson;
    this.image = destination.image;
    this.alt = destination.alt;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Destination);

/***/ }),

/***/ "./src/DestinationsRepo.js":
/*!*********************************!*\
  !*** ./src/DestinationsRepo.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class DestinationsRepo {
  constructor(destinations) {
    this.destinations = destinations || [];
  }

  filterDestinationsByIds(trips) {
    return trips.reduce((acc, trip) => {
      this.destinations.forEach(destination => {
        if (trip.destinationID === destination.id) {
          acc.push(destination)
        }
      })
      return acc
    }, [])
  }

  findDestionationIdByName(name) {
    const destination = this.destinations.find(destination => destination.destination === name)
    return destination.id
  }
}

/* harmony default export */ __webpack_exports__["default"] = (DestinationsRepo);

/***/ }),

/***/ "./src/Traveler.js":
/*!*************************!*\
  !*** ./src/Traveler.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Traveler {
  constructor(traveler) {
    this.id = traveler.id;
    this.name = traveler.name;
    this.travelerType = traveler.travelerType;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Traveler);

/***/ }),

/***/ "./src/Trip.js":
/*!*********************!*\
  !*** ./src/Trip.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Trip {
  constructor(trip) {
    this.id = trip.id;
    this.userID = trip.userID;
    this.destinationID = trip.destinationID;
    this.travelers = trip.travelers;
    this.date = trip.date;
    this.duration = trip.duration;
    this.status = trip.status;
    this.suggestedActivities = trip.suggestedActivities;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Trip);


/***/ }),

/***/ "./src/TripsRepo.js":
/*!**************************!*\
  !*** ./src/TripsRepo.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class TripsRepo {
  constructor(trips) {
    this.trips = trips || []
  }

  filterTripsByYear(year) {
    return this.trips.filter(trip => {
      return trip.date.split('/')[0] === year && trip.status === 'approved';
    })
  }

  filterPendingTrips(year) {
    return this.trips.filter(trip => {
      return trip.date.split('/')[0] > year && trip.status === 'pending';
    })
  }

  calculateTotalTripCostPerYear(destinations, travelerID) {
    return this.trips.reduce((totalCost, trip) => {
      destinations.forEach(destination => {
        if (trip.destinationID === destination.id && trip.userID === travelerID) {
          let costWithoutFee = (destination.estimatedLodgingCostPerDay * trip.duration) + (destination.estimatedFlightCostPerPerson * trip.travelers)
          totalCost = Math.round(costWithoutFee * 1.1)
        }
      })
      return totalCost
    }, 0)
  }
}

/* harmony default export */ __webpack_exports__["default"] = (TripsRepo); 

/***/ }),

/***/ "./src/apis.js":
/*!*********************!*\
  !*** ./src/apis.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function getData(path) {
  return fetch(path)
    .then(response => response.json())
    .catch(error => console.log(error))
}

function postData(path, data) {
  return fetch(path, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}

let apiCalls = {
  getTravelerData() {
    return getData('http://localhost:3001/api/v1/travelers/22')
  },

  getTripsData() {
    return getData('http://localhost:3001/api/v1/trips')
  },

  getDestinationsData() {
    return getData('http://localhost:3001/api/v1/destinations')
  },

  addNewTrip(trip) {
    return postData('http://localhost:3001/api/v1/trips', trip)
  },
}

/* harmony default export */ __webpack_exports__["default"] = (apiCalls);


/***/ }),

/***/ "./src/css/index.scss":
/*!****************************!*\
  !*** ./src/css/index.scss ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/index.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/domUpdates.js":
/*!***************************!*\
  !*** ./src/domUpdates.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const domUpdates = {
  displayTotalCost(element, totalCost) {
    element.innerHTML = '';
    element.innerHTML = `Total cost with 10% Travel Agent Fee: $${totalCost}`;
  },

  displayAllTrips(element) {
    element.innerHTML = '';
    element.innerHTML += `${this.displaySelected()}`
  },

  displaySelectedTrips(element, title, trips, destinations) {
    element.innerHTML = '';
    element.innerHTML = `
    <section>
      <h2>${title}</h2>
    ${this.displayTripDetails(trips, destinations)}
    </section>`;
  },

  displayTripDetails(trips, destinations) {
    let element = '';
    trips.forEach(trip => {
      destinations.forEach(destination => {
        if (trip.destinationID === destination.id) {
          element += `<div>
          <p>Departure Date: ${trip.date}</p>
          <p>Duration: ${trip.duration} days</p>
          <p>Location: ${destination.destination}</p>
          <img src=${destination.image} alt="image of ${destination.destination}">
          </div>`
        }
      })
    })
    return element
  },

  displayDestinationDropDown(element, destinationList) {
    destinationList.forEach(destination => {
      const opt = document.createElement('option');
      opt.innerHTML = destination;
      opt.value = destination;
      element.appendChild(opt);
    })
  },

  displayEstimatedCost(element, totalCost) {
    element.innerText = '';
    element.innerText = `Estimated Cost With 10% Travel Agent Fee: $${totalCost}`;
  },

  displayModal(element) {
    element.style.display = 'block';
  },

  hideModal(element) {
    element.style.display = 'none';
  },

  displayLoginErrorMsg(element) {
    element.innerText = '';
    element.innerText = `Username or password is incorrect. Please try again.`
  },
}

/* harmony default export */ __webpack_exports__["default"] = (domUpdates);

/***/ }),

/***/ "./src/images/chris-lawton-KpBXAOs80YI-unsplash.jpg":
/*!**********************************************************!*\
  !*** ./src/images/chris-lawton-KpBXAOs80YI-unsplash.jpg ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/chris-lawton-KpBXAOs80YI-unsplash.jpg");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/index.scss */ "./src/css/index.scss");
/* harmony import */ var _src_Traveler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/Traveler */ "./src/Traveler.js");
/* harmony import */ var _Trip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Trip */ "./src/Trip.js");
/* harmony import */ var _TripsRepo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TripsRepo */ "./src/TripsRepo.js");
/* harmony import */ var _Destination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Destination */ "./src/Destination.js");
/* harmony import */ var _DestinationsRepo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DestinationsRepo */ "./src/DestinationsRepo.js");
/* harmony import */ var _src_apis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/apis */ "./src/apis.js");
/* harmony import */ var _src_domUpdates__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/domUpdates */ "./src/domUpdates.js");









const displayPastTripsElement = document.querySelector('.past-trip-js');
const displayPresentTripsElement = document.querySelector('.present-trip-js');
const displayUpcomingTripsElement = document.querySelector('.upcoming-trip-js');
const displayPendingTripsElement = document.querySelector('.pending-trip-js');
const estimatedCostElement = document.querySelector('.estimated-cost');
const totalCostElement = document.querySelector('.total-cost-js');
const loginErrorMsg = document.querySelector('.login-error-msg')
const addNewTripModal = document.querySelector('.add-new-trip-modal-js');

const inputNumOfTravelers = document.querySelector('.number-of-travelers-js');
const startDate = document.querySelector('.calendar-start');
const endDate = document.querySelector('.calendar-end');
const destinationDropDownList = document.querySelector('.destination-drop-down');
const yearDropDown = document.querySelector('.year-drop-down-js');
const submitBtn = document.querySelector('.submit-btn-js');
const addNewTripBtn = document.querySelector('.add-trip-btn-js');
const modalExitBtn = document.querySelector('.exit-btn-js');
const usernameInput = document.querySelector('.username-input');
const passwordInput = document.querySelector('.password-input');
const loginBtn = document.querySelector('.login-btn-js');
const logoutBtn = document.querySelector('.logout-btn-js');

const mainPage = document.querySelector('.main');
const loginPage = document.querySelector('.login-form-js');

let traveler, trips, tripsRepo, destinations, destinationsRepo;
let newTrip = {status: "pending","suggestedActivities": []};

const destinationNames = [];

yearDropDown.addEventListener('change', getTotalCostByYear);
startDate.addEventListener('change', selectStartDate);
endDate.addEventListener('change', selectEndDate);
destinationDropDownList.addEventListener('change', selectDestination);

submitBtn.addEventListener('click', addNewTrip);
addNewTripBtn.addEventListener('click', openModal);
modalExitBtn.addEventListener('click', closeModal);
loginBtn.addEventListener('click', checkUsernameAndPassword);
logoutBtn.addEventListener('click', logOut);

Promise.all([_src_apis__WEBPACK_IMPORTED_MODULE_6__["default"].getTravelerData(), _src_apis__WEBPACK_IMPORTED_MODULE_6__["default"].getTripsData(), _src_apis__WEBPACK_IMPORTED_MODULE_6__["default"].getDestinationsData()])
.then(data => {
    let userTrips = data[1].trips.filter(trip => trip.userID === data[0].id)
    data[2].destinations.forEach(destination => {
        if (!destinationNames.includes(destination.destination)) {
          destinationNames.push(destination.destination)
        }
    })
   const travelObj = data.reduce((acc, current) => {
      acc = {
        id: data[0].id,
        name: data[0].name,
        travelerType: data[0].travelerType,
        trips: userTrips,
        destinations: data[2].destinations
      }
      return acc
    }, {})
    instantiateClasses(travelObj)
    displayTrips()
  });
  
function instantiateClasses(obj) {
  traveler = new _src_Traveler__WEBPACK_IMPORTED_MODULE_1__["default"](obj);
  trips = obj.trips.map(trip => new _Trip__WEBPACK_IMPORTED_MODULE_2__["default"](trip));
  tripsRepo = new _TripsRepo__WEBPACK_IMPORTED_MODULE_3__["default"](trips);
  destinations = obj.destinations.map(destination => new _Destination__WEBPACK_IMPORTED_MODULE_4__["default"](destination));
  destinationsRepo = new _DestinationsRepo__WEBPACK_IMPORTED_MODULE_5__["default"](destinations);
}

function getTotalCostByYear(event) {
  const chosenYear = event.target.value;
  const filterTripsByYear = tripsRepo.filterTripsByYear(chosenYear);
  const filterDestinations = destinationsRepo.filterDestinationsByIds(filterTripsByYear);
  const totalCost = tripsRepo.calculateTotalTripCostPerYear(filterDestinations, traveler.id);
  _src_domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].displayTotalCost(totalCostElement, totalCost);
}

function displayTrips() {
  displayPastTrips();
  displayPresntTrips();
  displayUpcomingTrips();
  displayPendingTrips();
  _src_domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].displayDestinationDropDown(destinationDropDownList, destinationNames);
}

function displayPastTrips() {
  const pastTrips = tripsRepo.filterTripsByYear('2019');
  const pastDestinations = destinationsRepo.filterDestinationsByIds(pastTrips);
  _src_domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].displaySelectedTrips(displayPastTripsElement, 'Past Trips', pastTrips, pastDestinations);
}

function displayPresntTrips() {
  const presentTrips = tripsRepo.filterTripsByYear('2020');
  const presentDestinations = destinationsRepo.filterDestinationsByIds(presentTrips);
  _src_domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].displaySelectedTrips(displayPresentTripsElement, 'Present Trips',presentTrips, presentDestinations);
}

function displayUpcomingTrips() {
  const upcomingTrips = tripsRepo.filterTripsByYear('2021');
  const upcomingDestinations = destinationsRepo.filterDestinationsByIds(upcomingTrips);
  _src_domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].displaySelectedTrips(displayUpcomingTripsElement, 'Upcoming Trips',upcomingTrips, upcomingDestinations);
}

function displayPendingTrips() {
  const pendingTrips = tripsRepo.filterPendingTrips('2019');
  const pendingDestinations = destinationsRepo.filterDestinationsByIds(pendingTrips);
  _src_domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].displaySelectedTrips(displayPendingTripsElement, 'Pending Trips',pendingTrips, pendingDestinations);
}

function selectStartDate(event) {
   newTrip.date = event.target.value.replaceAll('-', '/');
}

function selectEndDate(event) {
  const duration = returnDuration(newTrip.date, event.target.value.replaceAll('-', '/'));
   newTrip.duration = duration;
}

function returnDuration(date1, date2) {
  const dt1 = new Date(date1);
  const dt2 = new Date(date2);
  return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
}

function selectDestination(event) {
  newTrip.travelers = parseInt(inputNumOfTravelers.value);
  const selectDestinationId = destinationsRepo.findDestionationIdByName(event.target.value);
  newTrip.destinationID = selectDestinationId
  const destinationDetails = destinationsRepo.destinations.find(dest => dest.id === selectDestinationId);
  const estimatedCost = (destinationDetails.estimatedLodgingCostPerDay * newTrip.duration) + (destinationDetails.estimatedFlightCostPerPerson * newTrip.travelers)
  const totalCost = Math.round(estimatedCost * 1.1);
  _src_domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].displayEstimatedCost(estimatedCostElement, totalCost);
}

function addNewTrip(event) {
  event.preventDefault();
  const userNewTrip = {...newTrip, id: Date.now(), userID: traveler.id, travelers: parseInt(inputNumOfTravelers.value)}
  _src_apis__WEBPACK_IMPORTED_MODULE_6__["default"].addNewTrip(userNewTrip)
    .then(() => {
      tripsRepo.trips.push(userNewTrip);
      displayPendingTrips();
    });
  _src_domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].hideModal(addNewTripModal);
}

function openModal() {
  _src_domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].displayModal(addNewTripModal);
}

function closeModal() {
  _src_domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].hideModal(addNewTripModal);
}

function togglePages(pageOne, pageTwo, button) {
  pageOne.classList.toggle('hidden');
  pageTwo.classList.toggle('hidden');
  button.classList.toggle('hidden');
}

function checkUsernameAndPassword(event) {
  event.preventDefault()
  if (usernameInput.value === 'traveler22' && passwordInput.value === 'travel2020') {
    togglePages(loginPage, mainPage, logoutBtn);
  } else {
    _src_domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].displayLoginErrorMsg(loginErrorMsg);
  }
}
  
function logOut() {
  togglePages(loginPage, mainPage, logoutBtn);
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Rlc3RpbmF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9EZXN0aW5hdGlvbnNSZXBvLmpzIiwid2VicGFjazovLy8uL3NyYy9UcmF2ZWxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVHJpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVHJpcHNSZXBvLmpzIiwid2VicGFjazovLy8uL3NyYy9hcGlzLmpzIiwid2VicGFjazovLy8uL3NyYy9jc3MvaW5kZXguc2Nzcz83YWIxIiwid2VicGFjazovLy8uL3NyYy9kb21VcGRhdGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvY2hyaXMtbGF3dG9uLUtwQlhBT3M4MFlJLXVuc3BsYXNoLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FB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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSx1REFBVTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsdURBQVU7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHVEQUFVO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRSx1REFBVTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsdURBQVU7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsdURBQVU7QUFDWjs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLEVBQUUsaURBQVE7QUFDVjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsRUFBRSx1REFBVTtBQUNaOztBQUVBO0FBQ0EsRUFBRSx1REFBVTtBQUNaOztBQUVBO0FBQ0EsRUFBRSx1REFBVTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsSUFBSSx1REFBVTtBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEMiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi4vaW1hZ2VzL2NocmlzLWxhd3Rvbi1LcEJYQU9zODBZSS11bnNwbGFzaC5qcGdcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgbm8tcmVwZWF0IGNlbnRlciBmaXhlZDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBtYXJnaW46IDAlO1xcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgaGVpZ2h0OiAxMDB2aDsgfVxcblxcbmltZyB7XFxuICBoZWlnaHQ6IDI1dmg7XFxuICB3aWR0aDogMzh2aDsgfVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdFODY3MWZmO1xcbiAgcGFkZGluZzogMC41JTtcXG4gIG1hcmdpbjogMCU7IH1cXG5cXG5oMiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3RTg2NzFmZjsgfVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XFxuXFxuLmxvZ2luLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogOCU7XFxuICBtYXJnaW46IDYuNSU7XFxuICBib3JkZXI6IDAuMWVtIHNvbGlkICMwMDAwMDA7XFxuICBib3JkZXItcmFkaXVzOiAwLjRlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNBMUFCQUNmZjtcXG4gIG9wYWNpdHk6IDAuODtcXG4gIGZvbnQtc2l6ZTogMS4zZW07IH1cXG5cXG4uc3ViLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIG1hcmdpbi10b3A6IDIlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cXG5cXG4udXNlcnMtdHJpcHMtc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIG1hcmdpbi10b3A6IDIlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBoZWlnaHQ6IDcwdmg7IH1cXG5cXG4udG90YWwtY29zdCB7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgYm9yZGVyOiAwLjFlbSBzb2xpZCAjMDAwMDAwO1xcbiAgYm9yZGVyLXJhZGl1czogMC40ZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTFBQkFDZmY7XFxuICBvcGFjaXR5OiAwLjg7IH1cXG5cXG4ud2lkZ2V0cyB7XFxuICBmb250LXNpemU6IDEuMWVtO1xcbiAgYm9yZGVyOiAwLjFlbSBzb2xpZCAjMDAwMDAwO1xcbiAgYm9yZGVyLXJhZGl1czogMC40ZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTFBQkFDZmY7XFxuICBvcGFjaXR5OiAwLjg7XFxuICBvdmVyZmxvdzogc2Nyb2xsOyB9XFxuXFxuLmFkZC10cmlwLWJ0bixcXG4ueWVhci1kcm9wLWRvd24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NDQ0NEOGZmO1xcbiAgbWFyZ2luOiAxLjUlIDElIDElIDUlO1xcbiAgcGFkZGluZzogMCAyJTtcXG4gIGZvbnQtc2l6ZTogMS4yZW07IH1cXG5cXG5idXR0b24ge1xcbiAgYm9yZGVyLXJhZGl1czogMC40ZW07XFxuICBib3JkZXI6IG5vbmU7IH1cXG5cXG4ubG9nb3V0LWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0NDQ0Q4ZmY7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbiAgbWFyZ2luOiAwLjYlO1xcbiAgcGFkZGluZzogMCAyJTsgfVxcblxcbi5leGl0LWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0NDQ0Q4ZmY7XFxuICBtYXJnaW4tbGVmdDogNzUlO1xcbiAgZm9udC1zaXplOiAwLjhlbTtcXG4gIHBhZGRpbmc6IDAuNSU7IH1cXG5cXG4uZm9ybS1idG4tc3R5bGluZyB7XFxuICBmb250LXNpemU6IDFlbTsgfVxcblxcbi5zdWJtaXQtYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3RTg2NzFmZjtcXG4gIG1hcmdpbjogMCAwIDAgNDklO1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIHBhZGRpbmc6IDAuNSU7IH1cXG5cXG4ubG9naW4tYnRuIHtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgcGFkZGluZzogMC41JSA2JTsgfVxcblxcbi5sb2dpbi1jcmVkZW50aWFscyB7XFxuICBwYWRkaW5nOiAxJTtcXG4gIG1hcmdpbjogMDsgfVxcblxcbi5sb2dpbi1pbnB1dCB7XFxuICBwYWRkaW5nOiAxJTtcXG4gIGZvbnQtc2l6ZTogMC45ZW07IH1cXG5cXG4uYWRkLW5ldy10cmlwLW1vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiAxMSU7XFxuICB0b3A6IDEyJTtcXG4gIHdpZHRoOiA4MCU7XFxuICBoZWlnaHQ6IDgwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTsgfVxcblxcbi5tb2RhbC1zdHlsaW5nIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDUlO1xcbiAgZm9udC1zaXplOiAxLjNlbTsgfVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpIHtcXG4gIC5tYWluIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGhlaWdodDogMTAwJTsgfSB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9iYXNlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19idXR0b25zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX21vZGFsLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX3Jlc3BvbnNpdmVuZXNzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSwwRUFBc0Q7RUFDdEQsc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixvQ0FBb0M7RUFDcEMsYUFBYSxFQUFBOztBQUdmO0VBQ0UsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osMkJDZjJCO0VEZ0IzQixhQUFhO0VBQ2IsVUFBVSxFQUFBOztBQUdaO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QixFQUFBOztBQUd6QjtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsMkJDNUIyQixFQUFBOztBRCtCN0I7RUFDRSx3QkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQ3BDWiwyQkFBMkI7RUFDM0Isb0JBQW9CO0VBQ3BCLDJCQUEyQjtFQUMzQixZQUFZO0VEbUNaLGdCQUFnQixFQUFBOztBQUdsQjtFQ2xDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGNBQWM7RURrQ2QsdUJBQXVCLEVBQUE7O0FBR3pCO0VDdkNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsY0FBYztFRHVDZCw2QkFBNkI7RUFDN0IsWUFBWSxFQUFBOztBQUdkO0VBQ0UsZ0JBQWdCO0VDckRoQiwyQkFBMkI7RUFDM0Isb0JBQW9CO0VBQ3BCLDJCQUEyQjtFQUMzQixZQUFZLEVBQUE7O0FEc0RkO0VBQ0UsZ0JBQWdCO0VDMURoQiwyQkFBMkI7RUFDM0Isb0JBQW9CO0VBQ3BCLDJCQUEyQjtFQUMzQixZQUFZO0VEeURaLGdCQUFnQixFQUFBOztBRWhFbEI7O0VBRUUsMkJERDJCO0VDRTNCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0Usb0JBQW9CO0VBQ3BCLFlBQVksRUFBQTs7QUFHZDtFQUNFLDJCRGIyQjtFQ2MzQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGFBQWEsRUFBQTs7QUFJZjtFQUNFLDJCRHJCMkI7RUNzQjNCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsYUFBYSxFQUFBOztBQUdmO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLDJCQUEyQjtFQUMzQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGFBQWEsRUFBQTs7QUFJZjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxXQUFXO0VBQ1gsU0FBUyxFQUFBOztBQUdYO0VBQ0UsV0FBVztFQUNYLGdCQUFnQixFQUFBOztBQ3JEbEI7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFNBQVM7RUFDVCxRQUFRO0VBQ1IsVUFBVTtFQUNWLFdBQVc7RUFDWCwyQkFBNEIsRUFBQTs7QUFHOUI7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxnQkFBZ0IsRUFBQTs7QUNkbEI7RUFDRTtJQUNFLGNBQWM7SUFDZCxZQUFZLEVBQUEsRUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIGJhY2tncm91bmQ6ICRwcmltYXJ5LWJhY2tncm91bmQgbm8tcmVwZWF0IGNlbnRlciBmaXhlZDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBtYXJnaW46IDAlO1xcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuaW1nIHtcXG4gIGhlaWdodDogMjV2aDtcXG4gIHdpZHRoOiAzOHZoO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRoZWFkZXItYmFja2dyb3VuZDtcXG4gIHBhZGRpbmc6IDAuNSU7IFxcbiAgbWFyZ2luOiAwJTtcXG59XFxuXFxuaDIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRoZWFkZXItYmFja2dyb3VuZDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5Om5vbmUhaW1wb3J0YW50O1xcbn1cXG5cXG4ubG9naW4tZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA4JTtcXG4gIG1hcmdpbjogNi41JTtcXG4gIEBpbmNsdWRlIHdpZGdldFN0eWxlcygpO1xcbiAgZm9udC1zaXplOiAxLjNlbTtcXG59XFxuXFxuLnN1Yi1oZWFkZXIge1xcbiAgQGluY2x1ZGUgbWFpbkJvZHlTdHlsZSgpO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi51c2Vycy10cmlwcy1zZWN0aW9uIHtcXG4gIEBpbmNsdWRlIG1haW5Cb2R5U3R5bGUoKTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgaGVpZ2h0OiA3MHZoO1xcbn1cXG5cXG4udG90YWwtY29zdCB7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgQGluY2x1ZGUgd2lkZ2V0U3R5bGVzKCk7XFxufVxcblxcbi53aWRnZXRzIHtcXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxuICBAaW5jbHVkZSB3aWRnZXRTdHlsZXMoKTtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxufVxcblxcblwiLFwiJHByaW1hcnktYmFja2dyb3VuZDogdXJsKC4uL2ltYWdlcy9jaHJpcy1sYXd0b24tS3BCWEFPczgwWUktdW5zcGxhc2guanBnKTtcXG4kaGVhZGVyLWJhY2tncm91bmQ6ICM3RTg2NzFmZjtcXG4kYnV0dG9uLWJhY2tncm91bmQ6ICNDQ0NDRDhmZjtcXG5cXG5AbWl4aW4gd2lkZ2V0U3R5bGVzKCkge1xcbiAgYm9yZGVyOiAwLjFlbSBzb2xpZCAjMDAwMDAwO1xcbiAgYm9yZGVyLXJhZGl1czogMC40ZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTFBQkFDZmY7XFxuICBvcGFjaXR5OiAwLjg7XFxufVxcblxcbkBtaXhpbiBtYWluQm9keVN0eWxlKCkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBtYXJnaW4tdG9wOiAyJTtcXG59XCIsXCIvLyBNYWluIFBhZ2UgQnV0dG9uc1xcbi5hZGQtdHJpcC1idG4sXFxuLnllYXItZHJvcC1kb3duIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRidXR0b24tYmFja2dyb3VuZDtcXG4gIG1hcmdpbjogMS41JSAxJSAxJSA1JTtcXG4gIHBhZGRpbmc6IDAgMiU7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYm9yZGVyLXJhZGl1czogMC40ZW07XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5sb2dvdXQtYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRidXR0b24tYmFja2dyb3VuZDtcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxuICBtYXJnaW46IDAuNiU7XFxuICBwYWRkaW5nOiAwIDIlO1xcbn1cXG5cXG4vLyBNb2RhbCBCdXR0b25zXFxuLmV4aXQtYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRidXR0b24tYmFja2dyb3VuZDtcXG4gIG1hcmdpbi1sZWZ0OiA3NSU7XFxuICBmb250LXNpemU6IDAuOGVtO1xcbiAgcGFkZGluZzogMC41JTtcXG59XFxuXFxuLmZvcm0tYnRuLXN0eWxpbmcge1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcblxcbi5zdWJtaXQtYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3RTg2NzFmZjtcXG4gIG1hcmdpbjogMCAwIDAgNDklO1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIHBhZGRpbmc6IDAuNSU7XFxufVxcblxcbi8vIExvZ2luIFBhZ2UgQnV0dG9uc1xcbi5sb2dpbi1idG4ge1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBwYWRkaW5nOiAwLjUlIDYlO1xcbn1cXG5cXG4ubG9naW4tY3JlZGVudGlhbHMge1xcbiAgcGFkZGluZzogMSU7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5sb2dpbi1pbnB1dCB7XFxuICBwYWRkaW5nOiAxJTtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxufVxcblxcblxcblxcblxcblxcblxcblwiLFwiLmFkZC1uZXctdHJpcC1tb2RhbCB7XFxuICBkaXNwbGF5OiBub25lOyBcXG4gIHBvc2l0aW9uOiBmaXhlZDsgXFxuICBsZWZ0OiAxMSU7XFxuICB0b3A6IDEyJTtcXG4gIHdpZHRoOiA4MCU7XFxuICBoZWlnaHQ6IDgwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICBsaWdodGdyYXk7XFxufVxcblxcbi5tb2RhbC1zdHlsaW5nIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDUlO1xcbiAgZm9udC1zaXplOiAxLjNlbTtcXG59XFxuXCIsXCJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KSB7XFxuICAubWFpbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJjbGFzcyBEZXN0aW5hdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGRlc3RpbmF0aW9uKSB7XG4gICAgdGhpcy5pZCA9IGRlc3RpbmF0aW9uLmlkO1xuICAgIHRoaXMuZGVzdGluYXRpb24gPSBkZXN0aW5hdGlvbi5kZXN0aW5hdGlvbjtcbiAgICB0aGlzLmVzdGltYXRlZExvZGdpbmdDb3N0UGVyRGF5ID0gZGVzdGluYXRpb24uZXN0aW1hdGVkTG9kZ2luZ0Nvc3RQZXJEYXk7XG4gICAgdGhpcy5lc3RpbWF0ZWRGbGlnaHRDb3N0UGVyUGVyc29uID0gZGVzdGluYXRpb24uZXN0aW1hdGVkRmxpZ2h0Q29zdFBlclBlcnNvbjtcbiAgICB0aGlzLmltYWdlID0gZGVzdGluYXRpb24uaW1hZ2U7XG4gICAgdGhpcy5hbHQgPSBkZXN0aW5hdGlvbi5hbHQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGVzdGluYXRpb247IiwiY2xhc3MgRGVzdGluYXRpb25zUmVwbyB7XG4gIGNvbnN0cnVjdG9yKGRlc3RpbmF0aW9ucykge1xuICAgIHRoaXMuZGVzdGluYXRpb25zID0gZGVzdGluYXRpb25zIHx8IFtdO1xuICB9XG5cbiAgZmlsdGVyRGVzdGluYXRpb25zQnlJZHModHJpcHMpIHtcbiAgICByZXR1cm4gdHJpcHMucmVkdWNlKChhY2MsIHRyaXApID0+IHtcbiAgICAgIHRoaXMuZGVzdGluYXRpb25zLmZvckVhY2goZGVzdGluYXRpb24gPT4ge1xuICAgICAgICBpZiAodHJpcC5kZXN0aW5hdGlvbklEID09PSBkZXN0aW5hdGlvbi5pZCkge1xuICAgICAgICAgIGFjYy5wdXNoKGRlc3RpbmF0aW9uKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgcmV0dXJuIGFjY1xuICAgIH0sIFtdKVxuICB9XG5cbiAgZmluZERlc3Rpb25hdGlvbklkQnlOYW1lKG5hbWUpIHtcbiAgICBjb25zdCBkZXN0aW5hdGlvbiA9IHRoaXMuZGVzdGluYXRpb25zLmZpbmQoZGVzdGluYXRpb24gPT4gZGVzdGluYXRpb24uZGVzdGluYXRpb24gPT09IG5hbWUpXG4gICAgcmV0dXJuIGRlc3RpbmF0aW9uLmlkXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGVzdGluYXRpb25zUmVwbzsiLCJjbGFzcyBUcmF2ZWxlciB7XG4gIGNvbnN0cnVjdG9yKHRyYXZlbGVyKSB7XG4gICAgdGhpcy5pZCA9IHRyYXZlbGVyLmlkO1xuICAgIHRoaXMubmFtZSA9IHRyYXZlbGVyLm5hbWU7XG4gICAgdGhpcy50cmF2ZWxlclR5cGUgPSB0cmF2ZWxlci50cmF2ZWxlclR5cGU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJhdmVsZXI7IiwiY2xhc3MgVHJpcCB7XG4gIGNvbnN0cnVjdG9yKHRyaXApIHtcbiAgICB0aGlzLmlkID0gdHJpcC5pZDtcbiAgICB0aGlzLnVzZXJJRCA9IHRyaXAudXNlcklEO1xuICAgIHRoaXMuZGVzdGluYXRpb25JRCA9IHRyaXAuZGVzdGluYXRpb25JRDtcbiAgICB0aGlzLnRyYXZlbGVycyA9IHRyaXAudHJhdmVsZXJzO1xuICAgIHRoaXMuZGF0ZSA9IHRyaXAuZGF0ZTtcbiAgICB0aGlzLmR1cmF0aW9uID0gdHJpcC5kdXJhdGlvbjtcbiAgICB0aGlzLnN0YXR1cyA9IHRyaXAuc3RhdHVzO1xuICAgIHRoaXMuc3VnZ2VzdGVkQWN0aXZpdGllcyA9IHRyaXAuc3VnZ2VzdGVkQWN0aXZpdGllcztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmlwO1xuIiwiY2xhc3MgVHJpcHNSZXBvIHtcbiAgY29uc3RydWN0b3IodHJpcHMpIHtcbiAgICB0aGlzLnRyaXBzID0gdHJpcHMgfHwgW11cbiAgfVxuXG4gIGZpbHRlclRyaXBzQnlZZWFyKHllYXIpIHtcbiAgICByZXR1cm4gdGhpcy50cmlwcy5maWx0ZXIodHJpcCA9PiB7XG4gICAgICByZXR1cm4gdHJpcC5kYXRlLnNwbGl0KCcvJylbMF0gPT09IHllYXIgJiYgdHJpcC5zdGF0dXMgPT09ICdhcHByb3ZlZCc7XG4gICAgfSlcbiAgfVxuXG4gIGZpbHRlclBlbmRpbmdUcmlwcyh5ZWFyKSB7XG4gICAgcmV0dXJuIHRoaXMudHJpcHMuZmlsdGVyKHRyaXAgPT4ge1xuICAgICAgcmV0dXJuIHRyaXAuZGF0ZS5zcGxpdCgnLycpWzBdID4geWVhciAmJiB0cmlwLnN0YXR1cyA9PT0gJ3BlbmRpbmcnO1xuICAgIH0pXG4gIH1cblxuICBjYWxjdWxhdGVUb3RhbFRyaXBDb3N0UGVyWWVhcihkZXN0aW5hdGlvbnMsIHRyYXZlbGVySUQpIHtcbiAgICByZXR1cm4gdGhpcy50cmlwcy5yZWR1Y2UoKHRvdGFsQ29zdCwgdHJpcCkgPT4ge1xuICAgICAgZGVzdGluYXRpb25zLmZvckVhY2goZGVzdGluYXRpb24gPT4ge1xuICAgICAgICBpZiAodHJpcC5kZXN0aW5hdGlvbklEID09PSBkZXN0aW5hdGlvbi5pZCAmJiB0cmlwLnVzZXJJRCA9PT0gdHJhdmVsZXJJRCkge1xuICAgICAgICAgIGxldCBjb3N0V2l0aG91dEZlZSA9IChkZXN0aW5hdGlvbi5lc3RpbWF0ZWRMb2RnaW5nQ29zdFBlckRheSAqIHRyaXAuZHVyYXRpb24pICsgKGRlc3RpbmF0aW9uLmVzdGltYXRlZEZsaWdodENvc3RQZXJQZXJzb24gKiB0cmlwLnRyYXZlbGVycylcbiAgICAgICAgICB0b3RhbENvc3QgPSBNYXRoLnJvdW5kKGNvc3RXaXRob3V0RmVlICogMS4xKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgcmV0dXJuIHRvdGFsQ29zdFxuICAgIH0sIDApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJpcHNSZXBvOyAiLCJmdW5jdGlvbiBnZXREYXRhKHBhdGgpIHtcbiAgcmV0dXJuIGZldGNoKHBhdGgpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXG59XG5cbmZ1bmN0aW9uIHBvc3REYXRhKHBhdGgsIGRhdGEpIHtcbiAgcmV0dXJuIGZldGNoKHBhdGgsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKVxuICB9KVxufVxuXG5sZXQgYXBpQ2FsbHMgPSB7XG4gIGdldFRyYXZlbGVyRGF0YSgpIHtcbiAgICByZXR1cm4gZ2V0RGF0YSgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS90cmF2ZWxlcnMvMjInKVxuICB9LFxuXG4gIGdldFRyaXBzRGF0YSgpIHtcbiAgICByZXR1cm4gZ2V0RGF0YSgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS90cmlwcycpXG4gIH0sXG5cbiAgZ2V0RGVzdGluYXRpb25zRGF0YSgpIHtcbiAgICByZXR1cm4gZ2V0RGF0YSgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS9kZXN0aW5hdGlvbnMnKVxuICB9LFxuXG4gIGFkZE5ld1RyaXAodHJpcCkge1xuICAgIHJldHVybiBwb3N0RGF0YSgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS90cmlwcycsIHRyaXApXG4gIH0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFwaUNhbGxzO1xuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImNvbnN0IGRvbVVwZGF0ZXMgPSB7XG4gIGRpc3BsYXlUb3RhbENvc3QoZWxlbWVudCwgdG90YWxDb3N0KSB7XG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IGBUb3RhbCBjb3N0IHdpdGggMTAlIFRyYXZlbCBBZ2VudCBGZWU6ICQke3RvdGFsQ29zdH1gO1xuICB9LFxuXG4gIGRpc3BsYXlBbGxUcmlwcyhlbGVtZW50KSB7XG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgICBlbGVtZW50LmlubmVySFRNTCArPSBgJHt0aGlzLmRpc3BsYXlTZWxlY3RlZCgpfWBcbiAgfSxcblxuICBkaXNwbGF5U2VsZWN0ZWRUcmlwcyhlbGVtZW50LCB0aXRsZSwgdHJpcHMsIGRlc3RpbmF0aW9ucykge1xuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBgXG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDI+JHt0aXRsZX08L2gyPlxuICAgICR7dGhpcy5kaXNwbGF5VHJpcERldGFpbHModHJpcHMsIGRlc3RpbmF0aW9ucyl9XG4gICAgPC9zZWN0aW9uPmA7XG4gIH0sXG5cbiAgZGlzcGxheVRyaXBEZXRhaWxzKHRyaXBzLCBkZXN0aW5hdGlvbnMpIHtcbiAgICBsZXQgZWxlbWVudCA9ICcnO1xuICAgIHRyaXBzLmZvckVhY2godHJpcCA9PiB7XG4gICAgICBkZXN0aW5hdGlvbnMuZm9yRWFjaChkZXN0aW5hdGlvbiA9PiB7XG4gICAgICAgIGlmICh0cmlwLmRlc3RpbmF0aW9uSUQgPT09IGRlc3RpbmF0aW9uLmlkKSB7XG4gICAgICAgICAgZWxlbWVudCArPSBgPGRpdj5cbiAgICAgICAgICA8cD5EZXBhcnR1cmUgRGF0ZTogJHt0cmlwLmRhdGV9PC9wPlxuICAgICAgICAgIDxwPkR1cmF0aW9uOiAke3RyaXAuZHVyYXRpb259IGRheXM8L3A+XG4gICAgICAgICAgPHA+TG9jYXRpb246ICR7ZGVzdGluYXRpb24uZGVzdGluYXRpb259PC9wPlxuICAgICAgICAgIDxpbWcgc3JjPSR7ZGVzdGluYXRpb24uaW1hZ2V9IGFsdD1cImltYWdlIG9mICR7ZGVzdGluYXRpb24uZGVzdGluYXRpb259XCI+XG4gICAgICAgICAgPC9kaXY+YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gICAgcmV0dXJuIGVsZW1lbnRcbiAgfSxcblxuICBkaXNwbGF5RGVzdGluYXRpb25Ecm9wRG93bihlbGVtZW50LCBkZXN0aW5hdGlvbkxpc3QpIHtcbiAgICBkZXN0aW5hdGlvbkxpc3QuZm9yRWFjaChkZXN0aW5hdGlvbiA9PiB7XG4gICAgICBjb25zdCBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgIG9wdC5pbm5lckhUTUwgPSBkZXN0aW5hdGlvbjtcbiAgICAgIG9wdC52YWx1ZSA9IGRlc3RpbmF0aW9uO1xuICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChvcHQpO1xuICAgIH0pXG4gIH0sXG5cbiAgZGlzcGxheUVzdGltYXRlZENvc3QoZWxlbWVudCwgdG90YWxDb3N0KSB7XG4gICAgZWxlbWVudC5pbm5lclRleHQgPSAnJztcbiAgICBlbGVtZW50LmlubmVyVGV4dCA9IGBFc3RpbWF0ZWQgQ29zdCBXaXRoIDEwJSBUcmF2ZWwgQWdlbnQgRmVlOiAkJHt0b3RhbENvc3R9YDtcbiAgfSxcblxuICBkaXNwbGF5TW9kYWwoZWxlbWVudCkge1xuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIH0sXG5cbiAgaGlkZU1vZGFsKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH0sXG5cbiAgZGlzcGxheUxvZ2luRXJyb3JNc2coZWxlbWVudCkge1xuICAgIGVsZW1lbnQuaW5uZXJUZXh0ID0gJyc7XG4gICAgZWxlbWVudC5pbm5lclRleHQgPSBgVXNlcm5hbWUgb3IgcGFzc3dvcmQgaXMgaW5jb3JyZWN0LiBQbGVhc2UgdHJ5IGFnYWluLmBcbiAgfSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgZG9tVXBkYXRlczsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9jaHJpcy1sYXd0b24tS3BCWEFPczgwWUktdW5zcGxhc2guanBnXCI7IiwiaW1wb3J0ICcuL2Nzcy9pbmRleC5zY3NzJztcbmltcG9ydCBUcmF2ZWxlciBmcm9tICcuLi9zcmMvVHJhdmVsZXInO1xuaW1wb3J0IFRyaXAgZnJvbSAnLi9UcmlwJztcbmltcG9ydCBUcmlwc1JlcG8gZnJvbSAnLi9Ucmlwc1JlcG8nO1xuaW1wb3J0IERlc3RpbmF0aW9uIGZyb20gJy4vRGVzdGluYXRpb24nO1xuaW1wb3J0IERlc3RpbmF0aW9uc1JlcG8gZnJvbSAnLi9EZXN0aW5hdGlvbnNSZXBvJztcbmltcG9ydCBhcGlDYWxscyBmcm9tICcuLi9zcmMvYXBpcyc7XG5pbXBvcnQgZG9tVXBkYXRlcyBmcm9tICcuLi9zcmMvZG9tVXBkYXRlcyc7XG5cbmNvbnN0IGRpc3BsYXlQYXN0VHJpcHNFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhc3QtdHJpcC1qcycpO1xuY29uc3QgZGlzcGxheVByZXNlbnRUcmlwc0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlc2VudC10cmlwLWpzJyk7XG5jb25zdCBkaXNwbGF5VXBjb21pbmdUcmlwc0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXBjb21pbmctdHJpcC1qcycpO1xuY29uc3QgZGlzcGxheVBlbmRpbmdUcmlwc0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGVuZGluZy10cmlwLWpzJyk7XG5jb25zdCBlc3RpbWF0ZWRDb3N0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lc3RpbWF0ZWQtY29zdCcpO1xuY29uc3QgdG90YWxDb3N0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3RhbC1jb3N0LWpzJyk7XG5jb25zdCBsb2dpbkVycm9yTXNnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ2luLWVycm9yLW1zZycpXG5jb25zdCBhZGROZXdUcmlwTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLW5ldy10cmlwLW1vZGFsLWpzJyk7XG5cbmNvbnN0IGlucHV0TnVtT2ZUcmF2ZWxlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubnVtYmVyLW9mLXRyYXZlbGVycy1qcycpO1xuY29uc3Qgc3RhcnREYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbGVuZGFyLXN0YXJ0Jyk7XG5jb25zdCBlbmREYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbGVuZGFyLWVuZCcpO1xuY29uc3QgZGVzdGluYXRpb25Ecm9wRG93bkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzdGluYXRpb24tZHJvcC1kb3duJyk7XG5jb25zdCB5ZWFyRHJvcERvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcueWVhci1kcm9wLWRvd24tanMnKTtcbmNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQtYnRuLWpzJyk7XG5jb25zdCBhZGROZXdUcmlwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10cmlwLWJ0bi1qcycpO1xuY29uc3QgbW9kYWxFeGl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV4aXQtYnRuLWpzJyk7XG5jb25zdCB1c2VybmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXJuYW1lLWlucHV0Jyk7XG5jb25zdCBwYXNzd29yZElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhc3N3b3JkLWlucHV0Jyk7XG5jb25zdCBsb2dpbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dpbi1idG4tanMnKTtcbmNvbnN0IGxvZ291dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dvdXQtYnRuLWpzJyk7XG5cbmNvbnN0IG1haW5QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbmNvbnN0IGxvZ2luUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dpbi1mb3JtLWpzJyk7XG5cbmxldCB0cmF2ZWxlciwgdHJpcHMsIHRyaXBzUmVwbywgZGVzdGluYXRpb25zLCBkZXN0aW5hdGlvbnNSZXBvO1xubGV0IG5ld1RyaXAgPSB7c3RhdHVzOiBcInBlbmRpbmdcIixcInN1Z2dlc3RlZEFjdGl2aXRpZXNcIjogW119O1xuXG5jb25zdCBkZXN0aW5hdGlvbk5hbWVzID0gW107XG5cbnllYXJEcm9wRG93bi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBnZXRUb3RhbENvc3RCeVllYXIpO1xuc3RhcnREYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHNlbGVjdFN0YXJ0RGF0ZSk7XG5lbmREYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHNlbGVjdEVuZERhdGUpO1xuZGVzdGluYXRpb25Ecm9wRG93bkxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgc2VsZWN0RGVzdGluYXRpb24pO1xuXG5zdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGROZXdUcmlwKTtcbmFkZE5ld1RyaXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuTW9kYWwpO1xubW9kYWxFeGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2RhbCk7XG5sb2dpbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoZWNrVXNlcm5hbWVBbmRQYXNzd29yZCk7XG5sb2dvdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2dPdXQpO1xuXG5Qcm9taXNlLmFsbChbYXBpQ2FsbHMuZ2V0VHJhdmVsZXJEYXRhKCksIGFwaUNhbGxzLmdldFRyaXBzRGF0YSgpLCBhcGlDYWxscy5nZXREZXN0aW5hdGlvbnNEYXRhKCldKVxuLnRoZW4oZGF0YSA9PiB7XG4gICAgbGV0IHVzZXJUcmlwcyA9IGRhdGFbMV0udHJpcHMuZmlsdGVyKHRyaXAgPT4gdHJpcC51c2VySUQgPT09IGRhdGFbMF0uaWQpXG4gICAgZGF0YVsyXS5kZXN0aW5hdGlvbnMuZm9yRWFjaChkZXN0aW5hdGlvbiA9PiB7XG4gICAgICAgIGlmICghZGVzdGluYXRpb25OYW1lcy5pbmNsdWRlcyhkZXN0aW5hdGlvbi5kZXN0aW5hdGlvbikpIHtcbiAgICAgICAgICBkZXN0aW5hdGlvbk5hbWVzLnB1c2goZGVzdGluYXRpb24uZGVzdGluYXRpb24pXG4gICAgICAgIH1cbiAgICB9KVxuICAgY29uc3QgdHJhdmVsT2JqID0gZGF0YS5yZWR1Y2UoKGFjYywgY3VycmVudCkgPT4ge1xuICAgICAgYWNjID0ge1xuICAgICAgICBpZDogZGF0YVswXS5pZCxcbiAgICAgICAgbmFtZTogZGF0YVswXS5uYW1lLFxuICAgICAgICB0cmF2ZWxlclR5cGU6IGRhdGFbMF0udHJhdmVsZXJUeXBlLFxuICAgICAgICB0cmlwczogdXNlclRyaXBzLFxuICAgICAgICBkZXN0aW5hdGlvbnM6IGRhdGFbMl0uZGVzdGluYXRpb25zXG4gICAgICB9XG4gICAgICByZXR1cm4gYWNjXG4gICAgfSwge30pXG4gICAgaW5zdGFudGlhdGVDbGFzc2VzKHRyYXZlbE9iailcbiAgICBkaXNwbGF5VHJpcHMoKVxuICB9KTtcbiAgXG5mdW5jdGlvbiBpbnN0YW50aWF0ZUNsYXNzZXMob2JqKSB7XG4gIHRyYXZlbGVyID0gbmV3IFRyYXZlbGVyKG9iaik7XG4gIHRyaXBzID0gb2JqLnRyaXBzLm1hcCh0cmlwID0+IG5ldyBUcmlwKHRyaXApKTtcbiAgdHJpcHNSZXBvID0gbmV3IFRyaXBzUmVwbyh0cmlwcyk7XG4gIGRlc3RpbmF0aW9ucyA9IG9iai5kZXN0aW5hdGlvbnMubWFwKGRlc3RpbmF0aW9uID0+IG5ldyBEZXN0aW5hdGlvbihkZXN0aW5hdGlvbikpO1xuICBkZXN0aW5hdGlvbnNSZXBvID0gbmV3IERlc3RpbmF0aW9uc1JlcG8oZGVzdGluYXRpb25zKTtcbn1cblxuZnVuY3Rpb24gZ2V0VG90YWxDb3N0QnlZZWFyKGV2ZW50KSB7XG4gIGNvbnN0IGNob3NlblllYXIgPSBldmVudC50YXJnZXQudmFsdWU7XG4gIGNvbnN0IGZpbHRlclRyaXBzQnlZZWFyID0gdHJpcHNSZXBvLmZpbHRlclRyaXBzQnlZZWFyKGNob3NlblllYXIpO1xuICBjb25zdCBmaWx0ZXJEZXN0aW5hdGlvbnMgPSBkZXN0aW5hdGlvbnNSZXBvLmZpbHRlckRlc3RpbmF0aW9uc0J5SWRzKGZpbHRlclRyaXBzQnlZZWFyKTtcbiAgY29uc3QgdG90YWxDb3N0ID0gdHJpcHNSZXBvLmNhbGN1bGF0ZVRvdGFsVHJpcENvc3RQZXJZZWFyKGZpbHRlckRlc3RpbmF0aW9ucywgdHJhdmVsZXIuaWQpO1xuICBkb21VcGRhdGVzLmRpc3BsYXlUb3RhbENvc3QodG90YWxDb3N0RWxlbWVudCwgdG90YWxDb3N0KTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVRyaXBzKCkge1xuICBkaXNwbGF5UGFzdFRyaXBzKCk7XG4gIGRpc3BsYXlQcmVzbnRUcmlwcygpO1xuICBkaXNwbGF5VXBjb21pbmdUcmlwcygpO1xuICBkaXNwbGF5UGVuZGluZ1RyaXBzKCk7XG4gIGRvbVVwZGF0ZXMuZGlzcGxheURlc3RpbmF0aW9uRHJvcERvd24oZGVzdGluYXRpb25Ecm9wRG93bkxpc3QsIGRlc3RpbmF0aW9uTmFtZXMpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5UGFzdFRyaXBzKCkge1xuICBjb25zdCBwYXN0VHJpcHMgPSB0cmlwc1JlcG8uZmlsdGVyVHJpcHNCeVllYXIoJzIwMTknKTtcbiAgY29uc3QgcGFzdERlc3RpbmF0aW9ucyA9IGRlc3RpbmF0aW9uc1JlcG8uZmlsdGVyRGVzdGluYXRpb25zQnlJZHMocGFzdFRyaXBzKTtcbiAgZG9tVXBkYXRlcy5kaXNwbGF5U2VsZWN0ZWRUcmlwcyhkaXNwbGF5UGFzdFRyaXBzRWxlbWVudCwgJ1Bhc3QgVHJpcHMnLCBwYXN0VHJpcHMsIHBhc3REZXN0aW5hdGlvbnMpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5UHJlc250VHJpcHMoKSB7XG4gIGNvbnN0IHByZXNlbnRUcmlwcyA9IHRyaXBzUmVwby5maWx0ZXJUcmlwc0J5WWVhcignMjAyMCcpO1xuICBjb25zdCBwcmVzZW50RGVzdGluYXRpb25zID0gZGVzdGluYXRpb25zUmVwby5maWx0ZXJEZXN0aW5hdGlvbnNCeUlkcyhwcmVzZW50VHJpcHMpO1xuICBkb21VcGRhdGVzLmRpc3BsYXlTZWxlY3RlZFRyaXBzKGRpc3BsYXlQcmVzZW50VHJpcHNFbGVtZW50LCAnUHJlc2VudCBUcmlwcycscHJlc2VudFRyaXBzLCBwcmVzZW50RGVzdGluYXRpb25zKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVVwY29taW5nVHJpcHMoKSB7XG4gIGNvbnN0IHVwY29taW5nVHJpcHMgPSB0cmlwc1JlcG8uZmlsdGVyVHJpcHNCeVllYXIoJzIwMjEnKTtcbiAgY29uc3QgdXBjb21pbmdEZXN0aW5hdGlvbnMgPSBkZXN0aW5hdGlvbnNSZXBvLmZpbHRlckRlc3RpbmF0aW9uc0J5SWRzKHVwY29taW5nVHJpcHMpO1xuICBkb21VcGRhdGVzLmRpc3BsYXlTZWxlY3RlZFRyaXBzKGRpc3BsYXlVcGNvbWluZ1RyaXBzRWxlbWVudCwgJ1VwY29taW5nIFRyaXBzJyx1cGNvbWluZ1RyaXBzLCB1cGNvbWluZ0Rlc3RpbmF0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQZW5kaW5nVHJpcHMoKSB7XG4gIGNvbnN0IHBlbmRpbmdUcmlwcyA9IHRyaXBzUmVwby5maWx0ZXJQZW5kaW5nVHJpcHMoJzIwMTknKTtcbiAgY29uc3QgcGVuZGluZ0Rlc3RpbmF0aW9ucyA9IGRlc3RpbmF0aW9uc1JlcG8uZmlsdGVyRGVzdGluYXRpb25zQnlJZHMocGVuZGluZ1RyaXBzKTtcbiAgZG9tVXBkYXRlcy5kaXNwbGF5U2VsZWN0ZWRUcmlwcyhkaXNwbGF5UGVuZGluZ1RyaXBzRWxlbWVudCwgJ1BlbmRpbmcgVHJpcHMnLHBlbmRpbmdUcmlwcywgcGVuZGluZ0Rlc3RpbmF0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdFN0YXJ0RGF0ZShldmVudCkge1xuICAgbmV3VHJpcC5kYXRlID0gZXZlbnQudGFyZ2V0LnZhbHVlLnJlcGxhY2VBbGwoJy0nLCAnLycpO1xufVxuXG5mdW5jdGlvbiBzZWxlY3RFbmREYXRlKGV2ZW50KSB7XG4gIGNvbnN0IGR1cmF0aW9uID0gcmV0dXJuRHVyYXRpb24obmV3VHJpcC5kYXRlLCBldmVudC50YXJnZXQudmFsdWUucmVwbGFjZUFsbCgnLScsICcvJykpO1xuICAgbmV3VHJpcC5kdXJhdGlvbiA9IGR1cmF0aW9uO1xufVxuXG5mdW5jdGlvbiByZXR1cm5EdXJhdGlvbihkYXRlMSwgZGF0ZTIpIHtcbiAgY29uc3QgZHQxID0gbmV3IERhdGUoZGF0ZTEpO1xuICBjb25zdCBkdDIgPSBuZXcgRGF0ZShkYXRlMik7XG4gIHJldHVybiBNYXRoLmZsb29yKChEYXRlLlVUQyhkdDIuZ2V0RnVsbFllYXIoKSwgZHQyLmdldE1vbnRoKCksIGR0Mi5nZXREYXRlKCkpIC0gRGF0ZS5VVEMoZHQxLmdldEZ1bGxZZWFyKCksIGR0MS5nZXRNb250aCgpLCBkdDEuZ2V0RGF0ZSgpKSApIC8oMTAwMCAqIDYwICogNjAgKiAyNCkpO1xufVxuXG5mdW5jdGlvbiBzZWxlY3REZXN0aW5hdGlvbihldmVudCkge1xuICBuZXdUcmlwLnRyYXZlbGVycyA9IHBhcnNlSW50KGlucHV0TnVtT2ZUcmF2ZWxlcnMudmFsdWUpO1xuICBjb25zdCBzZWxlY3REZXN0aW5hdGlvbklkID0gZGVzdGluYXRpb25zUmVwby5maW5kRGVzdGlvbmF0aW9uSWRCeU5hbWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgbmV3VHJpcC5kZXN0aW5hdGlvbklEID0gc2VsZWN0RGVzdGluYXRpb25JZFxuICBjb25zdCBkZXN0aW5hdGlvbkRldGFpbHMgPSBkZXN0aW5hdGlvbnNSZXBvLmRlc3RpbmF0aW9ucy5maW5kKGRlc3QgPT4gZGVzdC5pZCA9PT0gc2VsZWN0RGVzdGluYXRpb25JZCk7XG4gIGNvbnN0IGVzdGltYXRlZENvc3QgPSAoZGVzdGluYXRpb25EZXRhaWxzLmVzdGltYXRlZExvZGdpbmdDb3N0UGVyRGF5ICogbmV3VHJpcC5kdXJhdGlvbikgKyAoZGVzdGluYXRpb25EZXRhaWxzLmVzdGltYXRlZEZsaWdodENvc3RQZXJQZXJzb24gKiBuZXdUcmlwLnRyYXZlbGVycylcbiAgY29uc3QgdG90YWxDb3N0ID0gTWF0aC5yb3VuZChlc3RpbWF0ZWRDb3N0ICogMS4xKTtcbiAgZG9tVXBkYXRlcy5kaXNwbGF5RXN0aW1hdGVkQ29zdChlc3RpbWF0ZWRDb3N0RWxlbWVudCwgdG90YWxDb3N0KTtcbn1cblxuZnVuY3Rpb24gYWRkTmV3VHJpcChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCB1c2VyTmV3VHJpcCA9IHsuLi5uZXdUcmlwLCBpZDogRGF0ZS5ub3coKSwgdXNlcklEOiB0cmF2ZWxlci5pZCwgdHJhdmVsZXJzOiBwYXJzZUludChpbnB1dE51bU9mVHJhdmVsZXJzLnZhbHVlKX1cbiAgYXBpQ2FsbHMuYWRkTmV3VHJpcCh1c2VyTmV3VHJpcClcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICB0cmlwc1JlcG8udHJpcHMucHVzaCh1c2VyTmV3VHJpcCk7XG4gICAgICBkaXNwbGF5UGVuZGluZ1RyaXBzKCk7XG4gICAgfSk7XG4gIGRvbVVwZGF0ZXMuaGlkZU1vZGFsKGFkZE5ld1RyaXBNb2RhbCk7XG59XG5cbmZ1bmN0aW9uIG9wZW5Nb2RhbCgpIHtcbiAgZG9tVXBkYXRlcy5kaXNwbGF5TW9kYWwoYWRkTmV3VHJpcE1vZGFsKTtcbn1cblxuZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcbiAgZG9tVXBkYXRlcy5oaWRlTW9kYWwoYWRkTmV3VHJpcE1vZGFsKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlUGFnZXMocGFnZU9uZSwgcGFnZVR3bywgYnV0dG9uKSB7XG4gIHBhZ2VPbmUuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gIHBhZ2VUd28uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gIGJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbn1cblxuZnVuY3Rpb24gY2hlY2tVc2VybmFtZUFuZFBhc3N3b3JkKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgaWYgKHVzZXJuYW1lSW5wdXQudmFsdWUgPT09ICd0cmF2ZWxlcjIyJyAmJiBwYXNzd29yZElucHV0LnZhbHVlID09PSAndHJhdmVsMjAyMCcpIHtcbiAgICB0b2dnbGVQYWdlcyhsb2dpblBhZ2UsIG1haW5QYWdlLCBsb2dvdXRCdG4pO1xuICB9IGVsc2Uge1xuICAgIGRvbVVwZGF0ZXMuZGlzcGxheUxvZ2luRXJyb3JNc2cobG9naW5FcnJvck1zZyk7XG4gIH1cbn1cbiAgXG5mdW5jdGlvbiBsb2dPdXQoKSB7XG4gIHRvZ2dsZVBhZ2VzKGxvZ2luUGFnZSwgbWFpblBhZ2UsIGxvZ291dEJ0bik7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==