import React, { useEffect, useRef } from "react";
import "./index.less";
export default function Width() {
  useEffect(function () {
    var mdu = document.querySelector("#mo");

    window.onresize = function () {
      console.log(mdu.clientWidth);
      console.log(mdu.clientHeight);
    };
  });
  useEffect(function () {
    var mdu = document.querySelector("#mo");
    console.log(mdu.clientWidth); // width - 左右border

    console.log(mdu.clientHeight); // height - 左右border

    console.log(mdu.clientTop); // 上边框的宽度

    console.log(mdu.clientLeft); // 左边框的宽度

    console.log(mdu.offsetTop); //
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, "abcd"), /*#__PURE__*/React.createElement("div", {
    className: "aa",
    style: {
      margin: "40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "40px"
    }
  }, "\u6D4B\u8BD5"), /*#__PURE__*/React.createElement("div", {
    className: "module",
    id: "mo"
  }, "\u6A21\u5757")));
}