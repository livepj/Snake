/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./BaseGame.js":
/*!*********************!*\
  !*** ./BaseGame.js ***!
  \*********************/
/*! exports provided: BaseGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseGame", function() { return BaseGame; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }



var _directionsQueue = /*#__PURE__*/new WeakMap();

var _directionChanged = /*#__PURE__*/new WeakMap();

var _isGameOver = /*#__PURE__*/new WeakMap();

var _gameOver = /*#__PURE__*/new WeakSet();

var _num2pos = /*#__PURE__*/new WeakSet();

var _pos2num = /*#__PURE__*/new WeakSet();

var _isOposite = /*#__PURE__*/new WeakSet();

var BaseGame = /*#__PURE__*/function () {
  function BaseGame() {
    _classCallCheck(this, BaseGame);

    _classPrivateMethodInitSpec(this, _isOposite);

    _classPrivateMethodInitSpec(this, _pos2num);

    _classPrivateMethodInitSpec(this, _num2pos);

    _classPrivateMethodInitSpec(this, _gameOver);

    _defineProperty(this, "_direction", 'right');

    _defineProperty(this, "_snakeSequence", [[4, 2], [3, 2], [2, 2]]);

    _defineProperty(this, "_food", []);

    _classPrivateFieldInitSpec(this, _directionsQueue, {
      writable: true,
      value: []
    });

    _classPrivateFieldInitSpec(this, _directionChanged, {
      writable: true,
      value: false
    });

    _classPrivateFieldInitSpec(this, _isGameOver, {
      writable: true,
      value: false
    });

    _defineProperty(this, "_updateTimeMS", 500);

    this._food.push(this._getRandomFreePosition());
  }
  /**
   * @param {position[]} alsoCheck 
   */


  _createClass(BaseGame, [{
    key: "updateTimeMS",
    get:
    /** @type {Direction} */

    /** @type {Position[]} */

    /** @type {Position[]} */
    function get() {
      return this._updateTimeMS;
    }
  }, {
    key: "_getRandomFreePosition",
    value: function _getRandomFreePosition(alsoCheck) {
      var _this = this;

      var checkList = this._food.concat(this._snakeSequence);

      if (alsoCheck) {
        checkList = checkList.concat(alsoCheck);
      }

      var freeCells = ___WEBPACK_IMPORTED_MODULE_0__["width"] * ___WEBPACK_IMPORTED_MODULE_0__["height"] - checkList.length;

      if (freeCells <= 0) {
        throw 'no more place';
      }

      var freePositionNumber = checkList.sort(function (a, b) {
        return _classPrivateMethodGet(_this, _pos2num, _pos2num2).call(_this, a) - _classPrivateMethodGet(_this, _pos2num, _pos2num2).call(_this, b);
      }).reduce(function (freePositionNumber, busyPosition) {
        if (freePositionNumber >= _classPrivateMethodGet(_this, _pos2num, _pos2num2).call(_this, busyPosition)) {
          freePositionNumber++;
        }

        return freePositionNumber;
      }, Math.floor(Math.random() * freeCells));
      return _classPrivateMethodGet(this, _num2pos, _num2pos2).call(this, freePositionNumber);
    }
  }, {
    key: "update",
    value: function update() {
      if (_classPrivateFieldGet(this, _isGameOver)) {
        return;
      }

      var newHeadPosition = this._getNewHeadPosition();

      if (!newHeadPosition) {
        _classPrivateMethodGet(this, _gameOver, _gameOver2).call(this, 'you crashed');

        return;
      }

      this._snakeSequence.unshift(newHeadPosition);

      try {
        this._eatIfPossible();
      } catch (e) {
        _classPrivateMethodGet(this, _gameOver, _gameOver2).call(this, e);

        return;
      }

      var newDirection = _classPrivateFieldGet(this, _directionsQueue).shift();

      _classPrivateFieldSet(this, _directionChanged, !!newDirection);

      this._direction = newDirection !== null && newDirection !== void 0 ? newDirection : this._direction;
    }
  }, {
    key: "_getNewHeadPosition",
    value: function _getNewHeadPosition() {
      var _this$_snakeSequence$ = _slicedToArray(this._snakeSequence[0], 2),
          x = _this$_snakeSequence$[0],
          y = _this$_snakeSequence$[1];

      switch (this._direction) {
        case "up":
          y -= 1;
          break;

        case "down":
          y += 1;
          break;

        case "left":
          x -= 1;
          break;

        case "right":
          x += 1;
      }

      if (this._hasCollisions([x, y])) {
        return;
      }

      return [x, y];
    }
    /**
     * @param {string} text 
     */

  }, {
    key: "changeDirection",
    value:
    /**
     * @param {Direction} direction 
     */
    function changeDirection(direction) {
      var _classPrivateFieldGet2 = _classPrivateFieldGet(this, _directionsQueue),
          length = _classPrivateFieldGet2.length;

      var comparedDirection = length ? _classPrivateFieldGet(this, _directionsQueue)[length - 1] : this._direction;

      if (comparedDirection !== direction && !_classPrivateMethodGet(this, _isOposite, _isOposite2).call(this, comparedDirection, direction)) {
        if (_classPrivateFieldGet(this, _directionChanged)) {
          _classPrivateFieldGet(this, _directionsQueue).push(direction);
        } else {
          this._direction = direction;

          _classPrivateFieldSet(this, _directionChanged, true);
        }
      }
    }
  }, {
    key: "getContext",
    value: function getContext() {
      return {
        head: this._snakeSequence[0],
        tails: this._snakeSequence.slice(1),
        food: this._food.concat()
      };
    }
    /**
     * @param {number} position
     */

  }, {
    key: "_addFood",
    value: function _addFood() {
      this._food.push(this._getRandomFreePosition());
    }
    /**
     * @param {Direction} direction1 
     * @param {Direction} direction2 
     */

  }, {
    key: "_eatIfPossible",
    value: function _eatIfPossible() {
      var _this$_snakeSequence$2 = _slicedToArray(this._snakeSequence[0], 2),
          headX = _this$_snakeSequence$2[0],
          headY = _this$_snakeSequence$2[1];

      var newFood = this._food.filter(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            x = _ref2[0],
            y = _ref2[1];

        return headX !== x || headY !== y;
      });

      if (newFood.length === this._food.length) {
        this._snakeSequence.pop();
      } else {
        this._food = newFood;

        this._addFood();
      }
    }
    /**
     * @param {Position} param0 
     */

  }, {
    key: "_hasCollisions",
    value: function _hasCollisions(_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
          x = _ref4[0],
          y = _ref4[1];

      return x < 0 || x >= ___WEBPACK_IMPORTED_MODULE_0__["width"] || y < 0 || y >= ___WEBPACK_IMPORTED_MODULE_0__["height"] || this._snakeSequence.slice(1, -1).some(function (_ref5) {
        var _ref6 = _slicedToArray(_ref5, 2),
            tailX = _ref6[0],
            tailY = _ref6[1];

        return tailX === x && tailY === y;
      });
    }
  }]);

  return BaseGame;
}();

function _gameOver2(text) {
  _classPrivateFieldSet(this, _isGameOver, true);

  console.log('gameOver', text);
}

function _num2pos2(position) {
  var result = [position % ___WEBPACK_IMPORTED_MODULE_0__["width"]];
  result[1] = (position - result[0]) / ___WEBPACK_IMPORTED_MODULE_0__["width"];
  return result;
}

function _pos2num2(_ref7) {
  var _ref8 = _slicedToArray(_ref7, 2),
      x = _ref8[0],
      y = _ref8[1];

  return y * ___WEBPACK_IMPORTED_MODULE_0__["width"] + x;
}

function _isOposite2(direction1, direction2) {
  var opposites = {
    left: 'right',
    right: 'left',
    up: 'down',
    down: 'up'
  };
  return opposites[direction1] === direction2;
}

/***/ }),

/***/ "./Board.js":
/*!******************!*\
  !*** ./Board.js ***!
  \******************/
/*! exports provided: Board */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Board", function() { return Board; });
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "../node_modules/pixi.js/dist/esm/pixi.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }




var _background = /*#__PURE__*/new WeakMap();

var _graphics = /*#__PURE__*/new WeakMap();

var _cellSize = /*#__PURE__*/new WeakMap();

var _drawBackground = /*#__PURE__*/new WeakSet();

var _drawCell = /*#__PURE__*/new WeakSet();

var Board = /*#__PURE__*/function (_PIXI$Container) {
  _inherits(Board, _PIXI$Container);

  var _super = _createSuper(Board);

  function Board() {
    var _this;

    _classCallCheck(this, Board);

    _this = _super.call(this);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _drawCell);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _drawBackground);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _background, {
      writable: true,
      value: _this.addChild(new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Graphics"]())
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _graphics, {
      writable: true,
      value: _this.addChild(new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Graphics"]())
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _cellSize, {
      writable: true,
      value: ___WEBPACK_IMPORTED_MODULE_1__["screenHeihgt"] / (___WEBPACK_IMPORTED_MODULE_1__["height"] + 2)
    });

    _classPrivateMethodGet(_assertThisInitialized(_this), _drawBackground, _drawBackground2).call(_assertThisInitialized(_this));

    _classPrivateFieldGet(_assertThisInitialized(_this), _graphics).lineStyle({
      width: 1
    });

    _classPrivateFieldGet(_assertThisInitialized(_this), _graphics).position.set(_classPrivateFieldGet(_assertThisInitialized(_this), _cellSize), _classPrivateFieldGet(_assertThisInitialized(_this), _cellSize));

    return _this;
  }
  /**
   * @param {Context} context 
   */


  _createClass(Board, [{
    key: "drawContext",
    value: function drawContext(context) {
      var _this2 = this;

      _classPrivateFieldGet(this, _graphics).clear().lineStyle({
        width: 1
      });

      var walls = context.walls,
          head = context.head,
          tails = context.tails,
          food = context.food;

      if (walls) {
        walls.forEach(function (cell) {
          return _classPrivateMethodGet(_this2, _drawCell, _drawCell2).call(_this2, cell, 'wall');
        });
      }

      food.forEach(function (cell) {
        return _classPrivateMethodGet(_this2, _drawCell, _drawCell2).call(_this2, cell, 'food');
      });
      tails.forEach(function (cell) {
        return _classPrivateMethodGet(_this2, _drawCell, _drawCell2).call(_this2, cell, 'tail');
      });

      _classPrivateMethodGet(this, _drawCell, _drawCell2).call(this, head, 'head');
    }
  }]);

  return Board;
}(pixi_js__WEBPACK_IMPORTED_MODULE_0__["Container"]);

function _drawBackground2() {
  _classPrivateFieldGet(this, _background).lineStyle({
    width: _classPrivateFieldGet(this, _cellSize),
    color: 0xa96a0e
  }).drawRect(_classPrivateFieldGet(this, _cellSize) / 2, _classPrivateFieldGet(this, _cellSize) / 2, ___WEBPACK_IMPORTED_MODULE_1__["screenHeihgt"] - _classPrivateFieldGet(this, _cellSize), ___WEBPACK_IMPORTED_MODULE_1__["screenHeihgt"] - _classPrivateFieldGet(this, _cellSize));
}

function _drawCell2(position, cell) {
  var _classPrivateFieldGet2,
      _this3 = this;

  (_classPrivateFieldGet2 = _classPrivateFieldGet(this, _graphics).beginFill(cell === 'food' ? 0x27865d : cell === 'head' ? 0xb8b926 : cell === 'tail' ? 0xf4f2f4 : 0x345662)).drawRect.apply(_classPrivateFieldGet2, _toConsumableArray(position.map(function (value) {
    return value * _classPrivateFieldGet(_this3, _cellSize);
  })).concat([_classPrivateFieldGet(this, _cellSize), _classPrivateFieldGet(this, _cellSize)]));
}

/***/ }),

/***/ "./Button.js":
/*!*******************!*\
  !*** ./Button.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Button; });
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "../node_modules/pixi.js/dist/esm/pixi.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Button = /*#__PURE__*/function (_PIXI$Container) {
  _inherits(Button, _PIXI$Container);

  var _super = _createSuper(Button);

  function Button(text) {
    var _this;

    _classCallCheck(this, Button);

    _this = _super.call(this);
    var width = 120;
    var height = 80;

    _this.pivot.set(width / 2, height / 2);

    var base = _this.addChild(new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Graphics"]());

    base.beginFill(0x245450);
    base.drawRect(0, 0, width, height);
    base.endFill();

    var lightBorder = _this.addChild(new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Graphics"]());

    lightBorder.lineStyle(1, 0x3e5d61, 1);
    lightBorder.moveTo(0, height);
    lightBorder.lineTo(0, 0);
    lightBorder.lineTo(width, 0);

    var darkBorder = _this.addChild(new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Graphics"]());

    darkBorder.lineStyle(1, 0, 1);
    darkBorder.moveTo(0, height);
    darkBorder.lineTo(width, height);
    darkBorder.lineTo(width, 0);

    var label = _this.addChild(new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Text"](text, {
      fontSize: 25,
      fill: 0xffffff,
      fontWeight: '600'
    }));

    label.anchor.set(0.5);
    label.x = width / 2;
    label.y = height / 2;
    _this.interactive = true;
    _this.buttonMode = true;

    _this.on('pointerdown', function () {
      lightBorder.visible = darkBorder.visible = false;
    });

    _this.on('pointerup', function () {
      lightBorder.visible = darkBorder.visible = true;
    });

    _this.on('pointerupoutside', function () {
      lightBorder.visible = darkBorder.visible = true;
    });

    return _this;
  }

  return _createClass(Button);
}(pixi_js__WEBPACK_IMPORTED_MODULE_0__["Container"]);



/***/ }),

/***/ "./GameControl.js":
/*!************************!*\
  !*** ./GameControl.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameControl; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./index.js");
/* harmony import */ var _BaseGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseGame */ "./BaseGame.js");
/* harmony import */ var _GodGame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GodGame */ "./GodGame.js");
/* harmony import */ var _KeyboardHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./KeyboardHandler */ "./KeyboardHandler.js");
/* harmony import */ var _PortalGame__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PortalGame */ "./PortalGame.js");
/* harmony import */ var _SpeedGame__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SpeedGame */ "./SpeedGame.js");
/* harmony import */ var _Timer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Timer */ "./Timer.js");
/* harmony import */ var _WallsGame__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./WallsGame */ "./WallsGame.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }










var _game = /*#__PURE__*/new WeakMap();

var _timer = /*#__PURE__*/new WeakMap();

var _keyboardHandler = /*#__PURE__*/new WeakMap();

var _isPlaying = /*#__PURE__*/new WeakMap();

var _snakeSize = /*#__PURE__*/new WeakMap();

var _modesList = /*#__PURE__*/new WeakMap();

var _score = /*#__PURE__*/new WeakMap();

var _subscribeOnUI = /*#__PURE__*/new WeakSet();

var _subscribeOnKeyboard = /*#__PURE__*/new WeakSet();

var _startGame = /*#__PURE__*/new WeakSet();

var _isPlaying2 = /*#__PURE__*/new WeakMap();

var GameControl = /*#__PURE__*/_createClass(
/**
 * @type {BaseGame}
 */

/**
 * @type {string[]}
 */
function GameControl(modesList) {
  _classCallCheck(this, GameControl);

  _classPrivateFieldInitSpec(this, _isPlaying2, {
    get: _get_isPlaying,
    set: _set_isPlaying
  });

  _classPrivateMethodInitSpec(this, _startGame);

  _classPrivateMethodInitSpec(this, _subscribeOnKeyboard);

  _classPrivateMethodInitSpec(this, _subscribeOnUI);

  _classPrivateFieldInitSpec(this, _game, {
    writable: true,
    value: void 0
  });

  _classPrivateFieldInitSpec(this, _timer, {
    writable: true,
    value: new _Timer__WEBPACK_IMPORTED_MODULE_6__["default"]()
  });

  _classPrivateFieldInitSpec(this, _keyboardHandler, {
    writable: true,
    value: new _KeyboardHandler__WEBPACK_IMPORTED_MODULE_3__["KeyboardHandler"]()
  });

  _classPrivateFieldInitSpec(this, _isPlaying, {
    writable: true,
    value: false
  });

  _classPrivateFieldInitSpec(this, _snakeSize, {
    writable: true,
    value: 0
  });

  _classPrivateFieldInitSpec(this, _modesList, {
    writable: true,
    value: void 0
  });

  _classPrivateFieldInitSpec(this, _score, {
    writable: true,
    value: 0
  });

  _classPrivateFieldSet(this, _modesList, modesList);

  _classPrivateMethodGet(this, _subscribeOnUI, _subscribeOnUI2).call(this);

  _classPrivateMethodGet(this, _subscribeOnKeyboard, _subscribeOnKeyboard2).call(this);
});

function _subscribeOnUI2() {
  var _this = this;

  ___WEBPACK_IMPORTED_MODULE_0__["ui"].on('MENU_CLICKED', function () {
    _classPrivateFieldSet(_this, _isPlaying2, false);
  });
  ___WEBPACK_IMPORTED_MODULE_0__["ui"].on('EXIT_CLICKED', function () {
    _classPrivateFieldSet(_this, _isPlaying2, true);
  });
  ___WEBPACK_IMPORTED_MODULE_0__["ui"].on('PLAY_CLICKED', /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(modeNumber) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _classPrivateFieldGet(_this, _timer).clear();

              _classPrivateFieldSet(_this, _isPlaying2, true);

              _classPrivateMethodGet(_this, _startGame, _startGame2).call(_this, _classPrivateFieldGet(_this, _modesList)[modeNumber]);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
}

function _subscribeOnKeyboard2() {
  var _this2 = this;

  ['left', 'right', 'up', 'down'].forEach(function (direction) {
    return _classPrivateFieldGet(_this2, _keyboardHandler).onKeyDown("Arrow".concat(direction.charAt(0).toUpperCase() + direction.slice(1)), function () {
      return _classPrivateFieldGet(_this2, _isPlaying2) && _classPrivateFieldGet(_this2, _game).changeDirection(direction);
    });
  });
}

function _startGame2(_x2) {
  return _startGame3.apply(this, arguments);
}

function _startGame3() {
  _startGame3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(mode) {
    var context, snakeSize;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _classPrivateFieldSet(this, _score, 0);

            _context2.t0 = mode;
            _context2.next = _context2.t0 === 'Classic' ? 4 : _context2.t0 === 'No Die' ? 6 : _context2.t0 === 'Walls' ? 8 : _context2.t0 === 'Speed' ? 10 : _context2.t0 === 'Portal' ? 12 : 13;
            break;

          case 4:
            _classPrivateFieldSet(this, _game, new _BaseGame__WEBPACK_IMPORTED_MODULE_1__["BaseGame"]());

            return _context2.abrupt("break", 13);

          case 6:
            _classPrivateFieldSet(this, _game, new _GodGame__WEBPACK_IMPORTED_MODULE_2__["default"]());

            return _context2.abrupt("break", 13);

          case 8:
            _classPrivateFieldSet(this, _game, new _WallsGame__WEBPACK_IMPORTED_MODULE_7__["default"]());

            return _context2.abrupt("break", 13);

          case 10:
            _classPrivateFieldSet(this, _game, new _SpeedGame__WEBPACK_IMPORTED_MODULE_5__["default"]());

            return _context2.abrupt("break", 13);

          case 12:
            _classPrivateFieldSet(this, _game, new _PortalGame__WEBPACK_IMPORTED_MODULE_4__["default"]());

          case 13:
            context = _classPrivateFieldGet(this, _game).getContext();

            _classPrivateFieldSet(this, _snakeSize, context.tails.length);

          case 15:
            if (!context) {
              _context2.next = 32;
              break;
            }

            ___WEBPACK_IMPORTED_MODULE_0__["ui"].setScore(_classPrivateFieldGet(this, _score));
            ___WEBPACK_IMPORTED_MODULE_0__["board"].drawContext(context);
            _context2.prev = 18;
            _context2.next = 21;
            return _classPrivateFieldGet(this, _timer).delay(_classPrivateFieldGet(this, _game).updateTimeMS);

          case 21:
            _context2.next = 26;
            break;

          case 23:
            _context2.prev = 23;
            _context2.t1 = _context2["catch"](18);
            return _context2.abrupt("break", 32);

          case 26:
            _classPrivateFieldGet(this, _game).update();

            context = _classPrivateFieldGet(this, _game).getContext();
            snakeSize = context.tails.length;

            if (snakeSize > _classPrivateFieldGet(this, _snakeSize)) {
              _classPrivateFieldSet(this, _score, _classPrivateFieldGet(this, _score) + (snakeSize - _classPrivateFieldGet(this, _snakeSize)));

              _classPrivateFieldSet(this, _snakeSize, snakeSize);
            }

            _context2.next = 15;
            break;

          case 32:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[18, 23]]);
  }));
  return _startGame3.apply(this, arguments);
}

function _get_isPlaying() {
  return _classPrivateFieldGet(this, _isPlaying);
}

function _set_isPlaying(value) {
  if (value) {
    _classPrivateFieldGet(this, _timer).resume();
  } else {
    _classPrivateFieldGet(this, _timer).pause();
  }

  _classPrivateFieldSet(this, _isPlaying, value);
}



/***/ }),

/***/ "./GodGame.js":
/*!********************!*\
  !*** ./GodGame.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GodGame; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./index.js");
/* harmony import */ var _BaseGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseGame */ "./BaseGame.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var GodGame = /*#__PURE__*/function (_BaseGame) {
  _inherits(GodGame, _BaseGame);

  var _super = _createSuper(GodGame);

  function GodGame() {
    _classCallCheck(this, GodGame);

    return _super.apply(this, arguments);
  }

  _createClass(GodGame, [{
    key: "_getNewHeadPosition",
    value: function _getNewHeadPosition() {
      var _this$_snakeSequence$ = _slicedToArray(this._snakeSequence[0], 2),
          x = _this$_snakeSequence$[0],
          y = _this$_snakeSequence$[1];

      switch (this._direction) {
        case "up":
          y -= 1;

          if (y < 0) {
            y = ___WEBPACK_IMPORTED_MODULE_0__["height"] - 1;
          }

          break;

        case "down":
          y += 1;

          if (y >= ___WEBPACK_IMPORTED_MODULE_0__["height"]) {
            y = 0;
          }

          break;

        case "left":
          x -= 1;

          if (x < 0) {
            x = ___WEBPACK_IMPORTED_MODULE_0__["width"] - 1;
          }

          break;

        case "right":
          x += 1;

          if (x >= ___WEBPACK_IMPORTED_MODULE_0__["width"]) {
            x = 0;
          }

      }

      return [x, y];
    }
  }]);

  return GodGame;
}(_BaseGame__WEBPACK_IMPORTED_MODULE_1__["BaseGame"]);



/***/ }),

/***/ "./KeyboardHandler.js":
/*!****************************!*\
  !*** ./KeyboardHandler.js ***!
  \****************************/
/*! exports provided: KeyboardHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyboardHandler", function() { return KeyboardHandler; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var _keyDict = /*#__PURE__*/new WeakMap();

var _callBacksDict = /*#__PURE__*/new WeakMap();

var KeyboardHandler = /*#__PURE__*/function () {
  function KeyboardHandler() {
    var _this = this;

    _classCallCheck(this, KeyboardHandler);

    _classPrivateFieldInitSpec(this, _keyDict, {
      writable: true,
      value: {}
    });

    _classPrivateFieldInitSpec(this, _callBacksDict, {
      writable: true,
      value: {}
    });

    document.addEventListener('keydown', function (_ref) {
      var code = _ref.code;

      if (!_classPrivateFieldGet(_this, _keyDict)[code]) {
        var _classPrivateFieldGet2;

        (_classPrivateFieldGet2 = _classPrivateFieldGet(_this, _callBacksDict)[code]) === null || _classPrivateFieldGet2 === void 0 ? void 0 : _classPrivateFieldGet2.forEach(function (callBack) {
          return callBack(code);
        });
        _classPrivateFieldGet(_this, _keyDict)[code] = true;
      }
    });
    document.addEventListener('keyup', function (e) {
      return _classPrivateFieldGet(_this, _keyDict)[e.code] = false;
    });
  }
  /**
   * @param {string} code
   * @param {() => void} callBack
   */


  _createClass(KeyboardHandler, [{
    key: "onKeyDown",
    value: function onKeyDown(code, callBack) {
      if (!_classPrivateFieldGet(this, _callBacksDict)[code]) {
        _classPrivateFieldGet(this, _callBacksDict)[code] = [callBack];
      } else {
        _classPrivateFieldGet(this, _callBacksDict)[code].push(callBack);
      }
    }
  }]);

  return KeyboardHandler;
}();

/***/ }),

/***/ "./Menu.js":
/*!*****************!*\
  !*** ./Menu.js ***!
  \*****************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "../node_modules/pixi.js/dist/esm/pixi.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }



var _value = /*#__PURE__*/new WeakMap();

var _createCheckBox = /*#__PURE__*/new WeakSet();

var Menu = /*#__PURE__*/function (_PIXI$Container) {
  _inherits(Menu, _PIXI$Container);

  var _super = _createSuper(Menu);

  /**
   * @param {string[]} texts 
   * @param {number} width 
   */
  function Menu(texts, width) {
    var _this;

    _classCallCheck(this, Menu);

    _this = _super.call(this);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _createCheckBox);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _value, {
      writable: true,
      value: 0
    });

    _this.addChild(new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Graphics"]()).beginFill(0x195756).drawRect(0, 0, width, 280);

    texts.forEach(function (text, i) {
      var container = _this.addChild(new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Container"]());

      var _classPrivateMethodGe = _classPrivateMethodGet(_assertThisInitialized(_this), _createCheckBox, _createCheckBox2).call(_assertThisInitialized(_this)),
          body = _classPrivateMethodGe.body,
          onGraphics = _classPrivateMethodGe.onGraphics;

      onGraphics.visible = i === _classPrivateFieldGet(_assertThisInitialized(_this), _value);
      container.addChild(body);
      container.position.set(34, 25 + i * 50);

      _this.on('VALUE_CHANGED', function () {
        onGraphics.visible = _classPrivateFieldGet(_assertThisInitialized(_this), _value) === i;
      });

      var pixiText = container.addChild(new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Text"](text, {
        fontFamily: "times new roman",
        fill: 0xffffff,
        fontSize: 30
      }));
      pixiText.anchor.y = 0.5;
      pixiText.x = 40;
      container.interactive = _this.buttonMode = true;
      container.on('pointertap', function () {
        _classPrivateFieldSet(_assertThisInitialized(_this), _value, i);

        _this.emit('VALUE_CHANGED');
      });
    });
    return _this;
  }

  _createClass(Menu, [{
    key: "value",
    get: function get() {
      return _classPrivateFieldGet(this, _value);
    }
  }]);

  return Menu;
}(pixi_js__WEBPACK_IMPORTED_MODULE_0__["Container"]);

function _createCheckBox2() {
  var size = 30;
  var body = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Container"]();
  body.addChild(new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Graphics"]().beginFill(0xffffff).drawRoundedRect(-size / 2, -size / 2, size, size, 2));
  var onGraphics = body.addChild(new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Graphics"]()).beginFill(0x0075ff).drawRoundedRect(-size / 2, -size / 2, size, size, 2).endFill().lineStyle({
    width: 5,
    color: 0xffffff
  }).moveTo(-9, 0).lineTo(-3, 6).lineTo(9, -9);
  return {
    body: body,
    onGraphics: onGraphics
  };
}

/***/ }),

/***/ "./PortalGame.js":
/*!***********************!*\
  !*** ./PortalGame.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PortalGame; });
/* harmony import */ var _BaseGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseGame */ "./BaseGame.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var PortalGame = /*#__PURE__*/function (_BaseGame) {
  _inherits(PortalGame, _BaseGame);

  var _super = _createSuper(PortalGame);

  function PortalGame() {
    var _this;

    _classCallCheck(this, PortalGame);

    _this = _super.call(this);

    _this._addFood();

    return _this;
  }

  _createClass(PortalGame, [{
    key: "_eatIfPossible",
    value: function _eatIfPossible() {
      var _this$_snakeSequence$ = _slicedToArray(this._snakeSequence[0], 2),
          headX = _this$_snakeSequence$[0],
          headY = _this$_snakeSequence$[1];

      var i = this._food.findIndex(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            x = _ref2[0],
            y = _ref2[1];

        return headX === x && headY === y;
      });

      if (i === -1) {
        this._snakeSequence.pop();

        return;
      }

      this._snakeSequence[0] = this._food[i ^ 1];
      this._food = [];

      this._addFood();

      this._addFood();
    }
  }]);

  return PortalGame;
}(_BaseGame__WEBPACK_IMPORTED_MODULE_0__["BaseGame"]);



/***/ }),

/***/ "./SpeedGame.js":
/*!**********************!*\
  !*** ./SpeedGame.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SpeedGame; });
/* harmony import */ var _BaseGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseGame */ "./BaseGame.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var SpeedGame = /*#__PURE__*/function (_BaseGame) {
  _inherits(SpeedGame, _BaseGame);

  var _super = _createSuper(SpeedGame);

  function SpeedGame() {
    _classCallCheck(this, SpeedGame);

    return _super.apply(this, arguments);
  }

  _createClass(SpeedGame, [{
    key: "_addFood",
    value: function _addFood() {
      _get(_getPrototypeOf(SpeedGame.prototype), "_addFood", this).call(this);

      this._updateTimeMS *= 1 / 1.1;
    }
  }]);

  return SpeedGame;
}(_BaseGame__WEBPACK_IMPORTED_MODULE_0__["BaseGame"]);



/***/ }),

/***/ "./Timer.js":
/*!******************!*\
  !*** ./Timer.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Timer; });
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "../node_modules/pixi.js/dist/esm/pixi.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }



var _ticker = /*#__PURE__*/new WeakMap();

var _reject = /*#__PURE__*/new WeakMap();

var Timer = /*#__PURE__*/function () {
  function Timer() {
    _classCallCheck(this, Timer);

    _classPrivateFieldInitSpec(this, _ticker, {
      writable: true,
      value: new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Ticker"]()
    });

    _classPrivateFieldInitSpec(this, _reject, {
      writable: true,
      value: void 0
    });
  }

  _createClass(Timer, [{
    key: "delay",
    value:
    /**
     * @param {number} timeMS 
     */
    function delay(timeMS) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        _classPrivateFieldSet(_this, _reject, reject);

        var callback = function callback() {
          timeMS -= _classPrivateFieldGet(_this, _ticker).deltaMS;

          if (timeMS <= 0) {
            _classPrivateFieldGet(_this, _ticker).remove(callback);

            resolve();
          }
        };

        _classPrivateFieldGet(_this, _ticker).add(callback);
      });
    }
  }, {
    key: "pause",
    value: function pause() {
      _classPrivateFieldGet(this, _ticker).stop();
    }
  }, {
    key: "resume",
    value: function resume() {
      _classPrivateFieldGet(this, _ticker).start();
    }
  }, {
    key: "clear",
    value: function clear() {
      if (_classPrivateFieldGet(this, _reject)) {
        _classPrivateFieldGet(this, _reject).call(this);
      }
    }
  }]);

  return Timer;
}();



/***/ }),

/***/ "./UI.js":
/*!***************!*\
  !*** ./UI.js ***!
  \***************/
/*! exports provided: UI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UI", function() { return UI; });
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "../node_modules/pixi.js/dist/esm/pixi.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./index.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menu */ "./Menu.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button */ "./Button.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }






var _textStyle = /*#__PURE__*/new WeakMap();

var _bestText = /*#__PURE__*/new WeakMap();

var _scoreText = /*#__PURE__*/new WeakMap();

var _width = /*#__PURE__*/new WeakMap();

var _menu = /*#__PURE__*/new WeakMap();

var _addLabel = /*#__PURE__*/new WeakSet();

var _addPanel = /*#__PURE__*/new WeakSet();

var _addBest = /*#__PURE__*/new WeakSet();

var _addScore = /*#__PURE__*/new WeakSet();

var _addMenu = /*#__PURE__*/new WeakSet();

var _addButtons = /*#__PURE__*/new WeakSet();

var UI = /*#__PURE__*/function (_PIXI$Container) {
  _inherits(UI, _PIXI$Container);

  var _super = _createSuper(UI);

  /**
   * @type {PIXI.TextStyle}
   */

  /**
   * @type {Menu}
   */

  /**
   * @param {text[]} modesList 
   */
  function UI(_modesList) {
    var _this;

    _classCallCheck(this, UI);

    _this = _super.call(this);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _addButtons);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _addMenu);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _addScore);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _addBest);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _addPanel);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _addLabel);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _textStyle, {
      writable: true,
      value: {
        fontFamily: "times new roman",
        fill: 0xffffff,
        fontSize: 36
      }
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _bestText, {
      writable: true,
      value: new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Text"]("0", _classPrivateFieldGet(_assertThisInitialized(_this), _textStyle))
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _scoreText, {
      writable: true,
      value: new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Text"]("0", _classPrivateFieldGet(_assertThisInitialized(_this), _textStyle))
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _width, {
      writable: true,
      value: ___WEBPACK_IMPORTED_MODULE_1__["screenWidth"] - ___WEBPACK_IMPORTED_MODULE_1__["screenHeihgt"]
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _menu, {
      writable: true,
      value: void 0
    });

    _this.x = ___WEBPACK_IMPORTED_MODULE_1__["screenHeihgt"];

    _this.addChild(new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Graphics"]()).beginFill(0x077482).drawRect(0, 0, _classPrivateFieldGet(_assertThisInitialized(_this), _width), ___WEBPACK_IMPORTED_MODULE_1__["screenHeihgt"]);

    _classPrivateMethodGet(_assertThisInitialized(_this), _addLabel, _addLabel2).call(_assertThisInitialized(_this));

    _classPrivateMethodGet(_assertThisInitialized(_this), _addBest, _addBest2).call(_assertThisInitialized(_this));

    _classPrivateMethodGet(_assertThisInitialized(_this), _addScore, _addScore2).call(_assertThisInitialized(_this));

    _classPrivateMethodGet(_assertThisInitialized(_this), _addMenu, _addMenu2).call(_assertThisInitialized(_this), _modesList);

    _classPrivateMethodGet(_assertThisInitialized(_this), _addButtons, _addButtons2).call(_assertThisInitialized(_this));

    return _this;
  }

  _createClass(UI, [{
    key: "setScore",
    value:
    /**
     * @param {number} score 
     */
    function setScore(score) {
      _classPrivateFieldGet(this, _scoreText).text = score;

      if (score > _classPrivateFieldGet(this, _bestText).text) {
        _classPrivateFieldGet(this, _bestText).text = score;
      }
    }
  }]);

  return UI;
}(pixi_js__WEBPACK_IMPORTED_MODULE_0__["Container"]);

function _addLabel2() {
  var label = this.addChild(new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Text"]('Snake Game', {
    fill: 0x55d292,
    fontSize: 45,
    fontFamily: "times new roman",
    fontWeight: 'bold'
  }));
  label.anchor.set(0.5);
  label.position.set(_classPrivateFieldGet(this, _width) / 2, 55);
}

function _addPanel2(y, color, text, pixiText) {
  var panel = this.addChild(new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Graphics"]().beginFill(color).drawRect(0, 0, _classPrivateFieldGet(this, _width), 50));
  var constantText = panel.addChild(new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Text"](text, {
    fontFamily: "times new roman",
    fill: 0xffffff,
    fontSize: 30
  }));
  constantText.position.set(15, panel.height / 2);
  constantText.anchor.y = 0.5;
  panel.addChild(pixiText);
  pixiText.position.set(204, panel.height / 2);
  pixiText.anchor.set(0.5);
  panel.y = y;
}

function _addBest2() {
  _classPrivateMethodGet(this, _addPanel, _addPanel2).call(this, 123, 0x075e6c, 'Best :', _classPrivateFieldGet(this, _bestText));
}

function _addScore2() {
  _classPrivateMethodGet(this, _addPanel, _addPanel2).call(this, 199, 0x074e5c, 'Score :', _classPrivateFieldGet(this, _scoreText));
}

function _addMenu2(modesList) {
  _classPrivateFieldSet(this, _menu, this.addChild(new _Menu__WEBPACK_IMPORTED_MODULE_2__["Menu"](modesList, _classPrivateFieldGet(this, _width))));

  _classPrivateFieldGet(this, _menu).y = 272;
}

function _addButtons2() {
  var _this2 = this;

  var setMenuVisible = function setMenuVisible(value) {
    menuButtons.visible = _classPrivateFieldGet(_this2, _menu).visible = !(menu.visible = !value);
  };

  var y = 628;
  var menu = this.addChild(new _Button__WEBPACK_IMPORTED_MODULE_3__["default"]('Menu'));
  menu.position.set(_classPrivateFieldGet(this, _width) / 2, y);
  menu.visible = false;
  menu.on('pointertap', function () {
    setMenuVisible(true);

    _this2.emit('MENU_CLICKED');
  });
  var menuButtons = this.addChild(new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Container"]());
  var distance = 140;

  var _map = ['Play', 'Exit'].map(function (text, i) {
    var button = menuButtons.addChild(new _Button__WEBPACK_IMPORTED_MODULE_3__["default"](text));
    button.x = i * distance;
    return button;
  }),
      _map2 = _slicedToArray(_map, 2),
      play = _map2[0],
      exit = _map2[1];

  menuButtons.pivot.x = distance / 2;
  menuButtons.position = menu.position;
  exit.on('pointertap', function () {
    setMenuVisible(false);

    _this2.emit('EXIT_CLICKED');
  });
  play.on('pointertap', function () {
    setMenuVisible(false);

    _this2.emit('PLAY_CLICKED', _classPrivateFieldGet(_this2, _menu).value);
  });
}

/***/ }),

/***/ "./WallsGame.js":
/*!**********************!*\
  !*** ./WallsGame.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WallsGame; });
/* harmony import */ var _BaseGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseGame */ "./BaseGame.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var WallsGame = /*#__PURE__*/function (_BaseGame) {
  _inherits(WallsGame, _BaseGame);

  var _super = _createSuper(WallsGame);

  function WallsGame() {
    var _this;

    _classCallCheck(this, WallsGame);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "_walls", []);

    return _this;
  }

  _createClass(WallsGame, [{
    key: "_addFood",
    value: function _addFood() {
      _get(_getPrototypeOf(WallsGame.prototype), "_addFood", this).call(this);

      this._walls.push(this._getRandomFreePosition());
    }
    /**
     * @param {Position} param0 
     */

  }, {
    key: "_hasCollisions",
    value: function _hasCollisions(_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          x = _ref2[0],
          y = _ref2[1];

      return _get(_getPrototypeOf(WallsGame.prototype), "_hasCollisions", this).call(this, [x, y]) || this._walls.some(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            wallX = _ref4[0],
            wallY = _ref4[1];

        return wallX === x && wallY === y;
      });
    }
  }, {
    key: "getContext",
    value: function getContext() {
      return _objectSpread({
        walls: this._walls.concat()
      }, _get(_getPrototypeOf(WallsGame.prototype), "getContext", this).call(this));
    }
  }, {
    key: "_getRandomFreePosition",
    value: function _getRandomFreePosition() {
      return _get(_getPrototypeOf(WallsGame.prototype), "_getRandomFreePosition", this).call(this, this._walls);
    }
  }]);

  return WallsGame;
}(_BaseGame__WEBPACK_IMPORTED_MODULE_0__["BaseGame"]);



/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: screenWidth, screenHeihgt, width, height, board, ui */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "screenWidth", function() { return screenWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "screenHeihgt", function() { return screenHeihgt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "width", function() { return width; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "height", function() { return height; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "board", function() { return board; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ui", function() { return ui; });
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "../node_modules/pixi.js/dist/esm/pixi.js");
/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Board */ "./Board.js");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI */ "./UI.js");
/* harmony import */ var _GameControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GameControl */ "./GameControl.js");




var screenWidth = 1000,
    screenHeihgt = 700,
    width = 20,
    height = 20;
var app = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Application"]({
  width: screenWidth,
  height: screenHeihgt,
  backgroundColor: 0x575757,
  antialias: true
});
document.body.appendChild(app.view);
globalThis.__PIXI_APP__ = app;
var modesList = ['Classic', 'No Die', 'Walls', 'Portal', 'Speed'];
var board = app.stage.addChild(new _Board__WEBPACK_IMPORTED_MODULE_1__["Board"]());
var ui = app.stage.addChild(new _UI__WEBPACK_IMPORTED_MODULE_2__["UI"](modesList));
new _GameControl__WEBPACK_IMPORTED_MODULE_3__["default"](modesList);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi @babel/polyfill ./index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"../node_modules/@babel/polyfill/lib/index.js");
module.exports = __webpack_require__(/*! ./index.js */"./index.js");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map