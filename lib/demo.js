'use strict';

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['./react-swipe'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('./react-swipe'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.reactSwipe);
    global.demo = mod.exports;
  }
})(this, function (_reactSwipe) {
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

  var MyComponent = (function (_React$Component) {
    _inherits(MyComponent, _React$Component);

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
        return React.createElement(_reactSwipe2.default, {
          onSwipeStart: this.onSwipeStart,
          onSwipeMove: this.onSwipeMove,
          onSwipeEnd: this.onSwipeEnd
        }, 'Leandro');
      }
    }]);

    return MyComponent;
  })(React.Component);

  React.render(React.createElement(MyComponent, null), document.getElementById('root'));
});
//# sourceMappingURL=demo.js.map
