import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React from "react";
export default function hocCom() {
  return function HOCFactory(WarpperCom) {
    var HOC = /*#__PURE__*/function (_React$Component) {
      _inherits(HOC, _React$Component);

      var _super = _createSuper(HOC);

      function HOC() {
        _classCallCheck(this, HOC);

        return _super.apply(this, arguments);
      }

      _createClass(HOC, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          console.log(1);
        }
      }, {
        key: "render",
        value: function render() {
          return /*#__PURE__*/React.createElement(WarpperCom, this.props);
        }
      }]);

      return HOC;
    }(React.Component);

    return HOC;
  };
}