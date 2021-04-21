import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React from "react";

var Son2 = /*#__PURE__*/function (_React$Component) {
  _inherits(Son2, _React$Component);

  var _super = _createSuper(Son2);

  function Son2() {
    _classCallCheck(this, Son2);

    return _super.apply(this, arguments);
  }

  _createClass(Son2, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      console.log("son2 ");
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log('son2 didmount');
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, "1");
    }
  }]);

  return Son2;
}(React.Component);

export { Son2 as default };