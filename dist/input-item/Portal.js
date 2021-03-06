'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var ReactDOM = _interopDefault(require('react-dom'));

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var inherits = function (subClass, superClass) {
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
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var createPortal = ReactDOM.createPortal;

var Portal = function (_React$Component) {
    inherits(Portal, _React$Component);

    function Portal(props) {
        classCallCheck(this, Portal);

        var _this = possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.container = _this.props.getContainer();
        return _this;
    }

    Portal.prototype.render = function render() {
        if (this.props.children) {
            return createPortal(this.props.children, this.container);
        }
        return null;
    };

    return Portal;
}(React.Component);

module.exports = Portal;
