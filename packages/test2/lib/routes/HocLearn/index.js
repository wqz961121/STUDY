import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

var _dec, _class;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React from "react";
import HocCom from "./HocCom";
var HocLearn = (_dec = HocCom(), _dec(_class = /*#__PURE__*/function (_React$Component) {
  _inherits(HocLearn, _React$Component);

  var _super = _createSuper(HocLearn);

  function HocLearn(props) {
    var _this;

    _classCallCheck(this, HocLearn);

    _this = _super.call(this, props);
    _this.state = {};
    return _this;
  }

  _createClass(HocLearn, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(2);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, "1"));
    }
  }]);

  return HocLearn;
}(React.Component)) || _class);
export { HocLearn as default };