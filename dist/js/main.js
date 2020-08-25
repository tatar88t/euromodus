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

/***/ "./src/js/import/fullpageInit.js":
/*!***************************************!*\
  !*** ./src/js/import/fullpageInit.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function mobileInit() {
  if (window.matchMedia("(max-height: 628px)").matches || window.matchMedia("(max-width: 575px)").matches) {
    // fullpage_api.destroy();
    fullpage_api.setResponsive(true);
  }
}

function fullPageInit() {
  var myFullpage = new fullpage('#fullpage', {// afterResize: function(width, height){
    // fullpage_api.destroy();
    // let fPage = document.querySelector('#fullpage')
    // fPage.classList.add('fp-destroyed')
    // alert('alert')
    // }
    //Navigation
    // menu: '#menu',
    // lockAnchors: false,
    // anchors:['firstPage', 'secondPage'],
    // navigation: false,
    // navigationPosition: 'right',
    // navigationTooltips: ['firstSlide', 'secondSlide'],
    // showActiveTooltip: false,
    // slidesNavigation: false,
    // slidesNavPosition: 'bottom',
    //Scrolling
    // css3: true,
    // scrollingSpeed: 700,
    // autoScrolling: true,
    // fitToSection: true,
    // fitToSectionDelay: 1000,
    // scrollBar: false,
    // easing: 'easeInOutCubic',
    // easingcss3: 'ease',
    // loopBottom: false,
    // loopTop: false,
    // loopHorizontal: true,
    // continuousVertical: false,
    // continuousHorizontal: false,
    // scrollHorizontally: false,
    // interlockedSlides: false,
    // dragAndMove: false,
    // offsetSections: false,
    // resetSliders: false,
    // fadingEffect: false,
    // normalScrollElements: '#element1, .element2',
    // scrollOverflow: false,
    // scrollOverflowReset: false,
    // scrollOverflowOptions: null,
    // touchSensitivity: 15,
    // bigSectionsDestination: null,
    //Accessibility
    // keyboardScrolling: true,
    // animateAnchor: true,
    // recordHistory: true,
    //Design
    // controlArrows: true,
    // verticalCentered: true,
    // sectionsColor : ['#ccc', '#fff'],
    // paddingTop: '3em',
    // paddingBottom: '10px',
    // fixedElements: '#header, .footer',
    // responsiveWidth: 0,
    // responsiveHeight: 0,
    // responsiveSlides: false,
    // parallax: false,
    // parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
    // cards: false,
    // cardsOptions: {perspective: 100, fadeContent: true, fadeBackground: true},
    //Custom selectors
    // sectionSelector: '.section',
    // slideSelector: '.slide',
    //
    // lazyLoading: true,
    //events
    // onLeave: function(origin, destination, direction){},
    // afterLoad: function(origin, destination, direction){},
    // afterRender: function(){},
    // afterResize: function(width, height){},
    // afterReBuild: function(){},
    // afterResponsive: function(isResponsive){},
    // afterSlideLoad: function(section, origin, destination, direction){},
    // onSlideLeave: function(section, origin, destination, direction){}
  });
}

window.addEventListener('resize', function () {
  if (window.matchMedia("(max-height: 628px)").matches || window.matchMedia("(max-width: 575px)").matches) {
    // fullpage_api.destroy();
    fullpage_api.setResponsive(true);
  } else {
    fullpage_api.setResponsive(false);
  }
});
mobileInit();
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


Object(_import_modal__WEBPACK_IMPORTED_MODULE_1__["default"])('.info'); // alert("borbo");
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