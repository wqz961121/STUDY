import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React from "react";
import Son from "./son";
import Son2 from "./son2";

var Parent = /*#__PURE__*/function (_React$Component) {
  _inherits(Parent, _React$Component);

  var _super = _createSuper(Parent);

  function Parent() {
    _classCallCheck(this, Parent);

    return _super.apply(this, arguments);
  }

  _createClass(Parent, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      console.log("parent ");
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log('par didmount');
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, "\u7236\u7EC4\u4EF6"), /*#__PURE__*/React.createElement(Son, null), /*#__PURE__*/React.createElement(Son2, null));
    }
  }]);

  return Parent;
}(React.Component);

export { Parent as default };