import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from 'react';
import styles from "./index.less";
export default function Layout() {
  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      flag = _useState2[0],
      setFlag = _useState2[1];

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: styles['gb-content']
  }, /*#__PURE__*/React.createElement("div", {
    className: "header"
  }, "header"), flag ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "middle"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setFlag(!flag);
    }
  }, "\u5207\u6362\u5E03\u5C40")), /*#__PURE__*/React.createElement("div", {
    className: "left"
  }, "left(\u5723\u676F)"), /*#__PURE__*/React.createElement("div", {
    className: "right"
  }, "right"))) : /*#__PURE__*/React.createElement("div", {
    className: "container2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "content2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "middle2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setFlag(!flag);
    }
  }, "\u5207\u6362\u5E03\u5C40"))), /*#__PURE__*/React.createElement("div", {
    className: "left2"
  }, "left(\u53CC\u98DE\u7FFC)"), /*#__PURE__*/React.createElement("div", {
    className: "right2"
  }, "right")), /*#__PURE__*/React.createElement("div", {
    className: "footer"
  }, "footer")));
}