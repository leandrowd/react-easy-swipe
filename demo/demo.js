webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

	(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1), __webpack_require__(158), __webpack_require__(159)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(require('react'), require('react-dom'), require('./react-swipe'));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(global.react, global.reactDom, global.reactSwipe);
	    global.demo = mod.exports;
	  }
	})(this, function (_react, _reactDom, _reactSwipe) {
	  var _react2 = _interopRequireDefault(_react);

	  var _reactDom2 = _interopRequireDefault(_reactDom);

	  var _reactSwipe2 = _interopRequireDefault(_reactSwipe);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }

	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }

	  var _createClass = (function () {
	    function defineProperties(target, props) {
	      for (var i = 0; i < props.length; i++) {
	        var descriptor = props[i];
	        descriptor.enumerable = descriptor.enumerable || false;
	        descriptor.configurable = true;
	        if ("value" in descriptor) descriptor.writable = true;
	        Object.defineProperty(target, descriptor.key, descriptor);
	      }
	    }

	    return function (Constructor, protoProps, staticProps) {
	      if (protoProps) defineProperties(Constructor.prototype, protoProps);
	      if (staticProps) defineProperties(Constructor, staticProps);
	      return Constructor;
	    };
	  })();

	  function _possibleConstructorReturn(self, call) {
	    if (!self) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }

	    return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	  }

	  function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	    }

	    subClass.prototype = Object.create(superClass && superClass.prototype, {
	      constructor: {
	        value: subClass,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	  }

	  var MyComponent = (function (_Component) {
	    _inherits(MyComponent, _Component);

	    function MyComponent() {
	      _classCallCheck(this, MyComponent);

	      return _possibleConstructorReturn(this, Object.getPrototypeOf(MyComponent).apply(this, arguments));
	    }

	    _createClass(MyComponent, [{
	      key: 'onSwipeStart',
	      value: function onSwipeStart() {
	        console.log('Start swiping...');
	      }
	    }, {
	      key: 'onSwipeMove',
	      value: function onSwipeMove(position) {
	        console.log('Moved ' + position.x + ' pixels horizontally');
	        console.log('Moved ' + position.y + ' pixels vertically');
	      }
	    }, {
	      key: 'onSwipeEnd',
	      value: function onSwipeEnd() {
	        console.log('End swiping...');
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        var boxStyle = {
	          width: '100%',
	          margin: '20px auto',
	          height: '300px',
	          border: '1px solid black',
	          background: '#ccc',
	          padding: '20px',
	          fontSize: '3em'
	        };
	        return _react2.default.createElement(_reactSwipe2.default, {
	          onSwipeStart: this.onSwipeStart,
	          onSwipeMove: this.onSwipeMove,
	          onSwipeEnd: this.onSwipeEnd
	        }, _react2.default.createElement('div', {
	          style: boxStyle
	        }, 'Open the console and swipe me'));
	      }
	    }]);

	    return MyComponent;
	  })(_react.Component);

	  _reactDom2.default.render(_react2.default.createElement(MyComponent, null), document.getElementById('root'));
	});

/***/ },

/***/ 159:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

	(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(exports, require('react'));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, global.react);
	    global.reactSwipe = mod.exports;
	  }
	})(this, function (exports, _react) {
	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });

	  var _react2 = _interopRequireDefault(_react);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }

	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }

	  var _createClass = (function () {
	    function defineProperties(target, props) {
	      for (var i = 0; i < props.length; i++) {
	        var descriptor = props[i];
	        descriptor.enumerable = descriptor.enumerable || false;
	        descriptor.configurable = true;
	        if ("value" in descriptor) descriptor.writable = true;
	        Object.defineProperty(target, descriptor.key, descriptor);
	      }
	    }

	    return function (Constructor, protoProps, staticProps) {
	      if (protoProps) defineProperties(Constructor.prototype, protoProps);
	      if (staticProps) defineProperties(Constructor, staticProps);
	      return Constructor;
	    };
	  })();

	  function _possibleConstructorReturn(self, call) {
	    if (!self) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }

	    return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	  }

	  function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	    }

	    subClass.prototype = Object.create(superClass && superClass.prototype, {
	      constructor: {
	        value: subClass,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	  }

	  var ReactSwipe = (function (_Component) {
	    _inherits(ReactSwipe, _Component);

	    function ReactSwipe() {
	      _classCallCheck(this, ReactSwipe);

	      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ReactSwipe).call(this));

	      _this._handleSwipeStart = _this._handleSwipeStart.bind(_this);
	      _this._handleSwipeMove = _this._handleSwipeMove.bind(_this);
	      _this._handleSwipeEnd = _this._handleSwipeEnd.bind(_this);
	      return _this;
	    }

	    _createClass(ReactSwipe, [{
	      key: '_handleSwipeStart',
	      value: function _handleSwipeStart(e) {
	        var _e$touches$ = e.touches[0];
	        var pageX = _e$touches$.pageX;
	        var pageY = _e$touches$.pageY;
	        this.touchStart = {
	          pageX: pageX,
	          pageY: pageY
	        };
	        this.props.onSwipeStart();
	      }
	    }, {
	      key: '_handleSwipeMove',
	      value: function _handleSwipeMove(e) {
	        e.preventDefault();
	        var deltaX = e.touches[0].pageX - this.touchStart.pageX;
	        var deltaY = e.touches[0].pageY - this.touchStart.pageY;
	        this.swiping = true;
	        this.props.onSwipeMove({
	          x: deltaX,
	          y: deltaY
	        });
	        this.touchPosition = {
	          deltaX: deltaX,
	          deltaY: deltaY
	        };
	      }
	    }, {
	      key: '_handleSwipeEnd',
	      value: function _handleSwipeEnd() {
	        if (this.swiping) {
	          if (this.touchPosition.deltaX < 0) {
	            this.props.onSwipeLeft(1);
	          } else if (this.touchPosition.deltaX > 0) {
	            this.props.onSwipeRight(1);
	          }

	          if (this.touchPosition.deltaY < 0) {
	            this.props.onSwipeDown(1);
	          } else if (this.touchPosition.deltaY > 0) {
	            this.props.onSwipeUp(1);
	          }
	        }

	        this.props.onSwipeEnd();
	        this.touchStart = null;
	        this.swiping = false;
	        this.touchPosition = null;
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        return _react2.default.createElement(this.props.tagName, {
	          onTouchMove: this._handleSwipeMove,
	          onTouchStart: this._handleSwipeStart,
	          onTouchEnd: this._handleSwipeEnd,
	          className: this.props.className,
	          style: this.props.style
	        }, this.props.children);
	      }
	    }]);

	    return ReactSwipe;
	  })(_react.Component);

	  ReactSwipe.propTypes = {
	    tagName: _react.PropTypes.string,
	    className: _react.PropTypes.string,
	    style: _react.PropTypes.object,
	    children: _react.PropTypes.node,
	    onSwipeUp: _react.PropTypes.func,
	    onSwipeDown: _react.PropTypes.func,
	    onSwipeLeft: _react.PropTypes.func,
	    onSwipeRight: _react.PropTypes.func,
	    onSwipeStart: _react.PropTypes.func,
	    onSwipeMove: _react.PropTypes.func,
	    onSwipeEnd: _react.PropTypes.func
	  };
	  ReactSwipe.defaultProps = {
	    tagName: 'div',
	    onSwipeUp: function onSwipeUp() {},
	    onSwipeDown: function onSwipeDown() {},
	    onSwipeLeft: function onSwipeLeft() {},
	    onSwipeRight: function onSwipeRight() {},
	    onSwipeStart: function onSwipeStart() {},
	    onSwipeMove: function onSwipeMove() {},
	    onSwipeEnd: function onSwipeEnd() {}
	  };
	  ReactSwipe.displayName = 'ReactSwipe';
	  exports.default = ReactSwipe;
	});

/***/ }

});