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

/***/ "../../src/createElement.js":
/*!***************************************************************!*\
  !*** /Volumes/work/bigworld/small-react/src/createElement.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createElement; });
function createElement(nodeName, props = {}, children) {
  const {
    key,
    ...otherProps
  } = props || {};
  return {
    nodeName,
    key,
    props: otherProps,
    children
  };
}

/***/ }),

/***/ "../../src/index.js":
/*!*******************************************************!*\
  !*** /Volumes/work/bigworld/small-react/src/index.js ***!
  \*******************************************************/
/*! exports provided: render, createElement, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "../../src/render.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _render__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createElement */ "../../src/createElement.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return _createElement__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/* harmony default export */ __webpack_exports__["default"] = ({
  render: _render__WEBPACK_IMPORTED_MODULE_0__["default"],
  createElement: _createElement__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "../../src/render.js":
/*!********************************************************!*\
  !*** /Volumes/work/bigworld/small-react/src/render.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return render; });
function render(vnode, parentDOM) {
  if (vnode === undefined || vnode === null || typeof vnode === 'boolean') {
    return;
  }

  if (typeof vnode === 'string') {
    const dom = document.createTextNode(vnode);
    parentDOM.appendChild(dom);
  } else if (typeof vnode.nodeName === 'string') {
    const dom = document.createElement(vnode.nodeName);

    for (let i = 0; i < vnode.children.length; i++) {
      const item = vnode.children[i];
      render(item, dom);
    }

    parentDOM.appendChild(dom);
  } else if (typeof vnode.nodeName === "function") {
    const inst = new vnode.nodeName();
    const subVnode = inst.render();
    render(subVnode, parentDOM);
  }
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/index */ "../../src/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var A =
/*#__PURE__*/
function () {
  function A() {
    _classCallCheck(this, A);
  }

  _createClass(A, [{
    key: "render",
    value: function render() {
      return Object(_src_index__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, "Hello World");
    }
  }]);

  return A;
}();

Object(_src_index__WEBPACK_IMPORTED_MODULE_0__["render"])(Object(_src_index__WEBPACK_IMPORTED_MODULE_0__["createElement"])(A, null), document.body);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy9Wb2x1bWVzL3dvcmsvYmlnd29ybGQvc21hbGwtcmVhY3Qvc3JjL2NyZWF0ZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy9Wb2x1bWVzL3dvcmsvYmlnd29ybGQvc21hbGwtcmVhY3Qvc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8vVm9sdW1lcy93b3JrL2JpZ3dvcmxkL3NtYWxsLXJlYWN0L3NyYy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImNyZWF0ZUVsZW1lbnQiLCJub2RlTmFtZSIsInByb3BzIiwiY2hpbGRyZW4iLCJrZXkiLCJvdGhlclByb3BzIiwicmVuZGVyIiwidm5vZGUiLCJwYXJlbnRET00iLCJ1bmRlZmluZWQiLCJkb20iLCJkb2N1bWVudCIsImNyZWF0ZVRleHROb2RlIiwiYXBwZW5kQ2hpbGQiLCJpIiwibGVuZ3RoIiwiaXRlbSIsImluc3QiLCJzdWJWbm9kZSIsIkEiLCJib2R5Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDakZBO0FBQUE7QUFBZSxTQUFTQSxhQUFULENBQXVCQyxRQUF2QixFQUFpQ0MsS0FBSyxHQUFHLEVBQXpDLEVBQTZDQyxRQUE3QyxFQUF1RDtBQUVsRSxRQUFNO0FBQUNDLE9BQUQ7QUFBTSxPQUFHQztBQUFULE1BQXVCSCxLQUFLLElBQUksRUFBdEM7QUFFQSxTQUFPO0FBQ0hELFlBREc7QUFFSEcsT0FGRztBQUdIRixTQUFLLEVBQUVHLFVBSEo7QUFJSEY7QUFKRyxHQUFQO0FBTUgsQzs7Ozs7Ozs7Ozs7O0FDWEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFLZTtBQUNYRyx5REFEVztBQUVYTix1RUFBYUE7QUFGRixDQUFmLEU7Ozs7Ozs7Ozs7OztBQ05BO0FBQUE7QUFBZSxTQUFTTSxNQUFULENBQWdCQyxLQUFoQixFQUF1QkMsU0FBdkIsRUFBa0M7QUFDN0MsTUFBSUQsS0FBSyxLQUFLRSxTQUFWLElBQXVCRixLQUFLLEtBQUssSUFBakMsSUFBeUMsT0FBT0EsS0FBUCxLQUFpQixTQUE5RCxFQUF5RTtBQUNyRTtBQUNIOztBQUVELE1BQUksT0FBT0EsS0FBUCxLQUFpQixRQUFyQixFQUErQjtBQUMzQixVQUFNRyxHQUFHLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QkwsS0FBeEIsQ0FBWjtBQUNBQyxhQUFTLENBQUNLLFdBQVYsQ0FBc0JILEdBQXRCO0FBQ0gsR0FIRCxNQUdPLElBQUksT0FBT0gsS0FBSyxDQUFDTixRQUFiLEtBQTBCLFFBQTlCLEVBQXdDO0FBQzNDLFVBQU1TLEdBQUcsR0FBR0MsUUFBUSxDQUFDWCxhQUFULENBQXVCTyxLQUFLLENBQUNOLFFBQTdCLENBQVo7O0FBQ0EsU0FBSSxJQUFJYSxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUdQLEtBQUssQ0FBQ0osUUFBTixDQUFlWSxNQUFsQyxFQUEwQ0QsQ0FBQyxFQUEzQyxFQUErQztBQUMzQyxZQUFNRSxJQUFJLEdBQUdULEtBQUssQ0FBQ0osUUFBTixDQUFlVyxDQUFmLENBQWI7QUFDQVIsWUFBTSxDQUFDVSxJQUFELEVBQU9OLEdBQVAsQ0FBTjtBQUNIOztBQUNERixhQUFTLENBQUNLLFdBQVYsQ0FBc0JILEdBQXRCO0FBQ0gsR0FQTSxNQU9BLElBQUksT0FBT0gsS0FBSyxDQUFDTixRQUFiLEtBQTBCLFVBQTlCLEVBQTBDO0FBQzdDLFVBQU1nQixJQUFJLEdBQUcsSUFBSVYsS0FBSyxDQUFDTixRQUFWLEVBQWI7QUFDQSxVQUFNaUIsUUFBUSxHQUFHRCxJQUFJLENBQUNYLE1BQUwsRUFBakI7QUFFQUEsVUFBTSxDQUFDWSxRQUFELEVBQVdWLFNBQVgsQ0FBTjtBQUNIO0FBRUosQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkQ7O0lBRU1XLEM7Ozs7Ozs7Ozs2QkFFTztBQUNMLGFBQU8sNEZBQVA7QUFDSDs7Ozs7O0FBR0xiLHlEQUFNLENBQUMsaUVBQUMsQ0FBRCxPQUFELEVBQU9LLFFBQVEsQ0FBQ1MsSUFBaEIsQ0FBTixDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KG5vZGVOYW1lLCBwcm9wcyA9IHt9LCBjaGlsZHJlbikge1xuXG4gICAgY29uc3Qge2tleSwgLi4ub3RoZXJQcm9wc30gPSBwcm9wcyB8fCB7fVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbm9kZU5hbWUsXG4gICAgICAgIGtleSxcbiAgICAgICAgcHJvcHM6IG90aGVyUHJvcHMsXG4gICAgICAgIGNoaWxkcmVuXG4gICAgfVxufSIsImltcG9ydCByZW5kZXIgZnJvbSAnLi9yZW5kZXInXG5pbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICcuL2NyZWF0ZUVsZW1lbnQnXG5cbmV4cG9ydCB7XG4gICAgcmVuZGVyLFxuICAgIGNyZWF0ZUVsZW1lbnRcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHJlbmRlcixcbiAgICBjcmVhdGVFbGVtZW50XG59XG5cbiIsIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIodm5vZGUsIHBhcmVudERPTSkge1xuICAgIGlmICh2bm9kZSA9PT0gdW5kZWZpbmVkIHx8IHZub2RlID09PSBudWxsIHx8IHR5cGVvZiB2bm9kZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygdm5vZGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbnN0IGRvbSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZub2RlKVxuICAgICAgICBwYXJlbnRET00uYXBwZW5kQ2hpbGQoZG9tKVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZub2RlLm5vZGVOYW1lID09PSAnc3RyaW5nJykge1xuICAgICAgICBjb25zdCBkb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHZub2RlLm5vZGVOYW1lKVxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdm5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSB2bm9kZS5jaGlsZHJlbltpXVxuICAgICAgICAgICAgcmVuZGVyKGl0ZW0sIGRvbSlcbiAgICAgICAgfVxuICAgICAgICBwYXJlbnRET00uYXBwZW5kQ2hpbGQoZG9tKVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZub2RlLm5vZGVOYW1lID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgY29uc3QgaW5zdCA9IG5ldyB2bm9kZS5ub2RlTmFtZSgpXG4gICAgICAgIGNvbnN0IHN1YlZub2RlID0gaW5zdC5yZW5kZXIoKVxuXG4gICAgICAgIHJlbmRlcihzdWJWbm9kZSwgcGFyZW50RE9NKVxuICAgIH1cblxufSIsImltcG9ydCB7Y3JlYXRlRWxlbWVudCwgcmVuZGVyfSBmcm9tICcuLi8uLi8uLi9zcmMvaW5kZXgnXG5cbmNsYXNzIEEgIHtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxkaXY+SGVsbG8gV29ybGQ8L2Rpdj5cbiAgICB9XG59XG5cbnJlbmRlcig8QS8+LCBkb2N1bWVudC5ib2R5KSJdLCJzb3VyY2VSb290IjoiIn0=