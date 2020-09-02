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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/import/calcModal.js":
/*!************************************!*\
  !*** ./src/js/import/calcModal.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validation */ "./src/js/import/validation.js");


function calcModal() {
  // let trigger = document.querySelectorAll('.total button');
  // let calcModal = document.querySelector('.calcModal');
  var modals = document.querySelectorAll('.modal');
  modals.forEach(function (modal) {
    var trigger = modal.querySelector('.total button');
    var calcModal = modal.nextElementSibling;
    var section = calcModal.parentElement.parentElement;
    var title = section.querySelector('.section-type-title');
    trigger.addEventListener('click', function (e) {
      e.preventDefault();
      calcModal.style.display = 'block';
      modal.style.display = 'none';
    });
    calcModal.addEventListener('click', function (e) {
      if (e.target.classList.contains('calcModal__close') || e.target === calcModal) {
        calcModal.style.display = 'none';
        title.style.display = "block";
      }
    });
  });
  Object(_validation__WEBPACK_IMPORTED_MODULE_0__["default"])();
}

/* harmony default export */ __webpack_exports__["default"] = (calcModal);

/***/ }),

/***/ "./src/js/import/fullpageInit.js":
/*!***************************************!*\
  !*** ./src/js/import/fullpageInit.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// import hideHeader from "./hideHeader";
function fullPageInit() {
  var myFullpage = new fullpage('#fullpage', {
    anchors: ['mainPage', 'quadroPage', 'futuroPage', 'quadroOnePage', 'futuroOnePage', 'benefitsPage', 'contactsPage'],
    fixedElements: ".section-type-header, .burger",
    onLeave: function onLeave() {
      var menu = document.querySelector('.menu');
      var trigger = document.querySelector('#burger');
      var header = document.querySelector('.section-type-header');
      menu.classList.remove('menu_active');
      trigger.classList.remove('burger_active');
      header.classList.add('moved');
    }
  });
} // function mobileInit () {
//     if (window.matchMedia("(max-height: 628px)").matches ||
//         window.matchMedia("(max-width: 575px)").matches) {
//         fullpage_api.setResponsive(true);
//
//     }
// }


window.addEventListener('resize', function () {
  if (window.matchMedia("(max-height: 628px)").matches || window.matchMedia("(max-width: 575px)").matches) {
    // fullpage_api.destroy();
    fullpage_api.setResponsive(true);
  } else {
    fullpage_api.setResponsive(false);
  }
});
window.addEventListener('load', function () {
  if (window.matchMedia("(max-height: 628px)").matches || window.matchMedia("(max-width: 575px)").matches) {
    // fullpage_api.destroy();
    fullpage_api.setResponsive(true);
  } else {
    fullpage_api.setResponsive(false);
  }
}); // mobileInit ()

fullPageInit();

/***/ }),

/***/ "./src/js/import/modal.js":
/*!********************************!*\
  !*** ./src/js/import/modal.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var modals = function modals(triggerSelector) {
  var btnCall = document.querySelectorAll(triggerSelector),
      modals = document.querySelectorAll('.modal'),
      section = document.querySelectorAll('.section');

  function modalIdentify() {
    modals.forEach(function (modal) {
      var dataAttr = modal.parentElement.parentElement.getAttribute("data-access");
      console.log(dataAttr, 'MODAL PARENT data-attribute');
      modal.setAttribute("data-access", dataAttr);
    });
    section.forEach(function (item) {
      var infoBtn = item.querySelectorAll('.info');
      var dataAttr = item.getAttribute("data-access");
      infoBtn.forEach(function (btn) {
        return btn.setAttribute("data-access", dataAttr);
      });
    });
  }

  modalIdentify();

  function showModal() {
    btnCall.forEach(function (button) {
      modals.forEach(function (modal) {
        section.forEach(function (block) {
          button.addEventListener('click', function (e) {
            if (e.target && button.getAttribute("data-access") === modal.getAttribute("data-access") && button.getAttribute("data-access") === block.getAttribute("data-access")) {
              e.preventDefault();
              modal.style.display = 'block';
              block.querySelector('.section-type-title').style.display = "none";
            }
          });
        });
      });
    });
  }

  ;

  function closeModal() {
    // popupWindow.addEventListener('click', (e) => {
    //     if(e.target.classList.contains('modal__close') || e.target === popupWindow) {
    //         popupWindow.style.display = 'none';
    //     }
    // });
    modals.forEach(function (modal) {
      section.forEach(function (block) {
        modal.addEventListener('click', function (e) {
          if (e.target.classList.contains('modal__close') && modal.getAttribute("data-access") === block.getAttribute("data-access") || e.target === modal && modal.getAttribute("data-access") === block.getAttribute("data-access")) {
            modal.style.display = 'none';
            block.querySelector('.section-type-title').style.display = "block";
          }
        });
      });
    });
  }

  ;
  showModal();
  closeModal();
};

/* harmony default export */ __webpack_exports__["default"] = (modals);

/***/ }),

/***/ "./src/js/import/showMenu.js":
/*!***********************************!*\
  !*** ./src/js/import/showMenu.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function showMenu() {
  var trigger = document.querySelector('#burger'),
      close = document.querySelector('.close-menu'),
      menu = document.querySelector('.menu');
  trigger.addEventListener('click', function () {
    menu.classList.toggle('menu_active');
    trigger.classList.toggle('burger_active');
  });
  close.addEventListener('click', function () {
    menu.classList.remove('menu_active');
    trigger.classList.remove('burger_active');
  });
  window.addEventListener('resize', function () {
    menu.classList.remove('menu_active');
    trigger.classList.remove('burger_active');
  }); // window.addEventListener('scroll', () => {
  //     menu.classList.remove('menu_active');
  //     trigger.classList.remove('burger_active')
  // })
}

;
/* harmony default export */ __webpack_exports__["default"] = (showMenu);

/***/ }),

/***/ "./src/js/import/validation.js":
/*!*************************************!*\
  !*** ./src/js/import/validation.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function validation() {
  var inputs = document.querySelectorAll('input[data-rule]');
  var btn = document.querySelector('.submit');

  var _iterator = _createForOfIteratorHelper(inputs),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var input = _step.value;
      input.addEventListener('blur', function () {
        var rule = this.dataset.rule;
        var value = this.value;
        var check;

        switch (rule) {
          case 'number':
            check = /^\d+$/.test(value);
            break;

          case 'email':
            check = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
            break;

          case 'name':
            check = /[A-zА-яёЁ0-9]{3,30}/.test(value);
            break;

          case 'shortdescr':
            check = /[A-zА-яёЁ0-9]{3,50}/.test(value);
            break;

          case 'text':
            check = /[A-zА-яёЁ0-9]{6,120}/.test(value);
            break;
        }

        this.parentElement.classList.remove('invalid');
        this.parentElement.classList.remove('valid');

        if (check) {
          this.parentElement.classList.add('valid');
        } else {
          this.parentElement.classList.add('invalid');
        }
      });
    } // if(inputs.every(inp => inp.parentElement.classList.contains('valid'))) {
    //     console.log('GOOOOOOOOOOOOOOOOOOOOOOD')
    // }

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

/* harmony default export */ __webpack_exports__["default"] = (validation);

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_fullpageInit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/fullpageInit.js */ "./src/js/import/fullpageInit.js");
/* harmony import */ var _import_fullpageInit_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_import_fullpageInit_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _import_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/modal */ "./src/js/import/modal.js");
/* harmony import */ var _import_showMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./import/showMenu */ "./src/js/import/showMenu.js");
/* harmony import */ var _import_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./import/validation */ "./src/js/import/validation.js");
/* harmony import */ var _import_calcModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./import/calcModal */ "./src/js/import/calcModal.js");





Object(_import_modal__WEBPACK_IMPORTED_MODULE_1__["default"])('.info');
Object(_import_showMenu__WEBPACK_IMPORTED_MODULE_2__["default"])();
Object(_import_validation__WEBPACK_IMPORTED_MODULE_3__["default"])();
Object(_import_calcModal__WEBPACK_IMPORTED_MODULE_4__["default"])(); // hideHeader();
// alert("borbo");
// $(document).ready(function() {
//     $('.section-main').addClass('TEST');
// })
// console.log("sdcsdcsdc")
// $(document).ready(function() {
//     $('#fullpage').fullpage({
//         //options here
//         autoScrolling: true,
//         scrollHorizontally: true,
//         licenseKey: 'YOUR_KEY_HERE',
//         css3: true,
//         navigation: true,
//     });
//
//     //methods
//     $.fn.fullpage.setAllowScrolling(false);
// });

/***/ })

/******/ });
//# sourceMappingURL=main.js.map