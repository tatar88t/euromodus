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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _glideSliderInit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glideSliderInit */ "./src/js/import/glideSliderInit.js");
/* harmony import */ var _glidePopup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./glidePopup */ "./src/js/import/glidePopup.js");
// import hideHeader from "./hideHeader";



function fullPageInit() {
  var myFullpage = new fullpage('#fullpage', {
    anchors: ['mainPage', 'quadroPage', 'futuroPage', 'quadroOnePage', 'futuroOnePage', 'benefitsPage', 'contactsPage'],
    fixedElements: ".section-type-header, .burger",
    onLeave: function onLeave() {
      var menu = document.querySelector('.menu');
      var trigger = document.querySelector('#burger');
      var header = document.querySelector('.section-type-header');
      var calcModal = document.querySelectorAll('.calcModal');
      var modal = document.querySelectorAll('.modal');
      menu.classList.remove('menu_active');
      trigger.classList.remove('burger_active');
      calcModal.forEach(function (el) {
        var section = el.parentElement.parentElement;
        var title = section.querySelector('.section-type-title');
        el.style.display = 'none';
        title.style.display = "block";
      });
      modal.forEach(function (el) {
        var section = el.parentElement.parentElement;
        var title = section.querySelector('.section-type-title');
        el.style.display = 'none';
        title.style.display = "block";
      });
    }
  });
  var burger = document.querySelector('.burger');
  burger.classList.remove('burger_invisible');
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

  if (window.matchMedia("(max-height: 628px)").matches || window.matchMedia("(max-width: 991px)").matches) {
    Object(_glideSliderInit__WEBPACK_IMPORTED_MODULE_0__["default"])();
  }
});
window.addEventListener('load', function () {
  if (window.matchMedia("(max-height: 628px)").matches || window.matchMedia("(max-width: 575px)").matches) {
    // fullpage_api.destroy();
    fullpage_api.setResponsive(true);
  } else {
    fullpage_api.setResponsive(false);
  }

  if (window.matchMedia("(max-height: 628px)").matches || window.matchMedia("(max-width: 991px)").matches) {
    Object(_glideSliderInit__WEBPACK_IMPORTED_MODULE_0__["default"])();
  }
}); // mobileInit ()

fullPageInit();

/***/ }),

/***/ "./src/js/import/glidePopup.js":
/*!*************************************!*\
  !*** ./src/js/import/glidePopup.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function glidePopup() {
  var slides = document.querySelectorAll('.glide__slide img');
  slides.forEach(function (slide) {
    return slide.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopImmediatePropagation();
      var targetImg = e.target.getAttribute("src");
      var section = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
      var popup = document.createElement('div');
      popup.classList.add('popup');
      popup.innerHTML = "\n            <div class = \"popup__dialog\">\n                <div class =\"popup__content\">\n                    <div class=\"popup__close\">&times;</div>\n                    <img src =".concat(targetImg, " />\n                </div>\n            </div>\n        ");
      e.target && popup.addEventListener('click', function (e) {
        if (e.target.classList.contains('popup__close') || e.target === popup) {
          popup.remove();
        }
      });
      section.appendChild(popup);
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = (glidePopup);

/***/ }),

/***/ "./src/js/import/glideSliderInit.js":
/*!******************************************!*\
  !*** ./src/js/import/glideSliderInit.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function glideSlideinit() {
  var glide = new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    autoplay: 4000
  });
  glide.mount();
  var glide_1 = new Glide('.glide_1', {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    autoplay: 4000
  });
  glide_1.mount();
  var glide_2 = new Glide('.glide_2', {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    autoplay: 4000
  });
  glide_2.mount();
  var glide_3 = new Glide('.glide_3', {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    autoplay: 4000
  });
  glide_3.mount();
}

/* harmony default export */ __webpack_exports__["default"] = (glideSlideinit);

/***/ }),

/***/ "./src/js/import/headroom.js":
/*!***********************************!*\
  !*** ./src/js/import/headroom.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * headroom.js v0.11.0 - Give your page some headroom. Hide your header until you need it
 * Copyright (c) 2020 Nick Williams - http://wicky.nillia.ms/headroom.js
 * License: MIT
 */
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
})(this, function () {
  'use strict';

  function isBrowser() {
    return typeof window !== "undefined";
  }
  /**
   * Used to detect browser support for adding an event listener with options
   * Credit: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
   */


  function passiveEventsSupported() {
    var supported = false;

    try {
      var options = {
        // eslint-disable-next-line getter-return
        get passive() {
          supported = true;
        }

      };
      window.addEventListener("test", options, options);
      window.removeEventListener("test", options, options);
    } catch (err) {
      supported = false;
    }

    return supported;
  }

  function isSupported() {
    return !!(isBrowser() && function () {}.bind && "classList" in document.documentElement && Object.assign && Object.keys && requestAnimationFrame);
  }

  function isDocument(obj) {
    return obj.nodeType === 9; // Node.DOCUMENT_NODE === 9
  }

  function isWindow(obj) {
    // `obj === window` or `obj instanceof Window` is not sufficient,
    // as the obj may be the window of an iframe.
    return obj && obj.document && isDocument(obj.document);
  }

  function windowScroller(win) {
    var doc = win.document;
    var body = doc.body;
    var html = doc.documentElement;
    return {
      /**
       * @see http://james.padolsey.com/javascript/get-document-height-cross-browser/
       * @return {Number} the scroll height of the document in pixels
       */
      scrollHeight: function scrollHeight() {
        return Math.max(body.scrollHeight, html.scrollHeight, body.offsetHeight, html.offsetHeight, body.clientHeight, html.clientHeight);
      },

      /**
       * @see http://andylangton.co.uk/blog/development/get-viewport-size-width-and-height-javascript
       * @return {Number} the height of the viewport in pixels
       */
      height: function height() {
        return win.innerHeight || html.clientHeight || body.clientHeight;
      },

      /**
       * Gets the Y scroll position
       * @return {Number} pixels the page has scrolled along the Y-axis
       */
      scrollY: function scrollY() {
        if (win.pageYOffset !== undefined) {
          return win.pageYOffset;
        }

        return (html || body.parentNode || body).scrollTop;
      }
    };
  }

  function elementScroller(element) {
    return {
      /**
       * @return {Number} the scroll height of the element in pixels
       */
      scrollHeight: function scrollHeight() {
        return Math.max(element.scrollHeight, element.offsetHeight, element.clientHeight);
      },

      /**
       * @return {Number} the height of the element in pixels
       */
      height: function height() {
        return Math.max(element.offsetHeight, element.clientHeight);
      },

      /**
       * Gets the Y scroll position
       * @return {Number} pixels the element has scrolled along the Y-axis
       */
      scrollY: function scrollY() {
        return element.scrollTop;
      }
    };
  }

  function createScroller(element) {
    return isWindow(element) ? windowScroller(element) : elementScroller(element);
  }
  /**
   * @param element EventTarget
   */


  function trackScroll(element, options, callback) {
    var isPassiveSupported = passiveEventsSupported();
    var rafId;
    var scrolled = false;
    var scroller = createScroller(element);
    var lastScrollY = scroller.scrollY();
    var details = {};

    function update() {
      var scrollY = Math.round(scroller.scrollY());
      var height = scroller.height();
      var scrollHeight = scroller.scrollHeight(); // reuse object for less memory churn

      details.scrollY = scrollY;
      details.lastScrollY = lastScrollY;
      details.direction = scrollY > lastScrollY ? "down" : "up";
      details.distance = Math.abs(scrollY - lastScrollY);
      details.isOutOfBounds = scrollY < 0 || scrollY + height > scrollHeight;
      details.top = scrollY <= options.offset;
      details.bottom = scrollY + height >= scrollHeight;
      details.toleranceExceeded = details.distance > options.tolerance[details.direction];
      callback(details);
      lastScrollY = scrollY;
      scrolled = false;
    }

    function handleScroll() {
      if (!scrolled) {
        scrolled = true;
        rafId = requestAnimationFrame(update);
      }
    }

    var eventOptions = isPassiveSupported ? {
      passive: true,
      capture: false
    } : false;
    element.addEventListener("scroll", handleScroll, eventOptions);
    update();
    return {
      destroy: function destroy() {
        cancelAnimationFrame(rafId);
        element.removeEventListener("scroll", handleScroll, eventOptions);
      }
    };
  }

  function normalizeTolerance(t) {
    return t === Object(t) ? t : {
      down: t,
      up: t
    };
  }
  /**
   * UI enhancement for fixed headers.
   * Hides header when scrolling down
   * Shows header when scrolling up
   * @constructor
   * @param {DOMElement} elem the header element
   * @param {Object} options options for the widget
   */


  function Headroom(elem, options) {
    options = options || {};
    Object.assign(this, Headroom.options, options);
    this.classes = Object.assign({}, Headroom.options.classes, options.classes);
    this.elem = elem;
    this.tolerance = normalizeTolerance(this.tolerance);
    this.initialised = false;
    this.frozen = false;
  }

  Headroom.prototype = {
    constructor: Headroom,

    /**
     * Start listening to scrolling
     * @public
     */
    init: function init() {
      if (Headroom.cutsTheMustard && !this.initialised) {
        this.addClass("initial");
        this.initialised = true; // defer event registration to handle browser
        // potentially restoring previous scroll position

        setTimeout(function (self) {
          self.scrollTracker = trackScroll(self.scroller, {
            offset: self.offset,
            tolerance: self.tolerance
          }, self.update.bind(self));
        }, 100, this);
      }

      return this;
    },

    /**
     * Destroy the widget, clearing up after itself
     * @public
     */
    destroy: function destroy() {
      this.initialised = false;
      Object.keys(this.classes).forEach(this.removeClass, this);
      this.scrollTracker.destroy();
    },

    /**
     * Unpin the element
     * @public
     */
    unpin: function unpin() {
      if (this.hasClass("pinned") || !this.hasClass("unpinned")) {
        this.addClass("unpinned");
        this.removeClass("pinned");

        if (this.onUnpin) {
          this.onUnpin.call(this);
        }
      }
    },

    /**
     * Pin the element
     * @public
     */
    pin: function pin() {
      if (this.hasClass("unpinned")) {
        this.addClass("pinned");
        this.removeClass("unpinned");

        if (this.onPin) {
          this.onPin.call(this);
        }
      }
    },

    /**
     * Freezes the current state of the widget
     * @public
     */
    freeze: function freeze() {
      this.frozen = true;
      this.addClass("frozen");
    },

    /**
     * Re-enables the default behaviour of the widget
     * @public
     */
    unfreeze: function unfreeze() {
      this.frozen = false;
      this.removeClass("frozen");
    },
    top: function top() {
      if (!this.hasClass("top")) {
        this.addClass("top");
        this.removeClass("notTop");

        if (this.onTop) {
          this.onTop.call(this);
        }
      }
    },
    notTop: function notTop() {
      if (!this.hasClass("notTop")) {
        this.addClass("notTop");
        this.removeClass("top");

        if (this.onNotTop) {
          this.onNotTop.call(this);
        }
      }
    },
    bottom: function bottom() {
      if (!this.hasClass("bottom")) {
        this.addClass("bottom");
        this.removeClass("notBottom");

        if (this.onBottom) {
          this.onBottom.call(this);
        }
      }
    },
    notBottom: function notBottom() {
      if (!this.hasClass("notBottom")) {
        this.addClass("notBottom");
        this.removeClass("bottom");

        if (this.onNotBottom) {
          this.onNotBottom.call(this);
        }
      }
    },
    shouldUnpin: function shouldUnpin(details) {
      var scrollingDown = details.direction === "down";
      return scrollingDown && !details.top && details.toleranceExceeded;
    },
    shouldPin: function shouldPin(details) {
      var scrollingUp = details.direction === "up";
      return scrollingUp && details.toleranceExceeded || details.top;
    },
    addClass: function addClass(className) {
      this.elem.classList.add.apply(this.elem.classList, this.classes[className].split(" "));
    },
    removeClass: function removeClass(className) {
      this.elem.classList.remove.apply(this.elem.classList, this.classes[className].split(" "));
    },
    hasClass: function hasClass(className) {
      return this.classes[className].split(" ").every(function (cls) {
        return this.classList.contains(cls);
      }, this.elem);
    },
    update: function update(details) {
      if (details.isOutOfBounds) {
        // Ignore bouncy scrolling in OSX
        return;
      }

      if (this.frozen === true) {
        return;
      }

      if (details.top) {
        this.top();
      } else {
        this.notTop();
      }

      if (details.bottom) {
        this.bottom();
      } else {
        this.notBottom();
      }

      if (this.shouldUnpin(details)) {
        this.unpin();
      } else if (this.shouldPin(details)) {
        this.pin();
      }
    }
  };
  /**
   * Default options
   * @type {Object}
   */

  Headroom.options = {
    tolerance: {
      up: 0,
      down: 0
    },
    offset: 0,
    scroller: isBrowser() ? window : null,
    classes: {
      frozen: "headroom--frozen",
      pinned: "headroom--pinned",
      unpinned: "headroom--unpinned",
      top: "headroom--top",
      notTop: "headroom--not-top",
      bottom: "headroom--bottom",
      notBottom: "headroom--not-bottom",
      initial: "headroom"
    }
  };
  Headroom.cutsTheMustard = isSupported();
  return Headroom;
});

/***/ }),

/***/ "./src/js/import/hideHeader.js":
/*!*************************************!*\
  !*** ./src/js/import/hideHeader.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _headroom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./headroom */ "./src/js/import/headroom.js");
/* harmony import */ var _headroom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_headroom__WEBPACK_IMPORTED_MODULE_0__);


function hideHeader() {
  var header = document.querySelector(".section-type-header");
  var headroom = new _headroom__WEBPACK_IMPORTED_MODULE_0___default.a(header);
  console.log(headroom);
  headroom.init();
  window.addEventListener('scroll', function () {
    var burger = document.querySelector('.burger');
    header.classList.contains('headroom--unpinned') ? burger.classList.add('burger_invisible') : burger.classList.remove('burger_invisible');
  });
}

/* harmony default export */ __webpack_exports__["default"] = (hideHeader);

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
              e.stopPropagation();
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

/***/ "./src/js/import/showModalSuccess.js":
/*!*******************************************!*\
  !*** ./src/js/import/showModalSuccess.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function showModalSuccess() {
  var sections = document.querySelectorAll('.section'); // alert('Заявка принята, в ближайшее время наш менеджер свяжется с вами.')

  sections.forEach(function (section) {
    var popupSuccess = document.createElement('div');
    popupSuccess.classList.add('modalSucces');
    popupSuccess.innerHTML = "\n            \n                <div class=\"modalSucces__dialog\">\n                    <div class=\"modalSucces__content\">\n                        \u0412\u0430\u0448\u0430 \u0437\u0430\u044F\u0432\u043A\u0430 \u043F\u0440\u0438\u043D\u044F\u0442\u0430! \n                        <br>\n                        \u0412 \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043C\u044F \u043D\u0430\u0448\u0438 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u044B \u0441\u0432\u0436\u0443\u0442\u0441\u044F \u0441 \u0412\u0430\u043C\u0438!\n                        <br>\n                        <span>\n                            &#10004;\n                        </span>\n                    </div>\n                </div>  \n        ";
    section.appendChild(popupSuccess);

    function closeModalSuccess() {
      popupSuccess.remove();
    }

    var timeoutClose = window.setTimeout(closeModalSuccess, 1200);
  });
}

/* harmony default export */ __webpack_exports__["default"] = (showModalSuccess);

/***/ }),

/***/ "./src/js/import/validation.js":
/*!*************************************!*\
  !*** ./src/js/import/validation.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _showModalSuccess__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showModalSuccess */ "./src/js/import/showModalSuccess.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



function validation() {
  // let form = document.querySelector('.feedback-form form');
  var forms = document.querySelectorAll('form');
  forms.forEach(function (form) {
    var inputs = form.querySelectorAll('input[data-rule]');
    var btn = form.querySelector('.submit');

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
              check = /[A-zА-яёЁ0-9]{3,120}/.test(value);
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
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    var inputsArr = Array.from(inputs);
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      btn.parentNode.style.position = 'relative';

      if (inputsArr.every(function (elem) {
        return elem.parentElement.classList.contains("valid");
      })) {
        inputs.forEach(function (input) {
          input.parentElement.classList.remove('invalid');
          input.parentElement.classList.remove('valid');
          input.value = '';
        });
        var calcModal = document.querySelectorAll('.calcModal');
        calcModal.forEach(function (el) {
          var section = el.parentElement.parentElement;
          var title = section.querySelector('.section-type-title');
          el.style.display = 'none';
          title.style.display = "block";
        });
        Object(_showModalSuccess__WEBPACK_IMPORTED_MODULE_0__["default"])();
      } else {
        var showErrFields = function showErrFields(elem) {
          elem.parentElement.classList.add('invalid');
          var errFieldsRemove = window.setTimeout(function () {
            return elem.parentElement.classList.remove('invalid');
          }, 1300);
        };

        var errorMessage = document.createElement('div');
        errorMessage.classList.add('errorMessage');
        errorMessage.innerHTML = "\n                <span>\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u043E \u0432\u0441\u0435 \u043F\u043E\u043B\u044F \u0444\u043E\u0440\u043C\u044B!</span>\n                ";
        btn.parentNode.insertBefore(errorMessage, btn);
        var errClose = window.setTimeout(function () {
          return errorMessage.remove();
        }, 1300);
        inputsArr.forEach(function (el) {
          return !el.parentElement.classList.contains('valid') ? showErrFields(el) : null;
        });
      }
    });
  }); // let inputs = document.querySelectorAll('input[data-rule]');
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
/* harmony import */ var _import_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/modal */ "./src/js/import/modal.js");
/* harmony import */ var _import_showMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./import/showMenu */ "./src/js/import/showMenu.js");
/* harmony import */ var _import_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./import/validation */ "./src/js/import/validation.js");
/* harmony import */ var _import_calcModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./import/calcModal */ "./src/js/import/calcModal.js");
/* harmony import */ var _import_hideHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./import/hideHeader */ "./src/js/import/hideHeader.js");
/* harmony import */ var _import_glidePopup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./import/glidePopup */ "./src/js/import/glidePopup.js");







Object(_import_modal__WEBPACK_IMPORTED_MODULE_1__["default"])('.info');
Object(_import_showMenu__WEBPACK_IMPORTED_MODULE_2__["default"])();
Object(_import_validation__WEBPACK_IMPORTED_MODULE_3__["default"])();
Object(_import_calcModal__WEBPACK_IMPORTED_MODULE_4__["default"])();
Object(_import_hideHeader__WEBPACK_IMPORTED_MODULE_5__["default"])();
Object(_import_glidePopup__WEBPACK_IMPORTED_MODULE_6__["default"])();
window.addEventListener('resize', function () {
  return Object(_import_glidePopup__WEBPACK_IMPORTED_MODULE_6__["default"])();
}); // alert("borbo");
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