import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, useRef, useEffect } from 'react';
import "./index.less";
export default function ScrollCom() {
  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      count = _useState2[0],
      setCount = _useState2[1];

  var btn = useRef(count);
  useEffect(function () {
    btn.current = count;
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "spn"
  }, count), /*#__PURE__*/React.createElement("button", {
    className: "btn",
    ref: btn,
    onClick: function onClick() {
      setCount(count + 1);
    }
  }, "\u6309\u94AE"), /*#__PURE__*/React.createElement("button", {
    className: "btn",
    ref: btn,
    onClick: function onClick() {
      setTimeout(function () {
        alert("".concat(btn.current));
      }, 3000);
    }
  }, "\u6309\u94AE"), /*#__PURE__*/React.createElement("div", {
    className: "spn"
  }, "ABC")));
}