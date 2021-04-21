import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, useEffect, useRef } from "react";
import { Button } from "antd";
import styles from "./index.less";
export default function FloatModal() {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var inp = useRef();

  var _useState3 = useState("一共五个字"),
      _useState4 = _slicedToArray(_useState3, 2),
      str = _useState4[0],
      setStr = _useState4[1];

  var handleOpen = function handleOpen() {
    setVisible(!visible);
  };

  useEffect(function () {
    return inp.current.focus();
  }, []);
  useEffect(function () {
    console.log(1);
  }, [visible]);
  useEffect(function () {
    console.log(window.location.hostname);
    console.log(window.location.protocol);
    console.log(window.location.hash);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: styles["content"]
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      return handleOpen();
    }
  }, "\u6253\u5F00\u5F39\u6846"), /*#__PURE__*/React.createElement("input", {
    ref: function ref(e) {
      return inp.current = e;
    }
  }), /*#__PURE__*/React.createElement("div", {
    class: "parent"
  }, /*#__PURE__*/React.createElement("div", {
    class: "floa"
  }, "\u6D6E\u52A8\u5143\u7D20")), /*#__PURE__*/React.createElement("div", {
    className: "".concat(visible ? "float" : "common")
  }), /*#__PURE__*/React.createElement("div", {
    className: "modal",
    style: {
      display: "".concat(visible ? "block" : "none")
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "close",
    onClick: function onClick() {
      return setVisible(false);
    }
  }), /*#__PURE__*/React.createElement("span", null, "\u6211\u662F\u5F39\u6846"), /*#__PURE__*/React.createElement("span", null, str === null || str === void 0 ? void 0 : str.length)));
}